import { T, Num, DateTime, Var } from "gt-next";
import { LocaleSelector } from "gt-next";

const workouts = [
  {
    name: "Barbell Bench Press",
    sets: 4,
    reps: 8,
    weightKg: 80,
    caloriesBurned: 180,
    duration: new Date(2026, 1, 18, 7, 0),
    durationMin: 45,
  },
  {
    name: "Back Squat",
    sets: 5,
    reps: 5,
    weightKg: 120,
    caloriesBurned: 250,
    duration: new Date(2026, 1, 17, 6, 30),
    durationMin: 55,
  },
  {
    name: "Deadlift",
    sets: 3,
    reps: 5,
    weightKg: 140,
    caloriesBurned: 220,
    duration: new Date(2026, 1, 16, 17, 0),
    durationMin: 40,
  },
  {
    name: "Overhead Press",
    sets: 4,
    reps: 6,
    weightKg: 50,
    caloriesBurned: 120,
    duration: new Date(2026, 1, 15, 7, 15),
    durationMin: 35,
  },
  {
    name: "Pull-ups",
    sets: 4,
    reps: 10,
    weightKg: 0,
    caloriesBurned: 100,
    duration: new Date(2026, 1, 14, 18, 0),
    durationMin: 25,
  },
];

const totalCalories = workouts.reduce((s, w) => s + w.caloriesBurned, 0);
const totalSets = workouts.reduce((s, w) => s + w.sets, 0);
const totalWorkouts = workouts.length;
const avgDuration = Math.round(
  workouts.reduce((s, w) => s + w.durationMin, 0) / workouts.length
);

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <T>
              <h1 className="text-sm font-semibold text-neutral-100">
                Fitness Tracker
              </h1>
            </T>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/fitness-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Summary Stats */}
        <T>
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            Weekly Summary
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed mb-8">
            Track your workouts, monitor progress, and stay consistent with your
            training goals.
          </p>
        </T>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <T>
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Workouts
              </p>
              <p className="text-2xl font-semibold text-neutral-100">
                <Num>{totalWorkouts}</Num>
              </p>
            </T>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <T>
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Total Sets
              </p>
              <p className="text-2xl font-semibold text-neutral-100">
                <Num>{totalSets}</Num>
              </p>
            </T>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <T>
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Calories Burned
              </p>
              <p className="text-2xl font-semibold text-neutral-100">
                <Num>{totalCalories}</Num>
              </p>
            </T>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <T>
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Avg. Duration
              </p>
              <p className="text-2xl font-semibold text-neutral-100">
                <Num>{avgDuration}</Num> min
              </p>
            </T>
          </div>
        </div>

        {/* Workout Log */}
        <T>
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            Recent Workouts
          </h3>
        </T>

        <div className="space-y-3">
          {workouts.map((w, i) => (
            <div
              key={i}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-medium text-neutral-100 mb-1">
                    <Var>{w.name}</Var>
                  </h4>
                  <T>
                    <p className="text-sm text-neutral-400">
                      <Num>{w.sets}</Num> sets x <Num>{w.reps}</Num> reps
                    </p>
                  </T>
                  {w.weightKg > 0 && (
                    <T>
                      <p className="text-sm text-neutral-500">
                        at <Num>{w.weightKg}</Num> kg
                      </p>
                    </T>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                  <T>
                    <span>
                      <Num>{w.caloriesBurned}</Num> cal
                    </span>
                    <span>
                      <Num>{w.durationMin}</Num> min
                    </span>
                    <span>
                      <DateTime>{w.duration}</DateTime>
                    </span>
                  </T>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-800">
          <T>
            <p className="text-sm text-neutral-500 text-center">
              Built with General Translation to demonstrate locale-aware fitness
              tracking with translated workout data, rep counts, and units.
            </p>
          </T>
        </footer>
      </main>
    </div>
  );
}
