import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest';
import { Exam } from './Exam';

let exam = new Exam();

beforeEach(() => {
  exam = new Exam([]);
});


