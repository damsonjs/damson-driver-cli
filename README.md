# damson-driver-cli

## Information

<table>
<tr> 
<td>Package</td><td>damson-driver-cli</td>
</tr>
<tr>
<td>Description</td>
<td>CLI driver for Damson</td>
</tr>
</table>

## send(object)

Prints object in console, returns promise

```javascript
var CliDriver = require('damson-driver-cli');
var cli = new CliDriver();
cli.send('Hello!').then(function () {
	//
});
```

```javascript
var damson = require('damson-core');
var CliDriver = require('damson-driver-cli');
var SendMessage = require('damson-send-message');

damson.registerDriver(CliDriver, 'cli');
damson.registerTask(SendMessage, 'send-message');

damson.run('send-message', { message: 'Hello!' }, 'cli').then(function () {
	//
});
```