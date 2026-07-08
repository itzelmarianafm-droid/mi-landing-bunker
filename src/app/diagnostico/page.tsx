'use client';

import { useMemo, useState } from 'react';
import Console from '@/components/diagnostico/Console';
import Intro from '@/components/diagnostico/Intro';
import PillarScreen from '@/components/diagnostico/PillarScreen';
import Gate, { type LeadData } from '@/components/diagnostico/Gate';
import Result from '@/components/diagnostico/Result';
import { PILLARS } from '@/lib/diagnostico/data';
import { computeResult } from '@/lib/diagnostico/scoring';

type Screen = 'intro' | 'test' | 'gate' | 'result';

// 6 pilares × 5 ítems, 0 = sin responder.
const emptyAnswers = () => PILLARS.map(() => [0, 0, 0, 0, 0]);

export default function DiagnosticoPage() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [pillarIdx, setPillarIdx] = useState(0);
  const [answers, setAnswers] = useState<number[][]>(emptyAnswers);
  const [submitting, setSubmitting] = useState(false);

  // El Reto vive en el mismo dominio → ruta relativa fija (a prueba de typos
  // en variables de entorno).
  const retoUrl = '/reto';

  // El resultado solo se calcula una vez que hay respuestas completas.
  const result = useMemo(() => computeResult(answers), [answers]);

  const status =
    screen === 'result' ? 'RESULTADO LISTO' : screen === 'intro' ? 'STANDBY' : 'EN CURSO';

  const setAnswer = (itemIndex: number, value: number) => {
    setAnswers((prev) => {
      const next = prev.map((row) => [...row]);
      next[pillarIdx][itemIndex] = value;
      return next;
    });
  };

  const goStart = () => {
    setScreen('test');
    setPillarIdx(0);
    window.scrollTo({ top: 0 });
  };

  const handleNext = () => {
    if (pillarIdx < PILLARS.length - 1) {
      setPillarIdx((i) => i + 1);
    } else {
      setScreen('gate');
    }
    window.scrollTo({ top: 0 });
  };

  const handleBack = () => {
    if (pillarIdx === 0) {
      setScreen('intro');
    } else {
      setPillarIdx((i) => i - 1);
    }
    window.scrollTo({ top: 0 });
  };

  const handleSubmit = async (lead: LeadData) => {
    setSubmitting(true);
    const payload = {
      ...lead,
      total: result.total,
      profile: result.profile.name,
      pillars: result.pillars.map((p) => ({ key: p.key, score: p.score, zone: p.zone })),
      weakest: result.weakest.map((w) => w.key),
      timestamp: new Date().toISOString(),
      source: 'diagnostico-6-pilares',
    };
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      // No bloqueamos: el usuario ve su resultado igual.
      console.error('[diagnostico] lead POST falló:', e);
    }
    setSubmitting(false);
    setScreen('result');
    window.scrollTo({ top: 0 });
  };

  const handleRestart = () => {
    setAnswers(emptyAnswers());
    setPillarIdx(0);
    setScreen('intro');
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Console status={status} />
      {screen === 'intro' && <Intro onStart={goStart} />}
      {screen === 'test' && (
        <PillarScreen
          pillar={PILLARS[pillarIdx]}
          values={answers[pillarIdx]}
          onChange={setAnswer}
          onBack={handleBack}
          onNext={handleNext}
          isLast={pillarIdx === PILLARS.length - 1}
        />
      )}
      {screen === 'gate' && <Gate onSubmit={handleSubmit} submitting={submitting} />}
      {screen === 'result' && (
        <Result result={result} retoUrl={retoUrl} onRestart={handleRestart} />
      )}
    </>
  );
}
