/* tslint:disable */
import { CourseResponse } from './course-response';
import { ModuleVisibility } from './module-visibility';
import { PartInfo } from './part-info';
export interface ModuleResponse {
  basicIdea?: null | string;
  classLevel?: number;
  course?: CourseResponse;
  creator?: null | string;
  generalPart?: PartInfo;
  id?: number;
  laborIntensity?: number;
  lastEditTime?: string;
  problemQuestion?: null | string;
  tags?: null | Array<string>;
  teacherInstructionsPart?: PartInfo;
  title?: null | string;
  visibility?: ModuleVisibility;
}
