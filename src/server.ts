import { app } from './app';
import { AppClusterService } from './infra/AppClusterService';

const bootstrap = () => {
  app.listen(3333, () => console.log('🚀 ~ server started'));
};

bootstrap();
// AppClusterService.clusterize(bootstrap);
