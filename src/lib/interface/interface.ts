import { ServiceConfig } from './fc/service';
import { FunctionConfig } from './fc/function';
import { TriggerConfig } from './fc/trigger';
import { CustomDomainConfig } from './fc/custom-domain';
import { ServerlessProfile } from './profile';

export interface IInputs extends ServerlessProfile {
  props: IProperties;
  args: string;
  path: string;
}

export interface IProperties {
  region: string;
  service: ServiceConfig;
  function: FunctionConfig;
  triggers: TriggerConfig[];
  customDomains: CustomDomainConfig[];
}