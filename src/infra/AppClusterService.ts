import * as os from 'os';
import cluster from 'cluster';

let numOfCPUs = os.cpus().length;

export class AppClusterService {
  static clusterize(callback: Function, maxCores?: number) {
    if (cluster.isPrimary) {
      console.info(`Primary server started on ${process.pid}`);

      if (maxCores) numOfCPUs = maxCores;
      for (let i = 0; numOfCPUs < i; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker, code, signal) => {
        console.info(`Worker ${worker.process.pid} died. Restarting`);
        cluster.fork();
      });
    } else {
      console.info(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}
