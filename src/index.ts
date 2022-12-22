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
    icon?: string;
    description?: string;
    tags?: { [key: string]: string | number };
    message?: string;
  }) {
    // configure headers
    const headers = {
      "Content-Type": "application/json",
      authorization: this.apiKey,
    };

    // make the request to NotifyLog
    await axios.post(
      "https://app.notifylog.com/api/v1/event",
      event,
      { headers: headers }
    );
  }
}