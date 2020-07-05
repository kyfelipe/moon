import { createContext } from 'react'

export interface Workspace {
  name: string;
  ref: any;
}

interface WorkspaceListContext {
  registerWorkspace(ws: Workspace): void;
  selectWorkspace(name: string): void;
}

export default createContext<WorkspaceListContext>({} as WorkspaceListContext);
