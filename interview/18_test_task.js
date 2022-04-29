// Реализовать класс Parallel таким образом, чтобы обработка операций происходила параллельно.
// Максимальное количество задач, которые работают параллельно, не должно превышать значение
// parallelJobs, которое передается в конструктор класса.

function Parallel(options) {
  var parallelJob = options.parallelJob || 1;
  var jobs = [];
  var result = [];

  function runJobs() {
    return new Promise(function (resolve) {
      var jobsToRun = jobs.splice(0, parallelJob);
      var runningJobs = [];
      for (var key in jobsToRun) {
        runningJobs.push(
          new Promise(function (resolve) {
            jobsToRun[key](resolve);
          })
        );
      }
      Promise.all(runningJobs).then(function (values) {
        values.forEach(function (item) {
          result.push(item);
        });
        if (jobs.length > 0) {
          runJobs().then(function () {
            resolve(result);
          });
        } else {
          resolve(result);
        }
      });
    });
  }

  return {
    job: function (step) {
      jobs.push(step);
      return this;
    },
    done: function (callback) {
      runJobs().then(function (values) {
        callback(values);
      });
    },
  };
}

const runner = new Parallel({
  parallelJobs: 2,
});

runner.job(step1).job(step2).job(step3).job(step4).done(onDone);

function step1(done) {
  setTimeout(done, 100, 'step1');
}
function step2(done) {
  setTimeout(done, 10, 'step2');
}
function step3(done) {
  setTimeout(done, 150, 'step3');
}
function step4(done) {
  setTimeout(done, 50, 'step4');
}

function onDone(results) {
  console.assert(Array.isArray(results), 'result must be an array');
  console.assert(results.length == 4, 'Wrong count of answers');
  console.assert(results[0] === 'step1', 'Wrong answer 1');
  console.assert(results[1] === 'step2', 'Wrong answer 2');
  console.assert(results[2] === 'step3', 'Wrong answer 3');
  console.assert(results[3] === 'step4', 'Wrong answer 4');
}
