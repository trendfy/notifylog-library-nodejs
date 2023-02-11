import axios from "axios";

export class NotifyLog {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async publish(event: {
    name: string;
    channel: string;
    notify: boolean;    
    description?: string;
    icon?: string;
    tags?: { [key: string]: string | number };
    message?: string;
  }): Promise<{
    error: any;
    ok: boolean;
  }> {
    const headers = {
      "Content-Type": "application/json",
      authorization: this.apiKey,
    };

    try {
      await axios.post(
        "https://app.notifylog.com/api/v1/event",
        event,
        { headers: headers }
      );

      return {
        ok: true,
        error: null,
      }
    } catch (error) {
      console.error(error);

      return {
        ok: false,
        error: error,
      }
    }
  }
}