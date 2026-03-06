// assets/js/timer.js

/**
 * Formats seconds into MM:SS
 */
export function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

/**
 * Calculates remaining time based on start time and limit
 * @param {number} startedAt - Timestamp (ms)
 * @param {number} timeLimitMinutes - Duration in minutes
 */
export function getRemainingTime(startedAt, timeLimitMinutes) {
    const now = Date.now();
    const elapsedSeconds = Math.floor((now - startedAt) / 1000);
    const totalLimitSeconds = timeLimitMinutes * 60;
    return Math.max(0, totalLimitSeconds - elapsedSeconds);
}