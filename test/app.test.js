import { describe, it, expect } from 'vitest';
import {
  buildTeacherPrompt,
  buildPlacementPrompt,
  LANGUAGES,
  CORRECTION_TOOL,
  PLACEMENT_TOOL,
  LEVEL_EXAM_TOOL,
  LEVEL_ORDER,
  STUDY_PLAN,
  getNextLevel,
  getLevelTitle,
  getRandomExamScenario,
  buildLevelExamPrompt
} from '../src/prompts/teacher.js';
import { isLevelUnlocked, getHighestUnlockedLevel, getUnlockedLevels } from '../src/lib/storage.js';
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

  it('declares the report_placement_result tool and generates exhaustive multi-stage placement prompt', () => {
    const prompt = buildPlacementPrompt({ language: 'en', studentName: 'Kristhian' });
    expect(prompt).toContain('Emma');
    expect(prompt).toContain('EXHAUSTIVE, MULTI-STAGE ORAL PLACEMENT TEST');
    expect(prompt).toContain('Kristhian');
    expect(prompt).toContain('DO NOT ask basic introductory questions like "What is your name?"');
    expect(prompt).toContain('TIER 1: DESCRIPTIVE ROUTINE');
    expect(prompt).toContain('TIER 2: NARRATIVE & PAST EXPERIENCES');
    expect(prompt).toContain('TIER 3: SITUATIONAL PROBLEM-SOLVING');
    expect(prompt).toContain('TIER 4: CRITICAL ANALYSIS');
    expect(prompt).toContain('report_placement_result');

    expect(PLACEMENT_TOOL.functionDeclarations.length).toBeGreaterThanOrEqual(1);
    const placementDecl = PLACEMENT_TOOL.functionDeclarations.find(d => d.name === 'report_placement_result');
    expect(placementDecl).toBeDefined();
    expect(placementDecl.parameters.required).toEqual(['level', 'levelTitle', 'rationale']);
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

describe('Dynamic Level-Up Exams & Grading (Vigesimal 0-20)', () => {
  it('calculates next CEFR level correctly in progression', () => {
    expect(getNextLevel('zero')).toBe('A1');
    expect(getNextLevel('A1')).toBe('A2');
    expect(getNextLevel('A2')).toBe('B1');
    expect(getNextLevel('B1')).toBe('B2');
    expect(getNextLevel('B2')).toBe('C1');
    expect(getNextLevel('C1')).toBeNull();
  });

  it('retrieves correct friendly level titles', () => {
    expect(getLevelTitle('A1')).toBe('A1 · Principiante');
    expect(getLevelTitle('B2')).toBe('B2 · Intermedio alto');
  });

  it('selects random non-repeating exam scenarios', () => {
    const s1 = getRandomExamScenario('A1', 'A2');
    expect(s1).toBeDefined();
    expect(s1.title).toBeTruthy();
    expect(s1.desc).toBeTruthy();

    // Selecting again with lastScenarioId should avoid repeating s1
    const s2 = getRandomExamScenario('A1', 'A2', s1.id);
    expect(s2).toBeDefined();
    expect(s2.title).toBeTruthy();
    expect(s2.desc).toBeTruthy();
  });

  it('declares LEVEL_EXAM_TOOL with strict 0-20 scale and rubric requirements', () => {
    expect(LEVEL_EXAM_TOOL.functionDeclarations.length).toBeGreaterThanOrEqual(1);
    const tool = LEVEL_EXAM_TOOL.functionDeclarations.find(d => d.name === 'report_level_exam');
    expect(tool).toBeDefined();
    expect(tool.parameters.required).toEqual(
      expect.arrayContaining(['score', 'passed', 'targetLevel', 'targetLevelTitle', 'feedback'])
    );
  });

  it('builds level exam prompt with required threshold instructions (>=15)', () => {
    const prompt = buildLevelExamPrompt({
      language: 'en',
      studentName: 'Kristhian',
      currentLevel: 'A1',
      targetLevel: 'A2',
      scenario: { title: 'Checking in at Hotel', desc: 'Ask for a room and amenities.' }
    });

    expect(prompt).toContain('Emma');
    expect(prompt).toContain('Kristhian');
    expect(prompt).toContain('Examen de Ascenso de Nivel');
    expect(prompt).toContain('0 to 20');
    expect(prompt).toContain('15');
    expect(prompt).toContain('report_level_exam');
    expect(prompt).toContain('Checking in at Hotel');
  });
});

describe('Level 0 (A0) Bilingual Pedagogy', () => {
  it('generates a 100% bilingual (Spanish + English) prompt for level zero', () => {
    const prompt = buildTeacherPrompt({
      language: 'en',
      level: 'zero',
      studentName: 'Kristhian',
    });

    expect(prompt).toContain('BILINGUAL (SPANISH + ENGLISH)');
    expect(prompt).toContain('YOUR PRIMARY SPOKEN LANGUAGE FOR GUIDANCE, EXPLANATIONS AND ENCOURAGEMENT IS SPANISH');
    expect(prompt).toContain('DO NOT speak fast, fluent or long paragraphs in English');
    expect(prompt).toContain('Introduce ONE single word or short phrase at a time');
    expect(prompt).not.toContain('Speak English at all times');
  });
});

describe('Curricular Study Plan (CEFR A0 to C1)', () => {
  it('contains structured learning objectives and grammar for all 6 levels', () => {
    expect(STUDY_PLAN).toHaveLength(6);
    const codes = STUDY_PLAN.map(p => p.id);
    expect(codes).toEqual(['zero', 'A1', 'A2', 'B1', 'B2', 'C1']);

    for (const plan of STUDY_PLAN) {
      expect(plan.title).toBeTruthy();
      expect(plan.subtitle).toBeTruthy();
      expect(plan.description).toBeTruthy();
      expect(plan.objectives.length).toBeGreaterThanOrEqual(3);
      expect(plan.grammar).toBeTruthy();
      expect(plan.examRequirement).toBeTruthy();
    }
  });
});

describe('Level Locking & Access Control', () => {
  it('allows zero and auto by default, and locks higher levels without exam/diagnosis', () => {
    // In node/vitest mock environment without diagnosis or exams:
    expect(isLevelUnlocked('auto')).toBe(true);
    expect(isLevelUnlocked('zero')).toBe(true);
    expect(isLevelUnlocked('A1')).toBe(false);
    expect(isLevelUnlocked('B2')).toBe(false);
    expect(isLevelUnlocked('C1')).toBe(false);

    expect(getHighestUnlockedLevel()).toBe('zero');
    expect(getUnlockedLevels()).toEqual(['auto', 'zero']);
  });
});


