![Lynxari IoT Platform](https://agilatech.com/images/lynxari/lynxari200x60.png) **IoT Platform**
## Lynxari Fileout Application

### Install
```
$> npm install @agilatech/lynxari-fileout-application
```
Install in the same directory in which lynxari is installed. Create a config.json file to suit.


### Purpose
The purpose of this application is to write device data outputs to a file. It queries the system for device data properties and streams, and writes the results to file.


### Usage
This application runs on the [Agilatech®](https://agilatech.com) Lynxari IoT platform.  As such, it is not applicable for other environments.

To use it with Lynxari, simply insert its object definition as an element in the apps array in the _applist.json_ file. On startup, the Lynxari server reads _applist.json_ and starts all applications found there.

A _config.json_ configuration file must be present in the module's main directory. For this module, that will be within the Lynxari home directory in _node\_modules/@agilatech/lynxari-fileout-application/config.json_


### Configuration
The _config.json_ file defines an array of devices for which values will be saved. Each device definition is an object with the following elements:

1. **name** : The name of the device -- this is used to query the platform for a connected device of the name. The query will fail if the name is not found. Also, a directory of this name will be created under the path for the data files.
2. **path** : The directory path under which the device directory does or will reside. If not absolute, then it is relative to the Lynxari home directory.
3. **values** : An array of values to store. These values are the names of the monitored values or value streams on the device.
4. **files** : An array of files in which to store the values. This array should correspond to the values array, in that it should contain the same number of elements, and the indicies for values aligns with those of the files (i.e. the 2nd value element will be sotred in the 2nd file element).

There is no limit to the number of device objects which may appear in the **devices** array. The config.json file must be valid JSON.

A sample config file:
```
{
  "devices": [
    {
      "name": "RMY85000",
      "path": "/dev/lynxari/stationData",
      "values": [
        "speed",
        "direction",
        "gust_speed_stream",
        "gust_direction_stream"
      ],
      "files": [
        "speed",
        "direction",
        "gust_speed",
        "gust_direction"
      ]
    },
    {
      "name": "TSL2561",
      "path": "/dev/lynxari/stationData",
      "values": [
        "lux_stream"
      ],
      "files": [
        "lux"
      ]
    }
  ]
}
```

### Copyright
Copyright © 2018 [Agilatech®](https://agilatech.com). All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
