/**
 * Generate an .ics calendar file and trigger download.
 */
export function downloadICS({ title, description, location, startDate, startTime, durationHours = 3 }) {
  const start = parseDateTime(startDate, startTime);
  const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//EN',
    'BEGIN:VEVENT',
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/\s+/g, '_')}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Open Google Calendar with pre-filled event.
 */
export function openGoogleCalendar({ title, description, location, startDate, startTime, durationHours = 3 }) {
  const start = parseDateTime(startDate, startTime);
  const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', title);
  url.searchParams.set('details', description);
  url.searchParams.set('location', location);
  url.searchParams.set('dates', `${formatGCalDate(start)}/${formatGCalDate(end)}`);

  window.open(url.toString(), '_blank');
}

function parseDateTime(dateStr, timeStr) {
  // Extract time like "4:30 PM" from "4:30 PM (After Asr Prayer)"
  const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!timeMatch) return new Date(dateStr);

  let hours = parseInt(timeMatch[1]);
  const minutes = parseInt(timeMatch[2]);
  const ampm = timeMatch[3].toUpperCase();

  if (ampm === 'PM' && hours !== 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;

  const date = new Date(dateStr);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function formatICSDate(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function formatGCalDate(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}
