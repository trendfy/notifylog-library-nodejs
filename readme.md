## NotifyLog Library

A library for sending notifications using the NotifyLog API.

####  Installation
To install the library, run the following command:

```javascript
npm  install  notifylog
```

####  Usage
To use the library, import the NotifyLog class and create an instance with your API key:

```javascript
import { NotifyLog } from  "notifylog";

const  notifyLog  =  new  NotifyLog("YOUR_TOKEN_HERE");
```

Then, you can use the notifyEvent method to send a notification:

```javascript
notifyLog.publish({
	name:  "My first email",
	description:  "Hello world from API",
	channel:  "payments",
	icon:  "💸",
	notify:  true,
	tags: {
		"my-tag":  "my-tag-value",
	},
	message:  
		"[Link](https://google.com)",
});
```

#### Support
If you need help, please send an email to hello@notifylog.com.

#### Create an account
To create an account on the NotifyLog platform, visit https://notifylog.com.