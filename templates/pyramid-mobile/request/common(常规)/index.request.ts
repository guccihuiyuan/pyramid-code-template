import { API_CONFIG } from '@/core/configs/api.config';
import { BaseRequest } from '@/requests/base.request';

class {{fileName}}Request extends BaseRequest {
  getPages(): Promise<{list: any[], total: number}> {
    return this.object(API_CONFIG.MAIN.AUTHORITY.ORG.LIST);
  }

  getList(): Promise<any[]> {
    return this.list(API_CONFIG.MAIN.AUTHORITY.ORG.LIST);
  }

  doAdd(params: any): Promise<boolean> {
    return this.add(API_CONFIG.MAIN.AUTHORITY.ORG.ADD, params);
  }

  doEdit(params: any): Promise<boolean> {
    return this.update(API_CONFIG.MAIN.AUTHORITY.ORG.EDIT, params);
  }

  doDelete(id: number): Promise<boolean> {
    return this.delete(API_CONFIG.MAIN.AUTHORITY.ORG.DELETE + '/' + id);
  }
}

export const {{originFileName}}Request = new {{fileName}}Request();
