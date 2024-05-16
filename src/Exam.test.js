import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest';
import { Exam } from './Exam';

let exam = new Exam();

beforeEach(() => {
  exam = new Exam([]);
});

describe('addPoint', () => {
  it('should throw interval error when the score is out of the [-1,100] interval, below -1', () => {
    expect(() => {
      exam.addPoint(-2);
    }).toThrow("interval");
  });

  it('should throw interval error when the score is out of the [-1,100] interval, above 100', () => {
    expect(() => {
      exam.addPoint(150);
    }).toThrow("interval");
  });

  it('should throw interval error when the score is null', () => {
    expect(() => {
      exam.addPoint(null)
    }).toThrow("interval")
  });

  it('should throw interval error when the score is an empty string', () => {
    expect(() => {
      exam.addPoint("")
    }).toThrow("interval")
  });

  it('should throw interval error when the score is a string', () => {
    expect(() => {
      exam.addPoint("apple")
    }).toThrow("interval")
  });

  it('should return true if the score in the [-1, 100] interval', () => {
    expect(exam.addPoint(55)).toBeTruthy();
  });

  // it('should return true if the score is 0', () => {
  //   expect(exam.addPoint(0)).toBeTruthy();
  // });

});

describe('allParticipated', () => {
  it('should throw no score error if there is no point added to the list', () => {
    expect(() => {
      exam.allParticipated()
    }).toThrow("no score");
  });

  it('should return true if every score in the list is more than -1', () => {
    exam.addPoint(40);
    exam.addPoint(67);
    exam.addPoint(45);
    expect(exam.allParticipated()).toBeTruthy();
  });

  it('should return false if even one score in the list is -1', () => {
    exam.addPoint(40);
    exam.addPoint(67);
    exam.addPoint(-1);
    expect(exam.allParticipated()).toBeFalsy();
  });

  it('should return false if every score in the list is -1', () => {
    exam.addPoint(-1);
    exam.addPoint(-1);
    exam.addPoint(-1);
    expect(exam.allParticipated()).toBeFalsy();
  });
});


