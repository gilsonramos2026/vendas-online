import { useState, useEffect } from 'react';

// Interface tipando estritamente os retornos numéricos do hook
interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(targetDate: string): CountdownResult {
  // Função auxiliar isolada para calcular o tempo restante de forma imediata
  const calculateTimeLeft = (): CountdownResult => {
    const diff = new Date(targetDate).getTime() - new Date().getTime();

    // 🔒 Proteção: Se a oferta já expirou, trava o cronômetro zerado e evita números negativos
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  // ⚡ Inicializa o estado já executando o cálculo (elimina o atraso inicial de 1 segundo)
  const [timeLeft, setTimeLeft] = useState<CountdownResult>(calculateTimeLeft);

  useEffect(() => {
    // Atualiza o estado imediatamente ao mudar a data alvo
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const current = calculateTimeLeft();
      setTimeLeft(current);

      // Limpa o intervalo da memória se o cronômetro chegar ao fim absoluto
      if (current.days === 0 && current.hours === 0 && current.minutes === 0 && current.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    // Desliga o timer ao desmontar o componente para evitar vazamento de memória (Memory Leak)
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
