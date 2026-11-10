(function () {
  const containers = Array.from(document.querySelectorAll('[data-daily-promo-countdown]'));
  if (!containers.length) return;

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  });

  function getRemainingWibMs() {
    const parts = Object.fromEntries(
      formatter.formatToParts(new Date())
        .filter(part => part.type !== 'literal')
        .map(part => [part.type, Number(part.value)])
    );
    const currentWibAsUtc = Date.UTC(
      parts.year, parts.month - 1, parts.day,
      parts.hour, parts.minute, parts.second
    );
    const nextMidnightWibAsUtc = Date.UTC(
      parts.year, parts.month - 1, parts.day + 1, 0, 0, 0
    );
    return Math.max(0, nextMidnightWibAsUtc - currentWibAsUtc);
  }

  const pad = value => String(value).padStart(2, '0');

  function render() {
    const totalSeconds = Math.floor(getRemainingWibMs() / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    containers.forEach(container => {
      const hourNode = container.querySelector('[data-promo-hours]');
      const minuteNode = container.querySelector('[data-promo-minutes]');
      const secondNode = container.querySelector('[data-promo-seconds]');
      if (hourNode) hourNode.textContent = pad(hours);
      if (minuteNode) minuteNode.textContent = pad(minutes);
      if (secondNode) secondNode.textContent = pad(seconds);
    });
  }

  render();
  window.setInterval(render, 1000);
})();