import { describe, expect, test } from 'vitest';
import { countTasksByStatus, validateTask } from './taskUtils.js';

describe('validateTask', () => {
  test('accepts a valid task', () => {
    const task = {
      title: 'Finish assignment',
      status: 'To Do',
    };

    expect(validateTask(task)).toBe(true);
  });

  test('rejects a task without a title', () => {
    const task = {
      title: '',
      status: 'To Do',
    };

    expect(validateTask(task)).toBe(false);
  });

  test('rejects an invalid status', () => {
    const task = {
      title: 'Finish assignment',
      status: 'Invalid',
    };

    expect(validateTask(task)).toBe(false);
  });
});

describe('countTasksByStatus', () => {
  test('counts tasks with the requested status', () => {
    const tasks = [
      { title: 'Task 1', status: 'To Do' },
      { title: 'Task 2', status: 'Done' },
      { title: 'Task 3', status: 'Done' },
    ];

    expect(countTasksByStatus(tasks, 'Done')).toBe(2);
  });
});