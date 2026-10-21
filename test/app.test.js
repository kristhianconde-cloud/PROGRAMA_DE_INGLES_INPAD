import { describe, it, expect } from 'vitest';
import { buildTeacherPrompt, LANGUAGES, CORRECTION_TOOL } from '../src/prompts/teacher.js';
import { getTopic, TOPICS } from '../src/data/topics.js';
import { highlight, formatDuration } from '../src/lib/ui.js';

describe('Profesor Virtual Prompts & Tools', () => {
  it('builds teacher prompt for English with default settings', () => {
    const prompt = buildTeacherPrompt({
      language: 'en',
      level: 'A2',
      topic: getTopic('job-interview'),
    });

    expect(prompt).toContain('Emma');
    expect(prompt).toContain('American English');
    expect(prompt).toContain('CEFR A2');
    expect(prompt).toContain('job interview');
    expect(prompt).toContain('PRONUNCIATION CORRECTION');
  });

  it('builds teacher prompt for Italian with specific phoneme guides', () => {
    const prompt = buildTeacherPrompt({
      language: 'it',
      level: 'B1',
      topic: getTopic('restaurant'),
      wordsToPractice: ['bruschetta', 'gnocchi']
    });

    expect(prompt).toContain('Giulia');
    expect(prompt).toContain('Italian');
    expect(prompt).toContain('double consonants');
    expect(prompt).toContain('bruschetta, gnocchi');
  });

  it('declares the report_correction function tool correctly', () => {
    expect(CORRECTION_TOOL.functionDeclarations).toHaveLength(1);
    const decl = CORRECTION_TOOL.functionDeclarations[0];
    expect(decl.name).toBe('report_correction');
    expect(decl.parameters.required).toEqual(['type', 'said', 'correct', 'explanation']);
  });
});

describe('Topics Catalog', () => {
  it('contains at least 30 topics across multiple categories', () => {
    expect(TOPICS.length).toBeGreaterThanOrEqual(30);
    const interview = getTopic('job-interview');
    expect(interview).toBeDefined();
    expect(interview?.cat).toBe('trabajo');
  });
});

describe('UI helpers', () => {
  it('formats seconds into MM:SS format', () => {
    expect(formatDuration(0)).toBe('00:00');
    expect(formatDuration(65)).toBe('01:05');
    expect(formatDuration(600)).toBe('10:00');
  });

  it('highlights mispronounced fragments safely', () => {
    const res = highlight('I want to drink bier please', 'bier', 'err');
    expect(res).toContain('<mark class="err">bier</mark>');
  });
});
