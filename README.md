# node-vainglory
API client for Vainglory

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
$ npm install node-vainglory --save
```

# Usage

```
Vainglory = require('node-vainglory');

vainglory = new Vainglory();

vainglory.meta.status()
.then((body)=>{console.log(body)})
.catch((err)=>{console.log(err)});

vainglory.matches.searchUuid({
  uuid: "044a3f8f-f10b-4bf1-83c0-651da4bc3c55",
  startTime: 0,
  endTime: 0
})
.then((body)=>{console.log(body)})
.catch((err)=>{console.log(err)});
```