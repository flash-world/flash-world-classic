var EpicportApp = function(Module) {

var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    }
    var PACKAGE_NAME = 'opendune-en.data';
    var REMOTE_PACKAGE_NAME = (Module['filePackagePrefixURL'] || '') + 'opendune-en.data';
    var REMOTE_PACKAGE_SIZE = 7085179;
    var PACKAGE_UUID = 'f76ce19b-6544-44e1-8f31-4d69a0b1ddb8';
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'home', true, true);
Module['FS_createPath']('/home', 'caiiiycuk', true, true);
Module['FS_createPath']('/home/caiiiycuk', 'play-dune', true, true);
Module['FS_createPath']('/home/caiiiycuk/play-dune', 'data', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 582276, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/finale.pak');
    new DataRequest(582276, 1557736, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/introvoc.pak');
    new DataRequest(1557736, 1820474, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/voc.pak');
    new DataRequest(1820474, 2231865, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/atre.pak');
    new DataRequest(2231865, 2277454, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/merc.pak');
    new DataRequest(2277454, 2711616, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/hark.pak');
    new DataRequest(2711616, 4021754, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/sound.pak');
    new DataRequest(4021754, 4024732, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/setupeng.dip');
    new DataRequest(4024732, 5249285, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/intro.pak');
    new DataRequest(5249285, 5816521, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/mentat.pak');
    new DataRequest(5816521, 5816531, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/options.cfg');
    new DataRequest(5816531, 6221247, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/dune.pak');
    new DataRequest(6221247, 6683727, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/ordos.pak');
    new DataRequest(6683727, 6683727, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/onetime.dat');
    new DataRequest(6683727, 6772945, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/english.pak');
    new DataRequest(6772945, 6772955, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/dune.cfg');
    new DataRequest(6772955, 7085179, 0, 0).open('GET', '/home/caiiiycuk/play-dune/data/scenario.pak');

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though.
      var ptr = Module['_malloc'](byteArray.length);
      Module['HEAPU8'].set(byteArray, ptr);
      DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/finale.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/introvoc.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/voc.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/atre.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/merc.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/hark.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/sound.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/setupeng.dip"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/intro.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/mentat.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/options.cfg"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/dune.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/ordos.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/onetime.dat"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/english.pak"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/dune.cfg"].onload();
          DataRequest.prototype.requests["/home/caiiiycuk/play-dune/data/scenario.pak"].onload();
          Module['removeRunDependency']('datafile_opendune-en.data');

    };
    Module['addRunDependency']('datafile_opendune-en.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();

// Generated by CoffeeScript 1.6.1
var _Epicport_CanLoad, _Epicport_CanSave, _Epicport_HaltMusic, _Epicport_PlayMusic, _Epicport_PushSave, _Epicport_SelectLoadFileDialog, _Epicport_SelectSaveFileDialog, _Epicport_VolumeMusic;

_Epicport_CanSave = Epicport['API']['canSave'];

_Epicport_CanLoad = Epicport['API']['canLoad'];

_Epicport_PushSave = Epicport['API']['pushSave'];

_Epicport_PlayMusic = Epicport['API']['playMusic'];

_Epicport_VolumeMusic = Epicport['API']['volumeMusic'];

_Epicport_HaltMusic = Epicport['API']['haltMusic'];

_Epicport_SelectLoadFileDialog = Epicport['API']['selectLoadFileDialog'];

_Epicport_SelectSaveFileDialog = Epicport['API']['selectSaveFileDialog'];

//--
//  DISABLE DEFAULTS
//--
document.body.onselectstart=function() {
  return false
}

document.body.style.MozUserSelect = "none";

if(navigator.userAgent.toLowerCase().indexOf("opera") != -1) {
  document.body.onmousedown = function() {
    return false
  }
}

// --
// -- MIDI --
// --

Module['EM_MIDI_TOGGLE_SOUND'] = function() {
  if (Module['EM_MIDI_MUTED']) {
    Module['EM_MIDI_MUTED'] = false;
    _js_music_play(Module['EM_MIDI_MUTED_AT'] || 0);
  } else {
    Module['EM_MIDI_MUTED'] = true;
    Module['EM_MIDI_MUTED_AT'] = Module['EM_MIDI_CURRENT'];
    _js_driver_music_stop();
  }
};

Module['EM_MIDI_AUDIO'] = new Audio();

Module['EM_MIDI_AUDIO'].addEventListener('ended', function() {
  Module['EM_MIDI_CURRENT'] = 0;
}, false);

Module['EM_MIDI_CURRENT'] = 0;
Module['EM_MIDI_FILES'] = {
  1: 'music/1.mp3',
  2: 'music/2.mp3',
  3: 'music/3.mp3',
  4: 'music/4.mp3',
  5: 'music/5.mp3',
  6: 'music/6.mp3',
  7: 'music/7.mp3',
  8: 'music/8.mp3',
  9: 'music/9.mp3',
  10: 'music/10.mp3',
  11: 'music/11.mp3',
  12: 'music/12.mp3',
  13: 'music/13.mp3',
  14: 'music/14.mp3',
  15: 'music/15.mp3',
  16: 'music/16.mp3',
  17: 'music/17.mp3',
  18: 'music/18.mp3',
  19: 'music/19.mp3',
  20: 'music/20.mp3',
  21: 'music/21.mp3',
  22: 'music/22.mp3',
  24: 'music/24.mp3',
  25: 'music/25.mp3',
  26: 'music/26.mp3',
  28: 'music/28.mp3',
  29: 'music/29.mp3',
  30: 'music/30.mp3',
  31: 'music/31.mp3',
  32: 'music/32.mp3',
  33: 'music/33.mp3',
  34: 'music/34.mp3'
};

var _js_music_play = function(index) {
  if (_js_is_muted()) {
    return;
  }

  if (index == Module['EM_MIDI_CURRENT']) {
    return;
  }

  Module['EM_MIDI_CURRENT'] = index;

  if (index == 0) {
    Module['EM_MIDI_AUDIO'].src = Module['EM_MIDI_AUDIO'].src; // rewind
    Module['EM_MIDI_AUDIO'].pause();
    return;
  }

  var url = Module['EM_MIDI_FILES'][index];

  if (url) {
    Module['EM_MIDI_AUDIO'].src = url;
    Module['EM_MIDI_AUDIO'].play();
  }
};

var _js_driver_music_is_playing = function() {
  var isStopped = 
    Module['EM_MIDI_CURRENT'] == 0 ||
    Module['EM_MIDI_AUDIO'].paused ||
    (Module['EM_MIDI_AUDIO'].duration - Module['EM_MIDI_AUDIO'].currentTime) < 10;

  return !isStopped;
}

var _js_driver_music_stop = function() {
  Module['EM_MIDI_CURRENT'] = 0;
  Module['EM_MIDI_AUDIO'].pause();
}

var _js_driver_music_fade_out = function() {
  setTimeout(_js_driver_music_stop, 2000);
}

var _js_is_muted = function() {
  return Module['EM_MIDI_MUTED'];
}

//--
//  STATS
//--

var _pushStats = function(g_campaignID, houseId, killed, destroyed, harvested, score) {
}

//--
//  TIMER API
//--

var _initJsTimers = function() {
  if (Browser['t_timers']) {
    return;
  }

  Browser['t_timers'] = {};
  Browser['t_timers_id'] = 0;

  Browser['jsTimerRun'] = function() {
    var alive = [];
    var ids = Object.keys(Browser['t_timers']);
    
    for (var i = 0; i < ids.length; ++i) {
      var id = ids[i];
      var timer = Browser['t_timers'][id];
      
      if (timer && (timer.nextCall <= new Date().getTime())) {
        delete Browser['t_timers'][id];
        timer.func();
      } 
    }
  }

  Browser['safeClearTimeout'] = function(id) {
    delete Browser['t_timers'][id];
  };

  Browser['safeSetTimeout'] = function(func, timeout) {
    var id = ++Browser['t_timers_id'];

    Browser['t_timers'][id] = {
      func: func,
      nextCall: new Date().getTime() + timeout,
    };

    return id;
  };

  setInterval(Browser['jsTimerRun'], 10);
}

var _callJsTimers = function() {
  _initJsTimers();
  Browser['jsTimerRun']();
}
// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = (typeof Module !== 'undefined' ? Module : null) || {};

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function';
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = function print(x) {
    process['stdout'].write(x + '\n');
  };
  if (!Module['printErr']) Module['printErr'] = function printErr(x) {
    process['stderr'].write(x + '\n');
  };

  var nodeFS = require('fs');
  var nodePath = require('path');

  Module['read'] = function read(filename, binary) {
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    // The path is absolute if the normalized version is the same as the resolved.
    if (!ret && filename != nodePath['resolve'](filename)) {
      filename = path.join(__dirname, '..', 'src', filename);
      ret = nodeFS['readFileSync'](filename);
    }
    if (ret && !binary) ret = ret.toString();
    return ret;
  };

  Module['readBinary'] = function readBinary(filename) { return Module['read'](filename, true) };

  Module['load'] = function load(f) {
    globalEval(read(f));
  };

  Module['arguments'] = process['argv'].slice(2);

  module['exports'] = Module;
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available (jsc?)' };
  }

  Module['readBinary'] = function readBinary(f) {
    return read(f, 'binary');
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  this['Module'] = Module;

  eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); // wipe out the SpiderMonkey shell 'gc' function, which can confuse closure (uses it as a minified name, and it is then initted to a non-falsey value unexpectedly)
}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };

  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof console !== 'undefined') {
    if (!Module['print']) Module['print'] = function print(x) {
      console.log(x);
    };
    if (!Module['printErr']) Module['printErr'] = function printErr(x) {
      console.log(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (ENVIRONMENT_IS_WEB) {
    window['Module'] = Module;
  } else {
    Module['load'] = importScripts;
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] == 'undefined' && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}



// === Auto-generated preamble library stuff ===

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  forceAlign: function (target, quantum) {
    quantum = quantum || 4;
    if (quantum == 1) return target;
    if (isNumber(target) && isNumber(quantum)) {
      return Math.ceil(target/quantum)*quantum;
    } else if (isNumber(quantum) && isPowerOfTwo(quantum)) {
      return '(((' +target + ')+' + (quantum-1) + ')&' + -quantum + ')';
    }
    return 'Math.ceil((' + target + ')/' + quantum + ')*' + quantum;
  },
  isNumberType: function (type) {
    return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
  },
  isPointerType: function isPointerType(type) {
  return type[type.length-1] == '*';
},
  isStructType: function isStructType(type) {
  if (isPointerType(type)) return false;
  if (isArrayType(type)) return true;
  if (/<?\{ ?[^}]* ?\}>?/.test(type)) return true; // { i32, i8 } etc. - anonymous struct types
  // See comment in isStructPointerType()
  return type[0] == '%';
},
  INT_TYPES: {"i1":0,"i8":0,"i16":0,"i32":0,"i64":0},
  FLOAT_TYPES: {"float":0,"double":0},
  or64: function (x, y) {
    var l = (x | 0) | (y | 0);
    var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  and64: function (x, y) {
    var l = (x | 0) & (y | 0);
    var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  xor64: function (x, y) {
    var l = (x | 0) ^ (y | 0);
    var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  dedup: function dedup(items, ident) {
  var seen = {};
  if (ident) {
    return items.filter(function(item) {
      if (seen[item[ident]]) return false;
      seen[item[ident]] = true;
      return true;
    });
  } else {
    return items.filter(function(item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }
},
  set: function set() {
  var args = typeof arguments[0] === 'object' ? arguments[0] : arguments;
  var ret = {};
  for (var i = 0; i < args.length; i++) {
    ret[args[i]] = 0;
  }
  return ret;
},
  STACK_ALIGN: 8,
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (vararg) return 8;
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  calculateStructAlignment: function calculateStructAlignment(type) {
    type.flatSize = 0;
    type.alignSize = 0;
    var diffs = [];
    var prev = -1;
    var index = 0;
    type.flatIndexes = type.fields.map(function(field) {
      index++;
      var size, alignSize;
      if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
        size = Runtime.getNativeTypeSize(field); // pack char; char; in structs, also char[X]s.
        alignSize = Runtime.getAlignSize(field, size);
      } else if (Runtime.isStructType(field)) {
        if (field[1] === '0') {
          // this is [0 x something]. When inside another structure like here, it must be at the end,
          // and it adds no size
          // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
          size = 0;
          if (Types.types[field]) {
            alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
          } else {
            alignSize = type.alignSize || QUANTUM_SIZE;
          }
        } else {
          size = Types.types[field].flatSize;
          alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
        }
      } else if (field[0] == 'b') {
        // bN, large number field, like a [N x i8]
        size = field.substr(1)|0;
        alignSize = 1;
      } else if (field[0] === '<') {
        // vector type
        size = alignSize = Types.types[field].flatSize; // fully aligned
      } else if (field[0] === 'i') {
        // illegal integer field, that could not be legalized because it is an internal structure field
        // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
        size = alignSize = parseInt(field.substr(1))/8;
        assert(size % 1 === 0, 'cannot handle non-byte-size field ' + field);
      } else {
        assert(false, 'invalid type for calculateStructAlignment');
      }
      if (type.packed) alignSize = 1;
      type.alignSize = Math.max(type.alignSize, alignSize);
      var curr = Runtime.alignMemory(type.flatSize, alignSize); // if necessary, place this on aligned memory
      type.flatSize = curr + size;
      if (prev >= 0) {
        diffs.push(curr-prev);
      }
      prev = curr;
      return curr;
    });
    if (type.name_ && type.name_[0] === '[') {
      // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
      // allocating a potentially huge array for [999999 x i8] etc.
      type.flatSize = parseInt(type.name_.substr(1))*type.flatSize/2;
    }
    type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
    if (diffs.length == 0) {
      type.flatFactor = type.flatSize;
    } else if (Runtime.dedup(diffs).length == 1) {
      type.flatFactor = diffs[0];
    }
    type.needsFlattening = (type.flatFactor != 1);
    return type.flatIndexes;
  },
  generateStructInfo: function (struct, typeName, offset) {
    var type, alignment;
    if (typeName) {
      offset = offset || 0;
      type = (typeof Types === 'undefined' ? Runtime.typeInfo : Types.types)[typeName];
      if (!type) return null;
      if (type.fields.length != struct.length) {
        printErr('Number of named fields must match the type for ' + typeName + ': possibly duplicate struct names. Cannot return structInfo');
        return null;
      }
      alignment = type.flatIndexes;
    } else {
      var type = { fields: struct.map(function(item) { return item[0] }) };
      alignment = Runtime.calculateStructAlignment(type);
    }
    var ret = {
      __size__: type.flatSize
    };
    if (typeName) {
      struct.forEach(function(item, i) {
        if (typeof item === 'string') {
          ret[item] = alignment[i] + offset;
        } else {
          // embedded struct
          var key;
          for (var k in item) key = k;
          ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
        }
      });
    } else {
      struct.forEach(function(item, i) {
        ret[item[1]] = alignment[i];
      });
    }
    return ret;
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      if (!args.splice) args = Array.prototype.slice.call(args);
      args.splice(0, 0, ptr);
      return Module['dynCall_' + sig].apply(null, args);
    } else {
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  getAsmConst: function (code, numArgs) {
    // code is a constant string on the heap, so we can cache these
    if (!Runtime.asmConstCache) Runtime.asmConstCache = {};
    var func = Runtime.asmConstCache[code];
    if (func) return func;
    var args = [];
    for (var i = 0; i < numArgs; i++) {
      args.push(String.fromCharCode(36) + i); // $0, $1 etc
    }
    var source = Pointer_stringify(code);
    if (source[0] === '"') {
      // tolerate EM_ASM("..code..") even though EM_ASM(..code..) is correct
      if (source.indexOf('"', 1) === source.length-1) {
        source = source.substr(1, source.length-2);
      } else {
        // something invalid happened, e.g. EM_ASM("..code($0)..", input)
        abort('invalid EM_ASM input |' + source + '|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)');
      }
    }
    return Runtime.asmConstCache[code] = eval('(function(' + args.join(',') + '){ ' + source + ' })'); // new Function does not allow upvars in node
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[func]) {
      Runtime.funcWrappers[func] = function dynCall_wrapper() {
        return Runtime.dynCall(sig, func, arguments);
      };
    }
    return Runtime.funcWrappers[func];
  },
  UTF8Processor: function () {
    var buffer = [];
    var needed = 0;
    this.processCChar = function (code) {
      code = code & 0xFF;

      if (buffer.length == 0) {
        if ((code & 0x80) == 0x00) {        // 0xxxxxxx
          return String.fromCharCode(code);
        }
        buffer.push(code);
        if ((code & 0xE0) == 0xC0) {        // 110xxxxx
          needed = 1;
        } else if ((code & 0xF0) == 0xE0) { // 1110xxxx
          needed = 2;
        } else {                            // 11110xxx
          needed = 3;
        }
        return '';
      }

      if (needed) {
        buffer.push(code);
        needed--;
        if (needed > 0) return '';
      }

      var c1 = buffer[0];
      var c2 = buffer[1];
      var c3 = buffer[2];
      var c4 = buffer[3];
      var ret;
      if (buffer.length == 2) {
        ret = String.fromCharCode(((c1 & 0x1F) << 6)  | (c2 & 0x3F));
      } else if (buffer.length == 3) {
        ret = String.fromCharCode(((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6)  | (c3 & 0x3F));
      } else {
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        var codePoint = ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) |
                        ((c3 & 0x3F) << 6)  | (c4 & 0x3F);
        ret = String.fromCharCode(
          Math.floor((codePoint - 0x10000) / 0x400) + 0xD800,
          (codePoint - 0x10000) % 0x400 + 0xDC00);
      }
      buffer.length = 0;
      return ret;
    }
    this.processJSString = function processJSString(string) {
      /* TODO: use TextEncoder when present,
        var encoder = new TextEncoder();
        encoder['encoding'] = "utf-8";
        var utf8Array = encoder['encode'](aMsg.data);
      */
      string = unescape(encodeURIComponent(string));
      var ret = [];
      for (var i = 0; i < string.length; i++) {
        ret.push(string.charCodeAt(i));
      }
      return ret;
    }
  },
  getCompilerSetting: function (name) {
    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+7)&-8); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + size)|0;STATICTOP = (((STATICTOP)+7)&-8); return ret; },
  dynamicAlloc: function (size) { var ret = DYNAMICTOP;DYNAMICTOP = (DYNAMICTOP + size)|0;DYNAMICTOP = (((DYNAMICTOP)+7)&-8); if (DYNAMICTOP >= TOTAL_MEMORY) enlargeMemory();; return ret; },
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 8))*(quantum ? quantum : 8); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*(+4294967296))) : ((+((low>>>0)))+((+((high|0)))*(+4294967296)))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}


Module['Runtime'] = Runtime;









//========================================
// Runtime essentials
//========================================

var __THREW__ = 0; // Used in checking for thrown exceptions.

var ABORT = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

var undef = 0;
// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD, tempDouble, tempFloat;
var tempI64, tempI64b;
var tempRet0, tempRet1, tempRet2, tempRet3, tempRet4, tempRet5, tempRet6, tempRet7, tempRet8, tempRet9;

function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// C calling interface. A convenient way to call C functions (in C files, or
// defined with extern "C").
//
// Note: LLVM optimizations can inline and remove functions, after which you will not be
//       able to call them. Closure can also do so. To avoid that, add your function to
//       the exports using something like
//
//         -s EXPORTED_FUNCTIONS='["_main", "_myfunc"]'
//
// @param ident      The name of the C function (note that C++ functions will be name-mangled - use extern "C")
// @param returnType The return type of the function, one of the JS types 'number', 'string' or 'array' (use 'number' for any C pointer, and
//                   'array' for JavaScript arrays and typed arrays; note that arrays are 8-bit).
// @param argTypes   An array of the types of arguments for the function (if there are no arguments, this can be ommitted). Types are as in returnType,
//                   except that 'array' is not possible (there is no way for us to know the length of the array)
// @param args       An array of the arguments to the function, as native JS values (as in returnType)
//                   Note that string arguments will be stored on the stack (the JS string will become a C string on the stack).
// @return           The return value, as a native JS value (as in returnType)
function ccall(ident, returnType, argTypes, args) {
  return ccallFunc(getCFunc(ident), returnType, argTypes, args);
}
Module["ccall"] = ccall;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  try {
    var func = Module['_' + ident]; // closure exported function
    if (!func) func = eval('_' + ident); // explicit lookup
  } catch(e) {
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}

// Internal function that does a C call using a function, not an identifier
function ccallFunc(func, returnType, argTypes, args) {
  var stack = 0;
  function toC(value, type) {
    if (type == 'string') {
      if (value === null || value === undefined || value === 0) return 0; // null string
      value = intArrayFromString(value);
      type = 'array';
    }
    if (type == 'array') {
      if (!stack) stack = Runtime.stackSave();
      var ret = Runtime.stackAlloc(value.length);
      writeArrayToMemory(value, ret);
      return ret;
    }
    return value;
  }
  function fromC(value, type) {
    if (type == 'string') {
      return Pointer_stringify(value);
    }
    assert(type != 'array');
    return value;
  }
  var i = 0;
  var cArgs = args ? args.map(function(arg) {
    return toC(arg, argTypes[i++]);
  }) : [];
  var ret = fromC(func.apply(null, cArgs), returnType);
  if (stack) Runtime.stackRestore(stack);
  return ret;
}

// Returns a native JS wrapper for a C function. This is similar to ccall, but
// returns a function you can call repeatedly in a normal way. For example:
//
//   var my_function = cwrap('my_c_function', 'number', ['number', 'number']);
//   alert(my_function(5, 22));
//   alert(my_function(99, 12));
//
function cwrap(ident, returnType, argTypes) {
  var func = getCFunc(ident);
  return function() {
    return ccallFunc(func, returnType, argTypes, Array.prototype.slice.call(arguments));
  }
}
Module["cwrap"] = cwrap;

// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[(ptr)]=value; break;
      case 'i8': HEAP8[(ptr)]=value; break;
      case 'i16': tempBigInt=value;HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff; break;
      case 'i32': tempBigInt=value;HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],tempBigInt=tempI64[0],HEAP8[(ptr)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff,tempBigInt=tempI64[1],HEAP8[(((ptr)+(4))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(5))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(6))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(7))|0)]=tempBigInt&0xff); break;
      case 'float': HEAPF32[((tempDoublePtr)>>2)]=value;HEAP8[(ptr)]=HEAP8[(tempDoublePtr)];HEAP8[(((ptr)+(1))|0)]=HEAP8[(((tempDoublePtr)+(1))|0)];HEAP8[(((ptr)+(2))|0)]=HEAP8[(((tempDoublePtr)+(2))|0)];HEAP8[(((ptr)+(3))|0)]=HEAP8[(((tempDoublePtr)+(3))|0)]; break;
      case 'double': (HEAPF64[(tempDoublePtr)>>3]=value,tempBigInt=((HEAP32[((tempDoublePtr)>>2)])|0),HEAP8[(ptr)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff,tempBigInt=((HEAP32[(((tempDoublePtr)+(4))>>2)])|0),HEAP8[(((ptr)+(4))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(5))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(6))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((ptr)+(7))|0)]=tempBigInt&0xff); break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = setValue;

// Parallel to setValue.
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[(ptr)];
      case 'i8': return HEAP8[(ptr)];
      case 'i16': return (((((HEAPU8[(ptr)])|(HEAPU8[(((ptr)+(1))|0)]<<8))<<16)>>16));
      case 'i32': return ((((HEAPU8[(ptr)])|(HEAPU8[(((ptr)+(1))|0)]<<8)|(HEAPU8[(((ptr)+(2))|0)]<<16)|(HEAPU8[(((ptr)+(3))|0)]<<24))|0));
      case 'i64': return ((HEAPU8[(ptr)])|(HEAPU8[(((ptr)+(1))|0)]<<8)|(HEAPU8[(((ptr)+(2))|0)]<<16)|(HEAPU8[(((ptr)+(3))|0)]<<24)|(HEAPU8[(((ptr)+(4))|0)]<<32)|(HEAPU8[(((ptr)+(5))|0)]<<40)|(HEAPU8[(((ptr)+(6))|0)]<<48)|(HEAPU8[(((ptr)+(7))|0)]<<56));
      case 'float': return (copyTempFloat(((ptr)|0)),(+(HEAPF32[((tempDoublePtr)>>2)])));
      case 'double': return (HEAP32[((tempDoublePtr)>>2)]=((((HEAPU8[(ptr)])|(HEAPU8[(((ptr)+(1))|0)]<<8)|(HEAPU8[(((ptr)+(2))|0)]<<16)|(HEAPU8[(((ptr)+(3))|0)]<<24))|0)),HEAP32[(((tempDoublePtr)+(4))>>2)]=((((HEAPU8[(((ptr)+(4))|0)])|(HEAPU8[(((ptr)+(5))|0)]<<8)|(HEAPU8[(((ptr)+(6))|0)]<<16)|(HEAPU8[(((ptr)+(7))|0)]<<24))|0)),(+(HEAPF64[(tempDoublePtr)>>3])));
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module['getValue'] = getValue;

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module['ALLOC_NORMAL'] = ALLOC_NORMAL;
Module['ALLOC_STACK'] = ALLOC_STACK;
Module['ALLOC_STATIC'] = ALLOC_STATIC;
Module['ALLOC_DYNAMIC'] = ALLOC_DYNAMIC;
Module['ALLOC_NONE'] = ALLOC_NONE;

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      tempBigInt=0;HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)|0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}
Module['allocate'] = allocate;

function Pointer_stringify(ptr, /* optional */ length) {
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = false;
  var t;
  var i = 0;
  while (1) {
    t = HEAPU8[(((ptr)+(i))|0)];
    if (t >= 128) hasUtf = true;
    else if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (!hasUtf) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }

  var utf8 = new Runtime.UTF8Processor();
  for (i = 0; i < length; i++) {
    t = HEAPU8[(((ptr)+(i))|0)];
    ret += utf8.processCChar(t);
  }
  return ret;
}
Module['Pointer_stringify'] = Pointer_stringify;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF16ToString(ptr) {
  var i = 0;

  var str = '';
  while (1) {
    var codeUnit = (((((HEAPU8[(((ptr)+(i*2))|0)])|(HEAPU8[(((ptr)+((i*2)+(1)))|0)]<<8))<<16)>>16));
    if (codeUnit == 0)
      return str;
    ++i;
    // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
    str += String.fromCharCode(codeUnit);
  }
}
Module['UTF16ToString'] = UTF16ToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function stringToUTF16(str, outPtr) {
  for(var i = 0; i < str.length; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    tempBigInt=codeUnit;HEAP8[(((outPtr)+(i*2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((outPtr)+((i*2)+(1)))|0)]=tempBigInt&0xff;
  }
  // Null-terminate the pointer to the HEAP.
  tempBigInt=0;HEAP8[(((outPtr)+(str.length*2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((outPtr)+((str.length*2)+(1)))|0)]=tempBigInt&0xff;
}
Module['stringToUTF16'] = stringToUTF16;

// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF32ToString(ptr) {
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = ((((HEAPU8[(((ptr)+(i*4))|0)])|(HEAPU8[(((ptr)+((i*4)+(1)))|0)]<<8)|(HEAPU8[(((ptr)+((i*4)+(2)))|0)]<<16)|(HEAPU8[(((ptr)+((i*4)+(3)))|0)]<<24))|0));
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}
Module['UTF32ToString'] = UTF32ToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function stringToUTF32(str, outPtr) {
  var iChar = 0;
  for(var iCodeUnit = 0; iCodeUnit < str.length; ++iCodeUnit) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    var codeUnit = str.charCodeAt(iCodeUnit); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++iCodeUnit);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    tempBigInt=codeUnit;HEAP8[(((outPtr)+(iChar*4))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((outPtr)+((iChar*4)+(1)))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((outPtr)+((iChar*4)+(2)))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((outPtr)+((iChar*4)+(3)))|0)]=tempBigInt&0xff;
    ++iChar;
  }
  // Null-terminate the pointer to the HEAP.
  tempBigInt=0;HEAP8[(((outPtr)+(iChar*4))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((outPtr)+((iChar*4)+(1)))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((outPtr)+((iChar*4)+(2)))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((outPtr)+((iChar*4)+(3)))|0)]=tempBigInt&0xff;
}
Module['stringToUTF32'] = stringToUTF32;

function demangle(func) {
  var i = 3;
  // params, etc.
  var basicTypes = {
    'v': 'void',
    'b': 'bool',
    'c': 'char',
    's': 'short',
    'i': 'int',
    'l': 'long',
    'f': 'float',
    'd': 'double',
    'w': 'wchar_t',
    'a': 'signed char',
    'h': 'unsigned char',
    't': 'unsigned short',
    'j': 'unsigned int',
    'm': 'unsigned long',
    'x': 'long long',
    'y': 'unsigned long long',
    'z': '...'
  };
  var subs = [];
  var first = true;
  function dump(x) {
    //return;
    if (x) Module.print(x);
    Module.print(func);
    var pre = '';
    for (var a = 0; a < i; a++) pre += ' ';
    Module.print (pre + '^');
  }
  function parseNested() {
    i++;
    if (func[i] === 'K') i++; // ignore const
    var parts = [];
    while (func[i] !== 'E') {
      if (func[i] === 'S') { // substitution
        i++;
        var next = func.indexOf('_', i);
        var num = func.substring(i, next) || 0;
        parts.push(subs[num] || '?');
        i = next+1;
        continue;
      }
      if (func[i] === 'C') { // constructor
        parts.push(parts[parts.length-1]);
        i += 2;
        continue;
      }
      var size = parseInt(func.substr(i));
      var pre = size.toString().length;
      if (!size || !pre) { i--; break; } // counter i++ below us
      var curr = func.substr(i + pre, size);
      parts.push(curr);
      subs.push(curr);
      i += pre + size;
    }
    i++; // skip E
    return parts;
  }
  function parse(rawList, limit, allowVoid) { // main parser
    limit = limit || Infinity;
    var ret = '', list = [];
    function flushList() {
      return '(' + list.join(', ') + ')';
    }
    var name;
    if (func[i] === 'N') {
      // namespaced N-E
      name = parseNested().join('::');
      limit--;
      if (limit === 0) return rawList ? [name] : name;
    } else {
      // not namespaced
      if (func[i] === 'K' || (first && func[i] === 'L')) i++; // ignore const and first 'L'
      var size = parseInt(func.substr(i));
      if (size) {
        var pre = size.toString().length;
        name = func.substr(i + pre, size);
        i += pre + size;
      }
    }
    first = false;
    if (func[i] === 'I') {
      i++;
      var iList = parse(true);
      var iRet = parse(true, 1, true);
      ret += iRet[0] + ' ' + name + '<' + iList.join(', ') + '>';
    } else {
      ret = name;
    }
    paramLoop: while (i < func.length && limit-- > 0) {
      //dump('paramLoop');
      var c = func[i++];
      if (c in basicTypes) {
        list.push(basicTypes[c]);
      } else {
        switch (c) {
          case 'P': list.push(parse(true, 1, true)[0] + '*'); break; // pointer
          case 'R': list.push(parse(true, 1, true)[0] + '&'); break; // reference
          case 'L': { // literal
            i++; // skip basic type
            var end = func.indexOf('E', i);
            var size = end - i;
            list.push(func.substr(i, size));
            i += size + 2; // size + 'EE'
            break;
          }
          case 'A': { // array
            var size = parseInt(func.substr(i));
            i += size.toString().length;
            if (func[i] !== '_') throw '?';
            i++; // skip _
            list.push(parse(true, 1, true)[0] + ' [' + size + ']');
            break;
          }
          case 'E': break paramLoop;
          default: ret += '?' + c; break paramLoop;
        }
      }
    }
    if (!allowVoid && list.length === 1 && list[0] === 'void') list = []; // avoid (void)
    if (rawList) {
      if (ret) {
        list.push(ret + '?');
      }
      return list;
    } else {
      return ret + flushList();
    }
  }
  try {
    // Special-case the entry point, since its name differs from other name mangling.
    if (func == 'Object._main' || func == '_main') {
      return 'main()';
    }
    if (typeof func === 'number') func = Pointer_stringify(func);
    if (func[0] !== '_') return func;
    if (func[1] !== '_') return func; // C function
    if (func[2] !== 'Z') return func;
    switch (func[3]) {
      case 'n': return 'operator new()';
      case 'd': return 'operator delete()';
    }
    return parse();
  } catch(e) {
    return func;
  }
}

function demangleAll(text) {
  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
}

function stackTrace() {
  var stack = new Error().stack;
  return stack ? demangleAll(stack) : '(no stack trace available)'; // Stack trace is not available at least on IE10 and Safari 6.
}

// Memory management

var PAGE_SIZE = 4096;
function alignMemoryPage(x) {
  return (x+4095)&-4096;
}

var HEAP;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false; // static area
var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0; // stack area
var DYNAMIC_BASE = 0, DYNAMICTOP = 0; // dynamic area handled by sbrk

function enlargeMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.');
}

var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 67108864;
var FAST_MEMORY = Module['FAST_MEMORY'] || 2097152;

var totalMemory = 4096;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2*TOTAL_STACK) {
  if (totalMemory < 16*1024*1024) {
    totalMemory *= 2;
  } else {
    totalMemory += 16*1024*1024
  }
}
if (totalMemory !== TOTAL_MEMORY) {
  Module.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be more reasonable');
  TOTAL_MEMORY = totalMemory;
}

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'JS engine does not provide full typed array support');

var buffer = new ArrayBuffer(TOTAL_MEMORY);
HEAP8 = new Int8Array(buffer);
HEAP16 = new Int16Array(buffer);
HEAP32 = new Int32Array(buffer);
HEAPU8 = new Uint8Array(buffer);
HEAPU16 = new Uint16Array(buffer);
HEAPU32 = new Uint32Array(buffer);
HEAPF32 = new Float32Array(buffer);
HEAPF64 = new Float64Array(buffer);

// Endianness check (note: assumes compiler arch was little-endian)
HEAP32[0] = 255;
assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, 'Typed arrays 2 must be run on a little-endian system');

Module['HEAP'] = HEAP;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;

function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
}

function postRun() {
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module['addOnPreRun'] = Module.addOnPreRun = addOnPreRun;

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module['addOnInit'] = Module.addOnInit = addOnInit;

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module['addOnPreMain'] = Module.addOnPreMain = addOnPreMain;

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module['addOnExit'] = Module.addOnExit = addOnExit;

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module['addOnPostRun'] = Module.addOnPostRun = addOnPostRun;

// Tools

// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var ret = (new Runtime.UTF8Processor()).processJSString(stringy);
  if (length) {
    ret.length = length;
  }
  if (!dontAddNull) {
    ret.push(0);
  }
  return ret;
}
Module['intArrayFromString'] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module['intArrayToString'] = intArrayToString;

// Write a Javascript array to somewhere in the heap
function writeStringToMemory(string, buffer, dontAddNull) {
  var array = intArrayFromString(string, dontAddNull);
  var i = 0;
  while (i < array.length) {
    var chr = array[i];
    HEAP8[(((buffer)+(i))|0)]=chr;
    i = i + 1;
  }
}
Module['writeStringToMemory'] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
  for (var i = 0; i < array.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=array[i];
  }
}
Module['writeArrayToMemory'] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=str.charCodeAt(i);
  }
  if (!dontAddNull) HEAP8[(((buffer)+(str.length))|0)]=0;
}
Module['writeAsciiToMemory'] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}

// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];


var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
}
Module['addRunDependency'] = addRunDependency;
function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module['removeRunDependency'] = removeRunDependency;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data


var memoryInitializer = null;

// === Body ===



STATIC_BASE = 8;

STATICTOP = STATIC_BASE + 268600;


/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });



var _stdout;
var _stdout=_stdout=allocate(1, "i32*", ALLOC_STATIC);
var _stderr;
var _stderr=_stderr=allocate(1, "i32*", ALLOC_STATIC);













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































/* memory initializer */ allocate([240,219,0,0,0,0,0,0,1,0,0,0,0,0,0,0,255,255,0,0,0,0,0,0,32,88,32,104,0,0,128,104,40,80,40,96,72,152,128,128,16,80,16,96,88,144,128,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,80,56,96,0,0,0,0,60,58,99,104,92,91,93,96,98,101,103,102,55,43,124,0,62,64,75,76,79,80,81,83,84,85,86,89,95,108,124,0,56,29,82,83,75,71,79,72,80,73,81,77,53,28,55,70,255,255,0,0,0,0,0,0,0,250,244,251,0,250,13,253,68,160,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,1,0,0,0,48,180,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,84,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,86,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,87,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,88,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,90,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,92,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,94,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,96,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,97,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,104,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,108,0,0,0,7,0,0,0,7,0,0,0,2,0,0,0,152,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,114,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,115,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,116,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,117,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,118,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,119,0,0,0,3,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,122,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,124,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,7,0,0,0,7,0,0,0,1,0,0,0,208,176,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,1,0,0,0,48,180,0,0,80,0,0,0,0,0,0,0,0,0,0,0,80,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,82,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,86,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,87,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,88,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,90,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,92,0,0,0,4,0,0,0,4,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,94,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,96,176,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,216,0,4,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,1,0,0,0,16,178,0,0,232,0,0,0,0,0,0,0,80,135,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,144,138,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,112,142,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,16,135,3,0,0,0,0,0,3,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,8,0,0,0,8,135,3,0,0,0,0,0,3,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,120,134,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,128,134,3,0,0,0,0,0,1,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,14,0,0,0,136,134,3,0,0,0,0,0,1,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,96,30,3,0,0,0,0,0,1,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,12,0,0,0,216,87,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,176,187,0,0,0,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,144,134,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,96,176,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,216,0,4,0,0,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,112,240,3,0,0,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,104,240,3,0,0,0,0,0,2,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,6,0,0,0,8,88,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,144,138,3,0,0,0,0,0,4,0,0,0,4,0,0,0,27,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,152,134,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,168,238,3,0,0,0,0,0,1,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,10,0,0,0,104,30,3,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,40,94,3,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,38,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,42,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,46,0,0,0,1,0,0,0,1,0,0,0,10,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,255,193,255,1,0,65,0,64,0,63,0,255,255,191,255,0,0,254,135,255,192,31,0,0,126,33,64,35,36,37,94,38,42,40,41,95,43,0,8,9,81,87,69,82,84,89,85,73,79,80,123,125,124,0,65,83,68,70,71,72,74,75,76,58,34,0,13,0,45,90,88,67,86,66,78,77,60,62,63,0,0,0,0,0,32,0,0,0,55,52,49,0,47,56,53,50,48,42,57,54,51,46,45,43,0,13,0,0,0,0,0,0,96,49,50,51,52,53,54,55,56,57,48,45,61,0,8,9,113,119,101,114,116,121,117,105,111,112,91,93,92,0,97,115,100,102,103,104,106,107,108,59,39,0,13,0,45,122,120,99,118,98,110,109,44,46,47,0,0,0,0,0,32,0,0,30,44,57,58,60,62,64,90,128,0,0,0,0,0,0,0,127,110,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,43,58,31,32,33,34,35,36,37,38,39,40,41,1,44,29,46,47,48,49,50,51,52,53,54,55,57,100,60,61,30,112,113,114,115,116,117,118,119,120,121,90,125,91,96,101,105,92,97,102,106,93,98,103,99,104,127,127,127,122,123,0,0,0,0,0,0,0,1,0,156,0,6,0,40,0,7,0,0,0,2,0,7,0,7,0,0,0,1,0,157,0,2,0,3,0,7,0,0,0,1,0,158,0,2,0,3,0,7,0,0,0,1,0,157,0,2,0,3,0,7,0,0,0,5,0,0,0,0,0,0,0,1,0,183,0,6,0,54,0,9,0,0,0,2,0,3,0,1,0,184,0,2,0,3,0,0,0,0,0,0,0,0,0,1,0,203,0,6,0,49,0,9,0,0,0,8,0,4,0,2,0,3,0,1,0,204,0,1,0,207,0,2,0,3,0,0,0,0,0,0,0,0,0,1,0,203,0,6,0,49,0,9,0,0,0,8,0,0,0,2,0,3,0,1,0,204,0,1,0,207,0,2,0,3,0,0,0,0,0,0,0,0,0,1,0,183,0,6,0,49,0,4,0,176,15,2,0,3,0,1,0,184,0,2,0,3,0,1,0,180,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,182,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,180,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,182,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,180,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,182,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,180,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,182,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,180,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,182,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,180,0,2,0,15,0,1,0,181,0,2,0,15,0,1,0,182,0,2,0,15,0,1,0,181,0,2,0,15,0,0,0,0,0,0,0,0,0,3,0,60,0,1,0,188,0,6,0,51,0,2,0,7,0,1,0,189,0,9,0,0,0,7,0,0,0,2,0,3,0,1,0,190,0,2,0,3,0,1,0,191,0,2,0,3,0,1,0,192,0,2,0,3,0,0,0,0,0,0,0,0,0,1,0,218,0,2,0,15,0,1,0,219,0,2,0,15,0,1,0,220,0,2,0,15,0,1,0,221,0,2,0,15,0,1,0,222,0,2,0,30,0,0,0,0,0,0,0,0,0,1,0,213,0,2,0,15,0,1,0,214,0,2,0,15,0,1,0,215,0,2,0,15,0,1,0,216,0,2,0,15,0,1,0,217,0,2,0,30,0,0,0,0,0,0,0,0,0,3,0,60,0,1,0,188,0,6,0,51,0,9,0,0,0,5,0,0,0,2,0,7,0,1,0,189,0,2,0,3,0,1,0,190,0,2,0,3,0,1,0,191,0,2,0,3,0,1,0,192,0,2,0,3,0,0,0,0,0,0,0,0,0,1,0,151,0,6,0,49,0,9,0,0,0,5,0,0,0,2,0,7,0,1,0,152,0,2,0,7,0,0,0,0,0,1,0,183,0,6,0,41,0,9,0,0,0,5,0,0,0,2,0,3,0,1,0,203,0,2,0,3,0,4,0,176,15,1,0,168,0,2,0,15,0,1,0,169,0,2,0,15,0,1,0,170,0,2,0,15,0,1,0,168,0,2,0,15,0,1,0,169,0,2,0,15,0,1,0,170,0,2,0,15,0,1,0,168,0,2,0,15,0,1,0,169,0,2,0,15,0,1,0,170,0,2,0,15,0,1,0,168,0,2,0,15,0,1,0,169,0,2,0,15,0,1,0,170,0,2,0,15,0,1,0,168,0,2,0,15,0,1,0,169,0,2,0,15,0,1,0,170,0,2,0,15,0,0,0,0,0,0,0,0,0,1,0,156,0,6,0,40,0,9,0,0,0,2,0,7,0,1,0,157,0,2,0,3,0,1,0,158,0,2,0,3,0,1,0,157,0,2,0,3,0,5,0,0,0,0,0,0,0,1,0,208,0,6,0,39,0,2,0,15,0,1,0,209,0,2,0,15,0,1,0,210,0,2,0,15,0,1,0,211,0,2,0,15,0,1,0,212,0,2,0,15,0,0,0,0,0,1,0,198,0,6,0,51,0,9,0,0,0,5,0,0,0,2,0,7,0,1,0,199,0,2,0,3,0,1,0,200,0,2,0,3,0,1,0,201,0,2,0,3,0,1,0,202,0,2,0,3,0,0,0,0,0,3,0,60,0,1,0,203,0,6,0,41,0,9,0,0,0,5,0,0,0,2,0,7,0,1,0,204,0,2,0,3,0,1,0,205,0,2,0,3,0,1,0,206,0,2,0,3,0,1,0,207,0,2,0,3,0,0,0,0,0,0,0,0,0,1,0,203,0,6,0,51,0,9,0,0,0,5,0,0,0,2,0,7,0,1,0,204,0,2,0,3,0,1,0,205,0,2,0,3,0,1,0,206,0,2,0,3,0,1,0,207,0,2,0,3,0,0,0,0,0,1,0,183,0,6,0,49,0,9,0,0,0,5,0,0,0,2,0,3,0,1,0,184,0,2,0,3,0,0,0,0,0,1,0,183,0,6,0,50,0,9,0,0,0,5,0,0,0,2,0,15,0,1,0,184,0,2,0,15,0,0,0,0,0,1,0,154,0,9,0,0,0,2,0,3,0,1,0,153,0,2,0,3,0,1,0,154,0,2,0,3,0,0,0,0,0,1,0,153,0,2,0,3,0,9,0,0,0,1,0,153,0,2,0,3,0,0,0,0,0,26,0,29,0,29,0,29,0,20,0,26,0,16,0,20,0,20,0,16,0,26,0,20,0,233,0,235,0,232,0,233,0,233,0,232,0,235,0,233,0,0,0,0,0,0,0,0,0,14,15,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,57,0,0,0,0,0,0,0,0,0,0,0,0,12,51,0,11,2,3,4,5,6,7,8,9,10,0,0,0,0,0,0,0,30,48,46,32,18,33,34,35,23,36,37,38,50,49,24,25,16,19,31,20,22,47,17,45,21,44,0,0,0,0,0,0,30,48,46,32,18,33,34,35,23,36,37,38,50,49,24,25,16,19,31,20,22,47,17,45,21,44,0,0,0,0,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,79,80,81,75,28,77,71,72,73,0,0,0,0,0,0,0,72,80,77,75,82,71,79,73,81,59,60,61,62,63,64,65,66,67,68,87,88,0,0,0,0,0,0,0,0,0,0,18,0,101,0,0,2,107,0,8,0,30,0,72,0,15,0,0,0,0,0,108,0,224,0,30,0,72,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,200,0,15,12,0,0,1,0,75,0,29,0,70,0,15,15,0,0,0,0,40,0,30,0,160,0,15,20,0,0,32,0,136,0,8,0,64,0,15,12,0,0,32,0,44,0,8,0,9,0,29,116,0,0,32,0,4,0,8,0,9,0,29,116,0,0,32,0,42,0,8,0,82,0,15,20,0,0,1,0,21,0,38,0,14,0,12,116,0,0,16,0,48,0,23,0,112,0,15,233,0,0,2,0,176,0,36,0,11,0,15,20,0,0,0,0,40,0,40,0,160,0,29,20,0,0,16,0,48,0,23,0,112,0,29,20,0,0,9,0,80,0,22,0,112,0,29,116,0,0,12,0,140,0,16,0,42,0,236,233,0,0,2,0,89,0,36,0,60,0,0,0,0,0,4,0,110,0,32,0,12,0,232,235,0,0,5,0,48,0,30,0,134,0,0,0,0,0,3,0,36,0,36,0,148,0,0,0,0,0,1,0,72,0,38,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,24,0,36,0,152,0,12,12,0,0,1,0,6,0,12,0,3,0,0,15,6,0,1,0,0,0,0,0,0,0,43,0,255,255,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,29,0,255,255,255,255,255,255,49,0,50,0,255,255,255,255,255,255,36,0,255,255,255,255,255,255,255,255,55,0,255,255,255,255,255,255,255,255,55,0,255,255,255,255,255,255,255,255,55,0,255,255,255,255,255,255,255,255,55,0,255,255,255,255,255,255,255,255,55,0,255,255,255,255,255,255,255,255,55,0,255,255,255,255,255,255,255,255,53,0,255,255,255,255,255,255,255,255,37,0,255,255,255,255,255,255,255,255,37,0,255,255,255,255,255,255,255,255,37,0,255,255,255,255,255,255,255,255,37,0,255,255,255,255,255,255,255,255,37,0,255,255,255,255,255,255,255,255,37,0,255,255,255,255,255,255,255,255,37,0,255,255,255,255,255,255,255,255,46,0,255,255,255,255,255,255,255,255,45,0,255,255,255,255,255,255,255,255,54,0,255,255,255,255,255,255,255,255,54,0,255,255,255,255,255,255,255,255,54,0,255,255,255,255,255,255,255,255,54,0,255,255,255,255,255,255,255,255,54,0,255,255,255,255,255,255,255,255,54,0,255,255,255,255,255,255,255,255,52,0,255,255,255,255,255,255,255,255,49,0,68,0,255,255,255,255,255,255,47,0,255,255,255,255,255,255,255,255,49,0,51,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,63,0,255,255,255,255,255,255,255,255,38,0,255,255,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,40,0,255,255,255,255,255,255,255,255,41,0,255,255,255,255,255,255,255,255,42,0,255,255,255,255,255,255,255,255,64,0,255,255,255,255,255,255,255,255,65,0,255,255,255,255,255,255,255,255,65,0,255,255,255,255,255,255,255,255,65,0,255,255,255,255,255,255,255,255,65,0,255,255,255,255,255,255,255,255,65,0,255,255,255,255,255,255,255,255,65,0,255,255,255,255,255,255,255,255,66,0,255,255,255,255,255,255,255,255,66,0,255,255,255,255,255,255,255,255,66,0,255,255,255,255,255,255,255,255,66,0,255,255,255,255,255,255,255,255,66,0,255,255,255,255,255,255,255,255,66,0,255,255,255,255,255,255,255,255,70,0,255,255,255,255,255,255,255,255,30,0,255,255,255,255,255,255,255,255,31,0,255,255,255,255,255,255,255,255,32,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,67,0,255,255,255,255,255,255,255,255,67,0,255,255,255,255,255,255,255,255,67,0,255,255,255,255,255,255,255,255,67,0,255,255,255,255,255,255,255,255,67,0,255,255,255,255,255,255,255,255,67,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,87,0,255,255,255,255,255,255,255,255,82,0,88,0,255,255,255,255,255,255,111,0,105,0,255,255,255,255,255,255,114,0,255,255,255,255,255,255,255,255,101,0,115,0,106,0,255,255,255,255,116,0,86,0,93,0,255,255,255,255,118,0,83,0,84,0,255,255,255,255,104,0,113,0,89,0,255,255,255,255,92,0,94,0,97,0,91,0,255,255,98,0,96,0,90,0,95,0,255,255,90,0,95,0,255,255,255,255,255,255,117,0,79,0,255,255,255,255,255,255,78,0,77,0,85,0,109,0,255,255,107,0,255,255,255,255,255,255,255,255,103,0,110,0,255,255,255,255,255,255,99,0,100,0,255,255,255,255,255,255,102,0,112,0,255,255,255,255,255,255,119,0,80,0,81,0,255,255,255,255,108,0,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,30,0,0,0,0,0,1,1,1,0,0,0,67,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,1,1,1,0,0,0,67,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,1,1,1,0,0,0,67,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,0,0,0,0,0,1,1,1,0,0,0,67,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,0,1,1,1,0,0,0,67,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,0,0,1,1,1,0,0,0,67,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,1,1,1,0,0,0,67,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,0,96,0,0,0,1,1,1,0,0,0,135,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,128,0,20,0,25,0,16,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,0,98,0,0,0,1,1,1,0,0,0,135,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,128,0,126,0,25,0,16,0,15,12,15,12,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,232,5,1,0,11,0,0,0,96,6,1,0,10,0,0,0,136,244,0,0,11,0,0,0,8,231,0,0,10,0,0,0,112,219,0,0,11,0,0,0,24,210,0,0,15,0,0,0,0,201,0,0,9,0,0,0,240,193,0,0,10,0,0,0,128,191,0,0,14,0,0,0,120,189,0,0,11,0,0,0,224,8,1,0,9,0,0,0,136,6,1,0,10,0,0,0,248,3,1,0,10,0,0,0,152,1,1,0,10,0,0,0,16,0,1,0,11,0,0,0,8,254,0,0,11,0,0,0,136,251,0,0,11,0,0,0,72,250,0,0,15,0,0,0,192,248,0,0,15,0,0,0,96,247,0,0,15,0,0,0,248,245,0,0,15,0,0,0,184,244,0,0,15,0,0,0,232,242,0,0,15,0,0,0,128,241,0,0,15,0,0,0,72,240,0,0,15,0,0,0,0,239,0,0,10,0,0,0,160,237,0,0,16,0,0,0,72,236,0,0,10,0,0,0,32,235,0,0,12,0,0,0,200,233,0,0,20,0,0,0,88,232,0,0,20,0,0,0,48,231,0,0,20,0,0,0,176,229,0,0,20,0,0,0,144,228,0,0,20,0,0,0,112,227,0,0,20,0,0,0,192,225,0,0,20,0,0,0,112,224,0,0,20,0,0,0,104,223,0,0,20,0,0,0,112,222,0,0,19,0,0,0,128,221,0,0,19,0,0,0,128,220,0,0,19,0,0,0,136,219,0,0,19,0,0,0,120,218,0,0,19,0,0,0,152,217,0,0,20,0,0,0,200,216,0,0,20,0,0,0,232,215,0,0,20,0,0,0,0,215,0,0,20,0,0,0,24,214,0,0,20,0,0,0,56,213,0,0,20,0,0,0,56,212,0,0,20,0,0,0,56,211,0,0,20,0,0,0,48,210,0,0,20,0,0,0,40,209,0,0,20,0,0,0,104,208,0,0,20,0,0,0,96,207,0,0,20,0,0,0,128,206,0,0,20,0,0,0,192,205,0,0,20,0,0,0,200,204,0,0,20,0,0,0,0,204,0,0,20,0,0,0,248,202,0,0,20,0,0,0,40,202,0,0,20,0,0,0,16,201,0,0,20,0,0,0,16,200,0,0,20,0,0,0,80,199,0,0,20,0,0,0,80,198,0,0,20,0,0,0,80,197,0,0,20,0,0,0,128,196,0,0,20,0,0,0,152,195,0,0,20,0,0,0,16,195,0,0,20,0,0,0,184,194,0,0,20,0,0,0,56,194,0,0,20,0,0,0,0,194,0,0,20,0,0,0,152,193,0,0,10,0,0,0,120,193,0,0,10,0,0,0,48,193,0,0,10,0,0,0,0,193,0,0,10,0,0,0,208,192,0,0,10,0,0,0,136,192,0,0,12,0,0,0,104,192,0,0,12,0,0,0,48,192,0,0,12,0,0,0,208,191,0,0,12,0,0,0,144,191,0,0,12,0,0,0,72,191,0,0,12,0,0,0,40,191,0,0,12,0,0,0,8,191,0,0,12,0,0,0,208,190,0,0,12,0,0,0,160,190,0,0,12,0,0,0,96,190,0,0,12,0,0,0,64,190,0,0,12,0,0,0,8,190,0,0,12,0,0,0,200,189,0,0,12,0,0,0,136,189,0,0,12,0,0,0,64,189,0,0,12,0,0,0,32,189,0,0,12,0,0,0,8,189,0,0,12,0,0,0,184,188,0,0,12,0,0,0,128,188,0,0,12,0,0,0,80,188,0,0,12,0,0,0,48,188,0,0,12,0,0,0,232,187,0,0,12,0,0,0,40,9,1,0,12,0,0,0,240,8,1,0,12,0,0,0,168,8,1,0,12,0,0,0,112,8,1,0,12,0,0,0,80,8,1,0,12,0,0,0,40,8,1,0,12,0,0,0,248,7,1,0,12,0,0,0,200,7,1,0,12,0,0,0,168,7,1,0,12,0,0,0,112,7,1,0,12,0,0,0,40,7,1,0,12,0,0,0,152,6,1,0,12,0,0,0,40,6,1,0,12,0,0,0,216,5,1,0,12,0,0,0,160,5,1,0,12,0,0,0,64,5,1,0,12,0,0,0,224,4,1,0,12,0,0,0,184,4,1,0,12,0,0,0,152,4,1,0,12,0,0,0,104,4,1,0,12,0,0,0,48,4,1,0,12,0,0,0,8,4,1,0,10,0,0,0,136,3,1,0,10,0,0,0,48,3,1,0,10,0,0,0,16,3,1,0,11,0,0,0,232,2,1,0,10,0,0,0,184,2,1,0,11,0,0,0,112,2,1,0,10,0,0,0,56,2,1,0,10,0,0,0,8,2,1,0,10,0,0,0,192,1,1,0,11,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,13,0,255,255,255,255,255,255,121,0,255,255,255,255,255,255,255,255,255,255,0,0,4,0,14,0,15,0,16,0,28,0,255,255,255,255,3,0,12,0,1,0,7,0,2,0,255,255,5,0,255,255,255,255,255,255,255,255,7,0,6,0,8,0,255,255,255,255,122,0,255,255,9,0,9,0,11,0,10,0,43,0,255,255,25,0,26,0,27,0,72,0,73,0,74,0,75,0,76,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,123,0,255,255,124,0,255,255,125,0,126,0,127,0,255,255,255,255,128,0,129,0,130,0,194,0,0,0,72,1,1,0,195,0,0,0,192,5,1,0,1,20,0,0,0,0,100,0,0,0,89,0,32,3,64,0,0,0,0,0,0,0,0,0,16,0,7,0,7,0,7,0,7,0,0,0,0,0,20,0,16,0,63,0,0,0,10,0,64,18,0,0,32,0,4,0,0,0,200,0,3,0,27,1,255,255,7,0,1,0,0,0,0,0,0,0,0,0,255,255,255,255,42,0,196,0,0,0,32,244,0,0,197,0,0,0,168,230,0,0,1,20,0,0,0,0,25,0,5,0,97,0,88,2,96,0,0,0,0,0,64,0,0,0,28,1,7,0,7,0,7,0,7,0,0,0,0,0,75,0,30,0,62,0,0,0,10,0,194,16,0,0,24,0,4,0,7,0,150,0,2,0,33,1,255,255,7,0,5,0,0,0,50,0,50,0,50,0,0,0,22,0,42,0,198,0,0,0,32,219,0,0,199,0,0,0,216,209,0,0,0,18,0,0,0,0,50,0,1,0,93,0,100,0,32,0,0,0,0,0,0,0,0,0,4,1,0,0,1,0,2,0,3,0,0,0,0,0,20,0,20,0,62,0,22,0,101,0,160,16,0,0,16,0,0,0,15,0,5,0,3,0,73,1,255,255,11,0,4,0,0,0,45,0,2,0,3,0,0,0,23,0,58,0,200,0,0,0,192,200,0,0,201,0,0,0,208,193,0,0,0,26,0,0,0,0,110,0,1,0,103,0,200,0,56,0,0,0,0,0,0,0,0,0,8,1,0,0,1,0,2,0,3,0,0,0,0,0,50,0,50,0,61,0,22,0,101,0,160,16,0,0,16,0,0,0,15,0,10,0,3,0,85,1,255,255,11,0,4,0,0,0,50,0,5,0,5,0,0,0,23,0,59,0,202,0,0,0,104,191,0,0,203,0,0,0,216,209,0,0,0,18,0,0,0,0,20,0,1,0,102,0,60,0,32,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,2,0,3,0,0,0,0,0,10,0,10,0,62,0,22,0,101,0,40,16,0,0,16,0,0,0,12,0,8,0,3,0,55,1,255,255,11,0,3,0,0,0,45,0,2,0,3,0,0,0,23,0,58,0,204,0,0,0,96,189,0,0,205,0,0,0,208,193,0,0,0,26,0,0,0,0,45,0,1,0,88,0,100,0,56,0,0,0,0,0,0,0,0,0,6,0,0,0,1,0,2,0,3,0,0,0,0,0,20,0,30,0,61,0,22,0,101,0,40,16,0,0,16,0,0,0,12,0,15,0,3,0,64,1,255,255,11,0,3,0,0,0,50,0,5,0,5,0,0,0,23,0,59,0,44,0,0,0,200,8,1,0,44,0,0,0,80,6,1,0,0,22,0,0,0,0,10,0,1,0,96,0,120,0,48,0,0,0,0,0,0,0,0,0,0,0,9,0,1,0,2,0,3,0,0,0,0,0,0,0,188,2,4,0,20,0,21,0,32,16,0,0,8,0,0,0,7,0,40,0,3,0,45,1,255,255,9,0,3,0,0,0,45,0,2,0,2,0,0,0,23,0,58,0,208,0,0,0,224,3,1,0,209,0,0,0,128,1,1,0,128,26,0,0,64,0,100,0,5,0,85,0,194,1,72,0,0,0,0,0,0,0,0,0,26,2,0,0,1,0,2,0,3,0,0,0,0,0,100,0,150,0,59,0,22,0,101,0,178,16,0,0,16,0,1,0,0,0,30,0,1,0,111,0,146,0,11,0,1,0,162,0,120,0,9,0,75,0,3,0,19,0,255,255,210,0,0,0,248,255,0,0,211,0,0,0,240,253,0,0,128,18,0,0,64,0,120,0,5,0,98,0,238,2,80,0,0,0,0,0,64,0,0,0,30,0,0,0,1,0,2,0,3,0,0,0,0,0,50,0,175,0,4,0,22,0,101,0,50,16,0,0,16,0,1,0,0,0,30,0,1,0,111,0,146,0,11,0,1,0,162,0,180,0,7,0,0,0,3,0,21,0,255,255,212,0,0,0,112,251,0,0,213,0,0,0,40,250,0,0,160,18,0,0,64,0,200,0,3,0,90,0,44,1,64,0,0,0,0,0,0,0,0,0,22,0,0,0,1,0,2,0,3,0,0,0,0,0,80,0,100,0,63,0,22,0,101,0,50,16,0,0,16,0,1,0,0,0,25,0,1,0,111,0,116,0,11,0,1,0,162,0,80,0,4,0,25,0,1,0,23,0,57,0,214,0,0,0,160,248,0,0,215,0,0,0,64,247,0,0,160,18,0,0,64,0,44,1,4,0,84,0,88,2,96,0,0,0,0,0,0,0,0,0,24,3,0,0,1,0,2,0,3,0,0,0,0,0,130,0,150,0,63,0,22,0,101,0,178,16,0,0,24,0,1,0,0,0,20,0,1,0,121,0,126,0,11,0,1,0,162,0,90,0,5,0,30,0,1,0,23,0,57,0,216,0,0,0,216,245,0,0,217,0,0,0,120,244,0,0,128,18,0,0,64,0,144,1,4,0,87,0,32,3,104,0,0,0,0,0,64,0,0,0,32,0,0,0,1,0,13,0,3,0,0,0,0,0,175,0,180,0,57,0,22,0,101,0,178,16,0,0,24,0,1,0,0,0,10,0,1,0,131,0,136,0,11,0,1,0,165,0,100,0,5,0,40,0,1,0,23,0,57,0,218,0,0,0,192,242,0,0,219,0,0,0,96,241,0,0,128,18,0,0,64,0,110,0,4,0,91,0,88,2,104,0,0,0,0,0,64,0,0,0,34,0,0,0,1,0,2,0,3,0,0,0,0,0,80,0,110,0,58,0,22,0,101,0,54,16,0,0,16,0,1,0,0,0,30,0,1,0,111,0,141,0,11,0,1,0,162,0,80,0,8,0,60,0,255,255,24,0,43,0,220,0,0,0,48,240,0,0,221,0,0,0,224,238,0,0,128,18,0,0,64,0,100,0,2,0,92,0,150,0,40,0,0,0,0,0,0,0,0,0,10,0,0,0,1,0,2,0,3,0,0,0,0,0,50,0,50,0,58,0,22,0,101,0,186,16,0,0,16,0,3,0,0,0,45,0,2,0,243,0,255,255,11,0,1,0,0,0,50,0,3,0,5,0,0,0,23,0,59,0,222,0,0,0,136,237,0,0,223,0,0,0,40,236,0,0,128,18,0,0,64,0,80,0,2,0,99,0,150,0,40,0,0,0,0,0,0,0,0,0,12,0,0,0,1,0,2,0,3,0,0,0,0,0,55], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);
/* memory initializer */ allocate([60,0,60,0,22,0,101,0,186,16,0,0,16,0,3,0,0,0,60,0,2,0,243,0,255,255,11,0,1,0,0,0,50,0,3,0,5,0,0,0,23,0,59,0,224,0,0,0,0,235,0,0,225,0,0,0,168,233,0,0,128,18,0,0,64,0,130,0,2,0,86,0,200,0,48,0,0,0,0,0,0,0,0,0,14,1,0,0,1,0,2,0,3,0,0,0,0,0,60,0,60,0,63,0,22,0,101,0,186,16,0,0,16,0,3,0,0,0,40,0,2,0,238,0,255,255,11,0,1,0,0,0,50,0,3,0,7,0,0,0,23,0,59,0,226,0,0,0,64,232,0,0,227,0,0,0,248,230,0,0,128,22,0,0,128,0,150,0,2,0,100,0,44,1,64,0,0,0,0,0,0,0,0,0,18,0,5,0,1,0,6,0,7,0,0,0,0,0,10,0,150,0,63,0,22,0,101,0,50,16,0,0,24,0,2,0,0,0,20,0,1,0,248,0,255,255,5,0,1,0,165,0,0,0,0,0,0,0,255,255,255,255,0,0,228,0,0,0,152,229,0,0,229,0,0,0,120,228,0,0,128,18,0,0,64,0,150,0,2,0,101,0,132,3,80,0,0,0,0,0,0,0,0,0,20,1,12,0,1,0,2,0,7,0,0,0,0,0,10,0,150,0,63,0,22,0,101,0,50,16,0,0,24,0,1,0,0,0,20,0,1,0,253,0,255,255,11,0,1,0,0,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,0,0,80,227,0,0,0,0,0,0,160,225,0,0,0,5,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,7,0,7,0,0,0,0,0,0,0,0,0,1,0,12,0,15,0,1,2,0,0,32,0,4,0,0,0,250,0,2,0,22,1,255,255,255,0,2,0,0,0,0,0,15,0,100,0,11,0,255,255,42,0,0,0,0,0,96,224,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,7,0,7,0,0,0,0,0,0,0,0,0,63,0,12,0,15,0,1,15,0,0,16,0,4,0,7,0,200,0,2,0,2,1,255,255,255,0,2,0,0,0,0,0,8,0,75,0,3,0,255,255,42,0,0,0,0,0,80,223,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,7,0,7,0,0,0,0,0,0,0,0,0,63,0,12,0,15,0,1,7,0,0,16,0,4,0,7,0,160,0,8,0,2,1,255,255,255,0,2,0,0,0,0,0,60,0,75,0,3,0,255,255,42,0,0,0,0,0,104,222,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,7,0,7,0,0,0,0,0,0,0,0,0,63,0,12,0,15,0,1,14,0,0,16,0,4,0,7,0,200,0,2,0,2,1,255,255,255,0,2,0,0,0,0,0,7,0,75,0,7,0,255,255,42,0,0,0,0,0,112,221,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,7,0,7,0,0,0,0,0,0,0,0,0,63,0,12,0,15,0,1,6,0,0,8,0,4,0,7,0,180,0,5,0,12,1,255,255,255,0,2,0,0,0,0,0,3,0,0,0,18,0,255,255,64,0,0,0,0,0,120,220,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,7,0,7,0,0,0,0,0,0,0,0,0,63,0,12,0,15,0,3,2,0,0,8,0,4,0,0,0,250,0,0,0,174,0,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,96,219,0,0,0,0,0,0,0,0,0,0,16,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,7,0,7,0,0,0,0,0,0,0,0,0,63,0,12,0,15,0,0,2,0,0,32,0,4,0,7,0,200,0,0,0,160,0,255,255,255,0,0,0,0,0,0,0,10,0,25,0,255,255,255,255,255,255,230,0,0,0,104,218,0,0,231,0,0,0,0,0,0,0,16,23,0,0,0,0,232,3,0,0,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,16,0,17,0,32,2,0,0,24,0,5,0,0,0,35,0,3,0,161,0,255,255,255,0,1,0,0,0,20,0,0,0,44,1,13,0,25,0,63,0,0,0,0,0,144,217,0,0,0,0,0,0,0,0,0,0,1,21,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,7,0,7,0,0,0,0,0,0,0,0,0,63,0,11,0,11,0,0,2,0,0,32,0,4,0,0,0,130,0,2,0,42,1,255,255,255,0,1,0,0,0,0,0,0,0,0,0,255,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,255,255,1,0,0,0,0,0,255,255,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,16,0,0,0,16,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,32,0,0,0,32,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,48,0,0,0,48,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,64,0,0,0,64,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,0,80,0,0,0,80,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,0,96,0,0,0,96,0,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,0,112,0,0,0,112,0,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,0,128,0,0,0,128,0,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,144,0,144,0,0,0,144,0,144,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,0,160,0,0,0,160,0,160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,176,0,176,0,0,0,176,0,176,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,192,0,0,0,192,0,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,208,0,0,0,208,0,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,0,224,0,0,0,224,0,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,240,0,0,0,240,0,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,128,0,0,0,128,0,0,1,0,0,128,0,0,1,128,0,128,0,128,0,0,0,16,1,16,1,0,0,16,1,16,1,128,0,0,0,128,0,16,1,0,0,128,0,16,1,128,0,128,0,128,0,0,0,32,1,32,1,0,0,32,1,32,1,144,0,0,0,144,0,32,1,0,0,144,0,32,1,144,0,144,0,144,0,0,0,48,1,48,1,0,0,48,1,48,1,144,0,0,0,144,0,48,1,0,0,144,0,48,1,144,0,144,0,144,0,0,0,64,1,64,1,0,0,64,1,64,1,160,0,0,0,160,0,64,1,0,0,160,0,64,1,160,0,160,0,160,0,0,0,80,1,80,1,0,0,80,1,80,1,160,0,0,0,160,0,80,1,0,0,160,0,80,1,160,0,160,0,160,0,0,0,96,1,96,1,0,0,96,1,96,1,176,0,0,0,176,0,96,1,0,0,176,0,96,1,176,0,176,0,176,0,0,0,112,1,112,1,0,0,112,1,112,1,176,0,0,0,176,0,112,1,0,0,176,0,112,1,176,0,176,0,176,0,0,0,128,1,128,1,0,0,128,1,128,1,192,0,0,0,192,0,128,1,0,0,192,0,128,1,192,0,192,0,192,0,0,0,144,1,144,1,0,0,144,1,144,1,192,0,0,0,192,0,144,1,0,0,192,0,144,1,192,0,192,0,192,0,0,0,160,1,160,1,0,0,160,1,160,1,208,0,0,0,208,0,160,1,0,0,208,0,160,1,208,0,208,0,208,0,0,0,176,1,176,1,0,0,176,1,176,1,208,0,0,0,208,0,176,1,0,0,208,0,176,1,208,0,208,0,208,0,0,0,192,1,192,1,0,0,192,1,192,1,224,0,0,0,224,0,192,1,0,0,224,0,192,1,224,0,224,0,224,0,0,0,208,1,208,1,0,0,208,1,208,1,224,0,0,0,224,0,208,1,0,0,224,0,208,1,224,0,224,0,224,0,0,0,224,1,224,1,0,0,224,1,224,1,240,0,0,0,240,0,224,1,0,0,240,0,224,1,240,0,240,0,240,0,0,0,240,1,240,1,0,0,240,1,240,1,240,0,0,0,240,0,240,1,0,0,240,0,240,1,240,0,240,0,240,0,0,0,0,3,0,3,0,0,0,3,0,3,0,2,0,0,0,2,0,2,0,0,0,2,0,2,0,1,0,1,0,1,104,1,1,0,208,5,1,0,48,244,0,0,184,230,0,0,48,219,0,0,0,0,0,0,192,255,193,255,1,0,65,0,64,0,63,0,255,255,191,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,255,193,255,194,255,2,0,66,0,65,0,64,0,63,0,255,255,191,255,0,0,0,0,0,0,0,0,0,0,0,0,192,255,193,255,1,0,65,0,129,0,128,0,127,0,63,0,255,255,191,255,0,0,0,0,0,0,0,0,0,0,0,0,192,255,193,255,194,255,2,0,66,0,130,0,129,0,128,0,127,0,63,0,255,255,191,255,0,0,0,0,0,0,0,0,192,255,193,255,194,255,2,0,66,0,130,0,194,0,193,0,192,0,191,0,127,0,63,0,255,255,191,255,0,0,0,0,192,255,193,255,194,255,195,255,3,0,67,0,131,0,130,0,129,0,128,0,127,0,63,0,255,255,191,255,0,0,0,0,192,255,193,255,194,255,195,255,3,0,67,0,131,0,195,0,194,0,193,0,192,0,191,0,127,0,63,0,255,255,191,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,64,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,64,0,65,0,128,0,129,0,0,0,0,0,0,0,0,0,1,0,2,0,64,0,65,0,66,0,0,0,0,0,0,0,0,0,1,0,2,0,64,0,65,0,66,0,128,0,129,0,130,0,0,0,128,0,128,0,0,1,128,0,128,0,0,1,0,1,0,1,0,1,128,1,128,2,0,1,128,1,128,1,0,0,0,0,1,0,2,0,2,0,4,0,6,0,6,0,9,0,0,0,1,0,1,0,2,0,1,0,1,0,2,0,2,0,2,0,2,0,3,0,3,0,2,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,64,0,64,0,0,0,0,0,0,0,1,0,1,0,65,0,65,0,64,0,64,0,0,0,0,0,1,0,65,0,129,0,129,0,128,0,64,0,0,0,1,0,2,0,2,0,66,0,65,0,64,0,0,0,0,0,1,0,2,0,66,0,130,0,129,0,128,0,64,0,0,0,232,0,0,0,144,2,1,0,233,0,0,0,24,6,1,0,4,0,0,0,0,0,20,0,1,0,65,0,5,0,16,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,85,1,0,0,5,0,63,0,0,0,0,0,0,0,0,0,0,0,8,0,2,2,2,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,234,0,0,0,88,244,0,0,235,0,0,0,216,230,0,0,4,0,0,0,0,0,20,0,1,0,83,0,20,0,16,0,4,0,0,0,0,0,0,0,4,1,0,0,0,0,0,0,0,0,0,0,85,1,0,0,10,0,63,0,0,0,0,0,0,0,0,0,3,0,8,0,2,2,2,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,236,0,0,0,72,219,0,0,237,0,0,0,248,209,0,0,0,0,0,0,128,0,232,3,5,0,66,0,231,3,130,0,8,0,0,0,0,8,0,0,5,0,0,0,0,0,0,0,0,0,0,0,86,1,0,0,144,1,63,0,0,0,0,0,0,0,80,0,6,0,11,0,4,4,4,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,238,0,0,0,224,200,0,0,239,0,0,0,224,193,0,0,66,0,0,0,64,0,94,1,3,0,67,0,144,1,96,0,3,0,0,0,0,18,0,0,14,0,0,0,0,0,0,0,0,0,0,0,87,1,0,0,200,0,63,0,0,0,0,0,0,0,20,0,3,0,12,0,14,15,16,0,13,0,15,0,255,255,255,255,255,255,255,255,255,255,255,255,3,0,0,0,0,0,0,0,240,0,0,0,112,191,0,0,241,0,0,0,104,189,0,0,66,0,0,0,64,0,200,0,3,0,68,0,88,2,144,0,4,0,0,0,8,2,4,0,28,0,0,0,0,0,0,0,0,0,0,0,88,1,0,0,88,2,63,0,0,0,0,0,0,0,35,0,5,0,13,0,11,12,13,0,10,0,7,0,16,0,9,0,11,0,8,0,17,0,12,0,4,0,5,0,6,0,0,0,242,0,0,0,216,8,1,0,243,0,0,0,112,6,1,0,66,0,0,0,64,0,144,1,3,0,69,0,244,1,120,0,5,0,0,0,8,2,4,0,30,0,0,0,0,0,0,0,0,0,0,0,89,1,0,0,200,0,63,0,0,0,0,0,0,0,35,0,5,0,14,0,8,9,10,0,0,0,1,0,255,255,255,255,255,255,255,255,255,255,255,255,7,0,0,0,0,0,0,0,244,0,0,0,240,3,1,0,245,0,0,0,144,1,1,0,0,0,0,0,192,0,144,1,3,0,70,0,244,1,120,0,7,0,0,0,0,26,0,0,34,0,0,0,0,0,0,0,0,0,0,0,90,1,0,0,100,0,63,0,0,0,0,0,0,0,40,0,3,0,15,0,20,20,20,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,246,0,0,0,8,0,1,0,247,0,0,0,0,254,0,0,2,0,0,0,128,0,144,1,3,0,71,0,144,1,104,0,5,0,0,0,0,6,4,0,20,0,0,0,0,0,0,0,0,0,0,0,91,1,0,0,175,0,61,0,0,0,0,0,0,0,20,0,3,0,16,0,21,21,21,0,5,0,3,0,255,255,255,255,255,255,255,255,255,255,255,255,6,0,0,0,0,0,0,0,248,0,0,0,120,251,0,0,249,0,0,0,56,250,0,0,70,0,0,0,64,0,144,1,3,0,72,0,144,1,80,0,99,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,92,1,0,0,44,1,63,0,0,0,0,0,0,0,0,0,3,0,17,0,22,22,22,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,4,0,6,0,0,0,0,0,250,0,0,0,176,248,0,0,251,0,0,0,80,247,0,0,64,0,0,0,64,0,200,0,2,0,73,0,44,1,48,0,1,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,93,1,0,0,44,1,63,0,0,0,0,0,0,0,156,255,3,0,19,0,26,26,26,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,252,0,0,0,232,245,0,0,253,0,0,0,152,244,0,0,2,0,0,0,128,0,44,1,2,0,74,0,44,1,72,0,2,0,0,0,0,2,4,0,18,0,0,0,0,0,0,0,0,0,0,0,94,1,0,0,100,0,62,0,0,0,0,0,0,0,10,0,3,0,18,0,28,28,28,0,4,0,2,0,255,255,255,255,255,255,255,255,255,255,255,255,2,0,0,0,0,0,0,0,254,0,0,0,208,242,0,0,255,0,0,0,112,241,0,0,74,0,0,0,128,0,244,1,6,0,75,0,244,1,120,0,6,0,0,0,0,18,0,0,32,0,0,0,0,0,0,0,0,0,0,0,95,1,0,0,250,0,63,0,0,0,0,0,0,0,50,0,6,0,20,0,5,6,7,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,0,1,0,0,56,240,0,0,1,1,0,0,240,238,0,0,72,0,0,0,128,0,194,1,4,0,76,0,144,1,80,0,1,0,0,0,0,2,0,0,8,0,0,0,0,0,0,0,0,0,0,0,96,1,0,0,44,1,63,0,0,0,1,0,237,3,30,0,5,0,21,0,17,18,19,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,2,1,0,0,152,237,0,0,3,1,0,0,56,236,0,0,64,0,0,0,128,0,200,0,3,0,77,0,188,2,80,0,5,0,0,0,8,2,4,0,24,0,0,0,0,0,0,0,0,0,0,0,97,1,0,0,88,2,63,0,128,255,1,0,0,0,20,0,5,0,22,0,23,24,25,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,4,1,0,0,8,235,0,0,5,1,0,0,184,233,0,0,0,0,0,0,0,0,50,0,1,0,78,0,50,0,40,0,4,0,0,0,0,2,4,0,16,0,0,0,0,0,0,0,0,0,0,0,98,1,0,0,30,0,63,0,0,0,0,0,0,0,0,0,0,0,6,0,255,255,255,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,6,1,0,0,80,232,0,0,7,1,0,0,24,231,0,0,64,0,0,0,64,0,200,0,2,0,79,0,125,0,64,0,5,0,0,0,0,2,4,0,22,0,0,0,0,0,0,0,0,0,0,0,99,1,75,0,150,0,63,0,0,0,0,0,0,0,10,0,0,0,23,0,255,255,255,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,8,1,0,0,160,229,0,0,9,1,0,0,128,228,0,0,64,0,0,0,64,0,200,0,5,0,80,0,250,0,96,0,0,0,0,0,0,2,4,0,26,2,0,0,0,0,0,0,0,0,0,0,100,1,100,0,75,0,63,0,0,0,0,0,0,0,25,0,0,0,24,0,255,255,255,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,10,1,0,0,96,227,0,0,11,1,0,0,176,225,0,0,64,0,0,0,0,0,150,0,2,0,81,0,150,0,48,0,2,0,0,0,0,18,0,0,12,0,0,0,0,0,0,0,0,0,0,0,101,1,0,0,150,0,63,0,0,0,0,0,232,3,5,0,3,0,25,0,27,27,27,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,12,1,0,0,104,224,0,0,13,1,0,0,88,223,0,0,0,0,0,0,128,0,244,1,10,0,82,0,144,1,80,0,2,0,0,0,0,2,0,0,10,0,0,0,0,0,0,0,0,0,0,0,102,1,0,0,19,1,63,0,0,0,0,0,0,0,30,0,3,0,26,0,3,3,3,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,45,2,1,44,43,42,41,40,39,255,0,0,0,0,0,0,0,0,0,0,1,0,0,0,45,2,1,44,43,42,41,40,39,255,0,0,0,0,0,0,0,0,0,0,0,1,0,0,45,2,1,44,43,42,41,40,39,255,0,0,0,0,0,0,0,0,0,0,0,1,0,0,45,2,1,44,43,42,41,40,39,255,0,0,0,0,0,0,0,0,0,0,0,1,0,0,45,2,1,44,43,42,41,40,39,255,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,2,12,13,14,15,16,17,26,27,28,29,255,0,0,0,0,0,0,0,1,1,2,0,1,2,18,20,19,21,22,23,24,25,26,27,28,255,0,0,0,0,0,0,1,1,2,0,45,2,1,44,43,42,41,40,39,255,0,0,0,0,0,0,0,0,0,0,1,0,0,0,56,6,1,0,128,6,1,0,168,244,0,0,40,231,0,0,128,219,0,0,40,210,0,0,112,112,112,160,255,192,0,0,1,0,1,1,88,0,37,0,160,112,112,64,255,0,1,0,0,0,0,1,28,0,39,0,112,160,160,160,255,192,0,0,1,0,1,1,92,0,41,0,112,160,160,160,255,192,0,0,1,0,1,1,89,0,43,0,112,160,160,112,255,0,1,1,0,1,0,2,30,0,45,0,160,160,160,160,255,0,1,1,0,1,0,2,29,0,47,0,64,0,0,0,255,0,1,0,0,0,0,0,12,0,49,0,64,0,0,0,255,0,1,0,0,0,0,0,133,0,51,0,112,160,160,160,255,192,0,0,1,0,1,1,88,0,37,0,112,160,160,160,255,192,1,0,1,0,1,1,88,0,37,0,255,255,255,255,255,0,0,1,0,0,0,2,133,0,51,0,0,0,0,0,255,0,0,0,0,0,0,0,255,255,31,0,0,0,0,0,255,0,0,0,0,0,0,0,255,255,31,0,160,160,160,160,255,0,1,1,0,1,0,2,29,0,47,0,112,112,112,160,255,192,0,0,1,0,1,1,50,0,57,0,232,6,1,0,200,0,85,0,3,0,144,0,88,2,10,0,72,0,1,0,6,0,3,0,24,0,0,0,192,6,1,0,208,244,0,0,77,0,0,0,1,0,160,0,44,1,10,0,65,0,2,0,7,0,4,0,25,0,0,0,80,231,0,0,152,219,0,0,128,0,10,0,2,0,176,0,44,1,10,0,79,0,3,0,5,0,2,0,26,0,0,0,64,210,0,0,32,201,0,0,10,0,0,0,1,0,192,0,44,1,0,0,79,0,2,0,5,0,2,0,255,255,0,0,16,194,0,0,160,191,0,0,10,0,0,0,1,0,208,0,88,2,0,0,72,0,1,0,6,0,3,0,255,255,0,0,152,189,0,0,0,9,1,0,0,0,0,0,1,0,224,0,44,1,0,0,77,0,3,0,7,0,4,0,255,255,0,0,168,6,1,0,112,1,0,0,0,94,1,2,7,2,0,0,0,0,1,154,45,1,1,1,113,1,0,0,2,104,1,5,7,64,114,1,0,0,3,154,3,5,35,5,115,1,0,0,5,154,1,4,16,4,116,1,0,0,5,154,3,4,16,4,117,1,0,0,7,154,1,5,25,5,118,1,0,0,7,154,2,5,27,9,119,1,0,0,8,154,1,5,10,5,120,1,4,0,9,154,1,4,24,4,121,1,4,0,11,154,1,4,20,3,122,1,4,0,11,154,1,3,20,4,123,1,0,0,12,154,10,3,30,4,124,1,0,0,13,85,0,2,10,1,125,1,0,0,14,154,32,2,35,7,126,1,0,0,15,154,5,2,26,7,127,1,0,0,17,154,1,2,34,7,128,1,0,0,20,154,1,4,29,5,129,1,0,0,21,85,0,3,20,0,130,1,0,0,21,85,0,0,3,15,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,1,0,0,0,85,1,3,6,3,54,1,4,0,1,154,1,3,11,2,55,1,2,0,1,154,1,3,7,0,56,1,4,0,2,154,0,0,22,3,57,1,2,0,3,154,1,3,4,0,58,1,4,0,3,154,0,0,99,99,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,1,1,0,0,85,1,3,6,3,32,1,4,0,1,154,1,3,11,2,33,1,0,0,1,154,1,3,7,0,34,1,4,0,2,154,0,0,22,3,35,1,0,0,3,154,1,3,4,0,36,1,4,0,3,154,0,0,99,99,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,42,1,2,0,0,85,1,3,6,3,43,1,4,0,1,154,1,3,11,2,44,1,1,0,1,154,1,3,7,0,45,1,4,0,2,154,0,0,22,3,46,1,1,0,3,154,1,1,3,0,47,1,4,0,3,154,0,0,99,99,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,59,1,0,0,0,85,1,3,6,3,60,1,4,0,1,154,1,2,12,1,61,1,2,0,1,154,0,1,6,0,62,1,4,0,1,154,0,0,4,0,63,1,4,0,2,154,0,0,22,0,64,1,4,0,2,154,0,0,99,99,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,1,1,0,0,85,1,3,6,3,38,1,4,0,1,154,1,2,7,1,39,1,4,0,1,154,0,1,8,1,40,1,0,0,1,154,0,3,4,0,41,1,4,0,2,154,0,0,99,99,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,1,2,0,0,85,1,3,6,3,49,1,4,0,1,154,1,3,11,3,50,1,1,0,1,154,1,2,8,0,51,1,4,0,2,154,0,0,23,0,52,1,4,0,2,154,0,0,99,99,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,136,1,0,0,0,154,1,3,9,3,137,1,0,0,1,154,1,3,14,3,138,1,4,0,3,154,2,3,22,3,139,1,0,0,4,154,1,3,17,3,140,1,0,0,5,154,1,3,17,1,141,1,0,0,5,154,1,1,26,3,142,1,4,0,8,154,2,2,10,3,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131,1,1,0,0,154,1,3,14,3,132,1,4,0,1,154,2,3,39,2,133,1,1,0,2,154,1,3,32,3,134,1,1,0,4,154,1,3,14,3,135,1,1,0,4,154,1,3,32,3,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,143,1,2,0,0,154,1,3,18,3,144,1,4,0,1,154,2,3,22,3,145,1,2,0,2,154,1,3,15,3,146,1,2,0,4,154,1,3,25,3,147,1,2,0,6,154,1,3,22,3,148,1,2,0,8,154,3,3,40,3,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,108,12,7,117,19,7,109,33,7,110,52,12,105,2,12,106,4,12,106,20,12,111,22,12,106,37,12,117,38,14,112,21,14,112,22,14,112,23,14,112,24,14,112,25,14,112,26,14,112,27,14,112,28,14,112,29,14,112,30,14,112,31,14,113,32,14,113,33,14,113,34,14,112,51,14,112,52,14,112,53,14,112,54,14,112,55,14,112,56,14,112,57,14,112,58,14,112,59,14,112,60,14,112,61,14,113,62,14,113,63,15,114,5,15,114,9,15,116,19,16,114,3,16,114,13,17,112,2,17,112,3,17,112,4,17,115,5,17,112,7,17,115,8,17,112,9,17,112,10,17,112,11,17,112,12,17,112,13,17,112,14,18,112,3,18,112,4,18,112,5,18,115,6,18,112,7,18,112,8,18,112,9,18,112,10,18,112,11,18,112,12,18,112,13,18,112,14,18,112,15,19,112,2,19,112,3,19,112,4,19,112,5,19,112,6,19,112,7,19,112,8,19,112,9,19,112,10,19,112,11,19,112,12,19,112,13,19,112,14,19,112,15,19,118,18,19,119,28,22,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,255], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+10240);
/* memory initializer */ allocate([4,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,69,2,8,65,10,8,68,12,8,69,36,9,65,0,9,68,2,9,66,25,11,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,67,2,6,67,1,13,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,19,4,0,20,10,64,0,224,6,1,0,45,0,98,0,240,19,4,0,50,10,72,0,248,244,0,0,80,0,70,0,240,19,4,0,20,10,8,0,128,231,0,0,100,0,70,0,240,19,4,0,30,10,0,0,176,219,0,0,200,0,138,0,120,210,0,0,75,15,69,0,72,201,0,0,57,0,66,0,240,19,4,0,1,2,0,0,32,194,0,0,63,0,74,0,184,191,0,0,130,0,78,0,240,19,4,0,40,10,0,0,168,189,0,0,90,0,70,0,16,9,1,0,55,0,2,4,184,6,1,0,45,0,2,0,24,4,1,0,30,0,2,4,168,1,1,0,30,0,2,0,32,0,1,0,50,0,18,0,24,254,0,0,90,40,77,0,240,19,4,0,100,50,0,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,19,4,0,50,10,0,0,168,251,0,0,70,1,71,0,72,201,0,0,60,0,66,0,168,251,0,0,70,1,75,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,19,4,0,50,10,0,0,168,251,0,0,75,2,71,0,72,201,0,0,60,0,66,0,168,251,0,0,70,2,75,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,19,4,0,50,10,0,0,168,251,0,0,70,0,71,0,72,201,0,0,60,0,66,0,168,251,0,0,70,0,75,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,19,4,0,50,10,0,0,168,251,0,0,70,3,71,0,72,201,0,0,85,0,66,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,19,4,0,50,10,0,0,168,251,0,0,90,5,71,0,72,201,0,0,60,0,66,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,19,4,0,50,10,0,0,168,251,0,0,70,4,71,0,72,201,0,0,75,0,66,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,250,0,0,40,0,70,0,88,250,0,0,40,0,66,0,240,19,4,0,20,10,0,0,72,201,0,0,60,0,66,0,208,248,0,0,45,0,3,0,112,247,0,0,40,0,3,0,112,247,0,0,10,1,67,0,208,248,0,0,20,0,3,0,208,248,0,0,45,0,66,0,8,246,0,0,45,0,2,0,240,19,4,0,10,10,8,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,244,0,0,35,0,7,0,72,201,0,0,60,0,66,0,200,244,0,0,40,0,66,0,240,19,4,0,16,10,0,0,112,247,0,0,55,0,3,0,112,247,0,0,20,1,67,0,248,242,0,0,20,0,66,0,240,19,4,0,35,10,8,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,144,241,0,0,65,0,7,0,72,201,0,0,60,0,66,0,144,241,0,0,20,0,66,0,240,19,4,0,19,10,0,0,88,240,0,0,20,0,2,0,240,19,4,0,15,10,0,0,16,239,0,0,20,0,2,0,240,19,4,0,22,10,0,0,112,247,0,0,25,0,3,0,112,247,0,0,15,1,67,0,192,237,0,0,10,0,3,0,192,237,0,0,16,0,66,0,240,19,4,0,20,10,8,0,240,19,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,204,0,0,0,112,0,213,4,7,0,16,0,1,0,78,0,16,0,0,0,2,0,0,0,176,0,0,0,113,0,213,4,9,0,104,0,1,0,78,0,16,0,0,0,3,0,0,0,48,0,0,0,0,0,197,68,255,255,0,1,42,0,64,0,6,0,0,0,6,0,0,0,170,0,0,0,114,0,197,68,252,255,2,1,51,0,32,0,24,0,0,0,4,0,0,0,8,0,0,0,0,0,197,68,254,255,2,1,76,0,60,0,10,0,0,0,5,0,0,0,114,0,0,0,0,0,197,68,253,255,2,1,87,0,60,0,35,0,0,0,7,0,0,0,148,0,0,0,110,0,197,68,254,255,2,1,110,0,58,0,11,0,30,0,8,0,0,0,142,0,0,0,0,0,197,68,254,255,2,1,77,0,60,0,10,0,0,0,9,0,0,0,142,0,0,0,0,0,197,68,254,255,2,1,88,0,60,0,10,0,0,0,10,0,0,0,142,0,0,0,0,0,197,68,254,255,2,1,99,0,60,0,10,0,0,0,11,0,0,0,142,0,0,0,0,0,197,68,254,255,2,1,110,0,60,0,10,0,0,0,39,0,0,0,136,0,0,0,0,0,0,79,255,255,0,0,24,0,240,0,16,0,0,0,40,0,0,0,136,0,0,0,0,0,0,79,255,255,240,0,40,0,10,0,160,0,0,0,41,0,0,0,136,0,0,0,0,0,0,79,255,255,0,0,40,0,2,0,160,0,0,0,42,0,0,0,136,0,0,0,0,0,0,79,255,255,0,0,198,0,240,0,2,0,0,0,43,0,0,0,136,0,0,0,0,0,0,79,255,255,0,0,40,0,240,0,160,0,0,0,44,0,0,0,136,0,0,0,0,0,64,79,255,255,0,1,136,0,64,0,64,0,0,0,45,0,0,0,136,0,0,0,0,0,0,79,255,255,0,0,0,0,64,1,200,0,0,0,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,188,0,0,25,182,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,246,0,0,98,193,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,232,0,0,26,156,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,232,220,0,0,97,86,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,152,211,0,0,50,135,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,202,0,0,237,117,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,194,0,0,34,88,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,192,0,0,154,152,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,189,0,0,12,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,187,0,0,145,57,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,7,1,0,102,250,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,4,1,0,47,201,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,1,1,0,160,134,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,0,1,0,80,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,254,0,0,80,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,252,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,184,251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,96,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,216,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,120,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,16,246,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,224,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,152,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,96,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,24,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,200,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,104,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,48,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,216,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,104,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,96,231,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,192,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,160,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,128,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,208,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,144,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,120,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,128,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,144,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,176,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,208,219,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,168,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,200,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,248,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,24,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,48,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,72,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,104,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,104,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,104,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,80,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,88,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,152,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,144,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,176,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,240,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,248,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,16,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,40,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,88,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,96,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,88,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,128,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,128,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,128,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,176,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,200,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,40,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,200,194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,128,194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,40,194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,168,193,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,136,193,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,64,193,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,16,193,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,224,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,152,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,120,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,64,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,240,191,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,192,191,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,88,191,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,56,191,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,24,191,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,224,190,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,176,190,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,112,190,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,80,190,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,24,190,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,216,189,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,176,189,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,80,189,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,48,189,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,24,189,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,200,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,144,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,96,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,64,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,248,187,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,56,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,24,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,184,8,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,128,8,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,96,8,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,56,8,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,8,8,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,216,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,184,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,128,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,56,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,208,6,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,64,6,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,248,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,176,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,80,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,40,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,200,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,168,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,120,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,64,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,32,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,152,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,64,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,32,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,248,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,200,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,128,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,72,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,24,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,208,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,176,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,112,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,88,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,48,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,16,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,248,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,176,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,160,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,120,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,56,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,40,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,232,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,216,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,200,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,160,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,136,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,120,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,48,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,192,254,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,96,254,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,32,254,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,168,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,152,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,136,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,104,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,80,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,64,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,40,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,80,252,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,216,251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,200,251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,96,251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,64,251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,48,251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,0,251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,232,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,216,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,200,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,168,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,128,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,112,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,24,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,216,249,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,200,249,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,144,249,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,112,249,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,96,249,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,80,249,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,48,249,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,8,249,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,232,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,144,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,128,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,112,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,96,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,64,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,40,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,24,248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,248,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,176,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,136,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,48,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,32,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,16,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,0,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,176,246,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,160,246,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,128,246,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,80,246,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,48,246,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,32,246,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,200,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,184,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,168,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,152,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,128,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,112,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,96,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,64,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,32,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,232,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,104,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,72,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,16,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,208,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,152,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,112,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,96,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,64,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,32,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,16,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,136,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,120,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,96,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,80,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,48,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,16,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,240,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,208,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,184,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,168,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,80,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,64,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,8,241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,248,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,216,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,200,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,184,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,152,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,128,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,112,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,32,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,16,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,208,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,184,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,168,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,160,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,112,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,88,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,40,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,208,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,144,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,128,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,112,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+20516);
/* memory initializer */ allocate([4,0,0,0,88,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,72,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,40,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,8,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,232,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,176,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,120,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,48,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,32,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,16,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,248,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,232,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,216,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,184,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,128,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,88,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,24,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,8,236,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,248,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,232,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,176,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,160,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,144,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,112,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,80,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,64,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,240,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,224,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,208,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,176,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,144,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,120,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,104,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,72,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,40,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,232,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,152,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,144,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,128,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,80,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,56,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,32,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,16,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,208,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,136,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,120,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,48,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,32,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,16,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4,0,0,0,0,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,0,232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,232,231,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,216,231,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,200,231,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,176,231,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,160,231,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,64,231,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,232,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,200,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,152,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,120,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,72,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,40,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,24,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,248,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,224,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,208,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,128,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,112,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,96,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,80,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,64,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,16,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,248,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,224,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,192,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,176,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,104,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,88,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,48,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,32,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,248,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,232,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,216,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,200,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,160,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,144,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,64,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,48,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,32,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,16,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,4,0,0,0,248,226,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,216,226,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,200,226,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,152,226,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,8,226,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,224,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,144,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,96,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,72,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,56,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,40,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,8,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,240,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,224,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,160,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,128,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,80,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,24,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,8,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,248,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,232,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,200,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,184,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,168,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,152,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,136,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,64,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,48,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,32,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,24,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,8,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,224,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,208,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,192,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,160,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,144,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,72,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,56,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,40,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,24,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,8,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,4,0,0,0,248,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,224,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,208,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,176,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,160,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,96,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,80,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,64,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,48,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,32,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,8,221,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,248,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,216,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,160,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,144,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,104,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,88,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,72,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,56,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,40,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,24,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,8,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,224,219,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,192,219,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,160,219,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,80,219,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,56,219,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,16,219,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,248,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,232,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,216,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,200,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,184,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,152,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,136,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,80,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,64,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,48,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,32,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,16,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,0,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,232,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,216,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,184,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,168,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,128,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,112,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,96,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,72,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,56,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,40,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,24,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,8,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,232,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,216,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,184,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,168,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,152,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,136,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,88,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,72,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,56,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,40,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,8,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,248,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,216,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,192,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,176,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,144,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,128,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,112,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,80,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,64,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,32,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,16,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,4,0,0,0,240,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,184,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,168,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,152,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,136,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,120,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,104,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,88,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,56,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,40,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,8,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,248,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,232,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,192,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,176,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,160,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,136,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,120,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,88,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,72,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,24,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,8,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,208,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,192,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,176,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,160,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,136,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,120,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,88,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,72,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,40,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,24,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,8,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,248,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,232,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,200,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,160,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,136,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,88,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,72,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,40,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,24,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,8,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,248,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,216,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,200,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,184,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,4,0,0,0,168,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,128,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,96,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,8,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,232,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,200,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,176,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,160,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,144,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,120,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,104,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,72,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,56,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,24,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,8,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,248,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,232,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,216,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,200,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,184,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,168,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,136,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,120,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,88,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,72,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,56,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,224,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,208,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,192,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,176,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,160,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,128,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,112,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,80,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,64,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,48,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,32,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,240,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,224,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,208,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,192,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,160,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,144,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,112,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,88,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,72,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,56,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,48,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,32,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,16,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,0,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,224,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,208,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,176,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,120,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,104,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,88,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,72,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,40,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,24,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,8,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,232,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,216,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,184,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,168,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,152,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,136,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,120,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,104,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,88,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,64,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,48,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,32,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,224,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,208,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,192,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,176,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,160,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,144,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,72,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,56,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,24,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,8,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,232,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,216,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,208,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,192,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,176,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,152,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,136,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,104,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,72,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,56,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,24,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,8,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,248,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,232,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,216,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,200,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,184,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,112,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,80,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,40,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,240,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,208,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,176,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,160,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,144,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,128,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,112,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,104,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,48,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,32,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,240,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,224,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,208,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,192,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,176,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,160,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,144,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,112,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,96,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,64,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,48,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,32,199,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,208,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,192,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,176,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,160,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,144,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,112,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,96,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,64,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,48,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,32,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,16,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,184,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,176,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,160,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,144,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,112,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,96,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,64,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,40,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,24,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,8,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,248,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,232,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,208,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,192,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,160,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,144,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,112,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,56,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,40,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,24,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,8,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,248,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,232,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,216,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,184,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,168,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,144,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,128,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,112,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,4,0,0,0,255,255,0,0,30,0,0,0,254,255,192,17,255,255,72,0,24,0,32,0,24,0,0,0,255,255,0,0,30,0,0,0,253,255,192,17,255,255,72,0,56,0,32,0,24,0,0,0,255,255,0,0,30,0,0,0,252,255,192,17,255,255,72,0,88,0,32,0,24,0,0,0,255,255,0,0,30,0,0,0,251,255,192,17,255,255,72,0,120,0,32,0,24,0,0,0,255,255,0,0,62,0,0,0,160,251,196,17,99,1,64,0,168,0,48,0,16,0,0,0,255,255,0,0,36,0,0,0,158,251,196,17,101,1,64,0,184,0,48,0,16,0,0,0,255,255,0,0,32,0,0,0,188,0,199,68], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+30756);
/* memory initializer */ allocate([109,1,160,0,184,0,120,0,16,0,0,0,255,255,0,0,212,0,0,0,189,0,199,68,103,1,112,0,1,0,88,0,16,0,0,0,255,255,0,0,128,0,0,0,243,255,199,68,111,1,8,0,80,0,40,0,16,0,0,0,255,255,0,0,220,0,0,0,244,255,199,68,113,1,8,0,104,0,40,0,16,0,0,0,255,255,0,0,16,0,0,0,192,0,199,68,115,1,112,0,1,0,88,0,16,0,0,0,255,255,0,0,112,0,0,0,191,0,199,68,107,1,160,0,168,0,120,0,16,0,0,0,255,255,0,0,112,0,0,0,190,0,199,68,105,1,160,0,168,0,120,0,16,0,0,0,120,20,0,0,88,20,0,0,56,20,0,0,24,20,0,0,224,19,0,0,160,19,0,0,104,19,0,0,56,19,0,0,8,19,0,0,104,18,0,0,72,18,0,0,8,18,0,0,216,17,0,0,168,17,0,0,104,17,0,0,136,16,0,0,96,16,0,0,56,16,0,0,24,16,0,0,216,15,0,0,2,0,2,0,3,0,88,2,2,0,3,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,4,0,5,0,35,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,5,0,5,0,35,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,88,2,2,0,1,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,4,0,5,0,35,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,5,0,5,0,35,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,88,2,2,0,4,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,3,0,88,2,2,0,5,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,3,0,88,2,2,0,6,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,3,0,88,2,2,0,7,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,88,2,2,0,4,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,3,0,88,2,2,0,5,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,3,0,88,2,2,0,6,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,3,0,88,2,2,0,7,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,1,0,3,0,44,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,44,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,6,0,4,0,3,0,30,0,6,0,5,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,5,0,3,0,30,0,6,0,6,0,3,0,30,0,6,0,7,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,8,0,3,0,30,0,6,0,9,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,7,0,3,0,30,0,6,0,6,0,3,0,30,0,6,0,5,0,3,0,30,0,6,0,4,0,3,0,30,0,7,0,252,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,4,0,3,0,30,0,6,0,5,0,3,0,30,0,6,0,6,0,3,0,30,0,6,0,7,0,3,0,30,0,7,0,252,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,4,0,3,0,30,0,6,0,5,0,3,0,30,0,6,0,6,0,3,0,30,0,6,0,7,0,3,0,30,0,7,0,252,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,5,0,3,0,30,0,6,0,3,0,3,0,30,0,6,0,4,0,3,0,30,0,6,0,2,0,3,0,30,0,6,0,5,0,3,0,30,0,6,0,4,0,3,0,30,0,7,0,252,255,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,5,0,3,0,30,0,6,0,6,0,3,0,30,0,6,0,7,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,8,0,3,0,30,0,6,0,9,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,8,0,3,0,60,0,6,0,9,0,3,0,60,0,6,0,6,0,3,0,60,0,6,0,5,0,3,0,60,0,6,0,2,0,3,0,60,0,6,0,3,0,3,0,60,0,7,0,252,255,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,60,0,6,0,3,0,3,0,60,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,60,0,6,0,5,0,3,0,60,0,6,0,6,0,3,0,60,0,6,0,9,0,3,0,60,0,6,0,8,0,3,0,60,0,7,0,252,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,2,0,3,0,30,0,6,0,3,0,3,0,30,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,3,0,88,2,2,0,2,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,3,0,88,2,2,0,2,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,4,0,3,0,88,2,2,0,5,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,4,0,3,0,88,2,2,0,5,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,3,0,88,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,4,0,8,0,3,0,1,0,0,0,160,188,0,0,0,0,1,0,21,0,0,0,2,0,0,0,240,246,0,0,0,0,1,0,22,0,0,0,3,0,0,0,48,233,0,0,0,0,3,0,21,0,0,0,4,0,0,0,24,221,0,0,0,0,3,0,21,0,0,0,5,0,0,0,216,211,0,0,0,0,3,0,20,0,0,0,6,0,0,0,168,202,0,0,0,0,1,0,20,0,0,0,7,0,0,0,176,194,0,0,0,0,3,0,21,0,0,0,37,0,0,0,40,192,0,0,0,0,3,0,21,0,0,0,9,0,0,0,0,190,0,0,0,0,3,0,20,0,0,0,10,0,0,0,216,187,0,0,0,0,3,0,20,0,0,0,11,0,0,0,104,7,1,0,1,0,3,0,255,255,0,0,12,0,0,0,96,4,1,0,0,0,3,0,20,0,0,0,31,0,0,0,0,2,1,0,0,0,3,0,20,0,0,0,153,0,0,0,104,0,1,0,1,0,3,0,20,0,0,0,1,0,0,0,0,0,0,0,40,25,1,0,0,0,0,0,64,25,1,0,0,0,0,0,88,25,1,0,0,0,0,0,14,0,0,0,6,0,0,0,74,0,0,0,152,0,0,0,42,0,0,0,94,0,0,0,80,0,0,0,214,0,0,0,218,0,0,0,168,0,0,0,108,0,0,0,90,0,0,0,76,0,0,0,228,0,0,0,86,0,0,0,4,0,0,0,122,0,0,0,198,0,0,0,172,0,0,0,226,0,0,0,120,0,0,0,72,0,0,0,38,0,0,0,118,0,0,0,34,0,0,0,18,0,0,0,22,0,0,0,116,0,0,0,2,0,0,0,60,0,0,0,206,0,0,0,138,0,0,0,24,0,0,0,12,0,0,0,134,0,0,0,124,0,0,0,178,0,0,0,174,0,0,0,110,0,0,0,184,0,0,0,44,0,0,0,106,0,0,0,156,0,0,0,72,0,0,0,68,0,0,0,70,0,0,0,146,0,0,0,190,0,0,0,82,0,0,0,188,0,0,0,196,0,0,0,78,0,0,0,72,0,0,0,72,0,0,0,166,0,0,0,46,0,0,0,150,0,0,0,72,0,0,0,54,0,0,0,158,0,0,0,132,0,0,0,88,0,0,0,64,0,0,0,72,0,0,0,122,0,0,0,102,0,0,0,140,0,0,0,210,0,0,0,28,0,0,0,92,0,0,0,130,0,0,0,104,0,0,0,50,0,0,0,164,0,0,0,132,0,0,0,10,0,0,0,126,0,0,0,180,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,122,0,0,0,72,0,0,0,162,0,0,0,96,0,0,0,52,0,0,0,74,0,0,0,144,0,0,0,200,0,0,0,224,0,0,0,216,0,0,0,160,0,0,0,194,0,0,0,72,0,0,0,192,0,0,0,84,0,0,0,208,0,0,0,72,0,0,0,72,0,0,0,72,0,0,0,72,0,0,0,72,0,0,0,100,0,0,0,66,0,0,0,202,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,14,0,100,0,0,2,36,0,8,0,38,0,72,0,15,0,0,0,43,0,30,0,208,0,38,0,72,0,15,0,0,0,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,2,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,1,0,0,0,1,0,0,0,5,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,1,0,0,0,1,0,0,0,15,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,56,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,58,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,60,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,66,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,68,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,70,0,0,0,7,0,0,0,7,0,0,0,16,0,0,0,184,7,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,7,0,0,0,7,0,0,0,1,0,0,0,208,176,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,0,0,0,0,16,0,91,0,0,7,92,0,16,0,23,0,208,0,15,0,0,0,0,0,93,0,16,0,40,0,208,0,15,0,0,0,0,0,94,0,16,0,57,0,208,0,15,0,0,0,0,0,103,0,16,0,74,0,208,0,15,0,0,0,0,0,104,0,16,0,91,0,208,0,15,0,0,0,0,0,96,0,120,0,110,0,104,0,15,0,0,0,110,0,95,0,16,0,110,0,104,0,15,0,0,0,0,0,1,0,1,0,62,0,62,0,16,0,16,0,32,0,32,0,21,0,21,0,21,0,21,0,128,190,0,0,56,248,0,0,136,234,0,0,240,221,0,0,152,212,0,0,0,0,0,0,1,0,1,0,2,0,1,0,0,0,0,0,0,0,0,0,0,1,0,2,3,0,0,1,0,0,0,0,0,0,0,0,255,0,0,0,0,0,0,0,43,0,255,255,255,255,255,255,255,255,51,0,60,0,49,0,29,0,36,0,55,0,255,255,52,0,255,255,49,0,29,0,36,0,55,0,57,0,52,0,255,255,49,0,29,0,36,0,55,0,58,0,52,0,255,255,49,0,29,0,36,0,55,0,59,0,52,0,255,255,49,0,29,0,36,0,55,0,60,0,52,0,255,255,49,0,30,0,36,0,55,0,255,255,53,0,255,255,49,0,31,0,36,0,55,0,255,255,54,0,255,255,49,0,32,0,36,0,55,0,255,255,55,0,255,255,49,0,33,0,36,0,55,0,255,255,56,0,255,255,49,0,34,0,55,0,255,255,255,255,57,0,255,255,49,0,35,0,36,0,55,0,255,255,58,0,255,255,49,0,50,0,55,0,255,255,255,255,59,0,255,255,29,0,36,0,53,0,255,255,255,255,0,0,255,255,30,0,36,0,53,0,255,255,255,255,60,0,255,255,31,0,36,0,53,0,255,255,255,255,61,0,255,255,32,0,36,0,53,0,255,255,255,255,62,0,255,255,33,0,36,0,53,0,255,255,255,255,63,0,255,255,34,0,53,0,255,255,255,255,255,255,64,0,255,255,35,0,36,0,53,0,255,255,255,255,65,0,255,255,50,0,53,0,255,255,255,255,255,255,0,0,255,255,29,0,37,0,53,0,255,255,255,255,0,0,255,255,30,0,37,0,53,0,255,255,255,255,66,0,255,255,31,0,37,0,53,0,255,255,255,255,67,0,255,255,32,0,37,0,53,0,255,255,255,255,68,0,255,255,33,0,37,0,53,0,255,255,255,255,69,0,255,255,34,0,53,0,255,255,255,255,255,255,70,0,255,255,35,0,37,0,53,0,255,255,255,255,71,0,255,255,44,0,46,0,255,255,255,255,255,255,0,0,255,255,44,0,45,0,255,255,255,255,255,255,0,0,255,255,30,0,36,0,54,0,255,255,255,255,72,0,255,255,31,0,36,0,54,0,255,255,255,255,73,0,255,255,32,0,36,0,54,0,255,255,255,255,74,0,255,255,33,0,36,0,54,0,255,255,255,255,75,0,255,255,34,0,54,0,255,255,255,255,255,255,76,0,255,255,35,0,36,0,54,0,255,255,255,255,77,0,255,255,52,0,56,0,255,255,255,255,255,255,0,0,255,255,49,0,68,0,255,255,255,255,255,255,78,0,23,0,47,0,48,0,255,255,255,255,255,255,80,0,255,255,49,0,51,0,55,0,255,255,255,255,81,0,255,255,61,0,255,255,255,255,255,255,255,255,0,0,255,255,62,0,255,255,255,255,255,255,255,255,0,0,255,255,51,0,63,0,255,255,255,255,255,255,0,0,255,255,38,0,255,255,255,255,255,255,255,255,0,0,46,0,39,0,255,255,255,255,255,255,255,255,0,0,46,0,40,0,255,255,255,255,255,255,255,255,0,0,46,0,41,0,255,255,255,255,255,255,255,255,0,0,46,0,42,0,255,255,255,255,255,255,255,255,0,0,46,0,64,0,255,255,255,255,255,255,255,255,90,0,23,0,30,0,36,0,63,0,255,255,255,255,154,0,255,255,31,0,36,0,63,0,255,255,255,255,155,0,255,255,32,0,36,0,63,0,255,255,255,255,156,0,255,255,33,0,36,0,63,0,255,255,255,255,157,0,255,255,34,0,36,0,63,0,255,255,255,255,158,0,255,255,35,0,36,0,63,0,255,255,255,255,159,0,255,255,30,0,65,0,66,0,255,255,255,255,162,0,255,255,31,0,65,0,66,0,255,255,255,255,163,0,255,255,32,0,65,0,66,0,255,255,255,255,164,0,255,255,33,0,65,0,66,0,255,255,255,255,165,0,255,255,34,0,65,0,66,0,255,255,255,255,166,0,255,255,35,0,65,0,66,0,255,255,255,255,167,0,255,255,70,0,71,0,255,255,255,255,255,255,0,0,255,255,30,0,255,255,255,255,255,255,255,255,0,0,255,255,31,0,255,255,255,255,255,255,255,255,0,0,255,255,32,0,255,255,255,255,255,255,255,255,0,0,255,255,33,0,255,255,255,255,255,255,255,255,0,0,255,255,34,0,255,255,255,255,255,255,255,255,0,0,255,255,35,0,255,255,255,255,255,255,255,255,0,0,255,255,30,0,67,0,54,0,255,255,255,255,147,0,255,255,31,0,67,0,54,0,255,255,255,255,148,0,255,255,32,0,67,0,54,0,255,255,255,255,149,0,255,255,33,0,67,0,54,0,255,255,255,255,150,0,255,255,34,0,67,0,54,0,255,255,255,255,151,0,255,255,35,0,67,0,54,0,255,255,255,255,152,0,255,255,255,255,255,255,255,255,255,255,255,255,1,0,255,255,255,255,255,255,255,255,255,255,255,255,0,0,255,255,255,255,255,255,255,255,255,255,255,255,1,0,255,255,111,0,105,0,255,255,255,255,255,255,0,0,255,255,114,0,255,255,255,255,255,255,255,255,0,0,255,255,101,0,115,0,106,0,255,255,255,255,0,0,255,255,116,0,86,0,93,0,255,255,255,255,0,0,255,255,118,0,83,0,84,0,255,255,255,255,0,0,255,255,104,0,113,0,89,0,255,255,255,255,0,0,255,255,92,0,94,0,97,0,91,0,255,255,0,0,255,255,98,0,96,0,90,0,95,0,255,255,0,0,255,255,90,0,95,0,255,255,255,255,255,255,0,0,255,255,117,0,79,0,255,255,255,255,255,255,0,0,255,255,78,0,77,0,85,0,109,0,255,255,1,0,255,255,107,0,255,255,255,255,255,255,255,255,0,0,255,255,103,0,110,0,255,255,255,255,255,255,0,0,255,255,99,0,100,0,255,255,255,255,255,255,0,0,255,255,102,0,112,0,255,255,255,255,255,255,0,0,255,255,119,0,80,0,81,0,255,255,255,255,1,0,255,255,108,0,255,255,255,255,255,255,255,255,1,0,255,255,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,24,24,3,0,0,0,0,0,48,24,3,0,0,0,0,0,72,24,3,0,0,0,0,0,0,0,0,0,63,1,199,0,168,24,3,0,176,24,3,0,184,24,3,0,192,24,3,0,200,24,3,0,0,0,0,0,255,255,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,72,65,82,75,46,80,65,75,0,0,0,0,0,0,0,0,83,97,98,111,116,97,103,101,0,0,0,0,0,0,0,0,45,69,86,73,76,46,86,79,67,0,0,0,0,0,0,0,79,82,78,73,46,87,83,65,0,0,0,0,0,0,0,0,77,69,83,83,65,71,69,0,68,85,78,69,46,80,65,75,0,0,0,0,0,0,0,0,85,78,73,84,83,49,46,83,72,80,0,0,0,0,0,0,45,69,78,79,83,69,84,46,86,79,67,0,0,0,0,0,79,82,68,82,84,65,78,75,46,87,83,65,0,0,0,0,45,69,77,79,83,84,46,86,79,67,0,0,0,0,0,0,77,67,86,46,87,83,65,0,73,78,84,82,79,46,70,78,84,0,0,0,0,0,0,0,85,110,105,116,0,0,0,0,45,69,84,69,82,82,73,84,46,86,79,67,0,0,0,0,76,84,65,78,75,46,87,83,65,0,0,0,0,0,0,0,65,116,116,97,99,107,0,0,83,112,101,99,105,97,108,0,85,78,73,84,0,0,0,0,45,69,82,85,76,69,83,46,86,79,67,0,0,0,0,0,76,73,84,69,70,84,82,89,46,87,83,65,0,0,0,0,104,111,117,115,101,73,68,32,60,32,72,79,85,83,69,95,77,65,88,0,0,0,0,0,78,111,32,109,111,114,101,32,115,99,101,110,97,114,105,111,115,33,0,0,0,0,0,0,45,69,80,82,79,68,85,67,69,46,86,79,67,0,0,0,73,88,46,87,83,65,0,0,45,69,77,80,73,82,69,46,86,79,67,0,0,0,0,0,73,78,70,65,78,84,82,89,46,87,83,65,0,0,0,0,45,69,72,79,85,83,69,46,86,79,67,0,0,0,0,0,72,89,73,78,70,89,46,87,83,65,0,0,0,0,0,0,84,114,111,111,112,101,114,0,104,118,121,102,116,114,121,46,119,115,97,0,0,0,0,0,43,69,88,67,65,78,78,79,78,46,86,79,67,0,0,0,45,69,67,79,78,84,82,79,76,46,86,79,67,0,0,0,97,115,97,114,100,46,118,111,99,0,0,0,0,0,0,0,73,78,84,82,79,54,0,0,72,86,89,70,84,82,89,46,87,83,65,0,0,0,0,0,37,115,32,37,115,0,0,0,45,69,65,78,68,78,79,46,86,79,67,0,0,0,0,0,72,84,65,78,75,46,87,83,65,0,0,0,0,0,0,0,71,82,79,85,80,37,100,0,73,78,84,82,79,86,79,67,46,80,65,75,0,0,0,0,65,109,98,117,115,104,0,0,45,69,65,67,72,72,79,77,69,46,86,79,67,0,0,0,72,73,84,67,70,84,82,89,46,87,83,65,0,0,0,0,68,85,78,69,0,0,0,0,85,78,73,84,83,50,46,83,72,80,0,0,0,0,0,0,45,68,89,78,65,83,84,89,46,86,79,67,0,0,0,0,72,69,65,68,81,82,84,83,46,87,83,65,0,0,0,0,45,68,85,78,69,46,86,79,67,0,0,0,0,0,0,0,72,65,82,86,69,83,84,46,87,83,65,0,0,0,0,0,69,78,71,0,0,0,0,0,85,110,107,110,111,119,110,32,111,112,99,111,100,101,32,37,100,0,0,0,0,0,0,0,45,67,79,78,84,82,79,76,83,46,86,79,67,0,0,0,72,65,82,75,84,65,78,75,46,87,83,65,0,0,0,0,70,105,101,108,100,0,0,0,80,76,89,82,0,0,0,0,45,67,79,78,84,82,79,76,52,46,86,79,67,0,0,0,71,79,76,68,45,66,66,46,87,83,65,0,0,0,0,0,77,105,115,115,105,110,103,32,100,117,110,101,46,99,102,103,32,102,105,108,101,46,10,0,45,67,79,78,84,82,79,76,51,46,86,79,67,0,0,0,70,82,73,71,65,84,69,46,87,83,65,0,0,0,0,0,45,67,79,78,84,82,79,76,50,46,86,79,67,0,0,0,70,82,69,77,69,78,46,87,83,65,0,0,0,0,0,0,45,66,76,68,73,78,71,46,86,79,67,0,0,0,0,0,70,79,82,68,79,83,46,87,83,65,0,0,0,0,0,0,83,111,108,100,105,101,114,0,72,101,97,118,121,32,70,99,116,114,121,0,0,0,0,0,43,69,88,76,65,82,71,69,46,86,79,67,0,0,0,0,45,66,69,71,73,78,83,46,86,79,67,0,0,0,0,0,83,97,114,100,97,117,107,97,114,0,0,0,0,0,0,0,37,54,100,0,0,0,0,0,73,78,84,82,79,52,0,0,70,72,65,82,75,46,87,83,65,0,0,0,0,0,0,0,45,66,65,84,84,76,69,46,86,79,67,0,0,0,0,0,73,67,79,78,46,73,67,78,0,0,0,0,0,0,0,0,70,65,82,84,82,46,87,83,65,0,0,0,0,0,0,0,40,105,110,116,41,102,114,101,113,32,60,32,115,95,115,112,101,99,46,102,114,101,113,0,69,78,71,76,73,83,72,46,80,65,75,0,0,0,0,0,83,116,111,112,0,0,0,0,45,65,82,82,73,86,69,68,46,86,79,67,0,0,0,0,67,79,78,83,84,82,85,67,46,87,83,65,0,0,0,0,37,115,46,37,115,0,0,0,83,72,65,80,69,83,46,83,72,80,0,0,0,0,0,0,45,65,78,68,78,79,87,46,86,79,67,0,0,0,0,0,67,65,82,82,89,65,76,76,46,87,83,65,0,0,0,0,45,51,72,79,85,83,69,83,46,86,79,67,0,0,0,0,66,65,82,82,65,67,46,87,83,65,0,0,0,0,0,0,85,110,107,110,111,119,110,32,112,97,114,97,109,101,116,101,114,32,37,100,32,102,111,114,32,111,112,99,111,100,101,32,49,55,0,0,0,0,0,0,47,67,76,73,67,75,46,86,79,67,0,0,0,0,0,0,52,83,76,65,66,46,87,83,65,0,0,0,0,0,0,0,66,108,111,111,109,0,0,0,73,78,70,79,0,0,0,0,47,70,76,69,83,72,46,86,79,67,0,0,0,0,0,0,83,65,82,68,85,75,65,82,46,87,83,65,0,0,0,0,100,117,110,101,46,99,102,103,0,0,0,0,0,0,0,0,47,76,73,90,65,82,68,49,46,86,79,67,0,0,0,0,87,69,83,84,87,79,79,68,46,80,65,76,0,0,0,0,69,82,82,79,82,58,32,117,110,97,98,108,101,32,116,111,32,111,112,101,110,32,102,105,108,101,32,39,37,115,39,46,10,0,0,0,0,0,0,0,47,71,76,65,83,83,54,46,86,79,67,0,0,0,0,0,87,69,83,84,87,79,79,68,46,87,83,65,0,0,0,0,47,66,76,65,83,84,69,82,46,86,79,67,0,0,0,0,86,73,82,71,73,78,46,67,80,83,0,0,0,0,0,0,97,110,105,109,97,116,105,111,110,77,97,112,73,68,32,60,32,49,54,0,0,0,0,0,104,121,105,110,102,121,46,119,115,97,0,0,0,0,0,0,108,105,116,101,102,116,114,121,46,119,115,97,0,0,0,0,43,69,88,77,69,68,46,86,79,67,0,0,0,0,0,0,37,99,78,69,88,84,50,46,86,79,67,0,0,0,0,0,97,102,114,101,109,101,110,46,118,111,99,0,0,0,0,0,73,78,84,82,79,49,49,0,73,78,84,82,79,57,46,87,83,65,0,0,0,0,0,0,37,99,78,69,88,84,46,86,79,67,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,115,99,114,105,112,116,47,117,110,105,116,46,99,0,0,0,0,0,0,0,73,78,84,82,79,56,99,46,87,83,65,0,0,0,0,0,83,67,82,69,69,78,46,67,80,83,0,0,0,0,0,0,70,73,78,65,76,69,46,80,65,75,0,0,0,0,0,0,82,101,116,117,114,110,0,0,37,99,67,65,80,84,85,82,69,46,86,79,67,0,0,0,73,78,84,82,79,56,98,46,87,83,65,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,115,116,114,105,110,103,46,99,0,0,0,0,66,84,84,78,0,0,0,0,37,99,87,79,82,77,89,46,86,79,67,0,0,0,0,0,114,98,0,0,0,0,0,0,73,78,84,82,79,56,97,46,87,83,65,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,115,99,114,105,112,116,47,116,101,97,109,46,99,0,0,0,0,0,0,0,72,69,82,65,76,68,46,70,82,69,0,0,0,0,0,0,84,73,84,76,69,46,70,82,69,0,0,0,0,0,0,0,65,78,68,46,70,82,69,0,37,99,72,65,82,86,69,83,84,46,86,79,67,0,0,0,66,84,84,78,46,70,82,69,0,0,0,0,0,0,0,0,77,73,83,67,46,70,82,69,0,0,0,0,0,0,0,0,73,78,84,82,79,55,66,46,87,83,65,0,0,0,0,0,67,72,79,65,77,46,70,82,69,0,0,0,0,0,0,0,77,69,78,84,65,84,46,70,82,69,0,0,0,0,0,0,67,82,69,68,73,84,83,46,70,82,69,0,0,0,0,0,73,78,84,82,79,46,70,82,69,0,0,0,0,0,0,0,80,82,79,84,69,67,84,46,70,82,69,0,0,0,0,0,77,69,83,83,65,71,69,46,70,82,69,0,0,0,0,0,77,69,78,84,65,84,72,46,70,82,69,0,0,0,0,0,85,110,107,110,111,119,110,32,112,97,114,97,109,101,116,101,114,32,37,100,32,102,111,114,32,111,112,99,111,100,101,32,49,54,0,0,0,0,0,0,77,69,78,84,65,84,79,46,70,82,69,0,0,0,0,0,37,99,82,69,80,65,73,82,46,86,79,67,0,0,0,0,77,69,78,84,65,84,65,46,70,82,69,0,0,0,0,0,84,69,88,84,79,46,70,82,69,0,0,0,0,0,0,0,73,78,84,82,79,55,65,46,87,83,65,0,0,0,0,0,84,69,88,84,72,46,70,82,69,0,0,0,0,0,0,0,84,69,88,84,65,46,70,82,69,0,0,0,0,0,0,0,67,72,79,65,77,0,0,0,68,85,78,69,46,70,82,69,0,0,0,0,0,0,0,0,70,69,78,69,77,89,46,86,79,67,0,0,0,0,0,0,70,87,65,82,78,73,78,71,46,86,79,67,0,0,0,0,70,67,79,78,83,84,46,86,79,67,0,0,0,0,0,0,70,83,65,66,79,84,46,86,79,67,0,0,0,0,0,0,78,65,77,69,0,0,0,0,70,85,78,73,84,46,86,79,67,0,0,0,0,0,0,0,37,99,86,69,72,73,67,76,69,46,86,79,67,0,0,0,70,65,80,80,82,67,72,46,86,79,67,0,0,0,0,0,70,68,69,83,84,82,79,89,46,86,79,67,0,0,0,0,73,78,84,82,79,54,46,87,83,65,0,0,0,0,0,0,70,83,84,82,85,67,84,46,86,79,67,0,0,0,0,0,70,79,70,70,46,86,79,67,0,0,0,0,0,0,0,0,70,79,78,46,86,79,67,0,70,68,69,80,76,79,89,46,86,79,67,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,115,99,114,105,112,116,47,115,116,114,117,99,116,117,114,101,46,99,0,0,103,101,116,99,119,100,40,41,32,101,114,114,111,114,0,0,70,66,76,79,79,77,46,86,79,67,0,0,0,0,0,0,70,87,79,82,77,89,46,86,79,67,0,0,0,0,0,0,70,70,82,73,71,65,84,69,46,86,79,67,0,0,0,0,70,77,73,83,83,73,76,69,46,86,79,67,0,0,0,0,37,99,65,84,84,65,67,75,46,86,79,67,0,0,0,0,70,76,65,85,78,67,72,46,86,79,67,0,0,0,0,0,70,70,73,86,69,46,86,79,67,0,0,0,0,0,0,0,73,78,84,82,79,53,46,87,83,65,0,0,0,0,0,0,70,70,79,85,82,69,46,86,79,67,0,0,0,0,0,0,70,84,72,82,69,69,46,86,79,67,0,0,0,0,0,0,70,84,87,79,46,86,79,67,0,0,0,0,0,0,0,0,70,79,78,69,46,86,79,67,0,0,0,0,0,0,0,0,70,65,84,84,65,67,75,46,86,79,67,0,0,0,0,0,85,110,107,110,111,119,110,32,99,104,117,110,107,32,105,110,32,115,97,118,101,103,97,109,101,58,32,37,99,37,99,37,99,37,99,32,40,108,101,110,103,116,104,58,32,37,100,41,46,32,83,107,105,112,112,101,100,46,10,0,0,0,0,0,70,86,69,72,73,67,76,69,46,86,79,67,0,0,0,0,70,82,69,80,65,73,82,46,86,79,67,0,0,0,0,0,70,78,69,88,84,46,86,79,67,0,0,0,0,0,0,0,37,99,76,65,85,78,67,72,46,86,79,67,0,0,0,0,70,79,82,68,79,83,46,86,79,67,0,0,0,0,0,0,70,65,84,82,69,46,86,79,67,0,0,0,0,0,0,0,73,78,84,82,79,52,46,87,83,65,0,0,0,0,0,0,70,72,65,82,75,46,86,79,67,0,0,0,0,0,0,0,70,72,65,82,86,69,83,84,46,86,79,67,0,0,0,0,70,77,79,86,69,79,85,84,46,86,79,67,0,0,0,0,70,79,86,69,82,79,85,84,46,86,79,67,0,0,0,0,70,82,69,80,79,82,84,51,46,86,79,67,0,0,0,0,70,82,69,80,79,82,84,50,46,86,79,67,0,0,0,0,70,82,69,80,79,82,84,49,46,86,79,67,0,0,0,0,70,65,70,70,73,82,77,46,86,79,67,0,0,0,0,0,63,37,99,76,79,83,69,46,86,79,67,0,0,0,0,0,72,69,82,65,76,68,46,71,69,82], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+40996);
/* memory initializer */ allocate([84,73,84,76,69,46,71,69,82,0,0,0,0,0,0,0,83,116,97,99,107,32,79,118,101,114,102,108,111,119,32,97,116,32,37,115,58,37,100,0,73,78,84,82,79,51,46,87,83,65,0,0,0,0,0,0,65,78,68,46,71,69,82,0,66,84,84,78,46,71,69,82,0,0,0,0,0,0,0,0,77,73,83,67,46,71,69,82,0,0,0,0,0,0,0,0,67,72,79,65,77,46,71,69,82,0,0,0,0,0,0,0,77,69,78,84,65,84,46,71,69,82,0,0,0,0,0,0,67,82,69,68,73,84,83,46,71,69,82,0,0,0,0,0,84,114,111,111,112,101,114,115,0,0,0,0,0,0,0,0,73,78,84,82,79,46,71,69,82,0,0,0,0,0,0,0,76,105,103,104,116,32,70,99,116,114,121,0,0,0,0,0,80,82,79,84,69,67,84,46,71,69,82,0,0,0,0,0,43,69,88,83,77,65,76,76,46,86,79,67,0,0,0,0,63,37,99,87,73,78,46,86,79,67,0,0,0,0,0,0,70,114,101,109,101,110,0,0,77,69,83,83,65,71,69,46,71,69,82,0,0,0,0,0,104,105,110,116,32,60,32,54,52,0,0,0,0,0,0,0,69,70,73,78,65,76,65,0,77,69,78,84,65,84,72,46,71,69,82,0,0,0,0,0,73,78,84,82,79,50,46,87,83,65,0,0,0,0,0,0,77,69,78,84,65,84,79,46,71,69,82,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,115,99,114,105,112,116,47,103,101,110,101,114,97,108,46,99,0,0,0,0,77,69,78,84,65,84,65,46,71,69,82,0,0,0,0,0,84,69,88,84,79,46,71,69,82,0,0,0,0,0,0,0,84,69,88,84,72,46,71,69,82,0,0,0,0,0,0,0,84,69,88,84,65,46,71,69,82,0,0,0,0,0,0,0,68,85,78,69,46,71,69,82,0,0,0,0,0,0,0,0,71,69,78,69,77,89,46,86,79,67,0,0,0,0,0,0,71,87,65,82,78,73,78,71,46,86,79,67,0,0,0,0,37,99,87,69,83,84,46,86,79,67,0,0,0,0,0,0,71,67,79,78,83,84,46,86,79,67,0,0,0,0,0,0,71,83,65,66,79,84,46,86,79,67,0,0,0,0,0,0,73,78,84,82,79,49,49,46,87,83,65,0,0,0,0,0,71,85,78,73,84,46,86,79,67,0,0,0,0,0,0,0,83,67,69,78,65,82,73,79,46,80,65,75,0,0,0,0,71,65,80,80,82,67,72,46,86,79,67,0,0,0,0,0,71,68,69,83,84,82,79,89,46,86,79,67,0,0,0,0,72,97,114,118,101,115,116,0,71,83,84,82,85,67,84,46,86,79,67,0,0,0,0,0,71,79,70,70,46,86,79,67,0,0,0,0,0,0,0,0,71,79,78,46,86,79,67,0,71,68,69,80,76,79,89,46,86,79,67,0,0,0,0,0,71,66,76,79,79,77,46,86,79,67,0,0,0,0,0,0,37,99,83,79,85,84,72,46,86,79,67,0,0,0,0,0,71,87,79,82,77,89,46,86,79,67,0,0,0,0,0,0,71,70,82,73,71,65,84,69,46,86,79,67,0,0,0,0,73,78,84,82,79,49,48,46,87,83,65,0,0,0,0,0,71,77,73,83,83,73,76,69,46,86,79,67,0,0,0,0,71,76,65,85,78,67,72,46,86,79,67,0,0,0,0,0,103,95,99,111,110,102,105,103,46,108,97,110,103,117,97,103,101,32,60,32,108,101,110,103,116,104,111,102,40,103,95,108,97,110,103,117,97,103,101,83,117,102,102,105,120,101,115,41,0,0,0,0,0,0,0,0,71,70,73,86,69,46,86,79,67,0,0,0,0,0,0,0,71,70,79,85,82,69,46,86,79,67,0,0,0,0,0,0,71,84,72,82,69,69,46,86,79,67,0,0,0,0,0,0,71,84,87,79,46,86,79,67,0,0,0,0,0,0,0,0,71,79,78,69,46,86,79,67,0,0,0,0,0,0,0,0,71,65,84,84,65,67,75,46,86,79,67,0,0,0,0,0,77,79,85,83,69,46,83,72,80,0,0,0,0,0,0,0,37,99,69,65,83,84,46,86,79,67,0,0,0,0,0,0,73,78,84,82,79,49,46,87,83,65,0,0,0,0,0,0,71,86,69,72,73,67,76,69,46,86,79,67,0,0,0,0,71,82,69,80,65,73,82,46,86,79,67,0,0,0,0,0,71,78,69,88,84,46,86,79,67,0,0,0,0,0,0,0,119,98,43,0,0,0,0,0,71,79,82,68,79,83,46,86,79,67,0,0,0,0,0,0,71,65,84,82,69,46,86,79,67,0,0,0,0,0,0,0,71,72,65,82,75,46,86,79,67,0,0,0,0,0,0,0,71,72,65,82,86,69,83,84,46,86,79,67,0,0,0,0,71,77,79,86,69,79,85,84,46,86,79,67,0,0,0,0,71,79,86,69,82,79,85,84,46,86,79,67,0,0,0,0,71,82,69,80,79,82,84,51,46,86,79,67,0,0,0,0,37,99,78,79,82,84,72,46,86,79,67,0,0,0,0,0,71,82,69,80,79,82,84,50,46,86,79,67,0,0,0,0,71,82,69,80,79,82,84,49,46,86,79,67,0,0,0,0,73,78,84,82,79,46,80,65,76,0,0,0,0,0,0,0,71,65,70,70,73,82,77,46,86,79,67,0,0,0,0,0,70,73,76,76,69,82,46,86,79,67,0,0,0,0,0,0,89,79,85,82,46,86,79,67,0,0,0,0,0,0,0,0,83,67,69,78,37,99,37,48,51,100,46,73,78,73,0,0,87,72,79,69,86,69,82,46,86,79,67,0,0,0,0,0,86,65,83,84,46,86,79,67,0,0,0,0,0,0,0,0,83,80,73,67,69,50,46,86,79,67,0,0,0,0,0,0,83,80,73,67,69,46,86,79,67,0,0,0,0,0,0,0,85,110,107,110,111,119,110,32,102,117,110,99,116,105,111,110,32,37,100,32,102,111,114,32,111,112,99,111,100,101,32,49,52,0,0,0,0,0,0,0,83,65,78,68,76,65,78,68,46,86,79,67,0,0,0,0,37,99,76,79,67,65,84,69,68,46,86,79,67,0,0,0,80,82,79,80,79,83,69,68,46,86,79,67,0,0,0,0,80,82,69,86,65,73,76,46,86,79,67,0,0,0,0,0,73,78,84,82,79,46,70,78,84,0,0,0,0,0,0,0,80,76,65,78,69,84,46,86,79,67,0,0,0,0,0,0,79,82,68,46,86,79,67,0,84,69,65,77,83,0,0,0,79,70,68,85,78,69,46,86,79,67,0,0,0,0,0,0,78,79,87,46,86,79,67,0,78,79,66,76,69,46,86,79,67,0,0,0,0,0,0,0,77,69,76,65,78,71,69,46,86,79,67,0,0,0,0,0,75,78,79,87,78,46,86,79,67,0,0,0,0,0,0,0,83,67,69,78,0,0,0,0,75,73,78,71,46,86,79,67,0,0,0,0,0,0,0,0,37,99,65,80,80,82,67,72,46,86,79,67,0,0,0,0,73,78,83,73,68,46,86,79,67,0,0,0,0,0,0,0,72,79,85,83,69,50,46,86,79,67,0,0,0,0,0,0,80,76,65,78,69,84,46,67,80,83,0,0,0,0,0,0,72,79,77,69,46,86,79,67,0,0,0,0,0,0,0,0,72,65,82,75,46,86,79,67,0,0,0,0,0,0,0,0,69,86,73,76,46,86,79,67,0,0,0,0,0,0,0,0,69,78,79,83,69,84,46,86,79,67,0,0,0,0,0,0,67,117,114,114,101,110,116,32,119,111,114,107,105,110,103,32,100,105,114,58,32,37,115,10,0,0,0,0,0,0,0,0,69,77,79,83,84,46,86,79,67,0,0,0,0,0,0,0,69,84,69,82,82,73,84,46,86,79,67,0,0,0,0,0,69,82,85,76,69,83,46,86,79,67,0,0,0,0,0,0,69,80,82,79,68,85,67,69,46,86,79,67,0,0,0,0,37,99,68,69,80,76,79,89,46,86,79,67,0,0,0,0,69,77,80,73,82,69,46,86,79,67,0,0,0,0,0,0,69,72,79,85,83,69,46,86,79,67,0,0,0,0,0,0,82,71,78,67,76,75,46,67,80,83,0,0,0,0,0,0,69,67,79,78,84,82,79,76,46,86,79,67,0,0,0,0,69,65,78,68,78,79,46,86,79,67,0,0,0,0,0,0,69,65,67,72,72,79,77,69,46,86,79,67,0,0,0,0,68,89,78,65,83,84,89,46,86,79,67,0,0,0,0,0,68,85,78,69,46,86,79,67,0,0,0,0,0,0,0,0,73,110,118,97,108,105,100,32,109,97,103,105,99,32,104,101,97,100,101,114,32,105,110,32,115,97,118,101,103,97,109,101,46,32,78,111,116,32,97,110,32,79,112,101,110,68,85,78,69,32,47,32,68,117,110,101,50,32,115,97,118,101,103,97,109,101,46,0,0,0,0,0,67,79,78,84,82,79,76,83,46,86,79,67,0,0,0,0,67,79,78,84,82,79,76,52,46,86,79,67,0,0,0,0,67,79,78,84,82,79,76,51,46,86,79,67,0,0,0,0,37,99,68,69,83,84,82,79,89,46,86,79,67,0,0,0,67,79,78,84,82,79,76,50,46,86,79,67,0,0,0,0,66,76,68,73,78,71,46,86,79,67,0,0,0,0,0,0,68,85,78,69,82,71,78,46,67,80,83,0,0,0,0,0,66,69,71,73,78,83,46,86,79,67,0,0,0,0,0,0,66,65,84,84,76,69,46,86,79,67,0,0,0,0,0,0,65,82,82,73,86,69,68,46,86,79,67,0,0,0,0,0,65,78,68,78,79,87,46,86,79,67,0,0,0,0,0,0,51,72,79,85,83,69,83,46,86,79,67,0,0,0,0,0,67,76,73,67,75,46,86,79,67,0,0,0,0,0,0,0,70,76,69,83,72,46,86,79,67,0,0,0,0,0,0,0,76,73,90,65,82,68,49,46,86,79,67,0,0,0,0,0,37,99,66,76,79,79,77,46,86,79,67,0,0,0,0,0,71,76,65,83,83,54,46,86,79,67,0,0,0,0,0,0,66,76,65,83,84,69,82,46,86,79,67,0,0,0,0,0,77,65,80,77,65,67,72,46,67,80,83,0,0,0,0,0,66,76,79,87,85,80,50,46,86,79,67,0,0,0,0,0,66,76,79,87,85,80,49,46,86,79,67,0,0,0,0,0,100,97,116,97,47,37,115,0,67,76,65,78,75,46,86,79,67,0,0,0,0,0,0,0,66,69,68,85,80,50,76,80,46,86,79,67,0,0,0,0,77,73,83,83,76,69,56,46,86,79,67,0,0,0,0,0,37,115,32,37,115,0,0,0,71,76,65,83,83,46,86,79,67,0,0,0,0,0,0,0,105,110,102,97,110,116,114,121,46,119,115,97,0,0,0,0,71,85,78,83,72,79,84,46,86,79,67,0,0,0,0,0,112,97,108,97,99,101,46,119,115,97,0,0,0,0,0,0,76,65,78,68,73,78,71,76,46,86,79,67,0,0,0,0,43,67,82,85,77,66,76,69,46,86,79,67,0,0,0,0,83,108,105,116,104,101,114,0,37,99,77,73,83,83,73,76,69,46,86,79,67,0,0,0,110,111,114,100,111,46,118,111,99,0,0,0,0,0,0,0,68,85,78,69,77,65,80,46,67,80,83,0,0,0,0,0,66,82,65,75,69,83,50,80,46,86,79,67,0,0,0,0,77,73,83,67,0,0,0,0,73,78,84,82,79,49,48,0,79,82,78,89,50,80,46,86,79,67,0,0,0,0,0,0,115,116,114,108,101,110,40,102,105,108,101,110,97,109,101,41,32,60,32,49,51,0,0,0,87,73,78,68,50,66,80,46,86,79,67,0,0,0,0,0,72,69,82,65,76,68,46,69,78,71,0,0,0,0,0,0,84,73,84,76,69,46,69,78,71,0,0,0,0,0,0,0,65,78,68,46,69,78,71,0,105,110,100,101,120,32,60,32,85,78,73,84,95,73,78,68,69,88,95,77,65,88,0,0,66,84,84,78,46,69,78,71,0,0,0,0,0,0,0,0,77,73,83,67,46,69,78,71,0,0,0,0,0,0,0,0,67,72,79,65,77,46,69,78,71,0,0,0,0,0,0,0,77,69,78,84,65,84,46,69,78,71,0,0,0,0,0,0,37,99,83,65,66,79,84,46,86,79,67,0,0,0,0,0,67,82,69,68,73,84,83,46,69,78,71,0,0,0,0,0,73,78,84,82,79,46,69,78,71,0,0,0,0,0,0,0,65,82,82,79,87,83,46,83,72,80,0,0,0,0,0,0,98,117,102,102,101,114,32,33,61,32,78,85,76,76,0,0,80,82,79,84,69,67,84,46,69,78,71,0,0,0,0,0,86,79,67,46,80,65,75,0,77,69,83,83,65,71,69,46,69,78,71,0,0,0,0,0,105,110,100,101,120,32,60,32,84,69,65,77,95,73,78,68,69,88,95,77,65,88,0,0,77,69,78,84,65,84,72,46,69,78,71,0,0,0,0,0,65,114,101,97,32,71,117,97,114,100,0,0,0,0,0,0,77,69,78,84,65,84,79,46,69,78,71,0,0,0,0,0,77,69,78,84,65,84,65,46,69,78,71,0,0,0,0,0,84,69,88,84,79,46,69,78,71,0,0,0,0,0,0,0,84,69,88,84,72,46,69,78,71,0,0,0,0,0,0,0,84,69,88,84,65,46,69,78,71,0,0,0,0,0,0,0,37,99,87,65,82,78,73,78,71,46,86,79,67,0,0,0,68,85,78,69,46,69,78,71,0,0,0,0,0,0,0,0,77,65,80,80,76,65,78,46,67,80,83,0,0,0,0,0,80,73,69,67,69,83,46,83,72,80,0,0,0,0,0,0,66,73,71,80,76,65,78,46,67,80,83,0,0,0,0,0,67,82,69,68,73,84,49,53,46,83,72,80,0,0,0,0,83,80,65,0,0,0,0,0,67,82,69,68,73,84,49,52,46,83,72,80,0,0,0,0,67,82,69,68,73,84,49,51,46,83,72,80,0,0,0,0,67,82,69,68,73,84,49,50,46,83,72,80,0,0,0,0,67,82,69,68,73,84,49,49,46,83,72,80,0,0,0,0,105,110,100,101,120,32,60,32,83,84,82,85,67,84,85,82,69,95,73,78,68,69,88,95,77,65,88,95,72,65,82,68,0,0,0,0,0,0,0,0,67,82,69,68,73,84,49,48,46,83,72,80,0,0,0,0,67,82,69,68,73,84,57,46,83,72,80,0,0,0,0,0,82,69,71,73,79,78,37,99,46,73,78,73,0,0,0,0,63,37,99,65,82,82,73,86,69,46,86,79,67,0,0,0,67,82,69,68,73,84,56,46,83,72,80,0,0,0,0,0,67,82,69,68,73,84,55,46,83,72,80,0,0,0,0,0,85,78,73,84,83,50,46,83,72,80,0,0,0,0,0,0,67,82,69,68,73,84,54,46,83,72,80,0,0,0,0,0,67,82,69,68,73,84,53,46,83,72,80,0,0,0,0,0,119,98,0,0,0,0,0,0,67,82,69,68,73,84,52,46,83,72,80,0,0,0,0,0,67,82,69,68,73,84,51,46,83,72,80,0,0,0,0,0,67,82,69,68,73,84,50,46,83,72,80,0,0,0,0,0,105,110,100,101,120,32,60,32,72,79,85,83,69,95,73,78,68,69,88,95,77,65,88,0,67,82,69,68,73,84,49,46,83,72,80,0,0,0,0,0,77,69,65,78,87,72,73,76,46,87,83,65,0,0,0,0,69,70,73,78,65,76,66,46,87,83,65,0,0,0,0,0,37,99,70,82,73,71,65,84,69,46,86,79,67,0,0,0,69,70,73,78,65,76,65,46,87,83,65,0,0,0,0,0,79,70,73,78,65,76,100,46,87,83,65,0,0,0,0,0,85,78,73,84,83,49,46,83,72,80,0,0,0,0,0,0,79,70,73,78,65,76,67,46,87,83,65,0,0,0,0,0,79,70,73,78,65,76,66,46,87,83,65,0,0,0,0,0,79,70,73,78,65,76,65,46,87,83,65,0,0,0,0,0,72,70,73,78,65,76,67,46,87,83,65,0,0,0,0,0,72,70,73,78,65,76,66,46,87,83,65,0,0,0,0,0,72,70,73,78,65,76,65,46,87,83,65,0,0,0,0,0,65,70,73,78,65,76,66,46,87,83,65,0,0,0,0,0,85,110,107,110,111,119,110,32,112,97,114,97,109,101,116,101,114,32,37,100,32,102,111,114,32,111,112,99,111,100,101,32,56,0,0,0,0,0,0,0,65,70,73,78,65,76,65,46,87,83,65,0,0,0,0,0,37,99,79,78,46,86,79,67,0,0,0,0,0,0,0,0,83,67,69,78,79,48,50,50,46,73,78,73,0,0,0,0,83,67,69,78,79,48,50,49,46,73,78,73,0,0,0,0,85,78,73,84,83,46,83,72,80,0,0,0,0,0,0,0,83,67,69,78,79,48,50,48,46,73,78,73,0,0,0,0,83,67,69,78,79,48,49,57,46,73,78,73,0,0,0,0,82,69,73,78,70,79,82,67,69,77,69,78,84,83,0,0,83,67,69,78,79,48,49,56,46,73,78,73,0,0,0,0,83,67,69,78,79,48,49,55,46,73,78,73,0,0,0,0,83,67,69,78,79,48,49,54,46,73,78,73,0,0,0,0,79,80,84,73,79,78,83,46,67,70,71,0,0,0,0,0,83,67,69,78,79,48,49,53,46,73,78,73,0,0,0,0,83,67,69,78,79,48,49,52,46,73,78,73,0,0,0,0,70,79,82,77,0,0,0,0,83,67,69,78,79,48,49,51,46,73,78,73,0,0,0,0,37,99,79,70,70,46,86,79,67,0,0,0,0,0,0,0,83,67,69,78,79,48,49,50,46,73,78,73,0,0,0,0,83,67,69,78,79,48,49,49,46,73,78,73,0,0,0,0,83,72,65,80,69,83,46,83,72,80,0,0,0,0,0,0,83,67,69,78,79,48,49,48,46,73,78,73,0,0,0,0,83,67,69,78,79,48,48,57,46,73,78,73,0,0,0,0,83,67,69,78,79,48,48,56,46,73,78,73,0,0,0,0,83,67,69,78,79,48,48,55,46,73,78,73,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,0,0,0,0,0,0,83,67,69,78,79,48,48,54,46,73,78,73,0,0,0,0,83,67,69,78,79,48,48,53,46,73,78,73,0,0,0,0,83,67,69,78,79,48,48,52,46,73,78,73,0,0,0,0,83,67,69,78,79,48,48,51,46,73,78,73,0,0,0,0,37,99,82,65,68,65,82,46,86,79,67,0,0,0,0,0,83,67,69,78,79,48,48,50,46,73,78,73,0,0,0,0,83,67,69,78,79,48,48,49,46,73,78,73,0,0,0,0,85,78,73,84,46,69,77,67,0,0,0,0,0,0,0,0,83,67,69,78,72,48,50,50,46,73,78,73,0,0,0,0,83,67,69,78,72,48,50,49,46,73,78,73,0,0,0,0,83,67,69,78,72,48,50,48,46,73,78,73,0,0,0,0,83,67,69,78,72,48,49,57,46,73,78,73,0,0,0,0,83,67,69,78,72,48,49,56,46,73,78,73,0,0,0,0,73,66,77,46,80,65,76,0,83,67,69,78,72,48,49,55,46,73,78,73,0,0,0,0,83,67,69,78,72,48,49,54,46,73,78,73,0,0,0,0,83,67,69,78,72,48,49,53,46,73,78,73,0,0,0,0,70,114,105,103,97,116,101,0,37,99,67,79,78,83,84,46,86,79,67,0,0,0,0,0,83,67,69,78,72,48,49,52,46,73,78,73,0,0,0,0,83,67,69,78,72,48,49,51,46,73,78,73,0,0,0,0,84,69,65,77,46,69,77,67,0,0,0,0,0,0,0,0,83,67,69,78,72,48,49,50,46,73,78,73,0,0,0,0,83,67,69,78,72,48,49,49,46,73,78,73,0,0,0,0,37,115,61,37,115,13,10,0,83,67,69,78,72,48,49,48,46,73,78,73,0,0,0,0,83,67,69,78,72,48,48,57,46,73,78,73,0,0,0,0,83,67,69,78,72,48,48,56,46,73,78,73,0,0,0,0,83,67,69,78,72,48,48,55,46,73,78,73,0,0,0,0,83,67,69,78,72,48,48,54,46,73,78,73,0,0,0,0,83,67,69,78,72,48,48,53,46,73,78,73,0,0,0,0,100,97,116,0,0,0,0,0,83,97,110,100,119,111,114,109,0,0,0,0,0,0,0,0,37,99,70,73,86,69,46,86,79,67,0,0,0,0,0,0,83,67,69,78,72,48,48,52,46,73,78,73,0,0,0,0,83,67,69,78,72,48,48,51,46,73,78,73,0,0,0,0,83,84,68,51,80,46,70,78,84,0,0,0,0,0,0,0,83,67,69,78,72,48,48,50,46,73,78,73,0,0,0,0,83,67,69,78,72,48,48,49,46,73,78,73,0,0,0,0,83,67,69,78,65,48,50,50,46,73,78,73,0,0,0,0,83,67,69,78,65,48,50,49,46,73,78,73,0,0,0,0,83,67,69,78,65,48,50,48,46,73,78,73,0,0,0,0,37,115,0,0,0,0,0,0,83,67,69,78,65,48,49,57,46,73,78,73,0,0,0,0,73,110,102,97,110,116,114,121,0,0,0,0,0,0,0,0,71,117,97,114,100,0,0,0,83,67,69,78,65,48,49,56,46,73,78,73,0,0,0,0,80,97,108,97,99,101,0,0,83,67,69,78,65,48,49,55,46,73,78,73,0,0,0,0,83,111,110,105,99,32,66,108,97,115,116,0,0,0,0,0,43,86,83,67,82,69,65,77,53,46,86,79,67,0,0,0,87,105,110,103,101,100,0,0,37,99,70,79,85,82,46,86,79,67,0,0,0,0,0,0,79,114,100,111,115,0,0,0,83,67,69,78,65,48,49,54,46,73,78,73,0,0,0,0,73,78,84,82,79,57,0,0,72,69,82,65,76,68,0,0,83,67,69,78,65,48,49,53,46,73,78,73,0,0,0,0,83,84,65,84,73,67,46,87,83,65,0,0,0,0,0,0,83,67,69,78,65,48,49,52,46,73,78,73,0,0,0,0,79,112,101,110,68,85,78,69,32,45,32,80,114,101,32,118,48,46,56,0,0,0,0,0,83,67,69,78,65,48,49,51,46,73,78,73,0,0,0,0,83,67,69,78,65,48,49,50,46,73,78,73,0,0,0,0,83,67,69,78,65,48,49,49,46,73,78,73,0,0,0,0,83,67,69,78,65,48,49,48,46,73,78,73,0,0,0,0,83,67,69,78,65,48,48,57,46,73,78,73,0,0,0,0,83,67,69,78,65,48,48,56,46,73,78,73,0,0,0,0,83,67,69,78,65,48,48,55,46,73,78,73,0,0,0,0,66,117,108,108,101,116,0,0,37,99,84,72,82,69,69,46,86,79,67,0,0,0,0,0,83,67,69,78,65,48,48,54,46,73,78,73,0,0,0,0,83,67,69,78,65,48,48,53,46,73,78,73,0,0,0,0,83,67,82,69,69,78,46,67,80,83,0,0,0,0,0,0,108,97,121,111,117,116,84,105,108,101,67,111,117,110,116,32,61,61,32,49,0,0,0,0,83,67,69,78,65,48,48,52,46,73,78,73,0,0,0,0,83,79,85,78,68,46,80,65,75,0,0,0,0,0,0,0,83,67,69,78,65,48,48,51,46,73,78,73,0,0,0,0,83,67,69,78,65,48,48,50,46,73,78,73,0,0,0,0,71,117,97,114,100,0,0,0,83,67,69,78,65,48,48,49,46,73,78,73,0,0,0,0,82,69,71,73,79,78,79,46,73,78,73,0,0,0,0,0,82,69,71,73,79,78,72,46,73,78,73,0,0,0,0,0,82,69,71,73,79,78,65,46,73,78,73,0,0,0,0,0,72,79,85,83,69,46,73,78,73,0,0,0,0,0,0,0,77,105,110,105,82,111,99,107,101,116,0,0,0,0,0,0,37,99,84,87,79,46,86,79,67,0,0,0,0,0,0,0,78,69,87,56,80,46,70,78,84,0,0,0,0,0,0,0,77,79,82,68,79,83,46,86,79,67,0,0,0,0,0,0,77,72,65,82,75,46,86,79,67,0,0,0,0,0,0,0,76,79,83,84,66,73,76,68,46,87,83,65,0,0,0,0,77,65,84,82,69,46,86,79,67,0,0,0,0,0,0,0,77,83,69,76,69,67,84,50,46,86,79,67,0,0,0,0,73,84,65,0,0,0,0,0,77,83,69,76,69,67,84,49,46,86,79,67,0,0,0,0,79,67,65,80,84,85,82,69,46,86,79,67,0,0,0,0,79,87,79,82,77,89,46,86,79,67,0,0,0,0,0,0,79,72,65,82,86,69,83,84,46,86,79,67,0,0,0,0,79,82,69,80,65,73,82,46,86,79,67,0,0,0,0,0,79,86,69,72,73,67,76,69,46,86,79,67,0,0,0,0,82,71,78,67,76,75,46,67,80,83,0,0,0,0,0,0,71,82,111,99,107,101,116,0,37,99,79,78,69,46,86,79,67,0,0,0,0,0,0,0,78,69,87,54,80,71,46,70,78,84,0,0,0,0,0,0,79,76,65,85,78,67,72,46,86,79,67,0,0,0,0,0,79,87,73,78,46,86,79,67,0,0,0,0,0,0,0,0,76,111,115,101,80,105,99,116,117,114,101,0,0,0,0,0,79,87,69,83,84,46,86,79,67,0,0,0,0,0,0,0,79,87,65,82,78,73,78,71,46,86,79,67,0,0,0,0,79,83,79,85,84,72,46,86,79,67,0,0,0,0,0,0,100,97,116,97,47,37,115,0,87,73,78,49,46,87,83,65,0,0,0,0,0,0,0,0,79,83,65,66,79,84,46,86,79,67,0,0,0,0,0,0,79,79,78,46,86,79,67,0,79,79,70,70,46,86,79,67,0,0,0,0,0,0,0,0,79,82,65,68,65,82,46,86,79,67,0,0,0,0,0,0,79,78,79,82,84,72,46,86,79,67,0,0,0,0,0,0,65,82,111,99,107,101,116,0,104,101,97,100,113,114,116,115,46,119,115,97,0,0,0,0,37,99,83,84,82,85,67,84,46,86,79,67,0,0,0,0,78,69,87,54,80,46,70,78,84,0,0,0,0,0,0,0,79,77,73,83,83,73,76,69,46,86,79,67,0,0,0,0,79,76,79,83,69,46,86,79,67,0,0,0,0,0,0,0,79,76,79,67,65,84,69,68,46,86,79,67,0,0,0,0,79,70,82,73,71,65,84,69,46,86,79,67,0,0,0,0,79,69,65,83,84,46,86,79,67,0,0,0,0,0,0,0,87,105,110,80,105,99,116,117,114,101,0,0,0,0,0,0,79,68,69,83,84,82,79,89,46,86,79,67,0,0,0,0,79,68,69,80,76,79,89,46,86,79,67,0,0,0,0,0,79,66,76,79,79,77,46,86,79,67,0,0,0,0,0,0,79,83,84,82,85,67,84,46,86,79,67,0,0,0,0,0,85,110,107,110,111,119,110,32,112,97,114,97,109,101,116,101,114,32,37,100,32,102,111,114,32,111,112,99,111,100,101,32,50,0,0,0,0,0,0,0,79,85,78,73,84,46,86,79,67,0,0,0,0,0,0,0,82,111,99,107,101,116,0,0,79,117,116,112,111,115,116,0,37,99,85,78,73,84,46,86,79,67,0,0,0,0,0,0,79,77,69,82,67,46,86,79,67,0,0,0,0,0,0,0,78,69,87,49,48,80,46,70,78,84,0,0,0,0,0,0,79,83,65,82,68,46,86,79,67,0,0,0,0,0,0,0,67,111,112,121,114,105,103,104,116,32,40,99,41,32,49,57,57,50,32,87,101,115,116,119,111,111,100,32,83,116,117,100,105,111,115,44,32,73,110,99,46,0,0,0,0,0,0,0,79,70,82,69,77,69,78,46,86,79,67,0,0,0,0,0,79,79,82,68,79,83,46,86,79,67,0,0,0,0,0,0,77,65,80,0,0,0,0,0,79,65,84,82,69,46,86,79,67,0,0,0,0,0,0,0,72,65,82,86,69,83,84,46,87,83,65,0,0,0,0,0,79,72,65,82,75,46,86,79,67,0,0,0,0,0,0,0,79,69,78,69,77,89,46,86,79,67,0,0,0,0,0,0,79,65,80,80,82,67,72,46,86,79,67,0,0,0,0,0,114,98,0,0,0,0,0,0,79,70,73,86,69,46,86,79,67,0,0,0,0,0,0,0,69,114,114,111,114,32,119,104,105,108,101,32,119,114,105,116,105,110,103,32,115,97,118,101,103,97,109,101,46,10,0,0,79,70,79,85,82,46,86,79,67,0,0,0,0,0,0,0,103,111,108,100,45,98,98,46,119,115,97,0,0,0,0,0,115,116,111,114,97,103,101,46,119,115,97,0,0,0,0,0,70,73,76,76,69,82,46,86,79,67,0,0,0,0,0,0,77,69,78,83,72,80,79,46,83,72,80,0,0,0,0,0,79,84,72,82,69,69,46,86,79,67,0,0,0,0,0,0,105,32,60,32,103,95,117,110,105,116,70,105,110,100,67,111,117,110,116,0,0,0,0,0,79,84,87,79,46,86,79,67,0,0,0,0,0,0,0,0,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,10,69,82,82,79,82,32,76,79,65,68,73,78,71,32,68,65,84,65,32,70,73,76,69,10,10,68,105,100,32,121,111,117,32,99,111,112,121,32,116,104,101,32,68,117,110,101,50,32,49,46,48,55,101,117,32,100,97,116,97,32,102,105,108,101,115,32,105,110,116,111,32,116,104,101,32,100,97,116,97,32,100,105,114,101,99,116,111,114,121,32,63,10,10,0,0,0,0,0,0,0,0,79,79,78,69,46,86,79,67,0,0,0,0,0,0,0,0,105,32,60,32,103,95,115,116,114,117,99,116,117,114,101,70,105,110,100,67,111,117,110,116,0,0,0,0,0,0,0,0,79,67,79,78,83,84,46,86,79,67,0,0,0,0,0,0,79,65,82,82,73,86,69,46,86,79,67,0,0,0,0,0,66,114,105,101,102,80,105,99,116,117,114,101,0,0,0,0,79,65,84,84,65,67,75,46,86,79,67,0,0,0,0,0,5,13,0,0,0,0,0,0,65,67,65,80,84,85,82,69,46,86,79,67,0,0,0,0,65,87,79,82,77,89,46,86,79,67,0,0,0,0,0,0,65,72,65,82,86,69,83,84,46,86,79,67,0,0,0,0,65,82,69,80,65,73,82,46,86,79,67,0,0,0,0,0,68,101,97,116,104,32,72,97,110,100,0,0,0,0,0,0,83,112,105,99,101,32,83,105,108,111,0,0,0,0,0,0,37,99,83,65,82,68,46,86,79,67,0,0,0,0,0,0,77,69,78,83,72,80,72,46,83,72,80,0,0,0,0,0,65,86,69,72,73,67,76,69,46,86,79,67,0,0,0,0,65,76,65,85,78,67,72,46,86,79,67,0,0,0,0,0,37,42,115,37,52,100,44,37,52,100,44,37,52,100,44,37,52,100,0,0,0,0,0,0,65,87,73,78,46,86,79,67,0,0,0,0,0,0,0,0,65,87,69,83,84,46,86,79,67,0,0,0,0,0,0,0,65,87,65,82,78,73,78,71,46,86,79,67,0,0,0,0,65,83,79,85,84,72,46,86,79,67,0,0,0,0,0,0,77,97,112,83,99,97,108,101,0,0,0,0,0,0,0,0,100,97,116,97,47,37,115,0,65,83,65,66,79,84,46,86,79,67,0,0,0,0,0,0,65,79,78,46,86,79,67,0,69,114,114,111,114,32,119,104,105,108,101,32,108,111,97,100,105,110,103,32,115,97,118,101,103,97,109,101,46,10,0,0,65,79,70,70,46,86,79,67,0,0,0,0,0,0,0,0,65,82,65,68,65,82,46,86,79,67,0,0,0,0,0,0,109,99,118,46,119,115,97,0,114,116,117,114,114,101,116,46,119,115,97,0,0,0,0,0,37,99,70,82,69,77,69,78,46,86,79,67,0,0,0,0,77,69,78,83,72,80,65,46,83,72,80,0,0,0,0,0,65,78,79,82,84,72,46,86,79,67,0,0,0,0,0,0,65,77,73,83,83,73,76,69,46,86,79,67,0,0,0,0,37,104,117,44,37,104,117,44,37,104,117,44,37,104,117,0,65,76,79,83,69,46,86,79,67,0,0,0,0,0,0,0,37,104,117,0,0,0,0,0,65,76,79,67,65,84,69,68,46,86,79,67,0,0,0,0,13,10,0,0,0,0,0,0,65,70,82,73,71,65,84,69,46,86,79,67,0,0,0,0,70,79,82,68,79,83,46,87,83,65,0,0,0,0,0,0,67,117,114,115,111,114,80,111,115,0,0,0,0,0,0,0,65,69,65,83,84,46,86,79,67,0,0,0,0,0,0,0,65,68,69,83,84,82,79,89,46,86,79,67,0,0,0,0,65,68,69,80,76,79,89,46,86,79,67,0,0,0,0,0,65,66,76,79,79,77,46,86,79,67,0,0,0,0,0,0,65,83,84,82,85,67,84,46,86,79,67,0,0,0,0,0,103,97,109,101,0,0,0,0,77,67,86,0,0,0,0,0,82,45,84,117,114,114,101,116,0,0,0,0,0,0,0,0,37,99,79,82,68,79,83,46,86,79,67,0,0,0,0,0,77,69,78,83,72,80,77,46,83,72,80,0,0,0,0,0,65,85,78,73,84,46,86,79,67,0,0,0,0,0,0,0,65,77,69,82,67,46,86,79,67,0,0,0,0,0,0,0,99,111,109,98,97,116,0,0,65,83,65,82,68,46,86,79,67,0,0,0,0,0,0,0,84,79,84,65,76,32,82,69,71,73,79,78,83,0,0,0,65,70,82,69,77,69,78,46,86,79,67,0,0,0,0,0,65,79,82,68,79,83,46,86,79,67,0,0,0,0,0,0,84,97,99,116,105,99,97,108,80,111,115,0,0,0,0,0,65,65,84,82,69,46,86,79,67,0,0,0,0,0,0,0,69,82,82,79,82,58,32,117,110,104,97,110,100,108,101,100,32,107,101,121,32,37,88,10,0,0,0,0,0,0,0,0,65,72,65,82,75,46,86,79,67,0,0,0,0,0,0,0,117,110,105,116,32,33,61,32,78,85,76,76,0,0,0,0,65,69,78,69,77,89,46,86,79,67,0,0,0,0,0,0,111,114,110,105,46,119,115,97,0,0,0,0,0,0,0,0,75,97,109,105,107,97,122,101,0,0,0,0,0,0,0,0,65,65,80,80,82,67,72,46,86,79,67,0,0,0,0,0,52,115,108,97,98,46,119,115,97,0,0,0,0,0,0,0,65,70,73,86,69,46,86,79,67,0,0,0,0,0,0,0,104,97,114,118,101,115,116,46,119,115,97,0,0,0,0,0,43,66,85,84,84,79,78,46,86,79,67,0,0,0,0,0,116,117,114,114,101,116,46,119,115,97,0,0,0,0,0,0,87,104,101,101,108,101,100,0,37,99,65,84,82,69,46,86,79,67,0,0,0,0,0,0,65,70,79,85,82,46,86,79,67,0,0,0,0,0,0,0,110,97,116,116,114,46,118,111,99,0,0,0,0,0,0,0,77,69,78,84,65,84,79,46,67,80,83,0,0,0,0,0,114,32,61,61,32,115,95,100,97,116,97,0,0,0,0,0,73,78,84,82,79,51,0,0,37,117,0,0,0,0,0,0,110,101,119,56,112,46,102,110,116,0,0,0,0,0,0,0,65,84,72,82,69,69,46,86,79,67,0,0,0,0,0,0,65,84,87,79,46,86,79,67,0,0,0,0,0,0,0,0,73,78,70,79,0,0,0,0,65,79,78,69,46,86,79,67,0,0,0,0,0,0,0,0,65,67,79,78,83,84,46,86,79,67,0,0,0,0,0,0,65,65,82,82,73,86,69,46,86,79,67,0,0,0,0,0,84,105,109,101,79,117,116,0,65,65,84,84,65,67,75,46,86,79,67,0,0,0,0,0,72,67,65,80,84,85,82,69,46,86,79,67,0,0,0,0,72,87,79,82,77,89,46,86,79,67,0,0,0,0,0,0,72,72,65,82,86,69,83,84,46,86,79,67,0,0,0,0,72,97,114,118,101,115,116,101,114,0,0,0,0,0,0,0,84,117,114,114,101,116,0,0,37,99,72,65,82,75,46,86,79,67,0,0,0,0,0,0,77,69,78,84,65,84,72,46,67,80,83,0,0,0,0,0,72,82,69,80,65,73,82,46,86,79,67,0,0,0,0,0,72,86,69,72,73,67,76,69,46,86,79,67,0,0,0,0,37,42,115,37,52,100,44,37,52,100,44,37,52,100,44,37,52,100,44,37,52,100,44,37,52,100,44,37,52,100,44,37,52,100,0,0,0,0,0,0,115,32,33,61,32,78,85,76,76,0,0,0,0,0,0,0,72,76,65,85,78,67,72,46,86,79,67,0,0,0,0,0,110,101,119,54,112,46,102,110,116,0,0,0,0,0,0,0,73,78,84,82,79,46,80,65,75,0,0,0,0,0,0,0,67,82,69,68,73,84,49,49,46,83,72,80,0,0,0,0,72,87,73,78,46,86,79,67,0,0,0,0,0,0,0,0,72,87,69,83,84,46,86,79,67,0,0,0,0,0,0,0,82,101,116,114,101,97,116,0,72,87,65,82,78,73,78,71,46,86,79,67,0,0,0,0,83,101,101,100,0,0,0,0,72,83,79,85,84,72,46,86,79,67,0,0,0,0,0,0,37,104,117,44,37,104,117,44,37,104,117,44,37,104,117,44,37,104,117,44,37,104,117,44,37,104,117,44,37,104,117,0,72,83,65,66,79,84,46,86,79,67,0,0,0,0,0,0,72,79,78,46,86,79,67,0,72,79,70,70,46,86,79,67,0,0,0,0,0,0,0,0,113,117,97,100,46,119,115,97,0,0,0,0,0,0,0,0,119,97,108,108,46,119,115,97,0,0,0,0,0,0,0,0,37,99,69,78,69,77,89,46,86,79,67,0,0,0,0,0,77,69,78,84,65,84,65,46,67,80,83,0,0,0,0,0,72,82,65,68,65,82,46,86,79,67,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,115,116,114,117,99,116,117,114,101,46,99,0,72,78,79,82,84,72,46,86,79,67,0,0,0,0,0,0,70,65,77,69,46,67,80,83,0,0,0,0,0,0,0,0,72,77,73,83,83,73,76,69,46,86,79,67,0,0,0,0,67,82,69,68,73,84,49,48,46,83,72,80,0,0,0,0,72,76,79,83,69,46,86,79,67,0,0,0,0,0,0,0,72,76,79,67,65,84,69,68,46,86,79,67,0,0,0,0,71,69,82,0,0,0,0,0,72,70,82,73,71,65,84,69,46,86,79,67,0,0,0,0,76,111,115,101,70,108,97,103,115,0,0,0,0,0,0,0,72,69,65,83,84,46,86,79,67,0,0,0,0,0,0,0,99,111,110,115,116,114,117,99,116,0,0,0,0,0,0,0,72,68,69,83,84,82,79,89,46,86,79,67,0,0,0,0,72,68,69,80,76,79,89,46,86,79,67,0,0,0,0,0,72,66,76,79,79,77,46,86,79,67,0,0,0,0,0,0,81,117,97,100,0,0,0,0,87,97,108,108,0,0,0,0,85,78,73,84,46,69,77,67,0,0,0,0,0,0,0,0,43,83,81,85,73,83,72,50,46,86,79,67,0,0,0,0,77,69,78,84,65,84,77,46,67,80,83,0,0,0,0,0,72,83,84,82,85,67,84,46,86,79,67,0,0,0,0,0,72,85,78,73,84,46,86,79,67,0,0,0,0,0,0,0,71,82,65,89,82,77,65,80,46,84,66,76,0,0,0,0,72,77,69,82,67,46,86,79,67,0,0,0,0,0,0,0,67,82,69,68,73,84,57,46,83,72,80,0,0,0,0,0,72,83,65,82,68,46,86,79,67,0,0,0,0,0,0,0,72,70,82,69,77,69,78,46,86,79,67,0,0,0,0,0,72,79,82,68,79,83,46,86,79,67,0,0,0,0,0,0,69,82,82,79,82,58,32,119,114,105,116,101,32,101,114,114,111,114,10,0,0,0,0,0,87,105,110,70,108,97,103,115,0,0,0,0,0,0,0,0,72,65,84,82,69,46,86,79,67,0,0,0,0,0,0,0,72,72,65,82,75,46,86,79,67,0,0,0,0,0,0,0,72,69,78,69,77,89,46,86,79,67,0,0,0,0,0,0,72,65,80,80,82,67,72,46,86,79,67,0,0,0,0,0,111,116,114,105,107,101,46,119,115,97,0,0,0,0,0,0,114,101,112,97,105,114,46,119,115,97,0,0,0,0,0,0,43,77,73,83,76,84,73,78,80,46,86,79,67,0,0,0,72,70,73,86,69,46,86,79,67,0,0,0,0,0,0,0,76,79,83,84,86,69,72,67,46,87,83,65,0,0,0,0,91,37,115,93,0,0,0,0,72,70,79,85,82,46,86,79,67,0,0,0,0,0,0,0,69,82,82,79,82,58,32,78,111,32,105,116,101,109,115,32,105,110,32,99,111,110,115,116,114,117,99,116,105,111,110,32,108,105,115,116,33,0,0,0,72,84,72,82,69,69,46,86,79,67,0,0,0,0,0,0,67,82,69,68,73,84,56,46,83,72,80,0,0,0,0,0,72,84,87,79,46,86,79,67,0,0,0,0,0,0,0,0,72,79,78,69,46,86,79,67,0,0,0,0,0,0,0,0,72,67,79,78,83,84,46,86,79,67,0,0,0,0,0,0,66,65,83,73,67,0,0,0,72,65,82,82,73,86,69,46,86,79,67,0,0,0,0,0,72,65,84,84,65,67,75,46,86,79,67,0,0,0,0,0,83,65,78,68,66,85,71,46,86,79,67,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,115,99,114,105,112,116,47,115,99,114,105,112,116,46,99,0,0,0,0,0,80,79,80,80,65,46,86,79,67,0,0,0,0,0,0,0,82,97,105,100,101,114,32,84,114,105,107,101,0,0,0,0,82,101,112,97,105,114,0,0,43,87,79,82,77,69,84,51,80,46,86,79,67,0,0,0,90,77,79,86,69,79,85,84,46,86,79,67,0,0,0,0,79,70,73,78,65,76,68,0,76,79,83,84,66,73,76,68,46,87,83,65,0,0,0,0,83,84,65,84,73,67,46,87,83,65,0,0,0,0,0,0,90,79,86,69,82,79,85,84,46,86,79,67,0,0,0,0,67,72,79,65,77,46,67,80,83,0,0,0,0,0,0,0,90,82,69,80,79,82,84,51,46,86,79,67,0,0,0,0,67,82,69,68,73,84,55,46,83,72,80,0,0,0,0,0,90,82,69,80,79,82,84,50,46,86,79,67,0,0,0,0,83,84,82,85,67,84,85,82,69,83,0,0,0,0,0,0,90,82,69,80,79,82,84,49,46,86,79,67,0,0,0,0,90,65,70,70,73,82,77,46,86,79,67,0,0,0,0,0,77,97,120,85,110,105,116,0,86,83,67,82,69,65,77,53,46,86,79,67,0,0,0,0,86,83,67,82,69,65,77,52,46,86,79,67,0,0,0,0,86,83,67,82,69,65,77,51,46,86,79,67,0,0,0,0,100,97,116,97,47,0,0,0,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,39,37,115,39,32,102,111,114,32,119,114,105,116,105,110,103,46,10,0,0,86,83,67,82,69,65,77,50,46,86,79,67,0,0,0,0,116,114,105,107,101,46,119,115,97,0,0,0,0,0,0,0,114,101,102,105,110,101,114,121,46,119,115,97,0,0,0,0,43,83,84,65,84,73,67,80,46,86,79,67,0,0,0,0,79,70,73,78,65,76,67,0,70,65,77,69,46,67,80,83,0,0,0,0,0,0,0,0,86,83,67,82,69,65,77,49,46,86,79,67,0,0,0,0,117,32,33,61,32,78,85,76,76,0,0,0,0,0,0,0,116,32,33,61,32,78,85,76,76,0,0,0,0,0,0,0,82,79,67,75,69,84,46,86,79,67,0,0,0,0,0,0,37,104,100,44,37,104,100,0,71,85,78,77,85,76,84,73,46,86,79,67,0,0,0,0,115,32,33,61,32,78,85,76,76,0,0,0,0,0,0,0,67,82,69,68,73,84,54,46,83,72,80,0,0,0,0,0,71,85,78,46,86,79,67,0,69,88,83,77,65,76,76,46,86,79,67,0,0,0,0,0,69,88,83,65,78,68,46,86,79,67,0,0,0,0,0,0,81,117,111,116,97,0,0,0,69,88,77,69,68,46,86,79,67,0,0,0,0,0,0,0,66,97,100,32,109,111,100,101,32,105,110,32,97,110,105,109,97,116,105,111,110,32,35,37,105,46,10,0,0,0,0,0,69,88,76,65,82,71,69,46,86,79,67,0,0,0,0,0,69,88,71,65,83,46,86,79,67,0,0,0,0,0,0,0,69,88,68,85,68,46,86,79,67], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+51240);
/* memory initializer */ allocate([84,114,105,107,101,0,0,0,82,101,102,105,110,101,114,121,0,0,0,0,0,0,0,0,63,83,65,78,68,66,85,71,46,86,79,67,0,0,0,0,79,70,73,78,65,76,66,0,73,67,79,78,46,77,65,80,0,0,0,0,0,0,0,0,69,88,67,65,78,78,79,78,46,86,79,67,0,0,0,0,67,82,85,77,66,76,69,46,86,79,67,0,0,0,0,0,80,73,69,67,69,83,0,0,66,85,84,84,79,78,46,86,79,67,0,0,0,0,0,0,67,82,69,68,73,84,53,46,83,72,80,0,0,0,0,0,68,82,79,80,69,81,50,80,46,86,79,67,0,0,0,0,69,88,84,73,78,89,46,86,79,67,0,0,0,0,0,0,83,84,65,84,73,67,80,46,86,79,67,0,0,0,0,0,37,100,0,0,0,0,0,0,67,114,101,100,105,116,115,0,87,79,82,77,69,84,51,80,46,86,79,67,0,0,0,0,77,73,83,76,84,73,78,80,46,86,79,67,0,0,0,0,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,39,37,115,39,32,102,111,114,32,114,101,97,100,105,110,103,46,10,0,0,83,81,85,73,83,72,50,46,86,79,67,0,0,0,0,0,68,85,78,69,50,48,46,84,65,78,0,0,0,0,0,0,115,116,97,110,107,46,119,115,97,0,0,0,0,0,0,0,115,116,97,114,112,111,114,116,46,119,115,97,0,0,0,0,63,80,79,80,80,65,46,86,79,67,0,0,0,0,0,0,79,70,73,78,65,76,65,0,73,67,79,78,46,73,67,78,0,0,0,0,0,0,0,0,68,85,78,69,49,57,46,84,65,78,0,0,0,0,0,0,68,85,78,69,49,56,46,84,65,78,0,0,0,0,0,0,37,100,0,0,0,0,0,0,68,85,78,69,49,55,46,84,65,78,0,0,0,0,0,0,67,82,69,68,73,84,52,46,83,72,80,0,0,0,0,0,68,85,78,69,49,54,46,84,65,78,0,0,0,0,0,0,13,10,91,37,115,93,13,10,0,0,0,0,0,0,0,0,68,85,78,69,49,53,46,84,65,78,0,0,0,0,0,0,70,65,82,84,82,46,87,83,65,0,0,0,0,0,0,0,68,85,78,69,49,52,46,84,65,78,0,0,0,0,0,0,72,85,77,65,78,36,67,80,85,0,0,0,0,0,0,0,68,85,78,69,49,51,46,84,65,78,0,0,0,0,0,0,68,85,78,69,49,50,46,84,65,78,0,0,0,0,0,0,48,0,0,0,0,0,0,0,68,85,78,69,49,49,46,84,65,78,0,0,0,0,0,0,68,85,78,69,49,48,46,84,65,78,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,100,97,116,97,47,37,115,0,0,0,0,0,0,0,83,111,110,105,99,32,84,97,110,107,0,0,0,0,0,0,83,116,97,114,112,111,114,116,0,0,0,0,0,0,0,0,37,115,84,88,84,37,100,0,43,37,99,77,79,86,69,79,85,84,46,86,79,67,0,0,65,70,73,78,65,76,66,0,66,69,78,69,46,80,65,76,0,0,0,0,0,0,0,0,68,85,78,69,57,46,84,65,78,0,0,0,0,0,0,0,68,85,78,69,56,46,84,65,78,0,0,0,0,0,0,0,99,104,97,110,32,61,61,32,48,120,70,0,0,0,0,0,68,85,78,69,55,46,84,65,78,0,0,0,0,0,0,0,67,82,69,68,73,84,51,46,83,72,80,0,0,0,0,0,68,85,78,69,54,46,84,65,78,0,0,0,0,0,0,0,68,85,78,69,53,46,84,65,78,0,0,0,0,0,0,0,40,99,41,32,60,32,115,105,122,101,111,102,40,115,104,111,114,116,99,117,116,115,41,0,68,85,78,69,52,46,84,65,78,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,115,101,116,32,114,101,115,111,108,117,116,105,111,110,58,32,37,115,10,0,0,0,78,79,78,69,0,0,0,0,68,85,78,69,51,46,84,65,78,0,0,0,0,0,0,0,115,50,32,33,61,32,78,85,76,76,0,0,0,0,0,0,108,101,118,101,108,32,61,61,32,48,32,124,124,32,108,101,118,101,108,32,61,61,32,49,0,0,0,0,0,0,0,0,68,85,78,69,50,46,84,65,78,0,0,0,0,0,0,0,39,84,104,111,112,116,101,114,0,0,0,0,0,0,0,0,70,108,101,101,0,0,0,0,77,69,78,84,65,84,37,99,0,0,0,0,0,0,0,0,68,85,78,69,49,46,84,65,78,0,0,0,0,0,0,0,67,111,110,99,114,101,116,101,52,0,0,0,0,0,0,0,68,85,78,69,48,46,84,65,78,0,0,0,0,0,0,0,104,97,114,107,116,97,110,107,46,119,115,97,0,0,0,0,43,82,79,67,75,69,84,46,86,79,67,0,0,0,0,0,98,97,114,114,97,99,46,119,115,97,0,0,0,0,0,0,72,97,114,118,101,115,116,101,114,0,0,0,0,0,0,0,43,37,99,79,86,69,82,79,85,84,46,86,79,67,0,0,65,70,73,78,65,76,65,0,65,116,114,101,105,100,101,115,0,0,0,0,0,0,0,0,73,66,77,46,80,65,76,0,68,85,78,69,50,48,46,80,67,83,0,0,0,0,0,0,73,78,84,82,79,50,0,0,40,40,102,108,97,103,115,32,62,62,32,56,41,32,38,32,48,120,70,41,32,60,32,56,0,0,0,0,0,0,0,0,68,85,78,69,49,57,46,80,67,83,0,0,0,0,0,0,119,32,61,61,32,115,95,100,97,116,97,0,0,0,0,0,68,85,78,69,49,56,46,80,67,83,0,0,0,0,0,0,67,82,69,68,73,84,50,46,83,72,80,0,0,0,0,0,68,85,78,69,49,55,46,80,67,83,0,0,0,0,0,0,68,85,78,69,49,54,46,80,67,83,0,0,0,0,0,0,68,85,78,69,49,53,46,80,67,83,0,0,0,0,0,0,66,114,97,105,110,0,0,0,68,85,78,69,49,52,46,80,67,83,0,0,0,0,0,0,68,85,78,69,49,51,46,80,67,83,0,0,0,0,0,0,68,85,78,69,49,50,46,80,67,83,0,0,0,0,0,0,68,85,78,69,49,49,46,80,67,83,0,0,0,0,0,0,68,101,118,97,115,116,97,116,111,114,0,0,0,0,0,0,66,97,114,114,97,99,107,115,0,0,0,0,0,0,0,0,43,37,99,82,69,80,79,82,84,51,46,86,79,67,0,0,72,70,73,78,65,76,67,0,66,85,73,76,68,46,69,77,67,0,0,0,0,0,0,0,68,85,78,69,49,48,46,80,67,83,0,0,0,0,0,0,68,85,78,69,57,46,80,67,83,0,0,0,0,0,0,0,112,97,114,97,109,101,116,101,114,32,62,61,32,48,0,0,68,85,78,69,56,46,80,67,83,0,0,0,0,0,0,0,77,69,78,84,65,84,46,80,65,75,0,0,0,0,0,0,67,82,69,68,73,84,49,46,83,72,80,0,0,0,0,0,68,85,78,69,55,46,80,67,83,0,0,0,0,0,0,0,110,101,119,54,112,103,46,102,110,116,0,0,0,0,0,0,68,85,78,69,54,46,80,67,83,0,0,0,0,0,0,0,68,85,78,69,53,46,80,67,83,0,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,103,102,120,46,99,0,0,0,0,0,0,0,77,111,118,101,0,0,0,0,71,69,78,0,0,0,0,0,68,85,78,69,52,46,80,67,83,0,0,0,0,0,0,0,68,85,78,69,51,46,80,67,83,0,0,0,0,0,0,0,68,85,78,69,50,46,80,67,83,0,0,0,0,0,0,0,68,85,78,69,49,46,80,67,83,0,0,0,0,0,0,0,104,116,97,110,107,46,119,115,97,0,0,0,0,0,0,0,119,105,110,100,116,114,97,112,46,119,115,97,0,0,0,0,43,37,99,82,69,80,79,82,84,50,46,86,79,67,0,0,69,70,73,78,65,76,66,0,77,79,85,83,69,46,83,72,80,0,0,0,0,0,0,0,68,85,78,69,48,46,80,67,83,0,0,0,0,0,0,0,97,110,105,109,97,116,105,111,110,73,68,32,60,32,50,57,0,0,0,0,0,0,0,0,68,85,78,69,50,48,46,67,53,53,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,97,117,100,105,111,47,100,115,112,95,115,100,108,46,99,0,0,0,0,0,68,85,78,69,49,57,46,67,53,53,0,0,0,0,0,0,65,82,82,79,87,83,46,83,72,80,0,0,0,0,0,0,68,85,78,69,49,56,46,67,53,53,0,0,0,0,0,0,68,85,78,69,49,55,46,67,53,53,0,0,0,0,0,0,70,82,69,0,0,0,0,0,68,85,78,69,49,54,46,67,53,53,0,0,0,0,0,0,72,79,77,69,66,65,83,69,0,0,0,0,0,0,0,0,68,85,78,69,49,53,46,67,53,53,0,0,0,0,0,0,68,85,78,69,49,52,46,67,53,53,0,0,0,0,0,0,68,85,78,69,49,51,46,67,53,53,0,0,0,0,0,0,68,85,78,69,49,50,46,67,53,53,0,0,0,0,0,0,83,105,101,103,101,32,84,97,110,107,0,0,0,0,0,0,87,105,110,100,116,114,97,112,0,0,0,0,0,0,0,0,43,37,99,82,69,80,79,82,84,49,46,86,79,67,0,0,72,70,73,78,65,76,66,0,87,73,78,50,46,87,83,65,0,0,0,0,0,0,0,0,68,85,78,69,49,49,46,67,53,53,0,0,0,0,0,0,73,67,79,78,46,77,65,80,0,0,0,0,0,0,0,0,68,85,78,69,49,48,46,67,53,53,0,0,0,0,0,0,104,101,105,103,104,116,32,60,61,32,83,67,82,69,69,78,95,72,69,73,71,72,84,0,68,85,78,69,57,46,67,53,53,0,0,0,0,0,0,0,80,73,69,67,69,83,46,83,72,80,0,0,0,0,0,0,68,85,78,69,56,46,67,53,53,0,0,0,0,0,0,0,68,85,78,69,55,46,67,53,53,0,0,0,0,0,0,0,68,85,78,69,54,46,67,53,53,0,0,0,0,0,0,0,69,78,69,77,89,66,65,83,69,0,0,0,0,0,0,0,68,85,78,69,53,46,67,53,53,0,0,0,0,0,0,0,69,82,82,79,82,58,32,114,101,97,100,32,101,114,114,111,114,10,0,0,0,0,0,0,66,85,73,76,68,46,69,77,67,0,0,0,0,0,0,0,68,85,78,69,52,46,67,53,53,0,0,0,0,0,0,0,68,85,78,69,51,46,67,53,53,0,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,101,120,112,108,111,115,105,111,110,46,99,0,68,85,78,69,50,46,67,53,53,0,0,0,0,0,0,0,108,116,97,110,107,46,119,115,97,0,0,0,0,0,0,0,99,111,110,115,116,114,117,99,46,119,115,97,0,0,0,0,43,37,99,65,70,70,73,82,77,46,86,79,67,0,0,0,72,70,73,78,65,76,65,0,87,73,78,49,46,87,83,65,0,0,0,0,0,0,0,0,68,85,78,69,49,46,67,53,53,0,0,0,0,0,0,0,68,85,78,69,48,46,67,53,53,0,0,0,0,0,0,0,119,105,100,116,104,32,60,61,32,83,67,82,69,69,78,95,87,73,68,84,72,0,0,0,68,85,78,69,50,48,46,88,77,73,0,0,0,0,0,0,77,69,78,83,72,80,77,46,83,72,80,0,0,0,0,0,68,85,78,69,49,57,46,88,77,73,0,0,0,0,0,0,68,85,78,69,49,56,46,88,77,73,0,0,0,0,0,0,68,85,78,69,49,55,46,88,77,73,0,0,0,0,0,0,86,73,83,73,66,76,69,0,68,85,78,69,49,54,46,88,77,73,0,0,0,0,0,0,37,115,32,37,115,32,37,115,0,0,0,0,0,0,0,0,84,69,65,77,46,69,77,67,0,0,0,0,0,0,0,0,68,85,78,69,49,53,46,88,77,73,0,0,0,0,0,0,68,85,78,69,49,52,46,88,77,73,0,0,0,0,0,0,112,111,115,105,116,105,111,110,32,62,32,48,0,0,0,0,68,85,78,69,49,51,46,88,77,73,0,0,0,0,0,0,84,97,110,107,0,0,0,0,67,111,110,115,116,32,89,97,114,100,0,0,0,0,0,0,43,86,83,67,82,69,65,77,52,46,86,79,67,0,0,0,68,85,78,69,82,71,78,46,67,80,83,0,0,0,0,0,77,69,65,78,87,72,73,76,0,0,0,0,0,0,0,0,67,72,79,65,77,46,67,80,83,0,0,0,0,0,0,0,68,85,78,69,49,50,46,88,77,73,0,0,0,0,0,0,68,85,78,69,49,49,46,88,77,73,0,0,0,0,0,0,100,114,97,119,77,111,100,101,32,60,32,68,82,65,87,95,77,79,68,69,95,77,65,88,0,0,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,97,117,100,105,111,47,100,114,105,118,101,114,46,99,0,0,0,0,0,0,71,82,65,89,82,77,65,80,46,84,66,76,0,0,0,0,68,85,78,69,49,48,46,88,77,73,0,0,0,0,0,0,32,101,116,97,105,110,111,115,114,108,104,99,100,117,112,109,116,97,115,105,111,32,119,98,32,114,110,115,100,97,108,109,104,32,105,101,111,114,97,115,110,114,116,108,99,32,115,121,110,115,116,99,108,111,101,114,32,100,116,103,101,115,105,111,110,114,32,117,102,109,115,119,32,116,101,112,46,105,99,97,101,32,111,105,97,100,117,114,32,108,97,101,105,121,111,100,101,105,97,32,111,116,114,117,101,116,111,97,107,104,108,114,32,101,105,117,44,46,111,97,110,115,114,99,116,108,97,105,108,101,111,105,114,97,116,112,101,97,111,105,112,32,98,109,0,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,105,110,105,116,105,97,108,105,122,101,32,83,68,76,58,32,37,115,10,0,0,0,77,69,78,83,72,80,79,46,83,72,80,0,0,0,0,0,68,85,78,69,57,46,88,77,73,0,0,0,0,0,0,0,85,78,73,84,83,0,0,0,68,85,78,69,56,46,88,77,73,0,0,0,0,0,0,0,68,85,78,69,55,46,88,77,73,0,0,0,0,0,0,0,65,73,82,0,0,0,0,0,68,85,78,69,54,46,88,77,73,0,0,0,0,0,0,0,80,82,79,70,73,76,69,46,73,78,73,0,0,0,0,0,68,85,78,69,53,46,88,77,73,0,0,0,0,0,0,0,68,85,78,69,52,46,88,77,73,0,0,0,0,0,0,0,68,85,78,69,51,46,88,77,73,0,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,99,111,110,102,105,103,46,99,0,0,0,0,119,98,0,0,0,0,0,0,111,114,100,114,116,97,110,107,46,119,115,97,0,0,0,0,119,111,114,46,119,115,97,0,43,86,83,67,82,69,65,77,51,46,86,79,67,0,0,0,73,78,84,82,79,53,0,0,68,85,78,69,50,46,88,77,73,0,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,112,111,111,108,47,117,110,105,116,46,99,0,68,85,78,69,49,46,88,77,73,0,0,0,0,0,0,0,77,65,80,77,65,67,72,46,67,80,83,0,0,0,0,0,70,82,69,78,67,72,46,80,65,75,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,112,111,111,108,47,116,101,97,109,46,99,0,68,85,78,69,48,46,88,77,73,0,0,0,0,0,0,0,80,82,79,84,69,67,84,0,97,110,105,109,97,116,105,111,110,73,68,32,60,32,56,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,112,111,111,108,47,115,116,114,117,99,116,117,114,101,46,99,0,0,0,0,77,69,78,83,72,80,65,46,83,72,80,0,0,0,0,0,68,85,78,69,73,78,73,84,46,88,77,73,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,112,111,111,108,47,104,111,117,115,101,46,99,0,0,0,0,0,0,0,0,68,85,78,69,50,48,46,65,68,76,0,0,0,0,0,0,68,85,78,69,49,57,46,65,68,76,0,0,0,0,0,0,87,69,83,84,0,0,0,0,68,85,78,69,49,56,46,65,68,76,0,0,0,0,0,0,37,115,46,87,83,65,0,0,77,65,80,80,76,65,78,46,67,80,83,0,0,0,0,0,68,85,78,69,49,55,46,65,68,76,0,0,0,0,0,0,68,85,78,69,49,54,46,65,68,76,0,0,0,0,0,0,68,85,78,69,49,53,46,65,68,76,0,0,0,0,0,0,68,101,118,105,97,116,111,114,0,0,0,0,0,0,0,0,87,79,82,0,0,0,0,0,43,86,83,67,82,69,65,77,50,46,86,79,67,0,0,0,73,78,84,82,79,56,99,0,68,85,78,69,49,52,46,65,68,76,0,0,0,0,0,0,68,85,78,69,49,51,46,65,68,76,0,0,0,0,0,0,80,76,65,78,69,84,46,67,80,83,0,0,0,0,0,0,71,69,82,77,65,78,46,80,65,75,0,0,0,0,0,0,68,101,115,116,114,117,99,116,0,0,0,0,0,0,0,0,68,85,78,69,49,50,46,65,68,76,0,0,0,0,0,0,84,69,88,84,79,0,0,0,77,69,78,83,72,80,72,46,83,72,80,0,0,0,0,0,68,85,78,69,49,49,46,65,68,76,0,0,0,0,0,0,68,85,78,69,49,48,46,65,68,76,0,0,0,0,0,0,91,83,67,82,73,80,84,93,32,91,69,82,82,79,82,93,32,37,115,59,32,84,121,112,101,58,32,37,115,59,32,73,110,100,101,120,58,32,37,100,59,32,84,121,112,101,58,32,37,100,59,10,0,0,0,0,68,85,78,69,57,46,65,68,76,0,0,0,0,0,0,0,83,79,85,84,72,0,0,0,68,85,78,69,56,46,65,68,76,0,0,0,0,0,0,0,66,73,71,80,76,65,78,46,67,80,83,0,0,0,0,0,68,85,78,69,55,46,65,68,76,0,0,0,0,0,0,0,114,98,0,0,0,0,0,0,67,97,114,114,121,97,108,108,0,0,0,0,0,0,0,0,68,85,78,69,54,46,65,68,76,0,0,0,0,0,0,0,78,111,114,109,97,108,0,0,68,85,78,69,53,46,65,68,76,0,0,0,0,0,0,0,114,116,97,110,107,46,119,115,97,0,0,0,0,0,0,0,105,120,46,119,115,97,0,0,43,69,88,68,85,68,46,86,79,67,0,0,0,0,0,0,73,78,84,82,79,56,98,0,68,85,78,69,52,46,65,68,76,0,0,0,0,0,0,0,45,66,76,79,87,85,80,50,46,86,79,67,0,0,0,0,68,85,78,69,51,46,65,68,76,0,0,0,0,0,0,0,68,85,78,69,77,65,80,46,67,80,83,0,0,0,0,0,77,69,82,67,46,80,65,75,0,0,0,0,0,0,0,0,68,101,112,108,111,121,0,0,45,66,76,79,87,85,80,49,46,86,79,67,0,0,0,0,68,85,78,69,50,46,65,68,76,0,0,0,0,0,0,0,84,69,88,84,65,0,0,0,77,69,78,84,65,84,0,0,45,67,76,65,78,75,46,86,79,67,0,0,0,0,0,0,68,85,78,69,49,46,65,68,76,0,0,0,0,0,0,0,77,69,78,84,65,84,37,99,46,67,80,83,0,0,0,0,37,100,0,0,0,0,0,0,45,77,73,83,83,76,69,56,46,86,79,67,0,0,0,0,68,85,78,69,48,46,65,68,76,0,0,0,0,0,0,0,67,111,110,99,114,101,116,101,0,0,0,0,0,0,0,0,85,110,107,110,111,119,110,0,70,72,65,82,75,46,87,83,65,0,0,0,0,0,0,0,45,71,76,65,83,83,46,86,79,67,0,0,0,0,0,0,97,108,102,120,46,100,114,118,0,0,0,0,0,0,0,0,69,65,83,84,0,0,0,0,84,69,65,77,0,0,0,0,45,71,85,78,83,72,79,84,46,86,79,67,0,0,0,0,112,99,115,112,107,114,46,97,100,118,0,0,0,0,0,0,67,82,69,68,73,84,83,0,45,66,82,65,75,69,83,50,80,46,86,79,67,0,0,0,112,99,115,111,117,110,100,46,100,114,118,0,0,0,0,0,45,87,73,78,68,50,66,80,46,86,79,67,0,0,0,0,109,116,51,50,109,112,117,46,97,100,118,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,97,117,100,105,111,47,109,116,51,50,109,112,117,46,99,0,0,0,0,0,47,69,88,84,73,78,89,46,86,79,67,0,0,0,0,0,116,97,110,100,121,46,97,100,118,0,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,103,117,105,47,119,105,100,103,101,116,95,99,108,105,99,107,46,99,0,0,76,97,117,110,99,104,101,114,0,0,0,0,0,0,0,0,73,88,0,0,0,0,0,0,43,69,88,71,65,83,46,86,79,67,0,0,0,0,0,0,45,68,82,79,80,69,81,50,80,46,86,79,67,0,0,0,73,78,84,82,79,56,97,0,115,98,112,100,105,103,46,97,100,118,0,0,0,0,0,0,63,70,73,76,76,69,82,46,86,79,67,0,0,0,0,0,115,98,100,105,103,46,97,100,118,0,0,0,0,0,0,0,79,82,68,79,83,46,80,65,75,0,0,0,0,0,0,0,72,117,110,116,0,0,0,0,63,89,79,85,82,46,86,79,67,0,0,0,0,0,0,0,112,97,115,100,105,103,46,97,100,118,0,0,0,0,0,0,84,69,88,84,72,0,0,0,67,72,79,65,77,0,0,0,45,87,72,79,69,86,69,82,46,86,79,67,0,0,0,0,97,108,103,100,105,103,46,97,100,118,0,0,0,0,0,0,45,86,65,83,84,46,86,79,67,0,0,0,0,0,0,0,87,79,82,77,46,87,83,65,0,0,0,0,0,0,0,0,84,101,97,109,0,0,0,0,45,83,80,73,67,69,50,46,86,79,67,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,103,117,105,47,119,105,100,103,101,116,46,99,0,0,0,0,0,0,0,0,87,79,82,46,87,83,65,0,78,79,82,84,72,0,0,0,77,65,80,32,0,0,0,0,45,83,80,73,67,69,46,86,79,67,0,0,0,0,0,0,87,73,78,68,84,82,65,80,46,87,83,65,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,117,110,105,116,46,99,0,0,0,0,0,0,73,78,84,82,79,46,80,65,76,0,0,0,0,0,0,0,45,83,65,78,68,76,65,78,68,46,86,79,67,0,0,0,87,65,76,76,46,87,83,65,0,0,0,0,0,0,0,0,99,97,114,114,121,97,108,108,46,119,115,97,0,0,0,0,83,116,97,103,105,110,103,0,45,80,82,79,80,79,83,69,68,46,86,79,67,0,0,0,43,86,83,67,82,69,65,77,49,46,86,79,67,0,0,0,84,85,82,82,69,84,46,87,83,65,0,0,0,0,0,0,66,69,78,69,46,80,65,76,0,0,0,0,0,0,0,0,115,108,97,98,46,119,115,97,0,0,0,0,0,0,0,0,45,80,82,69,86,65,73,76,46,86,79,67,0,0,0,0,70,111,111,116,0,0,0,0,82,84,85,82,82,69,84,46,87,83,65,0,0,0,0,0,115,97,98,111,116,117,114,101,46,119,115,97,0,0,0,0,43,69,88,83,65,78,68,46,86,79,67,0,0,0,0,0,104,105,116,99,102,116,114,121,46,119,115,97,0,0,0,0,84,114,97,99,107,101,100,0,43,71,85,78,46,86,79,67,0,0,0,0,0,0,0,0,45,80,76,65,78,69,84,46,86,79,67,0,0,0,0,0,97,109,101,114,99,46,118,111,99,0,0,0,0,0,0,0,73,78,84,82,79,55,98,0,110,104,97,114,107,46,118,111,99,0,0,0,0,0,0,0,84,82,73,75,69,46,87,83,65,0,0,0,0,0,0,0,73,78,84,82,79,49,0,0,72,97,114,107,111,110,110,101,110,0,0,0,0,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,103,117,105,47,103,117,105,46,99,0,0,0,45,79,82,68,46,86,79,67,0,0,0,0,0,0,0,0,83,84,79,82,65,71,69,46,87,83,65,0,0,0,0,0,37,104,100,44,37,104,100,44,37,104,100,44,37,104,100,0,65,84,82,69,46,80,65,75,0,0,0,0,0,0,0,0,68,105,101,0,0,0,0,0,45,79,70,68,85,78,69,46,86,79,67,0,0,0,0,0,83,84,65,82,80,79,82,84,46,87,83,65,0,0,0,0,73,78,84,82,79,0,0,0,85,78,73,84,83,46,83,72,80,0,0,0,0,0,0,0,63,78,79,87,46,86,79,67,0,0,0,0,0,0,0,0,83,84,65,78,75,46,87,83,65,0,0,0,0,0,0,0,45,78,79,66,76,69,46,86,79,67,0,0,0,0,0,0,83,76,65,66,46,87,83,65,0,0,0,0,0,0,0,0,83,116,114,117,99,116,117,114,101,0,0,0,0,0,0,0,45,77,69,76,65,78,71,69,46,86,79,67,0,0,0,0,83,65,66,79,84,85,82,69,46,87,83,65,0,0,0,0,44,13,10,0,0,0,0,0,66,76,68,71,0,0,0,0,45,75,78,79,87,78,46,86,79,67,0,0,0,0,0,0,82,84,65,78,75,46,87,83,65,0,0,0,0,0,0,0,73,66,77,46,80,65,76,0,45,75,73,78,71,46,86,79,67,0,0,0,0,0,0,0,82,69,80,65,73,82,46,87,83,65,0,0,0,0,0,0,45,73,78,83,73,68,46,86,79,67,0,0,0,0,0,0,82,69,70,73,78,69,82,89,46,87,83,65,0,0,0,0,40,102,108,97,103,115,32,38,32,48,120,70,70,41,32,60,32,52,0,0,0,0,0,0,45,72,79,85,83,69,50,46,86,79,67,0,0,0,0,0,81,85,65,68,46,87,83,65,0,0,0,0,0,0,0,0,83,97,98,111,116,101,117,114,0,0,0,0,0,0,0,0,72,105,45,84,101,99,104,0,43,71,85,78,77,85,76,84,73,46,86,79,67,0,0,0,45,72,79,77,69,46,86,79,67,0,0,0,0,0,0,0,77,101,114,99,101,110,97,114,121,0,0,0,0,0,0,0,73,78,84,82,79,55,97,0,80,65,76,65,67,69,46,87,83,65,0,0,0,0,0,0,45,72,65,82,75,46,86,79,67,0,0,0,0,0,0,0,79,84,82,73,75,69,46,87,83,65,0,0,0,0,0,0,82,69,71,37,100,0,0,0,47,104,111,109,101,47,99,97,105,105,105,121,99,117,107,47,112,108,97,121,45,100,117,110,101,47,98,117,105,108,100,47,115,114,99,47,97,110,105,109,97,116,105,111,110,46,99,0,40,112,97,114,97,109,101,116,101,114,32,38,32,48,120,48,56,48,48,41,32,61,61,32,48,32,124,124,32,40,112,97,114,97,109,101,116,101,114,32,38,32,48,120,70,48,48,48,41,32,33,61,32,48,0,0,127,126,126,126,126,126,125,125,124,123,123,122,121,120,119,118,117,116,114,113,112,110,108,107,105,103,102,100,98,96,94,91,89,87,85,82,80,78,75,73,70,67,65,62,59,57,54,51,48,45,42,39,36,33,30,27,24,21,18,15,12,9,6,3,0,253,250,247,244,241,238,235,232,229,226,223,220,217,214,211,208,205,202,199,197,194,191,189,186,183,181,178,176,174,171,169,167,165,162,160,158,156,154,153,151,149,148,146,145,143,142,140,139,138,137,136,135,134,133,133,132,131,131,130,130,130,130,130,130,130,130,130,130,130,131,131,132,133,133,134,135,136,137,138,139,140,142,143,144,146,148,149,151,153,154,156,158,160,162,165,167,169,171,174,176,178,181,183,186,189,191,194,197,199,202,205,208,211,214,217,220,223,226,229,232,235,238,241,244,247,250,253,0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,59,62,65,67,70,73,75,78,80,82,85,87,89,91,94,96,98,100,101,103,105,107,108,110,111,113,114,116,117,118,119,120,121,122,123,123,124,125,125,126,126,126,126,126,0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,59,62,65,67,70,73,75,78,80,82,85,87,89,91,94,96,98,100,101,103,105,107,108,110,111,113,114,116,117,118,119,120,121,122,123,123,124,125,125,126,126,126,126,126,127,126,126,126,126,126,125,125,124,123,123,122,121,120,119,118,117,116,114,113,112,110,108,107,105,103,102,100,98,96,94,91,89,87,85,82,80,78,75,73,70,67,65,62,59,57,54,51,48,45,42,39,36,33,30,27,24,21,18,15,12,9,6,3,0,253,250,247,244,241,238,235,232,229,226,223,220,217,214,211,208,205,202,199,197,194,191,189,186,183,181,178,176,174,171,169,167,165,162,160,158,156,154,153,151,149,148,146,145,143,142,140,139,138,137,136,135,134,133,133,132,131,131,130,130,130,130,130,130,130,130,130,130,130,131,131,132,133,133,134,135,136,137,138,139,140,142,143,144,146,148,149,151,153,154,156,158,160,162,165,167,169,171,174,176,178,181,183,186,189,191,194,197,199,202,205,208,211,214,217,220,223,226,229,232,235,238,241,244,247,250,253,15,1,25,0,16,1,50,0,17,1,100,0,18,1,150,0,19,1,200,0,20,1,44,1,21,1,144,1,22,1,244,1,23,1,188,2,24,1,232,3,25,1,120,5,26,1,8,7,0,0,0,0,4,0,0,0,4,0,0,0,4,0,4,0,0,0,0,0,0,0,4,0,0,0,4,0,4,0,4,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,2,0,4,0,2,0,4,0,4,0,0,0,4,0,2,0,4,0,2,0,4,0,4,0,4,0,0,0,0,0,4,0,4,0,2,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,4,0,0,0,2,0,2,0,0,0,2,0,2,0,2,0,2,0,2,0,4,0,2,0,2,0,2,0,0,0,4,0,2,0,2,0,4,0,4,0,2,0,2,0,2,0,4,0,0,0,0,0,4,0,0,0,4,0,0,0,4,0,4,0,0,0,0,0,0,0,4,0,0,0,4,0,4,0,4,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,2,0,4,0,2,0,4,0,4,0,0,0,4,0,2,0,4,0,2,0,4,0,4,0,4,0,4,0,0,0,0,0,4,0,2,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,4,0,0,0,2,0,2,0,0,0,2,0,2,0,2,0,2,0,2,0,4,0,2,0,2,0,2,0,0,0,4,0,2,0,2,0,4,0,4,0,2,0,2,0,2,0,4,0,0,0,1,0,1,0,1,0,5,0,1,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,4,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,2,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,6,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,0,0,0,0,0,0,85,110,105,116,95,83,101,116,83,112,101,101,100,0,0,0,85,110,105,116,95,83,101,116,79,114,105,101,110,116,97,116,105,111,110,0,0,0,0,0,85,110,105,116,95,82,111,116,97,116,101,0,0,0,0,0,85,110,105,116,95,77,111,118,101,0,0,0,0,0,0,0,85,110,105,116,95,71,101,116,95,66,121,73,110,100,101,120,0,0,0,0,0,0,0,0,85,110,105,116,95,70,114,101,101,0,0,0,0,0,0,0,85,110,105,116,95,65,108,108,111,99,97,116,101,0,0,0,84,101,97,109,95,71,101,116,95,66,121,73,110,100,101,120,0,0,0,0,0,0,0,0,84,101,97,109,95,65,108,108,111,99,97,116,101,0,0,0,83,116,114,117,99,116,117,114,101,95,85,112,100,97,116,101,77,97,112,0,0,0,0,0,83,116,114,117,99,116,117,114,101,95,71,101,116,95,66,121,73,110,100,101,120,0,0,0,83,116,114,117,99,116,117,114,101,95,70,114,101,101,0,0,83,116,114,117,99,116,117,114,101,95,65,108,108,111,99,97,116,101,0,0,0,0,0,0,83,116,114,105,110,103,95,71,101,110,101,114,97,116,101,70,105,108,101,110,97,109,101,0,83,99,114,105,112,116,95,83,116,97,99,107,95,80,101,101,107,0,0,0,0,0,0,0,77,80,85,95,73,110,116,101,114,114,117,112,116,0,0,0,77,80,85,95,67,111,110,116,114,111,108,0,0,0,0,0,72,111,117,115,101,95,71,101,116,95,66,121,73,110,100,101,120,0,0,0,0,0,0,0,71,85,73,95,87,105,100,103,101,116,95,71,101,116,83,104,111,114,116,99,117,116,0,0,71,85,73,95,87,105,100,103,101,116,95,68,114,97,119,0,71,85,73,95,87,105,100,103,101,116,95,67,97,110,99,101,108,95,67,108,105,99,107,0,71,85,73,95,83,99,114,101,101,110,95,70,97,100,101,73,110,50,0,0,0,0,0,0,71,85,73,95,68,114,97,119,83,112,114,105,116,101,0,0,71,85,73,95,68,105,115,112,108,97,121,72,105,110,116,0,71,70,88,95,68,114,97,119,83,112,114,105,116,101,0,0,69,120,112,108,111,115,105,111,110,95,70,117,110,99,95,83,101,116,65,110,105,109,97,116,105,111,110,0,0,0,0,0,68,114,105,118,101,114,95,86,111,105,99,101,95,76,111,97,100,70,105,108,101,0,0,0,68,83,80,95,67,111,110,118,101,114,116,65,117,100,105,111,0,0,0,0,0,0,0,0,67,111,110,102,105,103,95,82,101,97,100,0,0,0,0,0,65,110,105,109,97,116,105,111,110,95,84,105,99,107,0,0,65,110,105,109,97,116,105,111,110,95,70,117,110,99,95,83,101,116,79,118,101,114,108,97,121,83,112,114,105,116,101,0,65,110,105,109,97,116,105,111,110,95,70,117,110,99,95,83,101,116,73,99,111,110,71,114,111,117,112,0,0,0,0,0,65,110,105,109,97,116,105,111,110,95,70,117,110,99,95,83,101,116,71,114,111,117,110,100,83,112,114,105,116,101,0,0,65,110,105,109,97,116,105,111,110,95,70,117,110,99,95,80,97,117,115,101,0,0,0,0,254,255,0,0,0,0,0,0,255,0,255,255,255,255,0,0,0,0,0,255,56,255,0,0,200,0,0,1,200,0,0,0,56,255,0,254,112,254,0,0,144,1,0,2,144,1,0,0,112,254,0,0,0,0,0,0,0,0,0,0,200,0,0,1,200,0,0,0,56,255,0,255,56,255,0,0,144,1,0,2,144,1,0,0,112,254,0,254,112,254,0,0,0,0,0,0,0,0,255,255,1,0,192,255,64,0,191,255,193,255,65,0,63,0,0,0,0,0,0,0,0,255,0,255,0,0,0,1,0,1,0,1,0,0,0,255,0,0,0,1,0,1,0,1,0,0,0,255,0,255,0,255,64,0,128,0,0,0,192,0,255,63,0,0,188,40,0,0,90,20,0,0,142,13,0,0,39,10,0,0,27,8,0,0,189,6,0,0,195,5,0,0,6,5,0,0,116,4,0,0,254,3,0,0,157,3,0,0,75,3,0,0,6,3,0,0,203,2,0,0,151,2,0,0,106,2,0,0,65,2,0,0,29,2,0,0,252,1,0,0,222,1,0,0,195,1,0,0,171,1,0,0,148,1,0,0,127,1,0,0,107,1,0,0,89,1,0,0,72,1,0,0,55,1,0,0,40,1,0,0,26,1,0,0,12,1,0,0,32,64,32,0,224,192,224,0,96,64,96,128,160,192,160,128,255,0,255,255,255,255,0,0,0,3,1,2,3,3,4,5,1,6,1,7,8,9,10,11,1,12,1,19,1,16,1,31,1,28,1,52,1,45,1,59,3,3,13,20,3,3,22,32,3,3,13,53,3,3,38,60,5,6,7,21,5,6,7,33,5,6,7,54,5,6,7,61,9,9,9,9,17,17,23,34,9,9,9,9,25,46,39,62,11,12,11,12,13,18,13,35,11,12,11,12,13,47,13,63,15,15,16,16,17,17,24,36,15,15,16,16,17,17,40,64,19,20,21,22,23,24,25,37,19,20,21,22,23,24,25,65,27,27,27,27,27,27,27,27,14,29,14,55,26,48,41,66,29,30,29,30,29,30,29,30,31,30,31,56,31,49,31,67,33,33,34,34,33,33,34,34,35,35,15,57,35,35,42,68,37,38,39,40,37,38,39,40,41,42,43,58,41,42,43,69,45,45,45,45,46,46,46,46,47,47,47,47,27,50,43,70,49,50,49,50,51,52,51,52,53,54,53,54,55,51,55,71,57,57,58,58,59,59,60,60,61,61,62,62,63,63,44,72,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,73,0,0,1,2,3,254,255,0,0,255,192,191,0,0,0,0,192,255,193,255,1,0,65,0,64,0,63,0,255,255,191,255,0,0,0,0,0,0,0,0,0,0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,64,0,78,0,128,0,142,0,192,0,206,0,0,1,14,1,64,1,78,1,128,1,142,1,192,1,206,1,0,2,14,2,64,2,65,2,66,2,67,2,68,2,69,2,70,2,71,2,72,2,73,2,74,2,75,2,76,2,77,2,78,2,255,255,0,0,128,0,128,0,136,0,136,0,144,0,144,0,152,0,152,0,160,0,160,0,168,0,168,0,176,0,176,0,184,0,184,0,192,0,192,0,200,0,200,0,208,0,208,0,216,0,216,0,224,0,224,0,232,0,232,0,240,0,240,0,248,0,248,0,0,1,0,1,128,1,128,1,255,255,0,0,0,0,0,0,0,0,255,255,1,0,255,255,1,0,0,0,1,0,1,0,0,0,1,0,255,255,1,0,255,255,0,0,255,255,255,255,192,255,1,0,64,0,255,255,1,0,254,255,254,255,0,0,0,255,1,240,16,239,17,241,15,254,2,224,32,252,4,192,64,226,30,222,34,0,0,0,68,48,95,78,41,3,110,122,255,0,0,0,0,0,0,0,254,255,0,0,0,0,0,0,255,0,1,0,0,0,0,0,240,0,16,0,0,0,0,0,160,0,0,0,63,1,0,0,63,1,69,0,63,1,137,0,160,0,137,0,0,0,137,0,0,0,69,0,0,0,0,0,160,0,69,0,0,0,0,0,8,0,2,0,8,0,6,0,4,0,3,0,8,0,5,0,8,0,8,0,8,0,8,0,0,0,1,0,8,0,7,0,255,255,255,0,255,1,0,0,0,0,0,255,0,0,0,1,0,0,0,0,1,255,1,0,1,1,0,0,0,0,0,0,144,2,0,0,0,0,0,0,168,2,1,0,32,242,0,0,32,229,0,0,0,0,0,0,2,0,1,0,0,0,1,0,0,0,252,255,255,255,253,255,2,0,252,255,0,0,253,255,255,255,253,255,0,0,253,255,254,255,252,255,1,0,253,255,0,0,251,255,0,0,251,255,2,0,253,255,2,0,255,255,255,255,253,255,254,255,255,255,254,255,253,255,255,255,251,255,0,0,7,0,249,255,6,0,242,255,1,0,247,255,250,255,0,0,247,255,9,0,250,255,14,0,1,0,7,0,6,0,0,0,1,0,0,0,2,0,0,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,3,0,2,0,2,0,2,0,1,0,2,0,0,0,2,0,3,0,3,0,2,0,3,0,3,0,3,0,4,0,1,0,3,0,1,0,2,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,2,0,0,0,1,0,2,0,0,0,2,0,1,0,3,0,2,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,3,0,1,0,2,0,1,0,1,0,1,0,0,0,0,0,5,0,0,0,8,0,5,0,5,0,8,0,0,0,5,0,8,0,8,0,0,0,0,0,0,0,0,0,15,16,0,0,0,43,0,0,0,0,0,0,0,0,0,0,0,0,0,110,0,0,0,0,61,2,41,4,5,6,8,41,10,11,100,106,53,12,54,95,11,2,3,4,5,6,7,8,9,10,40,40,53,13,54,65,3,31,50,48,33,19,34,35,36,24,37,38,39,52,51,25,26,17,20,32,21,23,49,18,47,22,46,27,29,28,7,12,1,31,50,48,33,19,34,35,36,24,37,38,39,52,51,25,26,17,20,32,21,23,49,18,47,22,46,27,29,28,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,121,120,119,118,117,116,115,114,113,112,121,120,119,118,117,116,115,114,113,112,121,120,119,118,117,116,115,114,113,112,76,75,86,84,81,0,89,97,79,0,85,83,80,0,0,121,120,119,118,117,116,115,114,113,112,65,66,67,68,69,70,71,72,0,0,0,0,0,0,2,0,4,0,1,0,1,0,2,0,1,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,1,0,0,0,0,0,0,0,113,0,114,0,115,0,116,0,117,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,8,152,48,0,0,0,0,0,0,0,16,0,0,0,0,0,255,255,0,0,0,0,0,0,255,255,0,0,0,0,0,0,236,81,0,0,0,0,0,0,85,139,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,3,0,2,0,5,0,4,0,3,0,2,0,1,0,255,255,2,0,1,0,0,0,255,255,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+61480);



var tempDoublePtr = Runtime.alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}


  function _abort() {
      Module['abort']();
    }

  function ___assert_fail(condition, filename, line, func) {
      ABORT = true;
      throw 'Assertion failed: ' + Pointer_stringify(condition) + ', at: ' + [filename ? Pointer_stringify(filename) : 'unknown filename', line, func ? Pointer_stringify(func) : 'unknown function'] + ' at ' + stackTrace();
    }

  function _llvm_lifetime_start() {}

  function _js_driver_music_is_playing() {
  Module['printErr']('missing function: js_driver_music_is_playing'); abort(-1);
  }

   
  Module["_strcpy"] = _strcpy;

  
   
  Module["_strlen"] = _strlen; 
  Module["_strcat"] = _strcat;


  function _js_driver_music_fade_out() {
  Module['printErr']('missing function: js_driver_music_fade_out'); abort(-1);
  }

  
  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 
  Module["_memcpy"] = _memcpy;var _llvm_memcpy_p0i8_p0i8_i32=_memcpy;

  
   
  Module["_memset"] = _memset;var _llvm_memset_p0i8_i32=_memset;

  
  
  
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  
  
  var ___errno_state=0;function ___setErrNo(value) {
      // For convenient setting and returning of errno.
      tempBigInt=value;HEAP8[(___errno_state)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___errno_state)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___errno_state)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___errno_state)+(3))|0)]=tempBigInt&0xff;
      return value;
    }
  
  var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up--; up) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            continue;
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          if (stream.tty.output.length) {
            stream.tty.ops.put_char(stream.tty, 10);
          }
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              result = process['stdin']['read']();
              if (!result) {
                if (process['stdin']['_readableState'] && process['stdin']['_readableState']['ended']) {
                  return null;  // EOF
                }
                return undefined;  // no data available
              }
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['print'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['printErr'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }}};
  
  var MEMFS={ops_table:null,CONTENT_OWNING:1,CONTENT_FLEXIBLE:2,CONTENT_FIXED:3,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            },
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.contents = [];
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },ensureFlexible:function (node) {
        if (node.contentMode !== MEMFS.CONTENT_FLEXIBLE) {
          var contents = node.contents;
          node.contents = Array.prototype.slice.call(contents);
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        }
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.contents.length;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.ensureFlexible(node);
            var contents = node.contents;
            if (attr.size < contents.length) contents.length = attr.size;
            else while (attr.size > contents.length) contents.push(0);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else
          {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          var node = stream.node;
          node.timestamp = Date.now();
          var contents = node.contents;
          if (length && contents.length === 0 && position === 0 && buffer.subarray) {
            // just replace it with the new data
            if (canOwn && offset === 0) {
              node.contents = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
              node.contentMode = (buffer.buffer === HEAP8.buffer) ? MEMFS.CONTENT_OWNING : MEMFS.CONTENT_FIXED;
            } else {
              node.contents = new Uint8Array(buffer.subarray(offset, offset+length));
              node.contentMode = MEMFS.CONTENT_FIXED;
            }
            return length;
          }
          MEMFS.ensureFlexible(node);
          var contents = node.contents;
          while (contents.length < position) contents.push(0);
          for (var i = 0; i < length; i++) {
            contents[position + i] = buffer[offset + i];
          }
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.contents.length;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.ungotten = [];
          stream.position = position;
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.ensureFlexible(stream.node);
          var contents = stream.node.contents;
          var limit = offset + length;
          while (limit > contents.length) contents.push(0);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        }}};
  
  var IDBFS={dbs:{},indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        // reuse all of the core MEMFS functionality
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },getDB:function (name, callback) {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        req.onupgradeneeded = function(e) {
          var db = e.target.result;
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          fileStore.createIndex('timestamp', 'timestamp', { unique: false });
        };
        req.onsuccess = function() {
          db = req.result;
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function() {
          callback(this.error);
        };
      },getLocalSet:function (mount, callback) {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { timestamp: stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },getRemoteSet:function (mount, callback) {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
  
          var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
          transaction.onerror = function() { callback(this.error); };
  
          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
          var index = store.index('timestamp');
  
          index.openKeyCursor().onsuccess = function(event) {
            var cursor = event.target.result;
  
            if (!cursor) {
              return callback(null, { type: 'remote', db: db, entries: entries });
            }
  
            entries[cursor.primaryKey] = { timestamp: cursor.key };
  
            cursor.continue();
          };
        });
      },loadLocalEntry:function (path, callback) {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { timestamp: stat.mtime, mode: stat.mode });
        } else if (FS.isFile(stat.mode)) {
          return callback(null, { timestamp: stat.mtime, mode: stat.mode, contents: node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },storeLocalEntry:function (path, entry, callback) {
        try {
          if (FS.isDir(entry.mode)) {
            FS.mkdir(path, entry.mode);
          } else if (FS.isFile(entry.mode)) {
            FS.writeFile(path, entry.contents, { encoding: 'binary', canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.utime(path, entry.timestamp, entry.timestamp);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },removeLocalEntry:function (path, callback) {
        try {
          var lookup = FS.lookupPath(path);
          var stat = FS.stat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },loadRemoteEntry:function (store, path, callback) {
        var req = store.get(path);
        req.onsuccess = function(event) { callback(null, event.target.result); };
        req.onerror = function() { callback(this.error); };
      },storeRemoteEntry:function (store, path, entry, callback) {
        var req = store.put(entry, path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function() { callback(this.error); };
      },removeRemoteEntry:function (store, path, callback) {
        var req = store.delete(path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function() { callback(this.error); };
      },reconcile:function (src, dst, callback) {
        var total = 0;
  
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create.push(key);
            total++;
          }
        });
  
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          var e = dst.entries[key];
          var e2 = src.entries[key];
          if (!e2) {
            remove.push(key);
            total++;
          }
        });
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var completed = 0;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return callback(err);
            }
            return;
          }
          if (++completed >= total) {
            return callback(null);
          }
        };
  
        transaction.onerror = function() { done(this.error); };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (path) {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        remove.sort().reverse().forEach(function(path) {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        });
      }};
  
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
            // propagate write bits to execute bits.
            stat.mode = stat.mode | ((stat.mode & 146) >> 1);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:function (flags) {
        if (flags in NODEFS.flagsToPermissionStringMap) {
          return NODEFS.flagsToPermissionStringMap[flags];
        } else {
          return flags;
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsToPermissionString(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(length);
          var res;
          try {
            res = fs.readSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          if (res > 0) {
            for (var i = 0; i < res; i++) {
              buffer[offset + i] = nbuffer[i];
            }
          }
          return res;
        },write:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(buffer.subarray(offset, offset + length));
          var res;
          try {
            res = fs.writeSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return res;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
  
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
  
          stream.position = position;
          return position;
        }}};
  
  var _stdin=allocate(1, "i32*", ALLOC_STATIC);
  
  var _stdout=allocate(1, "i32*", ALLOC_STATIC);
  
  var _stderr=allocate(1, "i32*", ALLOC_STATIC);
  
  function _fflush(stream) {
      // int fflush(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
      // we don't currently perform any user-space buffering of data
    }var FS={root:null,mounts:[],devices:[null],streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || {};
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
              
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            this.mounted = null;
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
          };
  
          FS.FSNode.prototype = {};
  
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
  
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); },
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); },
            },
          });
        }
  
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return !!node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var accmode = flag & 2097155;
        var perms = ['r', 'w', 'rw'][accmode];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        return FS.nodePermissions(dir, 'x');
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if ((flags & 2097155) !== 0 ||  // opening for write
              (flags & 512)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        if (stream.__proto__) {
          // reuse the object
          stream.__proto__ = FS.FSStream.prototype;
        } else {
          var newStream = new FS.FSStream();
          for (var p in stream) {
            newStream[p] = stream[p];
          }
          stream = newStream;
        }
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },getStreamFromPtr:function (ptr) {
        return FS.streams[ptr - 1];
      },getPtrForStream:function (stream) {
        return stream ? stream.fd + 1 : 0;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },getMounts:function (mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return callback(err);
            }
            return;
          }
          if (++completed >= mounts.length) {
            callback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function (type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // POSIX says unlink should set EPERM, not EISDIR
          if (err === ERRNO_CODES.EISDIR) err = ERRNO_CODES.EPERM;
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:function (path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return link.node_ops.readlink(link);
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // check permissions
        var err = FS.mayOpen(node, flags);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            Module['printErr']('read file: ' + path);
          }
        }
        return stream;
      },close:function (stream) {
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
      },llseek:function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        return stream.stream_ops.llseek(stream, offset, whence);
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = '';
          var utf8 = new Runtime.UTF8Processor();
          for (var i = 0; i < length; i++) {
            ret += utf8.processCChar(buf[i]);
          }
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        opts.encoding = opts.encoding || 'utf8';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var stream = FS.open(path, opts.flags, opts.mode);
        if (opts.encoding === 'utf8') {
          var utf8 = new Runtime.UTF8Processor();
          var buf = new Uint8Array(utf8.processJSString(data));
          FS.write(stream, buf, 0, buf.length, 0, opts.canOwn);
        } else if (opts.encoding === 'binary') {
          FS.write(stream, data, 0, data.length, 0, opts.canOwn);
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function() { return 0; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        tempBigInt=FS.getPtrForStream(stdin);HEAP8[(_stdin)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stdin)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stdin)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stdin)+(3))|0)]=tempBigInt&0xff;
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
  
        var stdout = FS.open('/dev/stdout', 'w');
        tempBigInt=FS.getPtrForStream(stdout);HEAP8[(_stdout)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stdout)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stdout)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stdout)+(3))|0)]=tempBigInt&0xff;
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
  
        var stderr = FS.open('/dev/stderr', 'w');
        tempBigInt=FS.getPtrForStream(stderr);HEAP8[(_stderr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stderr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stderr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((_stderr)+(3))|0)]=tempBigInt&0xff;
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno) {
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
          this.message = ERRNO_MESSAGES[errno];
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = Math.floor(idx / this.chunkSize);
          return this.getter(chunkNum)[chunkOffset];
        }
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        }
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            // Find length
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var chunkSize = 1024*1024; // Chunk size in bytes
  
            if (!hasByteServing) chunkSize = datalength;
  
            // Function to get a range from the remote URL.
            var doXHR = (function(from, to) {
              if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
              // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
              // Some hints to the browser that we want binary data.
              if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
              if (xhr.overrideMimeType) {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
              }
  
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              if (xhr.response !== undefined) {
                return new Uint8Array(xhr.response || []);
              } else {
                return intArrayFromString(xhr.responseText || '', true);
              }
            });
            var lazyArray = this;
            lazyArray.setDataGetter(function(chunkNum) {
              var start = chunkNum * chunkSize;
              var end = (chunkNum+1) * chunkSize - 1; // including this byte
              end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
              if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
              return lazyArray.chunks[chunkNum];
            });
  
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
        }
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperty(lazyArray, "length", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._length;
              }
          });
          Object.defineProperty(lazyArray, "chunkSize", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._chunkSize;
              }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn) {
        Browser.init();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        function processData(byteArray) {
          function finish(byteArray) {
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency('cp ' + fullname);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency('cp ' + fullname);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency('cp ' + fullname);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};
  
  var Browser={mainLoop:{scheduler:null,method:"",shouldPause:false,paused:false,queue:[],pause:function () {
          Browser.mainLoop.shouldPause = true;
        },resume:function () {
          if (Browser.mainLoop.paused) {
            Browser.mainLoop.paused = false;
            Browser.mainLoop.scheduler();
          }
          Browser.mainLoop.shouldPause = false;
        },updateStatus:function () {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        }},isFullScreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
  
        if (Browser.initted || ENVIRONMENT_IS_WORKER) return;
        Browser.initted = true;
  
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              Runtime.warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module["preloadedImages"][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            var audio = new Audio();
            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            Browser.safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
  
        // Canvas event setup
  
        var canvas = Module['canvas'];
        
        // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
        // Module['forcedAspectRatio'] = 4 / 3;
        
        canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                    canvas['mozRequestPointerLock'] ||
                                    canvas['webkitRequestPointerLock'] ||
                                    canvas['msRequestPointerLock'] ||
                                    function(){};
        canvas.exitPointerLock = document['exitPointerLock'] ||
                                 document['mozExitPointerLock'] ||
                                 document['webkitExitPointerLock'] ||
                                 document['msExitPointerLock'] ||
                                 function(){}; // no-op if function does not exist
        canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
  
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === canvas ||
                                document['mozPointerLockElement'] === canvas ||
                                document['webkitPointerLockElement'] === canvas ||
                                document['msPointerLockElement'] === canvas;
        }
  
        document.addEventListener('pointerlockchange', pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
        document.addEventListener('mspointerlockchange', pointerLockChange, false);
  
        if (Module['elementPointerLock']) {
          canvas.addEventListener("click", function(ev) {
            if (!Browser.pointerLock && canvas.requestPointerLock) {
              canvas.requestPointerLock();
              ev.preventDefault();
            }
          }, false);
        }
      },createContext:function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        var ctx;
        var errorInfo = '?';
        function onContextCreationError(event) {
          errorInfo = event.statusMessage || errorInfo;
        }
        try {
          if (useWebGL) {
            var contextAttributes = {
              antialias: false,
              alpha: false
            };
  
            if (webGLContextAttributes) {
              for (var attribute in webGLContextAttributes) {
                contextAttributes[attribute] = webGLContextAttributes[attribute];
              }
            }
  
  
            canvas.addEventListener('webglcontextcreationerror', onContextCreationError, false);
            try {
              ['experimental-webgl', 'webgl'].some(function(webglId) {
                return ctx = canvas.getContext(webglId, contextAttributes);
              });
            } finally {
              canvas.removeEventListener('webglcontextcreationerror', onContextCreationError, false);
            }
          } else {
            ctx = canvas.getContext('2d');
          }
          if (!ctx) throw ':(';
        } catch (e) {
          Module.print('Could not create canvas: ' + [errorInfo, e]);
          return null;
        }
        if (useWebGL) {
          // Set the background of the WebGL canvas to black
          canvas.style.backgroundColor = "black";
  
          // Warn on context loss
          canvas.addEventListener('webglcontextlost', function(event) {
            alert('WebGL context lost. You will need to reload the page.');
          }, false);
        }
        if (setInModule) {
          GLctx = Module.ctx = ctx;
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function (canvas, useWebGL, setInModule) {},fullScreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullScreen:function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Module['canvas'];
        function fullScreenChange() {
          Browser.isFullScreen = false;
          var canvasContainer = canvas.parentNode;
          if ((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
               document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
               document['fullScreenElement'] || document['fullscreenElement'] ||
               document['msFullScreenElement'] || document['msFullscreenElement'] ||
               document['webkitCurrentFullScreenElement']) === canvasContainer) {
            canvas.cancelFullScreen = document['cancelFullScreen'] ||
                                      document['mozCancelFullScreen'] ||
                                      document['webkitCancelFullScreen'] ||
                                      document['msExitFullscreen'] ||
                                      document['exitFullscreen'] ||
                                      function() {};
            canvas.cancelFullScreen = canvas.cancelFullScreen.bind(document);
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullScreen = true;
            if (Browser.resizeCanvas) Browser.setFullScreenCanvasSize();
          } else {
            
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
            
            if (Browser.resizeCanvas) Browser.setWindowedCanvasSize();
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullScreen);
          Browser.updateCanvasDimensions(canvas);
        }
  
        if (!Browser.fullScreenHandlersInstalled) {
          Browser.fullScreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullScreenChange, false);
          document.addEventListener('mozfullscreenchange', fullScreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
          document.addEventListener('MSFullscreenChange', fullScreenChange, false);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
        
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        canvasContainer.requestFullScreen = canvasContainer['requestFullScreen'] ||
                                            canvasContainer['mozRequestFullScreen'] ||
                                            canvasContainer['msRequestFullscreen'] ||
                                           (canvasContainer['webkitRequestFullScreen'] ? function() { canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
        canvasContainer.requestFullScreen();
      },requestAnimationFrame:function requestAnimationFrame(func) {
        if (typeof window === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
          setTimeout(func, 1000/60);
        } else {
          if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window['requestAnimationFrame'] ||
                                           window['mozRequestAnimationFrame'] ||
                                           window['webkitRequestAnimationFrame'] ||
                                           window['msRequestAnimationFrame'] ||
                                           window['oRequestAnimationFrame'] ||
                                           window['setTimeout'];
          }
          window.requestAnimationFrame(func);
        }
      },safeCallback:function (func) {
        return function() {
          if (!ABORT) return func.apply(null, arguments);
        };
      },safeRequestAnimationFrame:function (func) {
        return Browser.requestAnimationFrame(function() {
          if (!ABORT) func();
        });
      },safeSetTimeout:function (func, timeout) {
        return setTimeout(function() {
          if (!ABORT) func();
        }, timeout);
      },safeSetInterval:function (func, timeout) {
        return setInterval(function() {
          if (!ABORT) func();
        }, timeout);
      },getMimetype:function (name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function (func) {
        if(!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function (event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function (event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },getMouseWheelDelta:function (event) {
        return Math.max(-1, Math.min(1, event.type === 'DOMMouseScroll' ? event.detail : -event.wheelDelta));
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,calculateMouseEvent:function (event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }

          // check if SDL is available
          if (typeof SDL != "undefined") {
          	Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
          	Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
          	// just add the mouse delta to the current absolut mouse position
          	// FIXME: ideally this should be clamped against the canvas size and zero
          	Browser.mouseX += Browser.mouseMovementX;
          	Browser.mouseY += Browser.mouseMovementY;
          }        
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var x, y;
          
          // Neither .scrollX or .pageXOffset are defined in a spec, but
          // we prefer .scrollX because it is currently in a spec draft.
          // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
          var scrollX = ((typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset);
          var scrollY = ((typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset);
          if (event.type == 'touchstart' ||
              event.type == 'touchend' ||
              event.type == 'touchmove') {
            var t = event.touches.item(0);
            if (t) {
              x = t.pageX - (scrollX + rect.left);
              y = t.pageY - (scrollY + rect.top);
            } else {
              return;
            }
          } else {
            x = event.pageX - (scrollX + rect.left);
            y = event.pageY - (scrollY + rect.top);
          }
  
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
  
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },xhrLoad:function (url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            onload(xhr.response);
          } else {
            onerror();
          }
        };
        xhr.onerror = onerror;
        xhr.send(null);
      },asyncLoad:function (url, onload, onerror, noRunDep) {
        Browser.xhrLoad(url, function(arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (!noRunDep) removeRunDependency('al ' + url);
        }, function(event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (!noRunDep) addRunDependency('al ' + url);
      },resizeListeners:[],updateResizeListeners:function () {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function (width, height, noUpdates) {
        var canvas = Module['canvas'];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullScreenCanvasSize:function () {
        // check if SDL is available   
        if (typeof SDL != "undefined") {
        	var flags = ((((HEAPU8[((SDL.screen+Runtime.QUANTUM_SIZE*0)|0)])|(HEAPU8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(1))|0)]<<8)|(HEAPU8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(2))|0)]<<16)|(HEAPU8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(3))|0)]<<24))>>>0));
        	flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
        	tempBigInt=flags;HEAP8[((SDL.screen+Runtime.QUANTUM_SIZE*0)|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(3))|0)]=tempBigInt&0xff
        }
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function () {
        // check if SDL is available       
        if (typeof SDL != "undefined") {
        	var flags = ((((HEAPU8[((SDL.screen+Runtime.QUANTUM_SIZE*0)|0)])|(HEAPU8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(1))|0)]<<8)|(HEAPU8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(2))|0)]<<16)|(HEAPU8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(3))|0)]<<24))>>>0));
        	flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
        	tempBigInt=flags;HEAP8[((SDL.screen+Runtime.QUANTUM_SIZE*0)|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((SDL.screen+Runtime.QUANTUM_SIZE*0)+(3))|0)]=tempBigInt&0xff
        }
        Browser.updateResizeListeners();
      },updateCanvasDimensions:function (canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
          if (w/h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
             document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
             document['fullScreenElement'] || document['fullscreenElement'] ||
             document['msFullScreenElement'] || document['msFullscreenElement'] ||
             document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
           var factor = Math.min(screen.width / w, screen.height / h);
           w = Math.round(w * factor);
           h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width  != w) canvas.width  = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty( "width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width  != wNative) canvas.width  = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty( "width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty( "width");
              canvas.style.removeProperty("height");
            }
          }
        }
      }};var SDL={defaults:{width:600,height:400,copyOnLock:false},version:null,surfaces:{},canvasPool:[],events:[],fonts:[null],audios:[null],rwops:[null],music:{audio:null,volume:1},mixerFrequency:22050,mixerFormat:32784,mixerNumChannels:2,mixerChunkSize:1024,channelMinimumNumber:0,GL:false,glAttributes:{0:3,1:3,2:2,3:0,4:0,5:1,6:16,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:1,16:0,17:0,18:0},keyboardState:null,keyboardMap:{},canRequestFullscreen:false,isRequestingFullscreen:false,textInput:false,startTime:null,initFlags:0,buttonState:0,modState:0,DOMButtons:[0,0,0],DOMEventToSDLEvent:{},keyCodes:{16:1249,17:1248,18:1250,20:1081,33:1099,34:1102,35:1101,36:1098,37:1104,38:1106,39:1103,40:1105,44:316,45:1097,46:127,91:1251,93:1125,96:1122,97:1113,98:1114,99:1115,100:1116,101:1117,102:1118,103:1119,104:1120,105:1121,106:1109,107:1111,109:1110,110:1123,111:1108,112:1082,113:1083,114:1084,115:1085,116:1086,117:1087,118:1088,119:1089,120:1090,121:1091,122:1092,123:1093,124:1128,125:1129,126:1130,127:1131,128:1132,129:1133,130:1134,131:1135,132:1136,133:1137,134:1138,135:1139,144:1107,160:94,161:33,162:34,163:35,164:36,165:37,166:38,167:95,168:40,169:41,170:42,171:43,172:124,173:45,174:123,175:125,176:126,181:127,182:129,183:128,188:44,190:46,191:47,192:96,219:91,220:92,221:93,222:39},scanCodes:{8:42,9:43,13:40,27:41,32:44,35:204,39:53,44:54,46:55,47:56,48:39,49:30,50:31,51:32,52:33,53:34,54:35,55:36,56:37,57:38,58:203,59:51,61:46,91:47,92:49,93:48,96:52,97:4,98:5,99:6,100:7,101:8,102:9,103:10,104:11,105:12,106:13,107:14,108:15,109:16,110:17,111:18,112:19,113:20,114:21,115:22,116:23,117:24,118:25,119:26,120:27,121:28,122:29,127:76,305:224,308:226,316:70},loadRect:function (rect) {
        return {
          x: ((((HEAPU8[((rect + 0)|0)])|(HEAPU8[(((rect + 0)+(1))|0)]<<8)|(HEAPU8[(((rect + 0)+(2))|0)]<<16)|(HEAPU8[(((rect + 0)+(3))|0)]<<24))|0)),
          y: ((((HEAPU8[((rect + 4)|0)])|(HEAPU8[(((rect + 4)+(1))|0)]<<8)|(HEAPU8[(((rect + 4)+(2))|0)]<<16)|(HEAPU8[(((rect + 4)+(3))|0)]<<24))|0)),
          w: ((((HEAPU8[((rect + 8)|0)])|(HEAPU8[(((rect + 8)+(1))|0)]<<8)|(HEAPU8[(((rect + 8)+(2))|0)]<<16)|(HEAPU8[(((rect + 8)+(3))|0)]<<24))|0)),
          h: ((((HEAPU8[((rect + 12)|0)])|(HEAPU8[(((rect + 12)+(1))|0)]<<8)|(HEAPU8[(((rect + 12)+(2))|0)]<<16)|(HEAPU8[(((rect + 12)+(3))|0)]<<24))|0))
        };
      },loadColorToCSSRGB:function (color) {
        var rgba = ((((HEAPU8[(color)])|(HEAPU8[(((color)+(1))|0)]<<8)|(HEAPU8[(((color)+(2))|0)]<<16)|(HEAPU8[(((color)+(3))|0)]<<24))|0));
        return 'rgb(' + (rgba&255) + ',' + ((rgba >> 8)&255) + ',' + ((rgba >> 16)&255) + ')';
      },loadColorToCSSRGBA:function (color) {
        var rgba = ((((HEAPU8[(color)])|(HEAPU8[(((color)+(1))|0)]<<8)|(HEAPU8[(((color)+(2))|0)]<<16)|(HEAPU8[(((color)+(3))|0)]<<24))|0));
        return 'rgba(' + (rgba&255) + ',' + ((rgba >> 8)&255) + ',' + ((rgba >> 16)&255) + ',' + (((rgba >> 24)&255)/255) + ')';
      },translateColorToCSSRGBA:function (rgba) {
        return 'rgba(' + (rgba&0xff) + ',' + (rgba>>8 & 0xff) + ',' + (rgba>>16 & 0xff) + ',' + (rgba>>>24)/0xff + ')';
      },translateRGBAToCSSRGBA:function (r, g, b, a) {
        return 'rgba(' + (r&0xff) + ',' + (g&0xff) + ',' + (b&0xff) + ',' + (a&0xff)/255 + ')';
      },translateRGBAToColor:function (r, g, b, a) {
        return r | g << 8 | b << 16 | a << 24;
      },makeSurface:function (width, height, flags, usePageCanvas, source, rmask, gmask, bmask, amask) {
        flags = flags || 0;
        var is_SDL_HWSURFACE = flags & 0x00000001;
        var is_SDL_HWPALETTE = flags & 0x00200000;
        var is_SDL_OPENGL = flags & 0x04000000;
  
        var surf = _malloc(60);
        var pixelFormat = _malloc(44);
        //surface with SDL_HWPALETTE flag is 8bpp surface (1 byte)
        var bpp = is_SDL_HWPALETTE ? 1 : 4;
        var buffer = 0;
  
        // preemptively initialize this for software surfaces,
        // otherwise it will be lazily initialized inside of SDL_LockSurface
        if (!is_SDL_HWSURFACE && !is_SDL_OPENGL) {
          buffer = _malloc(width * height * 4);
        }
  
        tempBigInt=flags;HEAP8[(surf)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(3))|0)]=tempBigInt&0xff;
        tempBigInt=pixelFormat;HEAP8[(((surf)+(4))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(5))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(6))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(7))|0)]=tempBigInt&0xff;
        tempBigInt=width;HEAP8[(((surf)+(8))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(9))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(10))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(11))|0)]=tempBigInt&0xff;
        tempBigInt=height;HEAP8[(((surf)+(12))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(13))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(14))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(15))|0)]=tempBigInt&0xff;
        tempBigInt=width * bpp;HEAP8[(((surf)+(16))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(17))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(18))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(19))|0)]=tempBigInt&0xff;  // assuming RGBA or indexed for now,
                                                                                          // since that is what ImageData gives us in browsers
        tempBigInt=buffer;HEAP8[(((surf)+(20))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(21))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(22))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(23))|0)]=tempBigInt&0xff;
        tempBigInt=0;HEAP8[(((surf)+(36))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(37))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(38))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(39))|0)]=tempBigInt&0xff;
        tempBigInt=1;HEAP8[(((surf)+(56))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(57))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(58))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(59))|0)]=tempBigInt&0xff;
  
        tempBigInt=0 /* XXX missing C define SDL_PIXELFORMAT_RGBA8888 */;HEAP8[(pixelFormat)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(3))|0)]=tempBigInt&0xff;
        tempBigInt=0;HEAP8[(((pixelFormat)+(4))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(5))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(6))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(7))|0)]=tempBigInt&0xff;// TODO
        HEAP8[(((pixelFormat)+(8))|0)]=bpp * 8;
        HEAP8[(((pixelFormat)+(9))|0)]=bpp;
  
        tempBigInt=rmask || 0x000000ff;HEAP8[(((pixelFormat)+(12))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(13))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(14))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(15))|0)]=tempBigInt&0xff;
        tempBigInt=gmask || 0x0000ff00;HEAP8[(((pixelFormat)+(16))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(17))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(18))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(19))|0)]=tempBigInt&0xff;
        tempBigInt=bmask || 0x00ff0000;HEAP8[(((pixelFormat)+(20))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(21))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(22))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(23))|0)]=tempBigInt&0xff;
        tempBigInt=amask || 0xff000000;HEAP8[(((pixelFormat)+(24))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(25))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(26))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((pixelFormat)+(27))|0)]=tempBigInt&0xff;
  
        // Decide if we want to use WebGL or not
        SDL.GL = SDL.GL || is_SDL_OPENGL;
        var canvas;
        if (!usePageCanvas) {
          if (SDL.canvasPool.length > 0) {
            canvas = SDL.canvasPool.pop();
          } else {
            canvas = document.createElement('canvas');
          }
          canvas.width = width;
          canvas.height = height;
        } else {
          canvas = Module['canvas'];
        }
  
        var webGLContextAttributes = {
          antialias: ((SDL.glAttributes[13 /*SDL_GL_MULTISAMPLEBUFFERS*/] != 0) && (SDL.glAttributes[14 /*SDL_GL_MULTISAMPLESAMPLES*/] > 1)),
          depth: (SDL.glAttributes[6 /*SDL_GL_DEPTH_SIZE*/] > 0),
          stencil: (SDL.glAttributes[7 /*SDL_GL_STENCIL_SIZE*/] > 0)
        };
        
        var ctx = Browser.createContext(canvas, is_SDL_OPENGL, usePageCanvas, webGLContextAttributes);
              
        SDL.surfaces[surf] = {
          width: width,
          height: height,
          canvas: canvas,
          ctx: ctx,
          surf: surf,
          buffer: buffer,
          pixelFormat: pixelFormat,
          alpha: 255,
          flags: flags,
          locked: 0,
          usePageCanvas: usePageCanvas,
          source: source,
  
          isFlagSet: function(flag) {
            return flags & flag;
          }
        };
  
        return surf;
      },copyIndexedColorData:function (surfData, rX, rY, rW, rH) {
        // HWPALETTE works with palette
        // setted by SDL_SetColors
        if (!surfData.colors) {
          return;
        }
        
        var fullWidth  = Module['canvas'].width;
        var fullHeight = Module['canvas'].height;
  
        var startX  = rX || 0;
        var startY  = rY || 0;
        var endX    = (rW || (fullWidth - startX)) + startX;
        var endY    = (rH || (fullHeight - startY)) + startY;
        
        var buffer  = surfData.buffer;
        var data    = surfData.image.data;
        var colors  = surfData.colors;
  
        for (var y = startY; y < endY; ++y) {
          var indexBase = y * fullWidth;
          var colorBase = indexBase * 4;
          for (var x = startX; x < endX; ++x) {
            // HWPALETTE have only 256 colors (not rgba)
            var index = HEAPU8[((buffer + indexBase + x)|0)] * 3;
            var colorOffset = colorBase + x * 4;
  
            data[colorOffset   ] = colors[index   ];
            data[colorOffset +1] = colors[index +1];
            data[colorOffset +2] = colors[index +2];
            //unused: data[colorOffset +3] = color[index +3];
          }
        }
      },freeSurface:function (surf) {
        var refcountPointer = surf + 56;
        var refcount = ((((HEAPU8[(refcountPointer)])|(HEAPU8[(((refcountPointer)+(1))|0)]<<8)|(HEAPU8[(((refcountPointer)+(2))|0)]<<16)|(HEAPU8[(((refcountPointer)+(3))|0)]<<24))|0));
        if (refcount > 1) {
          tempBigInt=refcount - 1;HEAP8[(refcountPointer)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((refcountPointer)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((refcountPointer)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((refcountPointer)+(3))|0)]=tempBigInt&0xff;
          return;
        }
  
        var info = SDL.surfaces[surf];
        if (!info.usePageCanvas && info.canvas) SDL.canvasPool.push(info.canvas);
        if (info.buffer) _free(info.buffer);
        _free(info.pixelFormat);
        _free(surf);
        SDL.surfaces[surf] = null;
      },touchX:0,touchY:0,savedKeydown:null,receiveEvent:function (event) {
        if (Module['disable_sdl_envents'] == true) {
          return;
        }

        switch(event.type) {
          case 'touchstart':
            event.preventDefault();
            var touch = event.touches[0];
            touchX = touch.pageX;
            touchY = touch.pageY;
            var event = {
              type: 'mousedown',
              button: 0,
              pageX: touchX,
              pageY: touchY,
              touching: true,
            };
            SDL.DOMButtons[0] = 1;
            SDL.events.push(event);
            break;
          case 'touchmove':
            event.preventDefault();
            var touch = event.touches[0];
            touchX = touch.pageX;
            touchY = touch.pageY;
            event = {
              type: 'mousemove',
              button: 0,
              pageX: touchX,
              pageY: touchY,
              touching: true,
            };
            SDL.events.push(event);
            break;
          case 'touchend':
            event.preventDefault();
            event = {
              type: 'mouseup',
              button: 0,
              pageX: touchX,
              pageY: touchY,
              touching: true,
            };
            SDL.DOMButtons[0] = 0;
            SDL.events.push(event);
            break;
          case 'mousemove':
            if (Browser.pointerLock) {
              // workaround for firefox bug 750111
              if ('mozMovementX' in event) {
                event['movementX'] = event['mozMovementX'];
                event['movementY'] = event['mozMovementY'];
              }
              // workaround for Firefox bug 782777
              if (event['movementX'] == 0 && event['movementY'] == 0) {
                // ignore a mousemove event if it doesn't contain any movement info
                // (without pointer lock, we infer movement from pageX/pageY, so this check is unnecessary)
                event.preventDefault();
                return;
              }
            }
            // fall through
          case 'keydown': case 'keyup': case 'keypress': case 'mousedown': case 'mouseup': case 'DOMMouseScroll': case 'mousewheel':
            // If we preventDefault on keydown events, the subsequent keypress events
            // won't fire. However, it's fine (and in some cases necessary) to
            // preventDefault for keys that don't generate a character. Otherwise,
            // preventDefault is the right thing to do in general.
            if (event.type !== 'keydown' || (!SDL.unicode && !SDL.textInput) || (event.keyCode === 8 /* backspace */ || event.keyCode === 9 /* tab */)) {
              event.preventDefault();
            }

            if (event.type == "mousedown" || event.type == "mouseup") {
              var event1 = {
                type: 'mousemove',
                button: button,
                pageX: event.pageX,
                pageY: event.pageY,
                touching: event.touching
              };
              SDL.events.push(event1);
            }

            if (event.type == 'DOMMouseScroll' || event.type == 'mousewheel') {
              var button = Browser.getMouseWheelDelta(event) > 0 ? 4 : 3;
              var event2 = {
                type: 'mousedown',
                button: button,
                pageX: event.pageX,
                pageY: event.pageY
              };
              SDL.events.push(event2);
              event = {
                type: 'mouseup',
                button: button,
                pageX: event.pageX,
                pageY: event.pageY
              };
            } else if (event.type == 'mousedown') {
              SDL.DOMButtons[event.button] = 1;
            } else if (event.type == 'mouseup') {
              // ignore extra ups, can happen if we leave the canvas while pressing down, then return,
              // since we add a mouseup in that case
              if (!SDL.DOMButtons[event.button]) {
                return;
              }
  
              SDL.DOMButtons[event.button] = 0;
            }
  
            // We can only request fullscreen as the result of user input.
            // Due to this limitation, we toggle a boolean on keydown which
            // SDL_WM_ToggleFullScreen will check and subsequently set another
            // flag indicating for us to request fullscreen on the following
            // keyup. This isn't perfect, but it enables SDL_WM_ToggleFullScreen
            // to work as the result of a keypress (which is an extremely
            // common use case).
            if (event.type === 'keydown' || event.type === 'mousedown') {
              SDL.canRequestFullscreen = true;
            } else if (event.type === 'keyup' || event.type === 'mouseup') {
              if (SDL.isRequestingFullscreen) {
                Module['requestFullScreen'](true, true);
                SDL.isRequestingFullscreen = false;
              }
              SDL.canRequestFullscreen = false;
            }
  
            // SDL expects a unicode character to be passed to its keydown events.
            // Unfortunately, the browser APIs only provide a charCode property on
            // keypress events, so we must backfill in keydown events with their
            // subsequent keypress event's charCode.
            if (event.type === 'keypress' && SDL.savedKeydown) {
              // charCode is read-only
              SDL.savedKeydown.keypressCharCode = event.charCode;
              SDL.savedKeydown = null;
            } else if (event.type === 'keydown') {
              SDL.savedKeydown = event;
            }
  
            // Don't push keypress events unless SDL_StartTextInput has been called.
            if (event.type !== 'keypress' || SDL.textInput) {
              SDL.events.push(event);
            }
            break;
          case 'mouseout':
            // Un-press all pressed mouse buttons, because we might miss the release outside of the canvas
            for (var i = 0; i < 3; i++) {
              if (SDL.DOMButtons[i]) {
                SDL.events.push({
                  type: 'mouseup',
                  button: i,
                  pageX: event.pageX,
                  pageY: event.pageY
                });
                SDL.DOMButtons[i] = 0;
              }
            }
            event.preventDefault();
            break;
          case 'blur':
          case 'visibilitychange': {
            // Un-press all pressed keys: TODO
            for (var code in SDL.keyboardMap) {
              SDL.events.push({
                type: 'keyup',
                keyCode: SDL.keyboardMap[code]
              });
            }
            event.preventDefault();
            break;
          }
          case 'unload':
            if (Browser.mainLoop.runner) {
              SDL.events.push(event);
              // Force-run a main event loop, since otherwise this event will never be caught!
              Browser.mainLoop.runner();
            }
            return;
          case 'resize':
            SDL.events.push(event);
            // manually triggered resize event doesn't have a preventDefault member
            if (event.preventDefault) {
              event.preventDefault();
            }
            break;
        }
        if (SDL.events.length >= 10000) {
          Module.printErr('SDL event queue full, dropping events');
          SDL.events = SDL.events.slice(0, 10000);
        }
        return;
      },handleEvent:function (event) {
        if (event.handled) return;
        event.handled = true;

        switch (event.type) {
          case 'keydown': case 'keyup': {
            var down = event.type === 'keydown';
            var code = event.keyCode;
            if (code >= 65 && code <= 90) {
              code += 32; // make lowercase for SDL
            } else {
              code = SDL.keyCodes[event.keyCode] || event.keyCode;
            }
  
            HEAP8[(((SDL.keyboardState)+(code))|0)]=down;
            // TODO: lmeta, rmeta, numlock, capslock, KMOD_MODE, KMOD_RESERVED
            SDL.modState = (HEAP8[(((SDL.keyboardState)+(1248))|0)] ? 0x0040 | 0x0080 : 0) | // KMOD_LCTRL & KMOD_RCTRL
              (HEAP8[(((SDL.keyboardState)+(1249))|0)] ? 0x0001 | 0x0002 : 0) | // KMOD_LSHIFT & KMOD_RSHIFT
              (HEAP8[(((SDL.keyboardState)+(1250))|0)] ? 0x0100 | 0x0200 : 0); // KMOD_LALT & KMOD_RALT
  
            if (down) {
              SDL.keyboardMap[code] = event.keyCode; // save the DOM input, which we can use to unpress it during blur
            } else {
              delete SDL.keyboardMap[code];
            }
  
            break;
          }
          case 'mousedown': case 'mouseup':
            if (event.type == 'mousedown') {
              // SDL_BUTTON(x) is defined as (1 << ((x)-1)).  SDL buttons are 1-3,
              // and DOM buttons are 0-2, so this means that the below formula is
              // correct.
              SDL.buttonState |= 1 << event.button;
            } else if (event.type == 'mouseup') {
              SDL.buttonState &= ~(1 << event.button);
            }
            // fall through
          case 'mousemove': {
            Browser.calculateMouseEvent(event);
            break;
          }
        }
      },makeCEvent:function (event, ptr) {
        if (typeof event === 'number') {
          // This is a pointer to a native C event that was SDL_PushEvent'ed
          _memcpy(ptr, event, 28); // XXX
          return;
        }
  
        SDL.handleEvent(event);
  
        switch (event.type) {
          case 'keydown': case 'keyup': {
            var down = event.type === 'keydown';
            //Module.print('Received key event: ' + event.keyCode);
            var key = event.keyCode;
            if (key >= 65 && key <= 90) {
              key += 32; // make lowercase for SDL
            } else {
              key = SDL.keyCodes[event.keyCode] || event.keyCode;
            }
            var scan;
            if (key >= 1024) {
              scan = key - 1024;
            } else {
              scan = SDL.scanCodes[key] || key;
            }
  
            tempBigInt=SDL.DOMEventToSDLEvent[event.type];HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
            HEAP8[(((ptr)+(8))|0)]=down ? 1 : 0;
            HEAP8[(((ptr)+(9))|0)]=0; // TODO
            tempBigInt=scan;HEAP8[(((ptr)+(12))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(13))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(14))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(15))|0)]=tempBigInt&0xff;
            tempBigInt=key;HEAP8[(((ptr)+(16))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(17))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(18))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(19))|0)]=tempBigInt&0xff;
            tempBigInt=SDL.modState;HEAP8[(((ptr)+(20))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(21))|0)]=tempBigInt&0xff;
            // some non-character keys (e.g. backspace and tab) won't have keypressCharCode set, fill in with the keyCode.
            tempBigInt=event.keypressCharCode || key;HEAP8[(((ptr)+(24))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(25))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(26))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(27))|0)]=tempBigInt&0xff;
  
            break;
          }
          case 'keypress': {
            tempBigInt=SDL.DOMEventToSDLEvent[event.type];HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
            // Not filling in windowID for now
            var cStr = intArrayFromString(String.fromCharCode(event.charCode));
            for (var i = 0; i < cStr.length; ++i) {
              HEAP8[(((ptr)+(8 + i))|0)]=cStr[i];
            }
            break;
          }
          case 'mousedown': case 'mouseup': case 'mousemove': {
            if (window.ontouchstart === undefined || event.touching) {
              if (event.type != 'mousemove') {
                var down = event.type === 'mousedown';
                tempBigInt=SDL.DOMEventToSDLEvent[event.type];HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
                HEAP8[(((ptr)+(8))|0)]=event.button+1; // DOM buttons are 0-2, SDL 1-3
                HEAP8[(((ptr)+(9))|0)]=down ? 1 : 0;
                tempBigInt=Browser.mouseX;HEAP8[(((ptr)+(12))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(13))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(14))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(15))|0)]=tempBigInt&0xff;
                tempBigInt=Browser.mouseY;HEAP8[(((ptr)+(16))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(17))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(18))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(19))|0)]=tempBigInt&0xff;
              } else {
                tempBigInt=SDL.DOMEventToSDLEvent[event.type];HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
                HEAP8[(((ptr)+(8))|0)]=SDL.buttonState;
                tempBigInt=Browser.mouseX;HEAP8[(((ptr)+(12))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(13))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(14))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(15))|0)]=tempBigInt&0xff;
                tempBigInt=Browser.mouseY;HEAP8[(((ptr)+(16))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(17))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(18))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(19))|0)]=tempBigInt&0xff;
                tempBigInt=Browser.mouseMovementX;HEAP8[(((ptr)+(20))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(21))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(22))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(23))|0)]=tempBigInt&0xff;
                tempBigInt=Browser.mouseMovementY;HEAP8[(((ptr)+(24))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(25))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(26))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(27))|0)]=tempBigInt&0xff;
              }
            }
            break;
          }
          case 'unload': {
            tempBigInt=SDL.DOMEventToSDLEvent[event.type];HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
            break;
          }
          case 'resize': {
            tempBigInt=SDL.DOMEventToSDLEvent[event.type];HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
            tempBigInt=event.w;HEAP8[(((ptr)+(4))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(5))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(6))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(7))|0)]=tempBigInt&0xff;
            tempBigInt=event.h;HEAP8[(((ptr)+(8))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(9))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(10))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(11))|0)]=tempBigInt&0xff;
            break;
          }
          case 'joystick_button_up': case 'joystick_button_down': {
            var state = event.type === 'joystick_button_up' ? 0 : 1;
            tempBigInt=SDL.DOMEventToSDLEvent[event.type];HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
            HEAP8[(((ptr)+(4))|0)]=event.index;
            HEAP8[(((ptr)+(5))|0)]=event.button;
            HEAP8[(((ptr)+(6))|0)]=state;
            break;
          }
          case 'joystick_axis_motion': {
            tempBigInt=SDL.DOMEventToSDLEvent[event.type];HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
            HEAP8[(((ptr)+(4))|0)]=event.index;
            HEAP8[(((ptr)+(5))|0)]=event.axis;
            tempBigInt=SDL.joystickAxisValueConversion(event.value);HEAP8[(((ptr)+(8))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(9))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(10))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(11))|0)]=tempBigInt&0xff;
            break;
          }
          default: throw 'Unhandled SDL event: ' + event.type;
        }
      },estimateTextWidth:function (fontData, text) {
        var h = fontData.size;
        var fontString = h + 'px ' + fontData.name;
        var tempCtx = SDL.ttfContext;
        tempCtx.save();
        tempCtx.font = fontString;
        var ret = tempCtx.measureText(text).width | 0;
        tempCtx.restore();
        return ret;
      },allocateChannels:function (num) { // called from Mix_AllocateChannels and init
        if (SDL.numChannels && SDL.numChannels >= num && num != 0) return;
        SDL.numChannels = num;
        SDL.channels = [];
        for (var i = 0; i < num; i++) {
          SDL.channels[i] = {
            audio: null,
            volume: 1.0
          };
        }
      },setGetVolume:function (info, volume) {
        if (!info) return 0;
        var ret = info.volume * 128; // MIX_MAX_VOLUME
        if (volume != -1) {
          info.volume = volume / 128;
          if (info.audio) info.audio.volume = info.volume;
        }
        return ret;
      },fillWebAudioBufferFromHeap:function (heapPtr, sizeSamplesPerChannel, dstAudioBuffer) {
        // The input audio data is interleaved across the channels, i.e. [L, R, L, R, L, R, ...] and is either 8-bit or 16-bit as
        // supported by the SDL API. The output audio wave data for Web Audio API must be in planar buffers of [-1,1]-normalized Float32 data,
        // so perform a buffer conversion for the data.
        var numChannels = SDL.audio.channels;
        for(var c = 0; c < numChannels; ++c) {
          var channelData = dstAudioBuffer['getChannelData'](c);
          if (channelData.length != sizeSamplesPerChannel) {
            throw 'Web Audio output buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + sizeSamplesPerChannel + ' samples!';
          }
          if (SDL.audio.format == 0x8010 /*AUDIO_S16LSB*/) {
            for(var j = 0; j < sizeSamplesPerChannel; ++j) {
              channelData[j] = ((((((HEAPU8[(((heapPtr)+((j*numChannels + c)*2))|0)])|(HEAPU8[(((heapPtr)+(((j*numChannels + c)*2)+(1)))|0)]<<8))<<16)>>16))) / 0x8000;
            }
          } else if (SDL.audio.format == 0x0008 /*AUDIO_U8*/) {
            for(var j = 0; j < sizeSamplesPerChannel; ++j) {
              var v = (HEAP8[(((heapPtr)+(j*numChannels + c))|0)]);
              channelData[j] = ((v >= 0) ? v-128 : v+128) /128;
            }
          }
        }
      },debugSurface:function (surfData) {
        console.log('dumping surface ' + [surfData.surf, surfData.source, surfData.width, surfData.height]);
        var image = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
        var data = image.data;
        var num = Math.min(surfData.width, surfData.height);
        for (var i = 0; i < num; i++) {
          console.log('   diagonal ' + i + ':' + [data[i*surfData.width*4 + i*4 + 0], data[i*surfData.width*4 + i*4 + 1], data[i*surfData.width*4 + i*4 + 2], data[i*surfData.width*4 + i*4 + 3]]);
        }
      },joystickEventState:1,lastJoystickState:{},joystickNamePool:{},recordJoystickState:function (joystick, state) {
        // Standardize button state.
        var buttons = new Array(state.buttons.length);
        for (var i = 0; i < state.buttons.length; i++) {
          buttons[i] = SDL.getJoystickButtonState(state.buttons[i]);
        }
  
        SDL.lastJoystickState[joystick] = {
          buttons: buttons,
          axes: state.axes.slice(0),
          timestamp: state.timestamp,
          index: state.index,
          id: state.id
        };
      },getJoystickButtonState:function (button) {
        if (typeof button === 'object') {
          // Current gamepad API editor's draft (Firefox Nightly)
          // https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html#idl-def-GamepadButton
          return button.pressed;
        } else {
          // Current gamepad API working draft (Firefox / Chrome Stable)
          // http://www.w3.org/TR/2012/WD-gamepad-20120529/#gamepad-interface
          return button > 0;
        }
      },queryJoysticks:function () {
        for (var joystick in SDL.lastJoystickState) {
          var state = SDL.getGamepad(joystick - 1);
          var prevState = SDL.lastJoystickState[joystick];
          // Check only if the timestamp has differed.
          // NOTE: Timestamp is not available in Firefox.
          if (typeof state.timestamp !== 'number' || state.timestamp !== prevState.timestamp) {
            var i;
            for (i = 0; i < state.buttons.length; i++) {
              var buttonState = SDL.getJoystickButtonState(state.buttons[i]);
              // NOTE: The previous state already has a boolean representation of
              //       its button, so no need to standardize its button state here.
              if (buttonState !== prevState.buttons[i]) {
                // Insert button-press event.
                SDL.events.push({
                  type: buttonState ? 'joystick_button_down' : 'joystick_button_up',
                  joystick: joystick,
                  index: joystick - 1,
                  button: i
                });
              }
            }
            for (i = 0; i < state.axes.length; i++) {
              if (state.axes[i] !== prevState.axes[i]) {
                // Insert axes-change event.
                SDL.events.push({
                  type: 'joystick_axis_motion',
                  joystick: joystick,
                  index: joystick - 1,
                  axis: i,
                  value: state.axes[i]
                });
              }
            }
  
            SDL.recordJoystickState(joystick, state);
          }
        }
      },joystickAxisValueConversion:function (value) {
        // Ensures that 0 is 0, 1 is 32767, and -1 is 32768.
        return Math.ceil(((value+1) * 32767.5) - 32768);
      },getGamepads:function () {
        var fcn = navigator.getGamepads || navigator.webkitGamepads || navigator.mozGamepads || navigator.gamepads || navigator.webkitGetGamepads;
        if (fcn !== undefined) {
          // The function must be applied on the navigator object.
          return fcn.apply(navigator);
        } else {
          return [];
        }
      },getGamepad:function (deviceIndex) {
        var gamepads = SDL.getGamepads();
        if (gamepads.length > deviceIndex && deviceIndex >= 0) {
          return gamepads[deviceIndex];
        }
        return null;
      }};function _SDL_PauseAudio(pauseOn) {
      if (!SDL.audio) {
        return;
      }
      if (pauseOn) {
        if (SDL.audio.timer !== undefined) {
          Browser.safeClearTimeout(SDL.audio.timer);
          SDL.audio.numAudioTimersPending = 0;
          SDL.audio.timer = undefined;
        }
        if (SDL.audio.scriptProcessorNode !== undefined) {
          SDL.audio.scriptProcessorNode['disconnect']();
          SDL.audio.scriptProcessorNode = undefined;
        }
      } else if (!SDL.audio.timer && !SDL.audio.scriptProcessorNode) {
        // If we are using the same sampling frequency as the native sampling rate of the Web Audio graph is using, we can feed our buffers via
        // Web Audio ScriptProcessorNode, which is a pull-mode API that calls back to our code to get audio data.
        if (SDL.audioContext !== undefined && SDL.audio.freq == SDL.audioContext['sampleRate'] && typeof SDL.audioContext['createScriptProcessor'] !== 'undefined') {
          var sizeSamplesPerChannel = SDL.audio.bufferSize / SDL.audio.bytesPerSample / SDL.audio.channels; // How many samples per a single channel fit in the cb buffer?
          SDL.audio.scriptProcessorNode = SDL.audioContext['createScriptProcessor'](sizeSamplesPerChannel, 0, SDL.audio.channels);
          SDL.audio.scriptProcessorNode['onaudioprocess'] = function (e) {
            Runtime.dynCall('viii', SDL.audio.callback, [SDL.audio.userdata, SDL.audio.buffer, SDL.audio.bufferSize]);
            SDL.fillWebAudioBufferFromHeap(SDL.audio.buffer, sizeSamplesPerChannel, e['outputBuffer']);
          }
          SDL.audio.scriptProcessorNode['connect'](SDL.audioContext['destination']);
        } else { // If we are using a different sampling rate, must manually queue audio data to the graph via timers.
          // Start the audio playback timer callback loop.
          SDL.audio.numAudioTimersPending = 1;
          SDL.audio.timer = Browser.safeSetTimeout(SDL.audio.caller, 1);
          SDL.audio.startTime = Date.now() / 1000.0; // Only used for Mozilla Audio Data API. Not needed for Web Audio API.
        }
      }
      SDL.audio.paused = pauseOn;
    }

  
  function _SDL_Init(initFlags) {
      SDL.startTime = Date.now();
      SDL.initFlags = initFlags;
  
      // capture all key events. we just keep down and up, but also capture press to prevent default actions
      if (!Module['doNotCaptureKeyboard']) {
        document.addEventListener("keydown", SDL.receiveEvent);
        document.addEventListener("keyup", SDL.receiveEvent);
        document.addEventListener("keypress", SDL.receiveEvent);
        // window.addEventListener("blur", SDL.receiveEvent);
        document.addEventListener("visibilitychange", SDL.receiveEvent);
      }
  
      if (initFlags & 0x200) {
        // SDL_INIT_JOYSTICK
        // Firefox will not give us Joystick data unless we register this NOP
        // callback.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=936104
        addEventListener("gamepadconnected", function() {});
      }
  
      window.addEventListener("unload", SDL.receiveEvent);
      SDL.keyboardState = _malloc(0x10000); // Our SDL needs 512, but 64K is safe for older SDLs
      _memset(SDL.keyboardState, 0, 0x10000);
      // Initialize this structure carefully for closure
      SDL.DOMEventToSDLEvent['keydown'] = 0x300 /* SDL_KEYDOWN */;
      SDL.DOMEventToSDLEvent['keyup'] = 0x301 /* SDL_KEYUP */;
      SDL.DOMEventToSDLEvent['keypress'] = 0x303 /* SDL_TEXTINPUT */;
      SDL.DOMEventToSDLEvent['mousedown'] = 0x401 /* SDL_MOUSEBUTTONDOWN */;
      SDL.DOMEventToSDLEvent['mouseup'] = 0x402 /* SDL_MOUSEBUTTONUP */;
      SDL.DOMEventToSDLEvent['mousemove'] = 0x400 /* SDL_MOUSEMOTION */;
      SDL.DOMEventToSDLEvent['unload'] = 0x100 /* SDL_QUIT */;
      SDL.DOMEventToSDLEvent['resize'] = 0x7001 /* SDL_VIDEORESIZE/SDL_EVENT_COMPAT2 */;
      // These are not technically DOM events; the HTML gamepad API is poll-based.
      // However, we define them here, as the rest of the SDL code assumes that
      // all SDL events originate as DOM events.
      SDL.DOMEventToSDLEvent['joystick_axis_motion'] = 0x600 /* SDL_JOYAXISMOTION */;
      SDL.DOMEventToSDLEvent['joystick_button_down'] = 0x603 /* SDL_JOYBUTTONDOWN */;
      SDL.DOMEventToSDLEvent['joystick_button_up'] = 0x604 /* SDL_JOYBUTTONUP */;
      return 0; // success
    }function _SDL_WasInit() {
      if (SDL.startTime === null) {
        _SDL_Init();
      }
      return 1;
    }

  function _SDL_CloseAudio() {
      if (SDL.audio) {
        try{
          for(var i = 0; i < SDL.audio.soundSource.length; ++i) {
            if (!(typeof(SDL.audio.soundSource[i]==='undefined'))) {
              SDL.audio.soundSource[i].stop(0);
            }
          }
        } catch(e) {}
        SDL.audio.soundSource = null;
        _SDL_PauseAudio(1);
        _free(SDL.audio.buffer);
        SDL.audio = null;
        SDL.allocateChannels(0);
      }
    }

  function _SDL_QuitSubSystem(flags) {
      Module.print('SDL_QuitSubSystem called (and ignored)');
    }

  function _SDL_InitSubSystem(flags) { return 0 }

  function _SDL_OpenAudio(desired, obtained) {
      try {
        SDL.audio = {
          freq: ((((HEAPU8[(desired)])|(HEAPU8[(((desired)+(1))|0)]<<8)|(HEAPU8[(((desired)+(2))|0)]<<16)|(HEAPU8[(((desired)+(3))|0)]<<24))>>>0)),
          format: ((((HEAPU8[(((desired)+(4))|0)])|(HEAPU8[(((desired)+(5))|0)]<<8))&65535)),
          channels: HEAPU8[(((desired)+(6))|0)],
          samples: ((((HEAPU8[(((desired)+(8))|0)])|(HEAPU8[(((desired)+(9))|0)]<<8))&65535)), // Samples in the CB buffer per single sound channel.
          callback: ((((HEAPU8[(((desired)+(16))|0)])|(HEAPU8[(((desired)+(17))|0)]<<8)|(HEAPU8[(((desired)+(18))|0)]<<16)|(HEAPU8[(((desired)+(19))|0)]<<24))>>>0)),
          userdata: ((((HEAPU8[(((desired)+(20))|0)])|(HEAPU8[(((desired)+(21))|0)]<<8)|(HEAPU8[(((desired)+(22))|0)]<<16)|(HEAPU8[(((desired)+(23))|0)]<<24))>>>0)),
          paused: true,
          timer: null
        };
        // The .silence field tells the constant sample value that corresponds to the safe un-skewed silence value for the wave data.
        if (SDL.audio.format == 0x0008 /*AUDIO_U8*/) {
          SDL.audio.silence = 128; // Audio ranges in [0, 255], so silence is half-way in between.
        } else if (SDL.audio.format == 0x8010 /*AUDIO_S16LSB*/) {
          SDL.audio.silence = 0; // Signed data in range [-32768, 32767], silence is 0.
        } else {
          throw 'Invalid SDL audio format ' + SDL.audio.format + '!';
        }
        // Round the desired audio frequency up to the next 'common' frequency value.
        // Web Audio API spec states 'An implementation must support sample-rates in at least the range 22050 to 96000.'
        if (SDL.audio.freq <= 0) {
          throw 'Unsupported sound frequency ' + SDL.audio.freq + '!';
        } else if (SDL.audio.freq <= 22050) {
          SDL.audio.freq = 22050; // Take it safe and clamp everything lower than 22kHz to that.
        } else if (SDL.audio.freq <= 32000) {
          SDL.audio.freq = 32000;
        } else if (SDL.audio.freq <= 44100) {
          SDL.audio.freq = 44100;
        } else if (SDL.audio.freq <= 48000) {
          SDL.audio.freq = 48000;
        } else if (SDL.audio.freq <= 96000) {
          SDL.audio.freq = 96000;
        } else {
          throw 'Unsupported sound frequency ' + SDL.audio.freq + '!';
        }
        if (SDL.audio.channels == 0) {
          SDL.audio.channels = 1; // In SDL both 0 and 1 mean mono.
        } else if (SDL.audio.channels < 0 || SDL.audio.channels > 32) {
          throw 'Unsupported number of audio channels for SDL audio: ' + SDL.audio.channels + '!';
        } else if (SDL.audio.channels != 1 && SDL.audio.channels != 2) { // Unsure what SDL audio spec supports. Web Audio spec supports up to 32 channels.
          console.log('Warning: Using untested number of audio channels ' + SDL.audio.channels);
        }
        if (SDL.audio.samples < 128 || SDL.audio.samples > 524288 /* arbitrary cap */) {
          throw 'Unsupported audio callback buffer size ' + SDL.audio.samples + '!';
        } else if ((SDL.audio.samples & (SDL.audio.samples-1)) != 0) {
          throw 'Audio callback buffer size ' + SDL.audio.samples + ' must be a power-of-two!';
        }
        
        var totalSamples = SDL.audio.samples*SDL.audio.channels;
        SDL.audio.bytesPerSample = (SDL.audio.format == 0x0008 /*AUDIO_U8*/ || SDL.audio.format == 0x8008 /*AUDIO_S8*/) ? 1 : 2;
        SDL.audio.bufferSize = totalSamples*SDL.audio.bytesPerSample;
        SDL.audio.buffer = _malloc(SDL.audio.bufferSize);
        
        // To account for jittering in frametimes, always have multiple audio buffers queued up for the audio output device.
        // This helps that we won't starve that easily if a frame takes long to complete.
        SDL.audio.numSimultaneouslyQueuedBuffers = Module['SDL_numSimultaneouslyQueuedBuffers'] || 3;
        
        // Create a callback function that will be routinely called to ask more audio data from the user application.
        SDL.audio.caller = function SDL_audio_caller() {
          if (!SDL.audio) {
            return;
          }
          Runtime.dynCall('viii', SDL.audio.callback, [SDL.audio.userdata, SDL.audio.buffer, SDL.audio.bufferSize]);
          SDL.audio.pushAudio(SDL.audio.buffer, SDL.audio.bufferSize);
        };
        
        SDL.audio.audioOutput = new Audio();
        // As a workaround use Mozilla Audio Data API on Firefox until it ships with Web Audio and sound quality issues are fixed.
        if (typeof(SDL.audio.audioOutput['mozSetup'])==='function') {
          SDL.audio.audioOutput['mozSetup'](SDL.audio.channels, SDL.audio.freq); // use string attributes on mozOutput for closure compiler
          SDL.audio.mozBuffer = new Float32Array(totalSamples);
          SDL.audio.nextPlayTime = 0;
          SDL.audio.pushAudio = function SDL_audio_pushAudio(ptr, size) {
            --SDL.audio.numAudioTimersPending;
            var mozBuffer = SDL.audio.mozBuffer;
            // The input audio data for SDL audio is either 8-bit or 16-bit interleaved across channels, output for Mozilla Audio Data API
            // needs to be Float32 interleaved, so perform a sample conversion.
            if (SDL.audio.format == 0x8010 /*AUDIO_S16LSB*/) {
              for (var i = 0; i < totalSamples; i++) {
                mozBuffer[i] = ((((((HEAPU8[(((ptr)+(i*2))|0)])|(HEAPU8[(((ptr)+((i*2)+(1)))|0)]<<8))<<16)>>16))) / 0x8000;
              }
            } else if (SDL.audio.format == 0x0008 /*AUDIO_U8*/) {
              for (var i = 0; i < totalSamples; i++) {
                var v = (HEAP8[(((ptr)+(i))|0)]);
                mozBuffer[i] = ((v >= 0) ? v-128 : v+128) /128;
              }
            }
            // Submit the audio data to audio device.
            SDL.audio.audioOutput['mozWriteAudio'](mozBuffer);
            
            // Compute when the next audio callback should be called.
            var curtime = Date.now() / 1000.0 - SDL.audio.startTime;
            var playtime = Math.max(curtime, SDL.audio.nextPlayTime);
            var buffer_duration = SDL.audio.samples / SDL.audio.freq;
            SDL.audio.nextPlayTime = playtime + buffer_duration;
            // Schedule the next audio callback call to occur when the current one finishes.
            SDL.audio.timer = Browser.safeSetTimeout(SDL.audio.caller, 1000.0 * (playtime-curtime));
            ++SDL.audio.numAudioTimersPending;
            // And also schedule extra buffers _now_ if we have too few in queue.
            if (SDL.audio.numAudioTimersPending < SDL.audio.numSimultaneouslyQueuedBuffers) {
              ++SDL.audio.numAudioTimersPending;
              Browser.safeSetTimeout(SDL.audio.caller, 1.0);
            }
          }
        } else {
          // Initialize Web Audio API if we haven't done so yet. Note: Only initialize Web Audio context ever once on the web page,
          // since initializing multiple times fails on Chrome saying 'audio resources have been exhausted'.
          if (!SDL.audioContext) {
            if (typeof(AudioContext) !== 'undefined') {
              SDL.audioContext = new AudioContext();
            } else if (typeof(webkitAudioContext) !== 'undefined') {
              SDL.audioContext = new webkitAudioContext();
            } else {
              throw 'Web Audio API is not available!';
            }
          }
          SDL.audio.soundSource = new Array(); // Use an array of sound sources as a ring buffer to queue blocks of synthesized audio to Web Audio API.
          SDL.audio.nextSoundSource = 0; // Index of the next sound buffer in the ring buffer queue to play.
          SDL.audio.nextPlayTime = 0; // Time in seconds when the next audio block is due to start.
          
          // The pushAudio function with a new audio buffer whenever there is new audio data to schedule to be played back on the device.
          SDL.audio.pushAudio=function(ptr,sizeBytes) {
            try {
              --SDL.audio.numAudioTimersPending;
              if (SDL.audio.paused) return;
  
              var sizeSamples = sizeBytes / SDL.audio.bytesPerSample; // How many samples fit in the callback buffer?
              var sizeSamplesPerChannel = sizeSamples / SDL.audio.channels; // How many samples per a single channel fit in the cb buffer?
              if (sizeSamplesPerChannel != SDL.audio.samples) {
                throw 'Received mismatching audio buffer size!';
              }
              // Allocate new sound buffer to be played.
              var source = SDL.audioContext['createBufferSource']();
              if (SDL.audio.soundSource[SDL.audio.nextSoundSource]) {
                SDL.audio.soundSource[SDL.audio.nextSoundSource]['disconnect'](); // Explicitly disconnect old source, since we know it shouldn't be running anymore.
              }
              SDL.audio.soundSource[SDL.audio.nextSoundSource] = source;
              var soundBuffer = SDL.audioContext['createBuffer'](SDL.audio.channels,sizeSamplesPerChannel,SDL.audio.freq);
              SDL.audio.soundSource[SDL.audio.nextSoundSource]['connect'](SDL.audioContext['destination']);
  
              SDL.fillWebAudioBufferFromHeap(ptr, sizeSamplesPerChannel, soundBuffer);
              // Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=883675 by setting the buffer only after filling. The order is important here!
              source['buffer'] = soundBuffer;
              
              // Schedule the generated sample buffer to be played out at the correct time right after the previously scheduled
              // sample buffer has finished.
              var curtime = SDL.audioContext['currentTime'];
              var playtime = Math.max(curtime, SDL.audio.nextPlayTime);
              var ss = SDL.audio.soundSource[SDL.audio.nextSoundSource];
              if (typeof ss['start'] !== 'undefined') {
                ss['start'](playtime);
              } else if (typeof ss['noteOn'] !== 'undefined') {
                ss['noteOn'](playtime);
              }
              var buffer_duration = sizeSamplesPerChannel / SDL.audio.freq;
              SDL.audio.nextPlayTime = playtime + buffer_duration;
              // Timer will be scheduled before the buffer completed playing.
              // Extra buffers are needed to avoid disturbing playing buffer.
              SDL.audio.nextSoundSource = (SDL.audio.nextSoundSource + 1) % (SDL.audio.numSimultaneouslyQueuedBuffers + 2);
              var secsUntilNextCall = playtime-curtime;
              
              // Queue the next audio frame push to be performed when the previously queued buffer has finished playing.
              var preemptBufferFeedMSecs = 1000*buffer_duration/2.0;
              SDL.audio.timer = Browser.safeSetTimeout(SDL.audio.caller, Math.max(0.0, 1000.0*secsUntilNextCall-preemptBufferFeedMSecs));
              ++SDL.audio.numAudioTimersPending;
  
              // If we are risking starving, immediately queue extra buffers.
              if (SDL.audio.numAudioTimersPending < SDL.audio.numSimultaneouslyQueuedBuffers) {
                ++SDL.audio.numAudioTimersPending;
                Browser.safeSetTimeout(SDL.audio.caller, 1.0);
              }
            } catch(e) {
              console.log('Web Audio API error playing back audio: ' + e.toString());
            }
          }
        }
  
        if (obtained) {
          // Report back the initialized audio parameters.
          tempBigInt=SDL.audio.freq;HEAP8[(obtained)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(3))|0)]=tempBigInt&0xff;
          tempBigInt=SDL.audio.format;HEAP8[(((obtained)+(4))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(5))|0)]=tempBigInt&0xff;
          HEAP8[(((obtained)+(6))|0)]=SDL.audio.channels;
          HEAP8[(((obtained)+(7))|0)]=SDL.audio.silence;
          tempBigInt=SDL.audio.samples;HEAP8[(((obtained)+(8))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(9))|0)]=tempBigInt&0xff;
          tempBigInt=SDL.audio.callback;HEAP8[(((obtained)+(16))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(17))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(18))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(19))|0)]=tempBigInt&0xff;
          tempBigInt=SDL.audio.userdata;HEAP8[(((obtained)+(20))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(21))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(22))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(23))|0)]=tempBigInt&0xff;
        }
        SDL.allocateChannels(32);
  
      } catch(e) {
        console.log('Initializing SDL audio threw an exception: "' + e.toString() + '"! Continuing without audio.');
        SDL.audio = null;
        SDL.allocateChannels(0);
        if (obtained) {
          tempBigInt=0;HEAP8[(obtained)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(3))|0)]=tempBigInt&0xff;
          tempBigInt=0;HEAP8[(((obtained)+(4))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(5))|0)]=tempBigInt&0xff;
          HEAP8[(((obtained)+(6))|0)]=0;
          HEAP8[(((obtained)+(7))|0)]=0;
          tempBigInt=0;HEAP8[(((obtained)+(8))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(9))|0)]=tempBigInt&0xff;
          tempBigInt=0;HEAP8[(((obtained)+(16))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(17))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(18))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(19))|0)]=tempBigInt&0xff;
          tempBigInt=0;HEAP8[(((obtained)+(20))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(21))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(22))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((obtained)+(23))|0)]=tempBigInt&0xff;
        }
      }
      if (!SDL.audio) {
        return -1;
      }
      return 0;
    }

  function _llvm_bswap_i32(x) {
      return ((x&0xff)<<24) | (((x>>8)&0xff)<<16) | (((x>>16)&0xff)<<8) | (x>>>24);
    }

  var _llvm_memset_p0i8_i64=_memset;

  function _js_music_play() {
  Module['printErr']('missing function: js_music_play'); abort(-1);
  }

  
   
  Module["_memmove"] = _memmove;var _llvm_memmove_p0i8_p0i8_i32=_memmove;

  
  
  function __reallyNegative(x) {
      return x < 0 || (x === 0 && (1/x) === -Infinity);
    }function __formatString(format, varargs) {
      var textIndex = format;
      var argIndex = 0;
      function getNextArg(type) {
        // NOTE: Explicitly ignoring type safety. Otherwise this fails:
        //       int x = 4; printf("%c\n", (char)x);
        var ret;
        if (type === 'double') {
          ret = (HEAP32[((tempDoublePtr)>>2)]=((((HEAPU8[(((varargs)+(argIndex))|0)])|(HEAPU8[(((varargs)+((argIndex)+(1)))|0)]<<8)|(HEAPU8[(((varargs)+((argIndex)+(2)))|0)]<<16)|(HEAPU8[(((varargs)+((argIndex)+(3)))|0)]<<24))|0)),HEAP32[(((tempDoublePtr)+(4))>>2)]=((((HEAPU8[(((varargs)+((argIndex)+(4)))|0)])|(HEAPU8[(((varargs)+(((argIndex)+(4))+(1)))|0)]<<8)|(HEAPU8[(((varargs)+(((argIndex)+(4))+(2)))|0)]<<16)|(HEAPU8[(((varargs)+(((argIndex)+(4))+(3)))|0)]<<24))|0)),(+(HEAPF64[(tempDoublePtr)>>3])));
        } else if (type == 'i64') {
          ret = [((((HEAPU8[(((varargs)+(argIndex))|0)])|(HEAPU8[(((varargs)+((argIndex)+(1)))|0)]<<8)|(HEAPU8[(((varargs)+((argIndex)+(2)))|0)]<<16)|(HEAPU8[(((varargs)+((argIndex)+(3)))|0)]<<24))|0)),
                 ((((HEAPU8[(((varargs)+(argIndex+8))|0)])|(HEAPU8[(((varargs)+((argIndex+8)+(1)))|0)]<<8)|(HEAPU8[(((varargs)+((argIndex+8)+(2)))|0)]<<16)|(HEAPU8[(((varargs)+((argIndex+8)+(3)))|0)]<<24))|0))];
          argIndex += 8; // each 32-bit chunk is in a 64-bit block
  
        } else {
          type = 'i32'; // varargs are always i32, i64, or double
          ret = ((((HEAPU8[(((varargs)+(argIndex))|0)])|(HEAPU8[(((varargs)+((argIndex)+(1)))|0)]<<8)|(HEAPU8[(((varargs)+((argIndex)+(2)))|0)]<<16)|(HEAPU8[(((varargs)+((argIndex)+(3)))|0)]<<24))|0));
        }
        argIndex += Math.max(Runtime.getNativeFieldSize(type), Runtime.getAlignSize(type, null, true));
        return ret;
      }
  
      var ret = [];
      var curr, next, currArg;
      while(1) {
        var startTextIndex = textIndex;
        curr = HEAP8[(textIndex)];
        if (curr === 0) break;
        next = HEAP8[((textIndex+1)|0)];
        if (curr == 37) {
          // Handle flags.
          var flagAlwaysSigned = false;
          var flagLeftAlign = false;
          var flagAlternative = false;
          var flagZeroPad = false;
          var flagPadSign = false;
          flagsLoop: while (1) {
            switch (next) {
              case 43:
                flagAlwaysSigned = true;
                break;
              case 45:
                flagLeftAlign = true;
                break;
              case 35:
                flagAlternative = true;
                break;
              case 48:
                if (flagZeroPad) {
                  break flagsLoop;
                } else {
                  flagZeroPad = true;
                  break;
                }
              case 32:
                flagPadSign = true;
                break;
              default:
                break flagsLoop;
            }
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          }
  
          // Handle width.
          var width = 0;
          if (next == 42) {
            width = getNextArg('i32');
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          } else {
            while (next >= 48 && next <= 57) {
              width = width * 10 + (next - 48);
              textIndex++;
              next = HEAP8[((textIndex+1)|0)];
            }
          }
  
          // Handle precision.
          var precisionSet = false, precision = -1;
          if (next == 46) {
            precision = 0;
            precisionSet = true;
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
            if (next == 42) {
              precision = getNextArg('i32');
              textIndex++;
            } else {
              while(1) {
                var precisionChr = HEAP8[((textIndex+1)|0)];
                if (precisionChr < 48 ||
                    precisionChr > 57) break;
                precision = precision * 10 + (precisionChr - 48);
                textIndex++;
              }
            }
            next = HEAP8[((textIndex+1)|0)];
          }
          if (precision < 0) {
            precision = 6; // Standard default.
            precisionSet = false;
          }
  
          // Handle integer sizes. WARNING: These assume a 32-bit architecture!
          var argSize;
          switch (String.fromCharCode(next)) {
            case 'h':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 104) {
                textIndex++;
                argSize = 1; // char (actually i32 in varargs)
              } else {
                argSize = 2; // short (actually i32 in varargs)
              }
              break;
            case 'l':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 108) {
                textIndex++;
                argSize = 8; // long long
              } else {
                argSize = 4; // long
              }
              break;
            case 'L': // long long
            case 'q': // int64_t
            case 'j': // intmax_t
              argSize = 8;
              break;
            case 'z': // size_t
            case 't': // ptrdiff_t
            case 'I': // signed ptrdiff_t or unsigned size_t
              argSize = 4;
              break;
            default:
              argSize = null;
          }
          if (argSize) textIndex++;
          next = HEAP8[((textIndex+1)|0)];
  
          // Handle type specifier.
          switch (String.fromCharCode(next)) {
            case 'd': case 'i': case 'u': case 'o': case 'x': case 'X': case 'p': {
              // Integer.
              var signed = next == 100 || next == 105;
              argSize = argSize || 4;
              var currArg = getNextArg('i' + (argSize * 8));
              var origArg = currArg;
              var argText;
              // Flatten i64-1 [low, high] into a (slightly rounded) double
              if (argSize == 8) {
                currArg = Runtime.makeBigInt(currArg[0], currArg[1], next == 117);
              }
              // Truncate to requested size.
              if (argSize <= 4) {
                var limit = Math.pow(256, argSize) - 1;
                currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
              }
              // Format the number.
              var currAbsArg = Math.abs(currArg);
              var prefix = '';
              if (next == 100 || next == 105) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], null); else
                argText = reSign(currArg, 8 * argSize, 1).toString(10);
              } else if (next == 117) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], true); else
                argText = unSign(currArg, 8 * argSize, 1).toString(10);
                currArg = Math.abs(currArg);
              } else if (next == 111) {
                argText = (flagAlternative ? '0' : '') + currAbsArg.toString(8);
              } else if (next == 120 || next == 88) {
                prefix = (flagAlternative && currArg != 0) ? '0x' : '';
                if (argSize == 8 && i64Math) {
                  if (origArg[1]) {
                    argText = (origArg[1]>>>0).toString(16);
                    var lower = (origArg[0]>>>0).toString(16);
                    while (lower.length < 8) lower = '0' + lower;
                    argText += lower;
                  } else {
                    argText = (origArg[0]>>>0).toString(16);
                  }
                } else
                if (currArg < 0) {
                  // Represent negative numbers in hex as 2's complement.
                  currArg = -currArg;
                  argText = (currAbsArg - 1).toString(16);
                  var buffer = [];
                  for (var i = 0; i < argText.length; i++) {
                    buffer.push((0xF - parseInt(argText[i], 16)).toString(16));
                  }
                  argText = buffer.join('');
                  while (argText.length < argSize * 2) argText = 'f' + argText;
                } else {
                  argText = currAbsArg.toString(16);
                }
                if (next == 88) {
                  prefix = prefix.toUpperCase();
                  argText = argText.toUpperCase();
                }
              } else if (next == 112) {
                if (currAbsArg === 0) {
                  argText = '(nil)';
                } else {
                  prefix = '0x';
                  argText = currAbsArg.toString(16);
                }
              }
              if (precisionSet) {
                while (argText.length < precision) {
                  argText = '0' + argText;
                }
              }
  
              // Add sign if needed
              if (currArg >= 0) {
                if (flagAlwaysSigned) {
                  prefix = '+' + prefix;
                } else if (flagPadSign) {
                  prefix = ' ' + prefix;
                }
              }
  
              // Move sign to prefix so we zero-pad after the sign
              if (argText.charAt(0) == '-') {
                prefix = '-' + prefix;
                argText = argText.substr(1);
              }
  
              // Add padding.
              while (prefix.length + argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad) {
                    argText = '0' + argText;
                  } else {
                    prefix = ' ' + prefix;
                  }
                }
              }
  
              // Insert the result into the buffer.
              argText = prefix + argText;
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 'f': case 'F': case 'e': case 'E': case 'g': case 'G': {
              // Float.
              var currArg = getNextArg('double');
              var argText;
              if (isNaN(currArg)) {
                argText = 'nan';
                flagZeroPad = false;
              } else if (!isFinite(currArg)) {
                argText = (currArg < 0 ? '-' : '') + 'inf';
                flagZeroPad = false;
              } else {
                var isGeneral = false;
                var effectivePrecision = Math.min(precision, 20);
  
                // Convert g/G to f/F or e/E, as per:
                // http://pubs.opengroup.org/onlinepubs/9699919799/functions/printf.html
                if (next == 103 || next == 71) {
                  isGeneral = true;
                  precision = precision || 1;
                  var exponent = parseInt(currArg.toExponential(effectivePrecision).split('e')[1], 10);
                  if (precision > exponent && exponent >= -4) {
                    next = ((next == 103) ? 'f' : 'F').charCodeAt(0);
                    precision -= exponent + 1;
                  } else {
                    next = ((next == 103) ? 'e' : 'E').charCodeAt(0);
                    precision--;
                  }
                  effectivePrecision = Math.min(precision, 20);
                }
  
                if (next == 101 || next == 69) {
                  argText = currArg.toExponential(effectivePrecision);
                  // Make sure the exponent has at least 2 digits.
                  if (/[eE][-+]\d$/.test(argText)) {
                    argText = argText.slice(0, -1) + '0' + argText.slice(-1);
                  }
                } else if (next == 102 || next == 70) {
                  argText = currArg.toFixed(effectivePrecision);
                  if (currArg === 0 && __reallyNegative(currArg)) {
                    argText = '-' + argText;
                  }
                }
  
                var parts = argText.split('e');
                if (isGeneral && !flagAlternative) {
                  // Discard trailing zeros and periods.
                  while (parts[0].length > 1 && parts[0].indexOf('.') != -1 &&
                         (parts[0].slice(-1) == '0' || parts[0].slice(-1) == '.')) {
                    parts[0] = parts[0].slice(0, -1);
                  }
                } else {
                  // Make sure we have a period in alternative mode.
                  if (flagAlternative && argText.indexOf('.') == -1) parts[0] += '.';
                  // Zero pad until required precision.
                  while (precision > effectivePrecision++) parts[0] += '0';
                }
                argText = parts[0] + (parts.length > 1 ? 'e' + parts[1] : '');
  
                // Capitalize 'E' if needed.
                if (next == 69) argText = argText.toUpperCase();
  
                // Add sign.
                if (currArg >= 0) {
                  if (flagAlwaysSigned) {
                    argText = '+' + argText;
                  } else if (flagPadSign) {
                    argText = ' ' + argText;
                  }
                }
              }
  
              // Add padding.
              while (argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad && (argText[0] == '-' || argText[0] == '+')) {
                    argText = argText[0] + '0' + argText.slice(1);
                  } else {
                    argText = (flagZeroPad ? '0' : ' ') + argText;
                  }
                }
              }
  
              // Adjust case.
              if (next < 97) argText = argText.toUpperCase();
  
              // Insert the result into the buffer.
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 's': {
              // String.
              var arg = getNextArg('i8*');
              var argLength = arg ? _strlen(arg) : '(null)'.length;
              if (precisionSet) argLength = Math.min(argLength, precision);
              if (!flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              if (arg) {
                for (var i = 0; i < argLength; i++) {
                  ret.push(HEAPU8[((arg++)|0)]);
                }
              } else {
                ret = ret.concat(intArrayFromString('(null)'.substr(0, argLength), true));
              }
              if (flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              break;
            }
            case 'c': {
              // Character.
              if (flagLeftAlign) ret.push(getNextArg('i8'));
              while (--width > 0) {
                ret.push(32);
              }
              if (!flagLeftAlign) ret.push(getNextArg('i8'));
              break;
            }
            case 'n': {
              // Write the length written so far to the next parameter.
              var ptr = getNextArg('i32*');
              tempBigInt=ret.length;HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
              break;
            }
            case '%': {
              // Literal percent sign.
              ret.push(curr);
              break;
            }
            default: {
              // Unknown specifiers remain untouched.
              for (var i = startTextIndex; i < textIndex + 2; i++) {
                ret.push(HEAP8[(i)]);
              }
            }
          }
          textIndex += 2;
          // TODO: Support a/A (hex float) and m (last error) specifiers.
          // TODO: Support %1${specifier} for arg selection.
        } else {
          ret.push(curr);
          textIndex += 1;
        }
      }
      return ret;
    }function _snprintf(s, n, format, varargs) {
      // int snprintf(char *restrict s, size_t n, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var limit = (n === undefined) ? result.length
                                    : Math.min(result.length, Math.max(n - 1, 0));
      if (s < 0) {
        s = -s;
        var buf = _malloc(limit+1);
        tempBigInt=buf;HEAP8[(s)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((s)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((s)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((s)+(3))|0)]=tempBigInt&0xff;
        s = buf;
      }
      for (var i = 0; i < limit; i++) {
        HEAP8[(((s)+(i))|0)]=result[i];
      }
      if (limit < n || (n === undefined)) HEAP8[(((s)+(i))|0)]=0;
      return result.length;
    }

  
  function _open(path, oflag, varargs) {
      // int open(const char *path, int oflag, ...);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/open.html
      var mode = ((((HEAPU8[(varargs)])|(HEAPU8[(((varargs)+(1))|0)]<<8)|(HEAPU8[(((varargs)+(2))|0)]<<16)|(HEAPU8[(((varargs)+(3))|0)]<<24))|0));
      path = Pointer_stringify(path);
      try {
        var stream = FS.open(path, oflag, mode);
        return stream.fd;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fopen(filename, mode) {
      // FILE *fopen(const char *restrict filename, const char *restrict mode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fopen.html
      var flags;
      mode = Pointer_stringify(mode);
      if (mode[0] == 'r') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 0;
        }
      } else if (mode[0] == 'w') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 512;
      } else if (mode[0] == 'a') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 1024;
      } else {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      }
      var fd = _open(filename, flags, allocate([0x1FF, 0, 0, 0], 'i32', ALLOC_STACK));  // All creation permissions.
      return fd === -1 ? 0 : FS.getPtrForStream(FS.getStream(fd));
    }

  
  
  
  
  function _mkport() { throw 'TODO' }var SOCKFS={mount:function (mount) {
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createSocket:function (family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
  
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
  
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
  
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: FS.modeStringToFlags('r+'),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
  
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
  
        return sock;
      },getSocket:function (fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function (stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function (stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function (stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function () {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function (sock, addr, port) {
          var ws;
  
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
  
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              // runtimeConfig gets set to true if WebSocket runtime configuration is available.
              var runtimeConfig = (Module['websocket'] && ('object' === typeof Module['websocket']));
  
              // The default value is 'ws://' the replace is needed because the compiler replaces "//" comments with '#'
              // comments without checking context, so we'd end up with ws:#, the replace swaps the "#" for "//" again.
              var url = 'ws:#'.replace('#', '//');
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['url']) {
                  url = Module['websocket']['url']; // Fetch runtime WebSocket URL config.
                }
              }
  
              if (url === 'ws://' || url === 'wss://') { // Is the supplied URL config just a prefix, if so complete it.
                url = url + addr + ':' + port;
              }
  
              // Make the WebSocket subprotocol (Sec-WebSocket-Protocol) default to binary if no configuration is set.
              var subProtocols = 'binary'; // The default value is 'binary'
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['subprotocol']) {
                  subProtocols = Module['websocket']['subprotocol']; // Fetch runtime WebSocket subprotocol config.
                }
              }
  
              // The regex trims the string (removes spaces at the beginning and end, then splits the string by
              // <any space>,<any space> into an Array. Whitespace removal is important for Websockify and ws.
              subProtocols = subProtocols.replace(/^ +| +$/g,"").split(/ *, */);
  
              // The node ws library API for specifying optional subprotocol is slightly different than the browser's.
              var opts = ENVIRONMENT_IS_NODE ? {'protocol': subProtocols.toString()} : subProtocols;
  
              // If node we use the ws library.
              var WebSocket = ENVIRONMENT_IS_NODE ? require('ws') : window['WebSocket'];
              ws = new WebSocket(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
  
  
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
  
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
  
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
  
          return peer;
        },getPeer:function (sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function (sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function (sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function (sock, peer) {
          var first = true;
  
          var handleOpen = function () {
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
  
          function handleMessage(data) {
            assert(typeof data !== 'string' && data.byteLength !== undefined);  // must receive an ArrayBuffer
            data = new Uint8Array(data);  // make a typed array view on the array buffer
  
  
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
  
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
          };
  
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('error', function() {
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
          }
        },poll:function (sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
  
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
  
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
  
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
  
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
  
          return mask;
        },ioctl:function (sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              tempBigInt=bytes;HEAP8[(arg)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((arg)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((arg)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((arg)+(3))|0)]=tempBigInt&0xff;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function (sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function (sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port || _mkport();
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function (sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODS.EOPNOTSUPP);
          }
  
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
  
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
  
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
  
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function (sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
             throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already listening
          }
          var WebSocketServer = require('ws').Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({
            host: host,
            port: sock.sport
            // TODO support backlog
          });
  
          sock.server.on('connection', function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
  
              // create a peer on the new socket
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
  
              // push to queue for accept to pick up
              sock.pending.push(newsock);
            } else {
              // create a peer on the listen socket so calling sendto
              // with the listen socket and an address will resolve
              // to the correct client
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
            }
          });
          sock.server.on('closed', function() {
            sock.server = null;
          });
          sock.server.on('error', function() {
            // don't throw
          });
        },accept:function (listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function (sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function (sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
  
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
  
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          var data;
          if (buffer instanceof Array || buffer instanceof ArrayBuffer) {
            data = buffer.slice(offset, offset + length);
          } else {  // ArrayBufferView
            data = buffer.buffer.slice(buffer.byteOffset + offset, buffer.byteOffset + offset + length);
          }
  
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
  
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function (sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
  
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
  
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
  
  
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
  
          return res;
        }}};function _recv(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _read(fd, buf, len);
    }
  
  function _pread(fildes, buf, nbyte, offset) {
      // ssize_t pread(int fildes, void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _read(fildes, buf, nbyte) {
      // ssize_t read(int fildes, void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
  
  
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fread(ptr, size, nitems, stream) {
      // size_t fread(void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fread.html
      var bytesToRead = nitems * size;
      if (bytesToRead == 0) {
        return 0;
      }
      var bytesRead = 0;
      var streamObj = FS.getStreamFromPtr(stream);
      if (!streamObj) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      while (streamObj.ungotten.length && bytesToRead > 0) {
        HEAP8[((ptr++)|0)]=streamObj.ungotten.pop();
        bytesToRead--;
        bytesRead++;
      }
      var err = _read(streamObj.fd, ptr, bytesToRead);
      if (err == -1) {
        if (streamObj) streamObj.error = true;
        return 0;
      }
      bytesRead += err;
      if (bytesRead < bytesToRead) streamObj.eof = true;
      return Math.floor(bytesRead / size);
    }

  
  function _close(fildes) {
      // int close(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/close.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        FS.close(stream);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  
  function _fsync(fildes) {
      // int fsync(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fsync.html
      var stream = FS.getStream(fildes);
      if (stream) {
        // We write directly to the file system, so there's nothing to do here.
        return 0;
      } else {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
    }
  
  function _fileno(stream) {
      // int fileno(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fileno.html
      stream = FS.getStreamFromPtr(stream);
      if (!stream) return -1;
      return stream.fd;
    }function _fclose(stream) {
      // int fclose(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fclose.html
      var fd = _fileno(stream);
      _fsync(fd);
      return _close(fd);
    }

  function _time(ptr) {
      var ret = Math.floor(Date.now()/1000);
      if (ptr) {
        tempBigInt=ret;HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff;
      }
      return ret;
    }

  function _sprintf(s, format, varargs) {
      // int sprintf(char *restrict s, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      return _snprintf(s, undefined, format, varargs);
    }

  
  
  function _send(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _write(fd, buf, len);
    }
  
  function _pwrite(fildes, buf, nbyte, offset) {
      // ssize_t pwrite(int fildes, const void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _write(fildes, buf, nbyte) {
      // ssize_t write(int fildes, const void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
  
  
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fwrite(ptr, size, nitems, stream) {
      // size_t fwrite(const void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fwrite.html
      var bytesToWrite = nitems * size;
      if (bytesToWrite == 0) return 0;
      var fd = _fileno(stream);
      var bytesWritten = _write(fd, ptr, bytesToWrite);
      if (bytesWritten == -1) {
        var streamObj = FS.getStreamFromPtr(stream);
        if (streamObj) streamObj.error = true;
        return 0;
      } else {
        return Math.floor(bytesWritten / size);
      }
    }

  
  function __exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      Module['exit'](status);
    }function _exit(status) {
      __exit(status);
    }

  
  function _lseek(fildes, offset, whence) {
      // off_t lseek(int fildes, off_t offset, int whence);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/lseek.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        return FS.llseek(stream, offset, whence);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fseek(stream, offset, whence) {
      // int fseek(FILE *stream, long offset, int whence);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fseek.html
      var fd = _fileno(stream);
      var ret = _lseek(fd, offset, whence);
      if (ret == -1) {
        return -1;
      }
      stream = FS.getStreamFromPtr(stream);
      stream.eof = false;
      return 0;
    }

  function _unlink(path) {
      // int unlink(const char *path);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/unlink.html
      path = Pointer_stringify(path);
      try {
        FS.unlink(path);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }

  function _llvm_lifetime_end() {}

  function _ftell(stream) {
      // long ftell(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/ftell.html
      stream = FS.getStreamFromPtr(stream);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      if (FS.isChrdev(stream.node.mode)) {
        ___setErrNo(ERRNO_CODES.ESPIPE);
        return -1;
      } else {
        return stream.position;
      }
    }

  var _llvm_va_start=undefined;

  function _vsnprintf(s, n, format, va_arg) {
      return _snprintf(s, n, format, ((((HEAPU8[(va_arg)])|(HEAPU8[(((va_arg)+(1))|0)]<<8)|(HEAPU8[(((va_arg)+(2))|0)]<<16)|(HEAPU8[(((va_arg)+(3))|0)]<<24))|0)));
    }

  function _llvm_va_end() {}

   
  Module["_strncpy"] = _strncpy;

  
  
  function __getFloat(text) {
      return /^[+-]?[0-9]*\.?[0-9]+([eE][+-]?[0-9]+)?/.exec(text);
    }function __scanString(format, get, unget, varargs) {
      if (!__scanString.whiteSpace) {
        __scanString.whiteSpace = {};
        __scanString.whiteSpace[32] = 1;
        __scanString.whiteSpace[9] = 1;
        __scanString.whiteSpace[10] = 1;
        __scanString.whiteSpace[11] = 1;
        __scanString.whiteSpace[12] = 1;
        __scanString.whiteSpace[13] = 1;
      }
      // Supports %x, %4x, %d.%d, %lld, %s, %f, %lf.
      // TODO: Support all format specifiers.
      format = Pointer_stringify(format);
      var soFar = 0;
      if (format.indexOf('%n') >= 0) {
        // need to track soFar
        var _get = get;
        get = function get() {
          soFar++;
          return _get();
        }
        var _unget = unget;
        unget = function unget() {
          soFar--;
          return _unget();
        }
      }
      var formatIndex = 0;
      var argsi = 0;
      var fields = 0;
      var argIndex = 0;
      var next;
  
      mainLoop:
      for (var formatIndex = 0; formatIndex < format.length;) {
        if (format[formatIndex] === '%' && format[formatIndex+1] == 'n') {
          var argPtr = ((((HEAPU8[(((varargs)+(argIndex))|0)])|(HEAPU8[(((varargs)+((argIndex)+(1)))|0)]<<8)|(HEAPU8[(((varargs)+((argIndex)+(2)))|0)]<<16)|(HEAPU8[(((varargs)+((argIndex)+(3)))|0)]<<24))|0));
          argIndex += Runtime.getAlignSize('void*', null, true);
          tempBigInt=soFar;HEAP8[(argPtr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(3))|0)]=tempBigInt&0xff;
          formatIndex += 2;
          continue;
        }
  
        if (format[formatIndex] === '%') {
          var nextC = format.indexOf('c', formatIndex+1);
          if (nextC > 0) {
            var maxx = 1;
            if (nextC > formatIndex+1) {
              var sub = format.substring(formatIndex+1, nextC);
              maxx = parseInt(sub);
              if (maxx != sub) maxx = 0;
            }
            if (maxx) {
              var argPtr = ((((HEAPU8[(((varargs)+(argIndex))|0)])|(HEAPU8[(((varargs)+((argIndex)+(1)))|0)]<<8)|(HEAPU8[(((varargs)+((argIndex)+(2)))|0)]<<16)|(HEAPU8[(((varargs)+((argIndex)+(3)))|0)]<<24))|0));
              argIndex += Runtime.getAlignSize('void*', null, true);
              fields++;
              for (var i = 0; i < maxx; i++) {
                next = get();
                HEAP8[((argPtr++)|0)]=next;
                if (next === 0) return i > 0 ? fields : fields-1; // we failed to read the full length of this field
              }
              formatIndex += nextC - formatIndex + 1;
              continue;
            }
          }
        }
  
        // handle %[...]
        if (format[formatIndex] === '%' && format.indexOf('[', formatIndex+1) > 0) {
          var match = /\%([0-9]*)\[(\^)?(\]?[^\]]*)\]/.exec(format.substring(formatIndex));
          if (match) {
            var maxNumCharacters = parseInt(match[1]) || Infinity;
            var negateScanList = (match[2] === '^');
            var scanList = match[3];
  
            // expand "middle" dashs into character sets
            var middleDashMatch;
            while ((middleDashMatch = /([^\-])\-([^\-])/.exec(scanList))) {
              var rangeStartCharCode = middleDashMatch[1].charCodeAt(0);
              var rangeEndCharCode = middleDashMatch[2].charCodeAt(0);
              for (var expanded = ''; rangeStartCharCode <= rangeEndCharCode; expanded += String.fromCharCode(rangeStartCharCode++));
              scanList = scanList.replace(middleDashMatch[1] + '-' + middleDashMatch[2], expanded);
            }
  
            var argPtr = ((((HEAPU8[(((varargs)+(argIndex))|0)])|(HEAPU8[(((varargs)+((argIndex)+(1)))|0)]<<8)|(HEAPU8[(((varargs)+((argIndex)+(2)))|0)]<<16)|(HEAPU8[(((varargs)+((argIndex)+(3)))|0)]<<24))|0));
            argIndex += Runtime.getAlignSize('void*', null, true);
            fields++;
  
            for (var i = 0; i < maxNumCharacters; i++) {
              next = get();
              if (negateScanList) {
                if (scanList.indexOf(String.fromCharCode(next)) < 0) {
                  HEAP8[((argPtr++)|0)]=next;
                } else {
                  unget();
                  break;
                }
              } else {
                if (scanList.indexOf(String.fromCharCode(next)) >= 0) {
                  HEAP8[((argPtr++)|0)]=next;
                } else {
                  unget();
                  break;
                }
              }
            }
  
            // write out null-terminating character
            HEAP8[((argPtr++)|0)]=0;
            formatIndex += match[0].length;
            
            continue;
          }
        }      
        // remove whitespace
        while (1) {
          next = get();
          if (next == 0) return fields;
          if (!(next in __scanString.whiteSpace)) break;
        }
        unget();
  
        if (format[formatIndex] === '%') {
          formatIndex++;
          var suppressAssignment = false;
          if (format[formatIndex] == '*') {
            suppressAssignment = true;
            formatIndex++;
          }
          var maxSpecifierStart = formatIndex;
          while (format[formatIndex].charCodeAt(0) >= 48 &&
                 format[formatIndex].charCodeAt(0) <= 57) {
            formatIndex++;
          }
          var max_;
          if (formatIndex != maxSpecifierStart) {
            max_ = parseInt(format.slice(maxSpecifierStart, formatIndex), 10);
          }
          var long_ = false;
          var half = false;
          var longLong = false;
          if (format[formatIndex] == 'l') {
            long_ = true;
            formatIndex++;
            if (format[formatIndex] == 'l') {
              longLong = true;
              formatIndex++;
            }
          } else if (format[formatIndex] == 'h') {
            half = true;
            formatIndex++;
          }
          var type = format[formatIndex];
          formatIndex++;
          var curr = 0;
          var buffer = [];
          // Read characters according to the format. floats are trickier, they may be in an unfloat state in the middle, then be a valid float later
          if (type == 'f' || type == 'e' || type == 'g' ||
              type == 'F' || type == 'E' || type == 'G') {
            next = get();
            while (next > 0 && (!(next in __scanString.whiteSpace)))  {
              buffer.push(String.fromCharCode(next));
              next = get();
            }
            var m = __getFloat(buffer.join(''));
            var last = m ? m[0].length : 0;
            for (var i = 0; i < buffer.length - last + 1; i++) {
              unget();
            }
            buffer.length = last;
          } else {
            next = get();
            var first = true;
            
            // Strip the optional 0x prefix for %x.
            if ((type == 'x' || type == 'X') && (next == 48)) {
              var peek = get();
              if (peek == 120 || peek == 88) {
                next = get();
              } else {
                unget();
              }
            }
            
            while ((curr < max_ || isNaN(max_)) && next > 0) {
              if (!(next in __scanString.whiteSpace) && // stop on whitespace
                  (type == 's' ||
                   ((type === 'd' || type == 'u' || type == 'i') && ((next >= 48 && next <= 57) ||
                                                                     (first && next == 45))) ||
                   ((type === 'x' || type === 'X') && (next >= 48 && next <= 57 ||
                                     next >= 97 && next <= 102 ||
                                     next >= 65 && next <= 70))) &&
                  (formatIndex >= format.length || next !== format[formatIndex].charCodeAt(0))) { // Stop when we read something that is coming up
                buffer.push(String.fromCharCode(next));
                next = get();
                curr++;
                first = false;
              } else {
                break;
              }
            }
            unget();
          }
          if (buffer.length === 0) return 0;  // Failure.
          if (suppressAssignment) continue;
  
          var text = buffer.join('');
          var argPtr = ((((HEAPU8[(((varargs)+(argIndex))|0)])|(HEAPU8[(((varargs)+((argIndex)+(1)))|0)]<<8)|(HEAPU8[(((varargs)+((argIndex)+(2)))|0)]<<16)|(HEAPU8[(((varargs)+((argIndex)+(3)))|0)]<<24))|0));
          argIndex += Runtime.getAlignSize('void*', null, true);
          switch (type) {
            case 'd': case 'u': case 'i':
              if (half) {
                tempBigInt=parseInt(text, 10);HEAP8[(argPtr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(1))|0)]=tempBigInt&0xff;
              } else if (longLong) {
                (tempI64 = [parseInt(text, 10)>>>0,(tempDouble=parseInt(text, 10),(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],tempBigInt=tempI64[0],HEAP8[(argPtr)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(1))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(2))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(3))|0)]=tempBigInt&0xff,tempBigInt=tempI64[1],HEAP8[(((argPtr)+(4))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(5))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(6))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(7))|0)]=tempBigInt&0xff);
              } else {
                tempBigInt=parseInt(text, 10);HEAP8[(argPtr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(3))|0)]=tempBigInt&0xff;
              }
              break;
            case 'X':
            case 'x':
              tempBigInt=parseInt(text, 16);HEAP8[(argPtr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((argPtr)+(3))|0)]=tempBigInt&0xff;
              break;
            case 'F':
            case 'f':
            case 'E':
            case 'e':
            case 'G':
            case 'g':
            case 'E':
              // fallthrough intended
              if (long_) {
                (HEAPF64[(tempDoublePtr)>>3]=parseFloat(text),tempBigInt=((HEAP32[((tempDoublePtr)>>2)])|0),HEAP8[(argPtr)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(1))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(2))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(3))|0)]=tempBigInt&0xff,tempBigInt=((HEAP32[(((tempDoublePtr)+(4))>>2)])|0),HEAP8[(((argPtr)+(4))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(5))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(6))|0)]=tempBigInt&0xff,tempBigInt = tempBigInt>>8,HEAP8[(((argPtr)+(7))|0)]=tempBigInt&0xff);
              } else {
                HEAPF32[((tempDoublePtr)>>2)]=parseFloat(text);HEAP8[(argPtr)]=HEAP8[(tempDoublePtr)];HEAP8[(((argPtr)+(1))|0)]=HEAP8[(((tempDoublePtr)+(1))|0)];HEAP8[(((argPtr)+(2))|0)]=HEAP8[(((tempDoublePtr)+(2))|0)];HEAP8[(((argPtr)+(3))|0)]=HEAP8[(((tempDoublePtr)+(3))|0)];
              }
              break;
            case 's':
              var array = intArrayFromString(text);
              for (var j = 0; j < array.length; j++) {
                HEAP8[(((argPtr)+(j))|0)]=array[j];
              }
              break;
          }
          fields++;
        } else if (format[formatIndex].charCodeAt(0) in __scanString.whiteSpace) {
          next = get();
          while (next in __scanString.whiteSpace) {
            if (next <= 0) break mainLoop;  // End of input.
            next = get();
          }
          unget(next);
          formatIndex++;
        } else {
          // Not a specifier.
          next = get();
          if (format[formatIndex].charCodeAt(0) !== next) {
            unget(next);
            break mainLoop;
          }
          formatIndex++;
        }
      }
      return fields;
    }function _sscanf(s, format, varargs) {
      // int sscanf(const char *restrict s, const char *restrict format, ... );
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/scanf.html
      var index = 0;
      function get() { return HEAP8[(((s)+(index++))|0)]; };
      function unget() { index--; };
      return __scanString(format, get, unget, varargs);
    }

  
  
  
  function _isspace(chr) {
      return (chr == 32) || (chr >= 9 && chr <= 13);
    }function __parseInt(str, endptr, base, min, max, bits, unsign) {
      // Skip space.
      while (_isspace(HEAP8[(str)])) str++;
  
      // Check for a plus/minus sign.
      var multiplier = 1;
      if (HEAP8[(str)] == 45) {
        multiplier = -1;
        str++;
      } else if (HEAP8[(str)] == 43) {
        str++;
      }
  
      // Find base.
      var finalBase = base;
      if (!finalBase) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            finalBase = 16;
            str += 2;
          } else {
            finalBase = 8;
            str++;
          }
        }
      } else if (finalBase==16) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            str += 2;
          }
        }
      }
      if (!finalBase) finalBase = 10;
  
      // Get digits.
      var chr;
      var ret = 0;
      while ((chr = HEAP8[(str)]) != 0) {
        var digit = parseInt(String.fromCharCode(chr), finalBase);
        if (isNaN(digit)) {
          break;
        } else {
          ret = ret * finalBase + digit;
          str++;
        }
      }
  
      // Apply sign.
      ret *= multiplier;
  
      // Set end pointer.
      if (endptr) {
        tempBigInt=str;HEAP8[(endptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((endptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((endptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((endptr)+(3))|0)]=tempBigInt&0xff;
      }
  
      // Unsign if needed.
      if (unsign) {
        if (Math.abs(ret) > max) {
          ret = max;
          ___setErrNo(ERRNO_CODES.ERANGE);
        } else {
          ret = unSign(ret, bits);
        }
      }
  
      // Validate range.
      if (ret > max || ret < min) {
        ret = ret > max ? max : min;
        ___setErrNo(ERRNO_CODES.ERANGE);
      }
  
      if (bits == 64) {
        return ((asm["setTempRet0"]((tempDouble=ret,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)),ret>>>0)|0);
      }
  
      return ret;
    }function _strtol(str, endptr, base) {
      return __parseInt(str, endptr, base, -2147483648, 2147483647, 32);  // LONG_MIN, LONG_MAX.
    }function _atoi(ptr) {
      return _strtol(ptr, null, 10);
    }

  
  var ___rand_seed=allocate([0x0273459b, 0, 0, 0], "i32", ALLOC_STATIC);function _srand(seed) {
      tempBigInt=seed;HEAP8[(___rand_seed)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___rand_seed)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___rand_seed)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___rand_seed)+(3))|0)]=tempBigInt&0xff
    }

  function _qsort(base, num, size, cmp) {
      if (num == 0 || size == 0) return;
      // forward calls to the JavaScript sort method
      // first, sort the items logically
      var keys = [];
      for (var i = 0; i < num; i++) keys.push(i);
      keys.sort(function(a, b) {
        return Module['dynCall_iii'](cmp, base+a*size, base+b*size);
      });
      // apply the sort
      var temp = _malloc(num*size);
      _memcpy(temp, base, num*size);
      for (var i = 0; i < num; i++) {
        if (keys[i] == i) continue; // already in place
        _memcpy(base+i*size, temp+keys[i]*size, size);
      }
      _free(temp);
    }

  function _strchr(ptr, chr) {
      ptr--;
      do {
        ptr++;
        var val = HEAP8[(ptr)];
        if (val == chr) return ptr;
      } while (val);
      return 0;
    }

  function _memchr(ptr, chr, num) {
      chr = unSign(chr);
      for (var i = 0; i < num; i++) {
        if (HEAP8[(ptr)] == chr) return ptr;
        ptr++;
      }
      return 0;
    }

  function _Epicport_PushSave() {
  Module['printErr']('missing function: Epicport_PushSave'); abort(-1);
  }

  function _Epicport_CanLoad() {
  Module['printErr']('missing function: Epicport_CanLoad'); abort(-1);
  }

  function _Epicport_SelectLoadFileDialog() {
  Module['printErr']('missing function: Epicport_SelectLoadFileDialog'); abort(-1);
  }

  function _Epicport_CanSave() {
  Module['printErr']('missing function: Epicport_CanSave'); abort(-1);
  }

  function _Epicport_SelectSaveFileDialog() {
  Module['printErr']('missing function: Epicport_SelectSaveFileDialog'); abort(-1);
  }


  function _toupper(chr) {
      if (chr >= 97 && chr <= 122) {
        return chr - 97 + 65;
      } else {
        return chr;
      }
    }

  function _strcspn(pstr, pset) {
      var str = pstr, set, strcurr, setcurr;
      while (1) {
        strcurr = HEAP8[(str)];
        if (!strcurr) return str - pstr;
        set = pset;
        while (1) {
          setcurr = HEAP8[(set)];
          if (!setcurr || setcurr == strcurr) break;
          set++;
        }
        if (setcurr) return str - pstr;
        str++;
      }
    }

  function _strpbrk(ptr1, ptr2) {
      var curr;
      var searchSet = {};
      while (1) {
        var curr = HEAP8[((ptr2++)|0)];
        if (!curr) break;
        searchSet[curr] = 1;
      }
      while (1) {
        curr = HEAP8[(ptr1)];
        if (!curr) break;
        if (curr in searchSet) return ptr1;
        ptr1++;
      }
      return 0;
    }

  
  function _SDL_GetKeyboardState(numKeys) {
      if (numKeys) {
        tempBigInt=65536;HEAP8[(numKeys)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((numKeys)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((numKeys)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((numKeys)+(3))|0)]=tempBigInt&0xff;
      }
      return SDL.keyboardState;
    }function _SDL_GetKeyState() {
      return _SDL_GetKeyboardState();
    }

  function _gettimeofday(ptr) {
      var now = Date.now();
      tempBigInt=Math.floor(now/1000);HEAP8[(ptr)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(3))|0)]=tempBigInt&0xff; // seconds
      tempBigInt=Math.floor((now-1000*Math.floor(now/1000))*1000);HEAP8[(((ptr)+(4))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(5))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(6))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((ptr)+(7))|0)]=tempBigInt&0xff; // microseconds
      return 0;
    }

  function _chdir(path) {
      // int chdir(const char *path);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/chdir.html
      // NOTE: The path argument may be a string, to simplify fchdir().
      if (typeof path !== 'string') path = Pointer_stringify(path);
      try {
        FS.chdir(path);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }

  function _getcwd(buf, size) {
      // char *getcwd(char *buf, size_t size);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/getcwd.html
      if (size == 0) {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      }
      var cwd = FS.cwd();
      if (size < cwd.length + 1) {
        ___setErrNo(ERRNO_CODES.ERANGE);
        return 0;
      } else {
        writeAsciiToMemory(cwd, buf);
        return buf;
      }
    }

  function _fprintf(stream, format, varargs) {
      // int fprintf(FILE *restrict stream, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var stack = Runtime.stackSave();
      var ret = _fwrite(allocate(result, 'i8', ALLOC_STACK), 1, result.length, stream);
      Runtime.stackRestore(stack);
      return ret;
    }

  
  
  function _fputs(s, stream) {
      // int fputs(const char *restrict s, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputs.html
      var fd = _fileno(stream);
      return _write(fd, s, _strlen(s));
    }
  
  function _fputc(c, stream) {
      // int fputc(int c, FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputc.html
      var chr = unSign(c & 0xFF);
      HEAP8[((_fputc.ret)|0)]=chr;
      var fd = _fileno(stream);
      var ret = _write(fd, _fputc.ret, 1);
      if (ret == -1) {
        var streamObj = FS.getStreamFromPtr(stream);
        if (streamObj) streamObj.error = true;
        return -1;
      } else {
        return chr;
      }
    }function _puts(s) {
      // int puts(const char *s);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/puts.html
      // NOTE: puts() always writes an extra newline.
      var stdout = ((((HEAPU8[(_stdout)])|(HEAPU8[(((_stdout)+(1))|0)]<<8)|(HEAPU8[(((_stdout)+(2))|0)]<<16)|(HEAPU8[(((_stdout)+(3))|0)]<<24))|0));
      var ret = _fputs(s, stdout);
      if (ret < 0) {
        return ret;
      } else {
        var newlineRet = _fputc(10, stdout);
        return (newlineRet < 0) ? -1 : ret + 1;
      }
    }
  
  
  function _strerror_r(errnum, strerrbuf, buflen) {
      if (errnum in ERRNO_MESSAGES) {
        if (ERRNO_MESSAGES[errnum].length > buflen - 1) {
          return ___setErrNo(ERRNO_CODES.ERANGE);
        } else {
          var msg = ERRNO_MESSAGES[errnum];
          writeAsciiToMemory(msg, strerrbuf);
          return 0;
        }
      } else {
        return ___setErrNo(ERRNO_CODES.EINVAL);
      }
    }function _strerror(errnum) {
      if (!_strerror.buffer) _strerror.buffer = _malloc(256);
      _strerror_r(errnum, _strerror.buffer, 256);
      return _strerror.buffer;
    }
  
  function ___errno_location() {
      return ___errno_state;
    }function _perror(s) {
      // void perror(const char *s);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/perror.html
      var stdout = ((((HEAPU8[(_stdout)])|(HEAPU8[(((_stdout)+(1))|0)]<<8)|(HEAPU8[(((_stdout)+(2))|0)]<<16)|(HEAPU8[(((_stdout)+(3))|0)]<<24))|0));
      if (s) {
        _fputs(s, stdout);
        _fputc(58, stdout);
        _fputc(32, stdout);
      }
      var errnum = ((((HEAPU8[((___errno_location())|0)])|(HEAPU8[(((___errno_location())+(1))|0)]<<8)|(HEAPU8[(((___errno_location())+(2))|0)]<<16)|(HEAPU8[(((___errno_location())+(3))|0)]<<24))|0));
      _puts(_strerror(errnum));
    }

  function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop, arg) {
      Module['noExitRuntime'] = true;
  
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
          Browser.mainLoop.updateStatus();
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
        if (Browser.mainLoop.shouldPause) {
          // catch pauses from non-main loop sources
          Browser.mainLoop.paused = true;
          Browser.mainLoop.shouldPause = false;
          return;
        }
  
        // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
        // VBO double-buffering and reduce GPU stalls.
  
        if (Browser.mainLoop.method === 'timeout' && Module.ctx) {
          Module.printErr('Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!');
          Browser.mainLoop.method = ''; // just warn once per call to set main loop
        }
  
        if (Module['preMainLoop']) {
          Module['preMainLoop']();
        }
  
        try {
          if (typeof arg !== 'undefined') {
            Runtime.dynCall('vi', func, [arg]);
          } else {
            Runtime.dynCall('v', func);
          }
        } catch (e) {
          if (e instanceof ExitStatus) {
            return;
          } else {
            if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
            throw e;
          }
        }
  
        if (Module['postMainLoop']) {
          Module['postMainLoop']();
        }
  
        if (Browser.mainLoop.shouldPause) {
          // catch pauses from the main loop itself
          Browser.mainLoop.paused = true;
          Browser.mainLoop.shouldPause = false;
          return;
        }
        Browser.mainLoop.scheduler();
      }
      if (fps && fps > 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler() {
          setTimeout(Browser.mainLoop.runner, 1000/fps); // doing this each time means that on exception, we stop
        };
        Browser.mainLoop.method = 'timeout';
      } else {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'rAF';
      }
      Browser.mainLoop.scheduler();
  
      if (simulateInfiniteLoop) {
        throw 'SimulateInfiniteLoop';
      }
    }

  function _callJsTimers() {
  Module['printErr']('missing function: callJsTimers'); abort(-1);
  }

  function _js_is_muted() {
  Module['printErr']('missing function: js_is_muted'); abort(-1);
  }

  function _vfprintf(s, f, va_arg) {
      return _fprintf(s, f, ((((HEAPU8[(va_arg)])|(HEAPU8[(((va_arg)+(1))|0)]<<8)|(HEAPU8[(((va_arg)+(2))|0)]<<16)|(HEAPU8[(((va_arg)+(3))|0)]<<24))|0)));
    }

  
  var ___strtok_state=0;
  
  function _strtok_r(s, delim, lasts) {
      var skip_leading_delim = 1;
      var spanp;
      var c, sc;
      var tok;
  
  
      if (s == 0 && (s = getValue(lasts, 'i8*')) == 0) {
        return 0;
      }
  
      cont: while (1) {
        c = getValue(s++, 'i8');
        for (spanp = delim; (sc = getValue(spanp++, 'i8')) != 0;) {
          if (c == sc) {
            if (skip_leading_delim) {
              continue cont;
            } else {
              setValue(lasts, s, 'i8*');
              setValue(s - 1, 0, 'i8');
              return s - 1;
            }
          }
        }
        break;
      }
  
      if (c == 0) {
        setValue(lasts, 0, 'i8*');
        return 0;
      }
      tok = s - 1;
  
      for (;;) {
        c = getValue(s++, 'i8');
        spanp = delim;
        do {
          if ((sc = getValue(spanp++, 'i8')) == c) {
            if (c == 0) {
              s = 0;
            } else {
              setValue(s - 1, 0, 'i8');
            }
            setValue(lasts, s, 'i8*');
            return tok;
          }
        } while (sc != 0);
      }
      abort('strtok_r error!');
    }function _strtok(s, delim) {
      return _strtok_r(s, delim, ___strtok_state);
    }

  function _strstr(ptr1, ptr2) {
      var check = 0, start;
      do {
        if (!check) {
          start = ptr1;
          check = ptr2;
        }
        var curr1 = HEAP8[((ptr1++)|0)];
        var curr2 = HEAP8[((check++)|0)];
        if (curr2 == 0) return start;
        if (curr2 != curr1) {
          // rewind to one character after start, to find ez in eeez
          ptr1 = start + 1;
          check = 0;
        }
      } while (curr1);
      return 0;
    }

  function _strdup(ptr) {
      var len = _strlen(ptr);
      var newStr = _malloc(len + 1);
      (_memcpy(newStr, ptr, len)|0);
      HEAP8[(((newStr)+(len))|0)]=0;
      return newStr;
    }

  
   
  Module["_rand_r"] = _rand_r; 
  Module["_rand"] = _rand;

  function _SDL_WarpMouse(x, y) {
      return; // TODO: implement this in a non-buggy way. Need to keep relative mouse movements correct after calling this
      var rect = Module["canvas"].getBoundingClientRect();
      SDL.events.push({
        type: 'mousemove',
        pageX: x + (window.scrollX + rect.left),
        pageY: y + (window.scrollY + rect.top)
      });
    }


  function _SDL_GetError() {
      if (!SDL.errorMessage) {
        SDL.errorMessage = allocate(intArrayFromString("unknown SDL-emscripten error"), 'i8', ALLOC_NORMAL);
      }
      return SDL.errorMessage;
    }

  function _SDL_WM_SetCaption(title, icon) {
      title = title && Pointer_stringify(title);
      icon = icon && Pointer_stringify(icon);
    }

  function _SDL_SetVideoMode(width, height, depth, flags) {
      ['mousedown', 'mouseup', 'mousemove', 'DOMMouseScroll', 'mousewheel', 'mouseout'].forEach(function(event) {
        Module['canvas'].addEventListener(event, SDL.receiveEvent, true);
      });
  
      // (0,0) means 'use fullscreen' in native; in Emscripten, use the current canvas size.
      if (width == 0 && height == 0) {
        var canvas = Module['canvas'];
        width = canvas.width;
        height = canvas.height;
      }
  
      Browser.setCanvasSize(width, height, true);
      // Free the old surface first.
      if (SDL.screen) {
        SDL.freeSurface(SDL.screen);
        SDL.screen = null;
      }
      SDL.screen = SDL.makeSurface(width, height, flags, true, 'screen');
      if (!SDL.addedResizeListener) {
        SDL.addedResizeListener = true;
        Browser.resizeListeners.push(function(w, h) {
          SDL.receiveEvent({
            type: 'resize',
            w: w,
            h: h
          });
        });
      }
      return SDL.screen;
    }

  function _SDL_ShowCursor(toggle) {
      switch (toggle) {
        case 0: // SDL_DISABLE
          if (Browser.isFullScreen) { // only try to lock the pointer when in full screen mode
            Module['canvas'].requestPointerLock();
            return 0;
          } else { // else return SDL_ENABLE to indicate the failure
            return 1;
          }
          break;
        case 1: // SDL_ENABLE
          Module['canvas'].exitPointerLock();
          return 1;
          break;
        case -1: // SDL_QUERY
          return !Browser.pointerLock;
          break;
        default:
          console.log( "SDL_ShowCursor called with unknown toggle parameter value: " + toggle + "." );
          break;
      }
    }

  function _SDL_LockSurface(surf) {
      var surfData = SDL.surfaces[surf];
  
      surfData.locked++;
      if (surfData.locked > 1) return 0;
  
      if (!surfData.buffer) {
        surfData.buffer = _malloc(surfData.width * surfData.height * 4);
        tempBigInt=surfData.buffer;HEAP8[(((surf)+(20))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(21))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(22))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(23))|0)]=tempBigInt&0xff;
      }
  
      // Mark in C/C++-accessible SDL structure
      // SDL_Surface has the following fields: Uint32 flags, SDL_PixelFormat *format; int w, h; Uint16 pitch; void *pixels; ...
      // So we have fields all of the same size, and 5 of them before us.
      // TODO: Use macros like in library.js
      tempBigInt=surfData.buffer;HEAP8[(((surf)+(20))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(21))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(22))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((surf)+(23))|0)]=tempBigInt&0xff;
  
      if (surf == SDL.screen && Module.screenIsReadOnly && surfData.image) return 0;
  
      surfData.image = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
      if (surf == SDL.screen) {
        var data = surfData.image.data;
        var num = data.length;
        for (var i = 0; i < num/4; i++) {
          data[i*4+3] = 255; // opacity, as canvases blend alpha
        }
      }
  
      if (SDL.defaults.copyOnLock) {
        // Copy pixel data to somewhere accessible to 'C/C++'
        if (surfData.isFlagSet(0x00200000 /* SDL_HWPALETTE */)) {
          // If this is neaded then
          // we should compact the data from 32bpp to 8bpp index.
          // I think best way to implement this is use
          // additional colorMap hash (color->index).
          // Something like this:
          //
          // var size = surfData.width * surfData.height;
          // var data = '';
          // for (var i = 0; i<size; i++) {
          //   var color = SDL.translateRGBAToColor(
          //     surfData.image.data[i*4   ], 
          //     surfData.image.data[i*4 +1], 
          //     surfData.image.data[i*4 +2], 
          //     255);
          //   var index = surfData.colorMap[color];
          //   HEAP8[(((surfData.buffer)+(i))|0)]=index;
          // }
          throw 'CopyOnLock is not supported for SDL_LockSurface with SDL_HWPALETTE flag set' + new Error().stack;
        } else {
        HEAPU8.set(surfData.image.data, surfData.buffer);
        }
      }
  
      return 0;
    }

  function _SDL_UnlockSurface(surf) {
      assert(!SDL.GL); // in GL mode we do not keep around 2D canvases and contexts
  
      var surfData = SDL.surfaces[surf];
  
      if (!surfData.locked || --surfData.locked > 0) {
        return;
      }
  
      // Copy pixel data to image
      if (surfData.isFlagSet(0x00200000 /* SDL_HWPALETTE */)) {
        SDL.copyIndexedColorData(surfData);
      } else if (!surfData.colors) {
        var data = surfData.image.data;
        var buffer = surfData.buffer;
        assert(buffer % 4 == 0, 'Invalid buffer offset: ' + buffer);
        var src = buffer >> 2;
        var dst = 0;
        var isScreen = surf == SDL.screen;
        var num;
        if (typeof CanvasPixelArray !== 'undefined' && data instanceof CanvasPixelArray) {
          // IE10/IE11: ImageData objects are backed by the deprecated CanvasPixelArray,
          // not UInt8ClampedArray. These don't have buffers, so we need to revert
          // to copying a byte at a time. We do the undefined check because modern
          // browsers do not define CanvasPixelArray anymore.
          num = data.length;
          while (dst < num) {
            var val = HEAP32[src]; // This is optimized. Instead, we could do ((((HEAPU8[(((buffer)+(dst))|0)])|(HEAPU8[(((buffer)+((dst)+(1)))|0)]<<8)|(HEAPU8[(((buffer)+((dst)+(2)))|0)]<<16)|(HEAPU8[(((buffer)+((dst)+(3)))|0)]<<24))|0));
            data[dst  ] = val & 0xff;
            data[dst+1] = (val >> 8) & 0xff;
            data[dst+2] = (val >> 16) & 0xff;
            data[dst+3] = isScreen ? 0xff : ((val >> 24) & 0xff);
            src++;
            dst += 4;
          }
        } else {
          var data32 = new Uint32Array(data.buffer);
          num = data32.length;
          if (isScreen) {
            while (dst < num) {
              // HEAP32[src++] is an optimization. Instead, we could do ((((HEAPU8[(((buffer)+(dst))|0)])|(HEAPU8[(((buffer)+((dst)+(1)))|0)]<<8)|(HEAPU8[(((buffer)+((dst)+(2)))|0)]<<16)|(HEAPU8[(((buffer)+((dst)+(3)))|0)]<<24))|0));
              data32[dst++] = HEAP32[src++] | 0xff000000;
            }
          } else {
            while (dst < num) {
              data32[dst++] = HEAP32[src++];
            }
          }
        }
      } else {
        var width = Module['canvas'].width;
        var height = Module['canvas'].height;
        var s = surfData.buffer;
        var data = surfData.image.data;
        var colors = surfData.colors;
        for (var y = 0; y < height; y++) {
          var base = y*width*4;
          for (var x = 0; x < width; x++) {
            // See comment above about signs
            var val = HEAPU8[((s++)|0)] * 3;
            var start = base + x*4;
            data[start]   = colors[val];
            data[start+1] = colors[val+1];
            data[start+2] = colors[val+2];
          }
          s += width*3;
        }
      }
      // Copy to canvas
      surfData.ctx.putImageData(surfData.image, 0, 0);
      // Note that we save the image, so future writes are fast. But, memory is not yet released
    }

  function _SDL_Quit() {
      for (var i = 0; i < SDL.numChannels; ++i) {
        if (SDL.channels[i].audio) {
          SDL.channels[i].audio.pause();
        }
      }
      if (SDL.music.audio) {
        SDL.music.audio.pause();
      }
      Module.print('SDL_Quit called (and ignored)');
    }

  function _SDL_PollEvent(ptr) {
      if (SDL.initFlags & 0x200 && SDL.joystickEventState) {
        // If SDL_INIT_JOYSTICK was supplied AND the joystick system is configured
        // to automatically query for events, query for joystick events.
        SDL.queryJoysticks();
      }
      if (SDL.events.length === 0) return 0;
      if (ptr) {
        SDL.makeCEvent(SDL.events.shift(), ptr);
      }
      return 1;
    }

  function _SDL_UpdateRect(surf, x, y, w, h) {
      // We actually do the whole screen in Unlock...
    }

  function _SDL_SetColors(surf, colors, firstColor, nColors) {
      var surfData = SDL.surfaces[surf];
  
      // we should create colors array
      // only once cause client code
      // often wants to change portion 
      // of palette not all palette.
      if (!surfData.colors) {
        surfData.colors = new Uint8Array(256 * 3); //256 RGB colors
      } 
  
      for (var i = 0; i < nColors; ++i) {
        var index = (firstColor + i) * 3;
        surfData.colors[index] = HEAPU8[(((colors)+(i*4))|0)];
        surfData.colors[index + 1] = HEAPU8[(((colors)+(i*4 + 1))|0)];
        surfData.colors[index + 2] = HEAPU8[(((colors)+(i*4 + 2))|0)];
      }
  
      return 1;
    }


  function _sbrk(bytes) {
      // Implement a Linux-like 'memory area' for our 'process'.
      // Changes the size of the memory area by |bytes|; returns the
      // address of the previous top ('break') of the memory area
      // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
      var self = _sbrk;
      if (!self.called) {
        DYNAMICTOP = alignMemoryPage(DYNAMICTOP); // make sure we start out aligned
        self.called = true;
        assert(Runtime.dynamicAlloc);
        self.alloc = Runtime.dynamicAlloc;
        Runtime.dynamicAlloc = function() { abort('cannot dynamically allocate, sbrk now has control') };
      }
      var ret = DYNAMICTOP;
      if (bytes != 0) self.alloc(bytes);
      return ret;  // Previous break location.
    }

  function _sysconf(name) {
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return PAGE_SIZE;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 79:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: return 1;
      }
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }

   
  Module["_tolower"] = _tolower;






FS.staticInit();__ATINIT__.unshift({ func: function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() } });__ATMAIN__.push({ func: function() { FS.ignorePermissions = false } });__ATEXIT__.push({ func: function() { FS.quit() } });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;
___errno_state = Runtime.staticAlloc(4); tempBigInt=0;HEAP8[(___errno_state)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___errno_state)+(1))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___errno_state)+(2))|0)]=tempBigInt&0xff;tempBigInt = tempBigInt>>8;HEAP8[(((___errno_state)+(3))|0)]=tempBigInt&0xff;
__ATINIT__.unshift({ func: function() { TTY.init() } });__ATEXIT__.push({ func: function() { TTY.shutdown() } });TTY.utf8 = new Runtime.UTF8Processor();
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); NODEFS.staticInit(); }
Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas) { Browser.requestFullScreen(lockPointer, resizeCanvas) };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
__ATINIT__.push({ func: function() { SOCKFS.root = FS.mount(SOCKFS, {}, null); } });
_fputc.ret = allocate([0], "i8", ALLOC_STATIC);
___strtok_state = Runtime.staticAlloc(4);
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

staticSealed = true; // seal the static portion of memory

STACK_MAX = STACK_BASE + 5242880;

DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");


var Math_min = Math.min;
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer){"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env.___rand_seed|0;var n=env._stdout|0;var o=env._stderr|0;var p=+env.NaN;var q=+env.Infinity;var r=0;var s=0;var t=0;var u=0;var v=0,w=0,x=0,y=0,z=0.0,A=0,B=0,C=0,D=0.0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=0;var N=0;var O=global.Math.floor;var P=global.Math.abs;var Q=global.Math.sqrt;var R=global.Math.pow;var S=global.Math.cos;var T=global.Math.sin;var U=global.Math.tan;var V=global.Math.acos;var W=global.Math.asin;var X=global.Math.atan;var Y=global.Math.atan2;var Z=global.Math.exp;var _=global.Math.log;var $=global.Math.ceil;var aa=global.Math.imul;var ba=env.abort;var ca=env.assert;var da=env.asmPrintInt;var ea=env.asmPrintFloat;var fa=env.min;var ga=env.invoke_iiii;var ha=env.invoke_vi;var ia=env.invoke_ii;var ja=env.invoke_viii;var ka=env.invoke_v;var la=env.invoke_iii;var ma=env._llvm_lifetime_end;var na=env._lseek;var oa=env._Epicport_SelectSaveFileDialog;var pa=env.__scanString;var qa=env._fclose;var ra=env._Epicport_CanSave;var sa=env._fflush;var ta=env._strtol;var ua=env._fputc;var va=env._strtok;var wa=env._fwrite;var xa=env._send;var ya=env._fputs;var za=env._SDL_WarpMouse;var Aa=env._isspace;var Ba=env._SDL_WasInit;var Ca=env._read;var Da=env._strstr;var Ea=env._fileno;var Fa=env._perror;var Ga=env._fsync;var Ha=env._SDL_PauseAudio;var Ia=env._memchr;var Ja=env._llvm_va_end;var Ka=env._snprintf;var La=env.__getFloat;var Ma=env._SDL_GetKeyboardState;var Na=env._close;var Oa=env._strchr;var Pa=env._SDL_LockSurface;var Qa=env.___setErrNo;var Ra=env._ftell;var Sa=env._exit;var Ta=env._sprintf;var Ua=env._strcspn;var Va=env._SDL_ShowCursor;var Wa=env._getcwd;var Xa=env._emscripten_memcpy_big;var Ya=env._recv;var Za=env._SDL_SetColors;var _a=env._SDL_UnlockSurface;var $a=env._SDL_Init;var ab=env._mkport;var bb=env.__exit;var cb=env._vsnprintf;var db=env._js_is_muted;var eb=env._Epicport_CanLoad;var fb=env._toupper;var gb=env._pread;var hb=env._SDL_SetVideoMode;var ib=env._fopen;var jb=env._open;var kb=env._sysconf;var lb=env._puts;var mb=env._qsort;var nb=env._SDL_InitSubSystem;var ob=env._strdup;var pb=env._SDL_GetError;var qb=env._SDL_PollEvent;var rb=env._fread;var sb=env.__formatString;var tb=env._gettimeofday;var ub=env._atoi;var vb=env._vfprintf;var wb=env._Epicport_SelectLoadFileDialog;var xb=env._SDL_WM_SetCaption;var yb=env._chdir;var zb=env._sbrk;var Ab=env.___errno_location;var Bb=env._strerror;var Cb=env._SDL_CloseAudio;var Db=env._llvm_lifetime_start;var Eb=env._SDL_Quit;var Fb=env._llvm_bswap_i32;var Gb=env._SDL_GetKeyState;var Hb=env.__parseInt;var Ib=env._SDL_OpenAudio;var Jb=env._js_driver_music_is_playing;var Kb=env._SDL_QuitSubSystem;var Lb=env._callJsTimers;var Mb=env._sscanf;var Nb=env.___assert_fail;var Ob=env._srand;var Pb=env._strtok_r;var Qb=env._abort;var Rb=env._fprintf;var Sb=env.__reallyNegative;var Tb=env._fseek;var Ub=env._write;var Vb=env._SDL_UpdateRect;var Wb=env._js_driver_music_fade_out;var Xb=env._emscripten_set_main_loop;var Yb=env._time;var Zb=env._strpbrk;var _b=env._unlink;var $b=env._js_music_play;var ac=env._pwrite;var bc=env._strerror_r;var cc=env._Epicport_PushSave;var dc=0.0;
// EMSCRIPTEN_START_FUNCS
function Ye(a,b,c,e,f,g){a=a|0;b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;h=c-1&65535;c=e-1&65535;e=f&65535;if(!(g<<24>>24==0)){g=5264+(e<<3)|0;f=h+a&65535;i=c+b&65535;j=(d[g]|d[g+1|0]<<8)<<16>>16&255;g=_d()|0;if(((!(a<<16>>16>319)?(k=a<<16>>16<0?0:a,!(b<<16>>16>199)):0)?(l=b<<16>>16<0?0:b,m=f<<16>>16>319?319:f,n=m<<16>>16<0?0:m,m=i<<16>>16>199?199:i,o=m<<16>>16<0?0:m,!(k<<16>>16>n<<16>>16|l<<16>>16>o<<16>>16)):0)?(m=(n-k&65535)+1&65535,n=o+(1-l&65535)&65535,!(n<<16>>16==0|m<<16>>16==0)):0){o=f<<16>>16<319?f:319;p=((o<<16>>16>0?o:0)-(a<<16>>16>0?a:0)&65535)+1|0;o=320-(m&65535)+p|0;m=0;q=g+(((l<<16>>16)*320|0)+(k<<16>>16))|0;while(1){Lp(q|0,j|0,p|0)|0;k=m+1&65535;if((k&65535)>>>0<(n&65535)>>>0){m=k;q=q+o|0}else{r=i;s=f;break}}}else{r=i;s=f}}else{r=c+b&65535;s=h+a&65535}h=5266+(e<<3)|0;we(a,r,s,r,(d[h]|d[h+1|0]<<8)<<16>>16&255);we(s,b,s,r,(d[h]|d[h+1|0]<<8)<<16>>16&255);h=5268+(e<<3)|0;we(a,b,s,b,(d[h]|d[h+1|0]<<8)<<16>>16&255);we(a,b,a,r,(d[h]|d[h+1|0]<<8)<<16>>16&255);h=5270+(e<<3)|0;ge(a,r,(d[h]|d[h+1|0]<<8)<<16>>16&255);ge(s,b,(d[h]|d[h+1|0]<<8)<<16>>16&255);return}function Ze(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0;e=i;if((a[261328]|0)!=0){i=e;return 0}if((d[46614]|d[46615]<<8)<<16>>16<<16>>16==0|b<<16>>16==0|(d[231176]|d[231177]<<8)<<16>>16<<16>>16==0){i=e;return 0}f=b-340&65535;g=f&65535;if(!((f&65535)>>>0<64>>>0)){Nb(51512,67320,1954,69552);return 0}h=(f&65535)>>>0<32>>>0;f=h?258160:258152;j=1<<(h?g:g-32|0);g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;if((g&j|0)!=0){i=e;return 0}w=g|j;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;Me(Dm(b)|0,c,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0)|0;i=c;i=e;return 0}function _e(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;c=(a&65535)>>>0>(b&65535)>>>0?b:a;a=c&65535;d=b<<16>>16==0?1:b&65535;b=((a*24|0)>>>0)/(d>>>0)|0;e=(b&65535|0)==0?1:b&65535;b=a>>>0>d>>>2>>>0?a>>>0>d>>>1>>>0?4:5:8;d=c<<16>>16!=0&e<<16>>16==0?1:e;Ye(292,51,26,9,1,1);if(d<<16>>16==0){return}e=d+292&65535;d=_d()|0;c=e<<16>>16>319?319:e;a=c<<16>>16<0?0:c;if(a<<16>>16<293){return}c=a-292&65535;if(c<<16>>16==0){return}a=e<<16>>16<319?e:319;e=a<<16>>16>0?(a-293&65535)+1|0:65244;a=320-(c&65535)+e|0;Lp(d+16933|0,b|0,e|0)|0;c=a+16933|0;Lp(d+c|0,b|0,e|0)|0;f=c+a|0;Lp(d+f|0,b|0,e|0)|0;c=f+a|0;Lp(d+c|0,b|0,e|0)|0;f=c+a|0;Lp(d+f|0,b|0,e|0)|0;c=f+a|0;Lp(d+c|0,b|0,e|0)|0;Lp(d+(c+a)|0,b|0,e|0)|0;return}function $e(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;c=i;i=i+8|0;e=c|0;f=b<<16>>16==0;g=de(f?2:b)|0;a[203192]=1;tm(49808,3,0)|0;b=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+44|0;Ie(2,d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0,192,0,0,0,(b=i,i=i+1|0,i=i+7&-8,w=0,a[b]=w,w=w>>8,a[b+1|0]=w,w=w>>8,a[b+2|0]=w,w=w>>8,a[b+3|0]=w,b)|0);i=b;b=$d(2)|0;h=200;while(1){j=b;k=320;while(1){a[j]=a[231736+(d[j]|0)|0]|0;l=k-1|0;if((l|0)>0){j=j+1|0;k=l}else{break}}k=h-1&65535;if(k<<16>>16==0){break}else{b=b+320|0;h=k}}a[219160]=1;Cg((d[231240]|d[231241]<<8)<<16>>16);bf((d[231240]|d[231241]<<8)<<16>>16);Eh(1);Gg(Eg(d[203168]|d[203169]<<8|d[203170]<<16|d[203171]<<24|0,1)|0);Gg(Eg(d[203168]|d[203169]<<8|d[203170]<<16|d[203171]<<24|0,2)|0);h=e|0;a[h]=-1;b=e+4|0;w=-1;a[b]=w;w=w>>8;a[b+1|0]=w;k=e+2|0;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;j=Mj(e)|0;if((j|0)!=0){l=j;do{Xm(l);l=Mj(e)|0}while((l|0)!=0)}a[h]=-1;w=-1;a[b]=w;w=w>>8;a[b+1|0]=w;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;k=Xj(e)|0;if((k|0)!=0){b=k;do{jo(1,b);b=Xj(e)|0}while((b|0)!=0)}if(!f){m=de(g)|0;n=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;o=n&255;cf(o,2);Xh();i=c;return}de(0)|0;ie(0,0,0,0,320,200,2,0);cf((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255,(d[232088]|d[232089]<<8)<<16>>16<<16>>16==-1?2:1);Ve(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,15);m=de(g)|0;n=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;o=n&255;cf(o,2);Xh();i=c;return}function af(b,c,e,f,g,h){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0;i=($d(g)|0)+(((c&65535)*320|0)+(b&65535))|0;if(f<<16>>16==0){return}b=e&65535;c=320-b|0;if(e<<16>>16==0){return}e=-b|0;g=((e|0)>-1?e:-1)+b+1|0;e=i;i=f;while(1){f=e;j=b;while(1){a[f]=a[h+(d[f]|0)|0]|0;k=j-1|0;if((k|0)>0){f=f+1|0;j=k}else{break}}j=i-1&65535;if(j<<16>>16==0){break}else{e=e+(g+c)|0;i=j}}return}function bf(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0;c=(d[231176]|d[231177]<<8)<<16>>16;if((c<<16>>16|0)==0|(c<<16>>16|0)==5|(c<<16>>16|0)==6|(c<<16>>16|0)==7){return}c=de(b)|0;e=b<<16>>16!=0;if(e){a[203192]=1}Id();Oc();yo();if((a[203192]|0)==0?(b=(d[203200]|d[203201]<<8)<<16>>16,!(b<<16>>16==(d[233072]|d[233073]<<8)<<16>>16<<16>>16)):0){f=yn(b)|0;b=zn((d[203200]|d[203201]<<8)<<16>>16)|0;g=yn((d[233072]|d[233073]<<8)<<16>>16)|0;h=f&255;i=(g&255)-h|0;j=b&255;b=((zn((d[233072]|d[233073]<<8)<<16>>16)|0)&255)-j|0;k=-i|0;l=15-((i|0)>-1?i:k)|0;m=-b|0;n=10-((b|0)>-1?b:m)&65535;if(!((l|0)<1|n<<16>>16<1)){if((a[203192]|0)==0?!(g<<24>>24==f<<24>>24&n<<16>>16==10):0){si(-1)|0;if((k|0)>0){o=k<<1&65535}else{o=0}if((m|0)>0){p=(m<<4)+40&65535}else{p=40}if((i|0)<0){q=0}else{q=i<<1&65535}if((b|0)<0){r=40}else{r=(b<<4)+40&65535}m=l<<1&65535;k=n<<4;f=m<<16>>16>40?40:m;m=k<<16>>16>200?200:k;if(o<<16>>16<0){s=0;t=o+f&65535;u=q-o&65535}else{s=o;t=f;u=q}if(s<<16>>16>39|u<<16>>16>39){v=1}else{if(u<<16>>16<0){x=s-u&65535;y=t+u&65535;z=0}else{x=s;y=t;z=u}if(p<<16>>16<0){A=0;B=p+m&65535;C=r-p&65535}else{A=p;B=m;C=r}if(C<<16>>16<0){D=A-C&65535;E=B+C&65535;F=0}else{D=A;E=B;F=C}ie(x<<3,D,z<<3,F,y<<3,E,0,2);v=1}}else{G=28}}else{a[203192]=1;G=28}if((G|0)==28){a[203192]=1;v=0}G=(i|0)<0?0:i;i=(b|0)<0?0:b;b=l+G|0;l=(n<<16>>16)+i|0;n=0;E=0;while(1){y=(E+j<<6)+h|0;F=(E|0)<(i|0);z=(l|0)<=(E|0);D=0;x=0;while(1){if(!(((x|0)>=(G|0)?!((b|0)<=(x|0)|F):0)?!(z|(a[203192]|0)!=0):0)){Bi(y+x&65535,0,1)}C=D+1&65535;if(C<<16>>16<15){D=C;x=C<<16>>16}else{break}}x=n+1&65535;if(x<<16>>16<10){n=x;E=x<<16>>16}else{break}}if(!(v<<24>>24==0)){si(-1)|0;E=0;while(1){n=(E+384&65535)+((d[233072]|d[233073]<<8)<<16>>16)&65535;bo(260288,n);bo(260800,n);w=((d[260280]|d[260281]<<8)<<16>>16)+1&65535;a[260280]=w;w=w>>8;a[260281]=w;n=E+1&65535;if((n&65535)>>>0<14>>>0){E=n}else{H=v;break}}}else{H=0}}else{H=0}v=(d[203200]|d[203201]<<8)<<16>>16;w=v;a[233072]=w;w=w>>8;a[233073]=w;w=(d[231192]|d[231193]<<8)<<16>>16;a[231184]=w;w=w>>8;a[231185]=w;E=(d[203216]|d[203217]<<8)<<16>>16;if(!(E<<16>>16==0)?(n=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0,(d[268272]|d[268273]<<8|d[268274]<<16|d[268275]<<24|0)>>>0<n>>>0):0){w=E-1&65535;a[203216]=w;w=w>>8;a[203217]=w;w=n+60|0;a[268272]=w;w=w>>8;a[268273]=w;w=w>>8;a[268274]=w;w=w>>8;a[268275]=w;Bi(v+384&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+385&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+386&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+387&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+388&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+389&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+390&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+391&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+392&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+393&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+394&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+395&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+396&65535,0,1);Bi(((d[203200]|d[203201]<<8)<<16>>16)+397&65535,0,1)}Ag(a[203192]|0,H,e&1);a[203192]=0;de(c)|0;si((d[231184]|d[231185]<<8)<<16>>16)|0;ti((d[233072]|d[233073]<<8)<<16>>16,0);return}function cf(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0;e=i;i=i+16|0;f=e|0;g=e+8|0;h=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[71816]|d[71817]<<8|d[71818]<<16|d[71819]<<24|0)>>>0>h>>>0&c<<16>>16==0){i=e;return}w=h+1|0;a[71816]=w;w=w>>8;a[71817]=w;w=w>>8;a[71818]=w;w=w>>8;a[71819]=w;h=Hj(b)|0;if((c<<16>>16|0)==0){b=h+20|0;if((d[b]|d[b+1|0]<<8)<<16>>16<<16>>16==(d[268288]|d[268289]<<8)<<16>>16<<16>>16&(d[268280]|d[268281]<<8)<<16>>16<<16>>16==0){i=e;return}else{j=b}}else if((c<<16>>16|0)==2){c=h+20|0;w=(d[c]|d[c+1|0]<<8)<<16>>16;a[232088]=w;w=w>>8;a[232089]=w;w=(d[c]|d[c+1|0]<<8)<<16>>16;a[268288]=w;w=w>>8;a[268289]=w;j=c}else{j=h+20|0}h=de(2)|0;c=Wg(4)|0;b=(d[j]|d[j+1|0]<<8)<<16>>16;j=(d[268288]|d[268289]<<8)<<16>>16;k=b-j&65535;if(!(b<<16>>16==j<<16>>16)){l=((k<<16>>16|0)/4|0)&65535;if(l<<16>>16==0){m=k<<16>>16>>15|1}else{m=l}l=m<<16>>16>128?128:m;m=(l<<16>>16<-128?-128:l)+((d[268280]|d[268281]<<8)<<16>>16)&65535;w=m;a[268280]=w;w=w>>8;a[268281]=w;if((m+7&65535)>>>0>14>>>0){Sc(k<<16>>16>0?52:53,255);n=(d[268280]|d[268281]<<8)<<16>>16;o=(d[268288]|d[268289]<<8)<<16>>16}else{n=m;o=j}if(n<<16>>16<0&o<<16>>16==0){w=0;a[268280]=w;w=w>>8;a[268281]=w;p=0;q=o}else{p=n;q=o}}else{w=0;a[268280]=w;w=w>>8;a[268281]=w;p=0;q=b}b=(q&65535)+((p<<16>>16|0)/8|0)&65535;w=b;a[268288]=w;w=w>>8;a[268289]=w;if(!(p<<16>>16>0)){if(p<<16>>16<0){q=-(-p&7)&65535;w=q;a[268280]=w;w=w>>8;a[268281]=w;if(q<<16>>16<0){o=b-1&65535;r=-7;s=o<<16>>16<0?0:o;t=q}else{r=1;s=b;t=q}}else{r=1;s=b;t=0}}else{q=p&7;w=q;a[268280]=w;w=w>>8;a[268281]=w;r=1;s=b;t=q}q=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+48|0;Ie((d[231240]|d[231241]<<8)<<16>>16,d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0,0,0,4,16384,(q=i,i=i+1|0,i=i+7&-8,w=0,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;w=s;a[232088]=w;w=w>>8;a[232089]=w;Ka(f|0,7,49072,(q=i,i=i+8|0,w=s<<16>>16,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0)|0;i=q;Ka(g|0,7,49072,(q=i,i=i+8|0,w=((t<<16>>16>0)+b&65535)<<16>>16,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0)|0;i=q;b=r+8|0;t=0;do{s=(t*10|0)+4&65535;p=a[f+t|0]|0;if(p<<24>>24==32){u=13}else{u=(p<<24>>24)-34&65535}o=a[g+t|0]|0;n=(d[231240]|d[231241]<<8)<<16>>16;j=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(u<<2)|0;m=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;if(!(p<<24>>24==o<<24>>24)){Ie(n,m,s,r-((d[268280]|d[268281]<<8)<<16>>16&65535)&65535,4,16384,(q=i,i=i+1|0,i=i+7&-8,w=0,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;p=(d[268280]|d[268281]<<8)<<16>>16;if(!(p<<16>>16==0)){if(o<<24>>24==32){v=13}else{v=(o<<24>>24)-34&65535}o=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(v<<2)|0;Ie((d[231240]|d[231241]<<8)<<16>>16,d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0,s,b-(p&65535)&65535,4,16384,(q=i,i=i+1|0,i=i+7&-8,w=0,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q}}else{Ie(n,m,s,1,4,16384,(q=i,i=i+1|0,i=i+7&-8,w=0,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q}t=t+1|0}while((t|0)<6);t=(d[231240]|d[231241]<<8)<<16>>16;if(!(h<<16>>16==t<<16>>16)?(q=(d[261360]|d[261361]<<8)<<16>>16,b=(d[261352]|d[261353]<<8)<<16>>16,v=b-40&65535,r=(d[261368]|d[261369]<<8)<<16>>16,u=(d[261384]|d[261385]<<8)<<16>>16,g=u<<16>>16>200?200:u,u=q<<16>>16<0,f=u?0:q,s=(r<<16>>16>40?40:r)+(u?q:0)&65535,!(f<<16>>16>39)):0){if(!(b<<16>>16<0)){if(v<<16>>16<0){x=v;y=g;z=b;A=34}else{B=b;C=g;D=v}}else{x=-40;y=g+b&65535;z=0;A=34}if((A|0)==34){B=z-x&65535;C=x+y&65535;D=0}y=f<<3;ie(y,B,y,D,s<<3,C,t,h)}de(h)|0;Wg(c)|0;i=e;return}function df(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;w=b;a[48016]=w;w=w>>8;a[48017]=w;w=c;a[48018]=w;w=w>>8;a[48019]=w;w=d;a[48020]=w;w=w>>8;a[48021]=w;w=e;a[48022]=w;w=w>>8;a[48023]=w;return}function ef(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;b=i;w=de(0)|0;a[267212]=w;w=w>>8;a[267213]=w;vp(2,0)|0;c=(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+765|0;a[267214]=a[c]|0;a[267215]=a[c+1|0]|0;a[267216]=a[c+2|0]|0;a[258584]=a[267208]|0;a[258248]=a[267209]|0;w=(d[267210]|d[267211]<<8)<<16>>16;a[258232]=w;w=w>>8;a[258233]=w;w=0;a[258272]=w;w=w>>8;a[258273]=w;c=de(2)|0;tm(60920,3,0)|0;e=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+44|0;Ie(2,d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0,192,0,0,0,(e=i,i=i+1|0,i=i+7&-8,w=0,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,e)|0);i=e;f=$d(2)|0;g=200;while(1){h=f;j=320;while(1){a[h]=a[231736+(d[h]|0)|0]|0;k=j-1|0;if((k|0)>0){h=h+1|0;j=k}else{break}}j=g-1&65535;if(j<<16>>16==0){break}else{f=f+320|0;g=j}}g=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;ie(d[71488+g|0]<<3,d[71480+g|0]|0,0,8,56,40,2,2);g=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;ie(d[71488+g|0]<<3,d[71480+g|0]|0,0,152,56,40,2,2);Lp(201648,0,832)|0;g=0;f=40848;j=201648;while(1){if((g-8&65535)>>>0<3>>>0){if((a[258248]|0)==0){l=j}else{m=11}}else{h=a[258248]|0;if((g<<16>>16!=12|h<<24>>24!=0?g<<16>>16!=11|h<<24>>24==0:0)?!(g<<16>>16==7&(d[258232]|d[258233]<<8)<<16>>16<<16>>16==0):0){m=11}else{l=j}}if((m|0)==11){m=0;h=j+4|0;w=g+46&65535;a[h]=w;w=w>>8;a[h+1|0]=w;h=j+48|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;h=f+14|0;k=j+34|0;w=(d[h]|d[h+1|0]<<8)<<16>>16;a[k]=w;w=w>>8;a[k+1|0]=w;k=f+16|0;h=j+36|0;w=(d[k]|d[k+1|0]<<8)<<16>>16;a[h]=w;w=w>>8;a[h+1|0]=w;h=f+10|0;k=j+16|0;w=(d[h]|d[h+1|0]<<8)<<16>>16;a[k]=w;w=w>>8;a[k+1|0]=w;k=f+8|0;h=(d[k]|d[k+1|0]<<8)<<16>>16;if(h<<16>>16<0){n=-h&65535}else{n=(Jg(a[Dm(h)|0]|0)|0)&255}h=j+6|0;w=n;a[h]=w;w=w>>8;a[h+1|0]=w;h=f+4|0;k=j+52|0;w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=f+18|0;h=j+38|0;w=(d[k]|d[k+1|0]<<8)<<16>>16;a[h]=w;w=w>>8;a[h+1|0]=w;h=f+20|0;k=j+40|0;w=(d[h]|d[h+1|0]<<8)<<16>>16;a[k]=w;w=w>>8;a[k+1|0]=w;k=f+12|0;h=j+10|0;if((d[k]|d[k+1|0]<<8)<<16>>16<<16>>16<0){a[h]=0;a[j+11|0]=0;a[j+12|0]=0}else{a[h]=1;a[j+11|0]=1;a[j+12|0]=1;h=(d[k]|d[k+1|0]<<8)<<16>>16<<16>>16;k=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(h<<2)|0;o=j+20|0;w=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;o=h+1|0;h=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(o<<2)|0;k=j+24|0;w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(o<<2)|0;o=j+28|0;w=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w}if(g<<16>>16==0){p=j}else{p=Qg(d[203176]|d[203177]<<8|d[203178]<<16|d[203179]<<24|0,j)|0}w=p;a[203176]=w;w=w>>8;a[203177]=w;w=w>>8;a[203178]=w;w=w>>8;a[203179]=w;l=j+64|0}o=g+1&65535;if((o&65535)>>>0<13>>>0){g=o;f=f+24|0;j=l}else{break}}Fh(d[203176]|d[203177]<<8|d[203178]<<16|d[203179]<<24|0);l=Md(60256,1)|0;Nd(l,202480,256)|0;Ld(l);w=0;a[258240]=w;w=w>>8;a[258241]=w;w=0;a[258256]=w;w=w>>8;a[258257]=w;w=0;a[258592]=w;w=w>>8;a[258593]=w;Lp(258280,0,300)|0;if((a[258248]|0)!=0){l=((d[45152]|d[45153]<<8)<<16>>16&65535)+(((((((d[219128]|d[219129]<<8|d[219130]<<16|d[219131]<<24)-(d[219144]|d[219145]<<8|d[219146]<<16|d[219147]<<24)|0)>>>0)/60|0)&65535)>>>0)/60|0)+(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&65535;Ob((aa(l,l)|0)&65535|0)}if((a[258584]|0)==0){l=0;do{j=l&65535;if((a[8842+(j*100|0)|0]|0)!=0){f=(d[258240]|d[258241]<<8)<<16>>16;g=f&65535;p=258288+(g*12|0)|0;w=8792+(j*100|0)|0;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;p=258280+(g*12|0)|0;w=l;a[p]=w;w=w>>8;a[p+1|0]=w;p=8820+(j*100|0)|0;n=(d[p]|d[p+1|0]<<8)<<16>>16;if((a[258248]|0)==0){p=258284+(g*12|0)|0;w=n;a[p]=w;w=w>>8;a[p+1|0]=w;q=f}else{f=(n&65535)/10|0;n=$n(0,6)|0;p=(aa(($n(0,6)|0)+n&65535,f)|0)+(f<<2)&65535;f=(d[258240]|d[258241]<<8)<<16>>16;n=258284+((f&65535)*12|0)|0;w=(p&65535)>>>0<999>>>0?p:999;a[n]=w;w=w>>8;a[n+1|0]=w;q=f}f=258286+((q&65535)*12|0)|0;w=d[8832+(j*100|0)|0]|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=q+1&65535;a[258240]=w;w=w>>8;a[258241]=w}l=l+1&65535}while((l&65535)>>>0<27>>>0)}else{l=0;q=0;while(1){if((a[13202+(q*100|0)|0]|0)!=0){f=(d[258240]|d[258241]<<8)<<16>>16;j=f&65535;n=258288+(j*12|0)|0;w=13152+(q*100|0)|0;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;n=258280+(j*12|0)|0;w=l;a[n]=w;w=w>>8;a[n+1|0]=w;n=13180+(q*100|0)|0;p=258284+(j*12|0)|0;w=(d[n]|d[n+1|0]<<8)<<16>>16;a[p]=w;w=w>>8;a[p+1|0]=w;p=258286+(j*12|0)|0;w=(l&65535)>>>0<2>>>0?100:d[13192+(q*100|0)|0]|0;a[p]=w;w=w>>8;a[p+1|0]=w;w=f+1&65535;a[258240]=w;w=w>>8;a[258241]=w}f=l+1&65535;if((f&65535)>>>0<19>>>0){l=f;q=f&65535}else{break}}}q=(d[258240]|d[258241]<<8)<<16>>16;if(q<<16>>16==0){Me(60560,-1,(e=i,i=i+1|0,i=i+7&-8,w=0,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,e)|0)|0;i=e;qj();Sa(0)}mb(258280,q&65535|0,12,2);q=(d[258240]|d[258241]<<8)<<16>>16;if(q<<16>>16<4){l=q;while(1){Fg(Eg(d[203176]|d[203177]<<8|d[203178]<<16|d[203179]<<24|0,l+46&65535)|0);q=l+1&65535;if(q<<16>>16<4){l=q}else{r=0;break}}}else{r=0}do{l=((d[258592]|d[258593]<<8)<<16>>16)+r&65535;q=l<<16>>16;do{if(!(l<<16>>16<0)?!((q|0)>=((d[258240]|d[258241]<<8)<<16>>16&65535|0)|(258280+(q*12|0)|0)==0):0){f=258288+(q*12|0)|0;p=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=p+26|0;j=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(((d[f]|d[f+1|0]<<8)<<16>>16&65535)<<2)|0;f=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;j=r<<5|24;if((a[p+50|0]|0)==-1){Ie(2,f,72,j,0,256,(e=i,i=i+16|0,w=202480,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,w=1,a[e+8|0]=w,w=w>>8,a[e+9|0]=w,w=w>>8,a[e+10|0]=w,w=w>>8,a[e+11|0]=w,e)|0);i=e;break}else{Ie(2,f,72,j,0,0,(e=i,i=i+1|0,i=i+7&-8,w=0,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,e)|0);i=e;break}}}while(0);r=r+1&65535}while(r<<16>>16<4);w=0;a[258592]=w;w=w>>8;a[258593]=w;w=0;a[258256]=w;w=w>>8;a[258257]=w;r=(d[258288]|d[258289]<<8|d[258290]<<16|d[258291]<<24)+12|0;e=lp(d[r]|d[r+1|0]<<8|d[r+2|0]<<16|d[r+3|0]<<24|0,137648,64e3,0)|0;np(e,0,128,48,2)|0;mp(e);ie(0,0,0,0,320,200,2,0);e=le(72,23)|0;r=0;q=(_d()|0)+64|0;while(1){Lp(q|0,e|0,49)|0;l=r+1&65535;if((l&65535)>>>0<200>>>0){r=l;q=q+320|0}else{break}}Kf();de(0)|0;Ff();cf((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255,1);de(c)|0;ff(1);w=65535;a[258264]=w;w=w>>8;a[258265]=w;w=w>>8;a[258266]=w;w=w>>8;a[258267]=w;i=b;return}function ff(b){b=b|0;var c=0,e=0,f=0,g=0;if(b<<24>>24==0){b=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[268008]|d[268009]<<8|d[268010]<<16|d[268011]<<24|0)>>>0>b>>>0){return}else{c=b}}else{Lp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+765|0,63,3)|0;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);w=0;a[268008]=w;w=w>>8;a[268009]=w;w=w>>8;a[268010]=w;w=w>>8;a[268011]=w;a[268e3]=0;a[268016]=8;b=(d[258256]|d[258257]<<8)<<16>>16<<5|24;e=b-1&65535;f=b+24&65535;we(71,e,104,e,-1);we(71,f,104,f,-1);we(71,e,71,f,-1);we(104,e,104,f,-1);f=b+23&65535;we(72,b,103,b,-1);we(72,f,103,f,-1);we(72,b,72,f,-1);we(103,b,103,f,-1);c=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0}w=c+3|0;a[268008]=w;w=w>>8;a[268009]=w;w=w>>8;a[268010]=w;w=w>>8;a[268011]=w;c=a[268016]|0;f=a[268e3]|0;b=f+c&255;a[268e3]=b;if((b&255)>>>0>63>>>0){a[268016]=-c;a[268e3]=f;g=f}else{g=b}b=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((b|0)==0){a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+766|0]=g;a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+767|0]=a[268e3]|0}else if((b|0)==2){a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+765|0]=g;a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+767|0]=a[268e3]|0}else if((b|0)==1){a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+765|0]=g;a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+766|0]=a[268e3]|0}ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);return}function gf(){var b=0;cf((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255,1);de((d[267212]|d[267213]<<8)<<16>>16)|0;b=(d[258256]|d[258257]<<8)<<16>>16<<5;he(69,b+37&65535,69,b|21,38,30,2,0,0);b=(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+765|0;a[b]=a[267214]|0;a[b+1|0]=a[267215]|0;a[b+2|0]=a[267216]|0;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);w=-1;a[232088]=w;w=w>>8;a[232089]=w;vp(2,1)|0;fc[(d[267220]|d[267221]<<8|d[267222]<<16|d[267223]<<24)&63](d[258264]|d[258265]<<8|d[258266]<<16|d[258267]<<24|0);return}function hf(b){b=b|0;a[b]=(d[258264]|d[258265]<<8|d[258266]<<16|d[258267]<<24|0)==65535|0;return}function jf(){var b=0,c=0,e=0,f=0;cf((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255,0);b=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if(!((d[268008]|d[268009]<<8|d[268010]<<16|d[268011]<<24|0)>>>0>b>>>0)){w=b+3|0;a[268008]=w;w=w>>8;a[268009]=w;w=w>>8;a[268010]=w;w=w>>8;a[268011]=w;b=a[268016]|0;c=a[268e3]|0;e=c+b&255;a[268e3]=e;if((e&255)>>>0>63>>>0){a[268016]=-b;a[268e3]=c;f=c}else{f=e}e=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((e|0)==1){a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+765|0]=f;a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+766|0]=a[268e3]|0}else if((e|0)==2){a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+765|0]=f;a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+767|0]=a[268e3]|0}else if((e|0)==0){a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+766|0]=f;a[(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+767|0]=a[268e3]|0}ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0)}if(!((Ig(d[203176]|d[203177]<<8|d[203178]<<16|d[203179]<<24|0)|0)<<16>>16==110)){Ee();xp();return}ph(0)|0;Ee();xp();return}function kf(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;a[267208]=b;a[267209]=c;w=d;a[267210]=w;w=w>>8;a[267211]=w;w=e;a[267220]=w;w=w>>8;a[267221]=w;w=w>>8;a[267222]=w;w=w>>8;a[267223]=w;Bc(68,40,4,94);return}function lf(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=b<<16>>16;switch(c|0){case-14:{e=(d[46616]|d[46617]<<8)<<16>>16<<16>>16!=0?105:106;break};case-13:{e=(d[46614]|d[46615]<<8)<<16>>16<<16>>16!=0?105:106;break};case-10:{e=(d[46608]|d[46609]<<8)<<16>>16<<16>>16!=0?105:106;break};case-11:{e=(d[46610]|d[46611]<<8)<<16>>16<<16>>16!=0?105:106;break};case-12:{f=71440+(((d[46612]|d[46613]<<8)<<16>>16&65535)<<1)|0;e=(d[f]|d[f+1|0]<<8)<<16>>16;break};case-5:case-4:case-3:case-2:case-1:{f=c+1|0;g=231480+(((f|0)>-1?f:~c)*51|0)|0;h=(a[g]|0)==0?0:g;return h|0};default:{e=b}}h=Dm(e)|0;return h|0}function mf(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0;b=i;i=i+112|0;c=b|0;e=b+8|0;f=b+24|0;g=((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)<<4)+144|0;h=0;j=231736;k=0;while(1){a[j]=h;if((((k|0)/16|0)&65535|0)==9?(l=(k|0)%16|0,(l&65535)<<16>>16<7):0){a[j]=g+l}l=h+1&65535;if(l<<16>>16<256){h=l;j=j+1|0;k=l<<16>>16}else{break}}k=e|0;Ta(k|0,48616,(e=i,i=i+8|0,w=(d[265936]|d[265937]<<8)<<16>>16&65535,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,e)|0)|0;i=e;Lp(265944,0,160)|0;j=f|0;f=c|0;c=1;h=0;g=0;while(1){Ta(f|0,67912,(e=i,i=i+8|0,w=g+1|0,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,e)|0)|0;i=e;if((Ph(k,f,0,j,80,d[258216]|d[258217]<<8|d[258218]<<16|d[258219]<<24|0)|0)==0){m=c;n=h;break}l=265944+(g<<3)|0;o=265946+(g<<3)|0;p=265948+(g<<3)|0;q=265950+(g<<3)|0;Mb(j|0,67400,(e=i,i=i+32|0,w=l,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,w=o,a[e+8|0]=w,w=w>>8,a[e+9|0]=w,w=w>>8,a[e+10|0]=w,w=w>>8,a[e+11|0]=w,w=p,a[e+16|0]=w,w=w>>8,a[e+17|0]=w,w=w>>8,a[e+18|0]=w,w=w>>8,a[e+19|0]=w,w=q,a[e+24|0]=w,w=w>>8,a[e+25|0]=w,w=w>>8,a[e+26|0]=w,w=w>>8,a[e+27|0]=w,e)|0)|0;i=e;r=(1<<((d[l]|d[l+1|0]<<8)<<16>>16&65535)&(d[231056]|d[231057]<<8|d[231058]<<16|d[231059]<<24)|0)!=0?c:0;l=h<<4;he((d[p]|d[p+1|0]<<8)<<16>>16,(d[q]|d[q+1|0]<<8)<<16>>16,l,152,16,16,2,2,0);he((d[p]|d[p+1|0]<<8)<<16>>16,(d[q]|d[q+1|0]<<8)<<16>>16,l,0,16,16,2,2,0);q=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(((d[o]|d[o+1|0]<<8)<<16>>16<<16>>16)+505<<2)|0;Ie(2,d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0,l,152,0,256,(e=i,i=i+16|0,w=231736,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,w=1,a[e+8|0]=w,w=w>>8,a[e+9|0]=w,w=w>>8,a[e+10|0]=w,w=w>>8,a[e+11|0]=w,e)|0);i=e;l=h+1&65535;if((l&65535)>>>0<20>>>0){c=r;h=l;g=l&65535}else{m=r;n=l;break}}w=n;a[266104]=w;w=w>>8;a[266105]=w;g=n<<16>>16==0;if(m<<24>>24==0){if(g){Xh();i=b;return}m=d[231056]|d[231057]<<8|d[231058]<<16|d[231059]<<24|0;h=0;c=n;while(1){e=265944+((h&65535)<<3)|0;if((1<<((d[e]|d[e+1|0]<<8)<<16>>16&65535)&m|0)==0){s=c}else{w=0;a[e]=w;w=w>>8;a[e+1|0]=w;s=(d[266104]|d[266105]<<8)<<16>>16}e=h+1&65535;if((e&65535)>>>0<(s&65535)>>>0){h=e;c=s}else{t=s;break}}}else{if(g){Xh();i=b;return}g=0;s=d[231056]|d[231057]<<8|d[231058]<<16|d[231059]<<24|0;do{c=265944+((g&65535)<<3)|0;s=s&~(1<<((d[c]|d[c+1|0]<<8)<<16>>16&65535));g=g+1&65535}while((g&65535)>>>0<(n&65535)>>>0);w=s;a[231056]=w;w=w>>8;a[231057]=w;w=w>>8;a[231058]=w;w=w>>8;a[231059]=w;t=n}if(t<<16>>16==0){Xh();i=b;return}else{u=0;v=t}while(1){t=u&65535;n=265944+(t<<3)|0;if((d[n]|d[n+1|0]<<8)<<16>>16<<16>>16==0){x=v}else{n=265948+(t<<3)|0;s=265950+(t<<3)|0;he(u<<4,152,(d[n]|d[n+1|0]<<8)<<16>>16,(d[s]|d[s+1|0]<<8)<<16>>16,16,16,2,0,0);x=(d[266104]|d[266105]<<8)<<16>>16}s=u+1&65535;if((s&65535)>>>0<(x&65535)>>>0){u=s;v=x}else{break}}Xh();i=b;return}function nf(b){b=b|0;a[b]=a[265940]|0;return}function of(){var b=0,c=0,e=0,f=0,g=0,h=0;b=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[202976]|d[202977]<<8|d[202978]<<16|d[202979]<<24|0)>>>0<b>>>0){w=b+7|0;a[202976]=w;w=w>>8;a[202977]=w;w=w>>8;a[202978]=w;w=w>>8;a[202979]=w;b=(((d[202984]|d[202985]<<8)<<16>>16&65535)+1|0)%4|0;w=b&65535;a[202984]=w;w=w>>8;a[202985]=w;Kp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+753|0,71600+((b&65535)*3|0)|0,12)|0;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0)}if(!((di()|0)<<16>>16==0)?((ci()|0)-198&65535)>>>0<2>>>0:0){b=a[(d[258208]|d[258209]<<8|d[258210]<<16|d[258211]<<24)+((((d[233056]|d[233057]<<8)<<16>>16&65535)*304|0)-7304+((d[233064]|d[233065]<<8)<<16>>16&65535))|0]|0;c=b&255;w=c;a[265942]=w;w=w>>8;a[265943]=w;if(!(b<<24>>24==0)){a:do{if(!((d[266104]|d[266105]<<8)<<16>>16<<16>>16==0)){b=0;e=c;while(1){f=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[202976]|d[202977]<<8|d[202978]<<16|d[202979]<<24|0)>>>0<f>>>0){w=f+7|0;a[202976]=w;w=w>>8;a[202977]=w;w=w>>8;a[202978]=w;w=w>>8;a[202979]=w;f=(((d[202984]|d[202985]<<8)<<16>>16&65535)+1|0)%4|0;w=f&65535;a[202984]=w;w=w>>8;a[202985]=w;Kp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+753|0,71600+((f&65535)*3|0)|0,12)|0;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);g=(d[265942]|d[265943]<<8)<<16>>16}else{g=e}f=265944+((b&65535)<<3)|0;h=b+1&65535;if(((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16|0)==(g&65535|0)){break}if((h&65535)>>>0<((d[266104]|d[266105]<<8)<<16>>16&65535)>>>0){b=h;e=g}else{break a}}a[265940]=0;w=b;a[265938]=w;w=w>>8;a[265939]=w;return}}while(0);xp();return}}else{w=0;a[265942]=w;w=w>>8;a[265943]=w}xp();return}function pf(){var b=0,c=0,e=0,f=0;w=1<<((d[265942]|d[265943]<<8)<<16>>16&65535)|(d[231056]|d[231057]<<8|d[231058]<<16|d[231059]<<24);a[231056]=w;w=w>>8;a[231057]=w;w=w>>8;a[231058]=w;w=w>>8;a[231059]=w;qf(267232);b=(d[265936]|d[265937]<<8)<<16>>16;c=((b*3&65535)-1&65535)+((d[265938]|d[265939]<<8)<<16>>16)&65535;w=c;a[265938]=w;w=w>>8;a[265939]=w;if(!((b&65535)>>>0>7>>>0)){e=c;Kc(e);return}f=c-1&65535;w=f;a[265938]=w;w=w>>8;a[265939]=w;if(!((b&65535)>>>0>8>>>0)){e=f;Kc(e);return}f=c-2&65535;w=f;a[265938]=w;w=w>>8;a[265939]=w;e=f;Kc(e);return}function qf(b){b=b|0;var c=0,d=0,e=0,f=0;c=i;d=de(2)|0;ie(64,165,64,186,192,14,0,2);e=le(64,186)|0;f=_d()|0;Lp(f+55104|0,e|0,192)|0;Lp(f+55424|0,e|0,192)|0;Lp(f+55744|0,e|0,192)|0;Lp(f+56064|0,e|0,192)|0;Lp(f+56384|0,e|0,192)|0;Lp(f+56704|0,e|0,192)|0;Lp(f+57024|0,e|0,192)|0;Lp(f+57344|0,e|0,192)|0;Lp(f+57664|0,e|0,192)|0;Lp(f+57984|0,e|0,192)|0;Lp(f+58304|0,e|0,192)|0;Lp(f+58624|0,e|0,192)|0;Lp(f+58944|0,e|0,192)|0;Lp(f+59264|0,e|0,192)|0;ze(b,64,175,12,0,18,(b=i,i=i+1|0,i=i+7&-8,w=0,a[b]=w,w=w>>8,a[b+1|0]=w,w=w>>8,a[b+2|0]=w,w=w>>8,a[b+3|0]=w,b)|0);i=b;b=185;do{ie(64,b,64,165,192,14,2,0);b=b-1&65535}while((b&65535)>>>0>172>>>0);de(d)|0;i=c;return}function rf(){qf(Dm(285)|0);w=60;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;return}function sf(){tm(66016,3,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0)|0;qf(Dm(284)|0);if(!((di()|0)<<16>>16==0)?(bi()|0)<<16>>16==27:0){a[71848]=(a[71848]|0)==0|0;Xh()}tf(8,24,304,120,2,0,0,0);w=60;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;return}function tf(b,c,e,f,g,h,j,k){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;k=k|0;var l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0;j=i;i=i+1040|0;l=j|0;m=j+640|0;n=e<<16>>16;if(!(e<<16>>16<321)){Nb(64144,67320,3907,69512)}o=f<<16>>16;if(!(f<<16>>16<201)){Nb(63768,67320,3908,69512)}p=e<<16>>16>0;if(p){q=0;r=0;do{s=l+(r<<1)|0;w=q;a[s]=w;w=w>>8;a[s+1|0]=w;q=q+1&65535;r=q&65535}while((r|0)<(n|0))}r=f<<16>>16>0;if(r){q=0;s=0;do{t=m+(s<<1)|0;w=q;a[t]=w;w=w>>8;a[t+1|0]=w;q=q+1&65535;s=q&65535}while((s|0)<(o|0))}if(p){s=e-1&65535;e=0;q=0;do{t=l+((($n(0,s)|0)&65535)<<1)|0;u=(d[t]|d[t+1|0]<<8)<<16>>16;v=l+(q<<1)|0;w=(d[v]|d[v+1|0]<<8)<<16>>16;a[t]=w;w=w>>8;a[t+1|0]=w;w=u;a[v]=w;w=w>>8;a[v+1|0]=w;e=e+1&65535;q=e&65535}while((q|0)<(n|0))}if(!r){x=de(h)|0;y=de(x)|0;z=400;A=0;B=640;C=0;i=j;return}q=f-1&65535;f=0;e=0;do{s=m+((($n(0,q)|0)&65535)<<1)|0;v=(d[s]|d[s+1|0]<<8)<<16>>16;u=m+(e<<1)|0;w=(d[u]|d[u+1|0]<<8)<<16>>16;a[s]=w;w=w>>8;a[s+1|0]=w;w=v;a[u]=w;w=w>>8;a[u+1|0]=w;f=f+1&65535;e=f&65535}while((e|0)<(o|0));e=de(h)|0;if(!r){x=e;y=de(x)|0;z=400;A=0;B=640;C=0;i=j;return}r=k<<24>>24!=0;k=0;while(1){if(p){f=k;q=0;u=0;while(1){v=l+(u<<1)|0;s=((d[v]|d[v+1|0]<<8)<<16>>16)+b&65535;v=m+((f&65535)<<1)|0;t=((d[v]|d[v+1|0]<<8)<<16>>16)+c&65535;v=f+1&65535;de(g)|0;D=le(s,t)|0;de(h)|0;if(!(r&D<<24>>24==0)){ge(s,t,D)}D=q+1&65535;t=D&65535;if((t|0)<(n|0)){f=(v&65535|0)>=(o|0)?0:v;q=D;u=t}else{break}}}u=k+1&65535;if((u&65535|0)<(o|0)){k=u}else{x=e;break}}y=de(x)|0;z=400;A=0;B=640;C=0;i=j;return}function uf(){tm(65608,3,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0)|0;qf(Dm(283)|0);tf(8,24,304,120,2,0,0,0);Xh();w=120;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;wm();return}function vf(b){b=b|0;a[b]=(d[219104]|d[219105]<<8|d[219106]<<16|d[219107]<<24|0)!=0|0;return}function wf(){xp();return}function xf(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0;if((d[265144]|d[265145]<<8)<<16>>16<<16>>16==0){Qb()}wp(10);rd(29);Lp(265154,0,768)|0;w=((d[265144]|d[265145]<<8)<<16>>16)-((a[265146]|0)!=0)&65535;a[265150]=w;w=w>>8;a[265151]=w;w=de(4)|0;a[265152]=w;w=w>>8;a[265153]=w;Ve(265154,15);ii(8,24,311,143);tm(65136,5,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0)|0;b=$d(5)|0;c=200;while(1){e=b;f=320;while(1){a[e]=a[231736+(d[e]|0)|0]|0;g=f-1|0;if((g|0)>0){e=e+1|0;f=g}else{break}}f=c-1&65535;if(f<<16>>16==0){break}else{b=b+320|0;c=f}}c=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((c|0)==0){h=152;i=0}else if((c|0)==2){h=24;i=8}else{h=152;i=264}b=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;Kp(265922,b+753|0,12)|0;f=b+((c*48|0)+432)|0;Kp(71600,f|0,12)|0;Mp(71612,f|0,12)|0;ie(i,h,0,152,56,40,4,4);ie(i,h,264,152,56,40,4,4);h=d[261416]|0;if((h|0)==2){ie(8,120,8,0,304,24,4,4)}else if((h|0)==1){ie(8,96,8,0,304,24,4,4)}h=0;i=(_d()|0)+7688|0;while(1){Lp(i|0,12,304)|0;f=h+1&65535;if((f&65535)>>>0<120>>>0){h=f;i=i+320|0}else{break}}ie(0,0,0,0,320,200,4,0);Ve(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,15);a[71848]=0;if((a[265146]|0)!=0&(d[265144]|d[265145]<<8)<<16>>16<<16>>16==1){Bc(92,32,74,16);Bc(98,32,74,16);Bc(8,32,74,16);return}else{wm();return}}function yf(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;b=i;i=i+224|0;c=b|0;e=b+16|0;f=b+32|0;g=b+136|0;tm(64408,3,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0)|0;de(2)|0;h=(d[265150]|d[265151]<<8)<<16>>16;if(!(h<<16>>16==0)){j=0;do{j=j+1&65535;Uf(0,j);Uf(1,j);Uf(2,j);Uf(4,j)}while((j&65535)>>>0<(h&65535)>>>0)}h=d[231992]|d[231993]<<8|d[231994]<<16|d[231995]<<24|0;if(!((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==0)){j=0;k=h;do{h=(j&65535)+1|0;l=k+(h<<1)|0;m=(d[l]|d[l+1|0]<<8)<<16>>16;if(!(m<<16>>16==-1)){Tf(m&255,h&65535,0)}j=j+1&65535;xp();k=d[231992]|d[231993]<<8|d[231994]<<16|d[231995]<<24|0}while((j&65535)>>>0<((d[k]|d[k+1|0]<<8)<<16>>16&65535)>>>0)}if(!((di()|0)<<16>>16==0)){k=(bi()|0)<<16>>16==27;j=a[71848]|0;if(k){a[71848]=j<<24>>24==0|0;Xh();n=a[71848]|0}else{n=j}}else{n=a[71848]|0}if(n<<24>>24==0){tf(8,24,304,120,2,0,0,0)}else{ie(8,24,8,24,304,120,2,0)}ie(0,0,0,0,320,200,0,2);n=(d[265144]|d[265145]<<8)<<16>>16;if(n<<16>>16==(d[265150]|d[265151]<<8)<<16>>16<<16>>16){o=n}else{j=c|0;k=e|0;e=f|0;Ta(k|0,48616,(f=i,i=i+8|0,w=n&65535,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0)|0;i=f;n=c+3|0;c=g|0;g=0;do{h=(((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)+(g&65535)|0)>>>0)%6|0;m=h&255;l=15512+(h<<5)|0;Np(j|0,d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0,3)|0;a[n]=0;l=(Ph(k,j,0,e,99,d[258216]|d[258217]<<8|d[258218]<<16|d[258219]<<24|0)|0)==0;a:do{if(!(l|(a[e]|0)==0)){h=e;while(1){p=ub(h|0)|0;q=p&65535;r=p&65535;if((r|0)==0){s=h}else{p=46584+(d[261416]<<2)|0;Ta(j|0,62176,(f=i,i=i+16|0,w=d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24|0,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,w=r,a[f+8|0]=w,w=w>>8,a[f+9|0]=w,w=w>>8,a[f+10|0]=w,w=w>>8,a[f+11|0]=w,f)|0)|0;i=f;if((Ph(k,j,0,c,81,d[258216]|d[258217]<<8|d[258218]<<16|d[258219]<<24|0)|0)!=0){qf(c)}Tf(m,q,1);s=h}do{q=a[s]|0;if(q<<24>>24==0){break a}s=s+1|0}while(!(q<<24>>24==44));if((a[s]|0)==0){break}else{h=s}}}}while(0);g=g+1&65535}while((g&65535)>>>0<6>>>0);qf(267232);o=(d[265144]|d[265145]<<8)<<16>>16}g=d[231992]|d[231993]<<8|d[231994]<<16|d[231995]<<24|0;if(((d[g]|d[g+1|0]<<8)<<16>>16&65535)>>>0<(o&65535)>>>0){w=0;a[265148]=w;w=w>>8;a[265149]=w;i=b;return}else{qf(Dm(286)|0);w=(d[265144]|d[265145]<<8)<<16>>16;a[265936]=w;w=w>>8;a[265937]=w;a[265940]=1;Bc(34,16,82,64);Jc(265148);i=b;return}}function zf(){Bc(128,6,16,106);return}function Af(){var a=0;Xc();de((d[265152]|d[265153]<<8)<<16>>16)|0;ii(0,0,319,199);Xh();Kp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+753|0,265922,12)|0;Ve(265154,15);a=de(0)|0;je();de(a)|0;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);Kc((d[265148]|d[265149]<<8)<<16>>16);return}function Bf(a){a=a|0;var b=0;b=de(a)|0;je();de(b)|0;return}function Cf(b,c){b=b|0;c=c|0;w=b;a[265144]=w;w=w>>8;a[265145]=w;a[265146]=c;Bc(18,6,16,112);return}function Df(){var a=0;a=(d[258256]|d[258257]<<8)<<16>>16<<5;he(69,a+37&65535,69,a|21,38,30,2,0,0);return}function Ef(a){a=a|0;var b=0,c=0;b=((d[258592]|d[258593]<<8)<<16>>16)+a&65535;a=b<<16>>16;if(b<<16>>16<0){c=0;return c|0}if((a|0)>=((d[258240]|d[258241]<<8)<<16>>16&65535|0)){c=0;return c|0}c=258280+(a*12|0)|0;return c|0}function Ff(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;b=i;c=((d[258592]|d[258593]<<8)<<16>>16)+((d[258256]|d[258257]<<8)<<16>>16)&65535;e=c<<16>>16;if(!(c<<16>>16<0)?(e|0)<((d[258240]|d[258241]<<8)<<16>>16&65535|0):0){f=258280+(e*12|0)|0}else{f=0}e=f+8|0;c=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;e=de(2)|0;g=c+12|0;h=lp(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0,137648,64e3,0)|0;np(h,0,128,48,2)|0;mp(h);if((a[258584]|0)!=0?(h=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+256|0,Ie((d[231240]|d[231241]<<8)<<16>>16,d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0,288,136,0,0,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0),i=h,g=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+96|0,j=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0,g=((om(j)|0)&255)+1&65535,k=f|0,f=13220+(((d[k]|d[k+1|0]<<8)<<16>>16&65535)*100|0)|0,k=(d[f]|d[f+1|0]<<8)<<16>>16,l=13010+((k&65535)<<2)|0,!((d[l]|d[l+1|0]<<8)<<16>>16<<16>>16==0)):0){l=0;m=k;while(1){k=13008+((m&65535)<<2)|0;if((d[k]|d[k+1|0]<<8)<<16>>16<<16>>16==0){n=m}else{k=(aa(l,g)|0)+137&65535;o=0;while(1){Ie((d[231240]|d[231241]<<8)<<16>>16,j,(aa(o,g)|0)+289&65535,k,0,0,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;p=o+1&65535;q=(d[f]|d[f+1|0]<<8)<<16>>16;r=13008+((q&65535)<<2)|0;if((p&65535)>>>0<((d[r]|d[r+1|0]<<8)<<16>>16&65535)>>>0){o=p}else{n=q;break}}}o=l+1&65535;k=13010+((n&65535)<<2)|0;if((o&65535)>>>0<((d[k]|d[k+1|0]<<8)<<16>>16&65535)>>>0){l=o;m=n}else{break}}}if(!((a[c+50|0]|0)==-1)){if((a[258248]|0)==0){ie(128,48,128,48,184,112,2,e);s=de(e)|0;Gf(0);i=b;return}ie(128,99,128,160,184,9,2,2);ie(128,99,128,169,184,9,2,2);ze(Dm(185)|0,220,169,6,0,306,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;c=((d[258592]|d[258593]<<8)<<16>>16)+((d[258256]|d[258257]<<8)<<16>>16)&65535;n=c<<16>>16;if(!(c<<16>>16<0)?(n|0)<((d[258240]|d[258241]<<8)<<16>>16&65535|0):0){t=258280+(n*12|0)|0}else{t=0}n=t+8|0;c=a[(d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24)+50|0]|0;if(c<<24>>24==-1){ie(128,48,128,48,184,112,2,e);s=de(e)|0;Gf(0);i=b;return}ie(128,c<<24>>24==(a[t+2|0]|0)?169:160,128,99,184,9,2,(d[231240]|d[231241]<<8)<<16>>16);ie(128,48,128,48,184,112,2,e);s=de(e)|0;Gf(0);i=b;return}t=($d(2)|0)+15488|0;c=112;while(1){n=t;m=184;while(1){a[n]=a[202480+(d[n]|0)|0]|0;l=m-1|0;if((l|0)>0){n=n+1|0;m=l}else{break}}m=c-1&65535;if(m<<16>>16==0){break}else{t=t+320|0;c=m}}if((a[258248]|0)!=0){ze(Dm(185)|0,220,99,6,0,306,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;ie(128,48,128,48,184,112,2,e);s=de(e)|0;Gf(0);i=b;return}ze(Dm(186)|0,220,94,6,0,306,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;if((d[258232]|d[258233]<<8)<<16>>16<<16>>16==0){ze(Dm(333)|0,220,104,6,0,306,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;ie(128,48,128,48,184,112,2,e);s=de(e)|0;Gf(0);i=b;return}else{c=Dm(187)|0;ze(c,220,104,6,0,306,(h=i,i=i+8|0,w=(d[258232]|d[258233]<<8)<<16>>16&65535,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;ie(128,48,128,48,184,112,2,e);s=de(e)|0;Gf(0);i=b;return}}function Gf(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0;c=i;e=de(2)|0;f=_d()|0;Lp(f+6848|0,116,183)|0;Lp(f+7168|0,116,183)|0;Lp(f+7488|0,116,183)|0;Lp(f+7808|0,116,183)|0;Lp(f+8128|0,116,183)|0;Lp(f+8448|0,116,183)|0;Lp(f+8768|0,116,183)|0;Lp(f+9088|0,116,183)|0;Lp(f+9408|0,116,183)|0;Lp(f+9728|0,116,183)|0;Lp(f+10048|0,116,183)|0;Lp(f+10368|0,116,183)|0;Lp(f+10688|0,116,183)|0;Lp(f+11008|0,116,183)|0;Lp(f+11328|0,116,183)|0;if((b|0)!=0?(a[b]|0)!=0:0){ze(b,128,23,12,0,18,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g}else{b=((d[258592]|d[258593]<<8)<<16>>16)+((d[258256]|d[258257]<<8)<<16>>16)&65535;f=b<<16>>16;if(!(b<<16>>16<0)?(f|0)<((d[258240]|d[258241]<<8)<<16>>16&65535|0):0){h=258280+(f*12|0)|0}else{h=0}f=h+8|0;b=(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)+8|0;ze(Dm((d[b]|d[b+1|0]<<8)<<16>>16)|0,128,23,12,0,18,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;b=qe(Dm(178)|0)|0;f=Dm(177)|0;j=h+4|0;ze(f,310-b&65535,23,12,0,18,(g=i,i=i+8|0,w=(d[j]|d[j+1|0]<<8)<<16>>16&65535,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;if((a[258248]|0)!=0){j=qe(Dm(180)|0)|0;f=Dm(179)|0;ze(f,(308-b&65535)-j&65535,23,12,0,18,(g=i,i=i+8|0,w=a[h+2|0]|0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g}}if(!(e<<16>>16==0)){k=de(e)|0;i=c;return}he(128,21,128,21,182,14,3,0,0);k=de(e)|0;i=c;return}function Hf(){var b=0,c=0,e=0;b=((d[258592]|d[258593]<<8)<<16>>16)+((d[258256]|d[258257]<<8)<<16>>16)&65535;c=b<<16>>16;if(!(b<<16>>16<0)?(c|0)<((d[258240]|d[258241]<<8)<<16>>16&65535|0):0){e=258280+(c*12|0)|0}else{e=0}c=e+8|0;b=a[(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24)+50|0]|0;if(b<<24>>24==-1){return}ie(128,b<<24>>24==(a[e+2|0]|0)?169:160,128,99,184,9,2,(d[231240]|d[231241]<<8)<<16>>16);return}function If(b,c,e,f,g,h,j,k){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;k=k|0;var l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0;l=i;i=i+280|0;m=l|0;n=l+200|0;o=(h&65535)>>>1;h=g&65535;p=g<<16>>16==0;if(!p){q=0;do{r=n+(q<<1)|0;w=q&65535;a[r]=w;w=w>>8;a[r+1|0]=w;q=q+1|0}while((q|0)<(h|0))}q=o&65535;r=o<<16>>16==0;if(!r){s=0;do{t=m+(s<<1)|0;w=s&65535;a[t]=w;w=w>>8;a[t+1|0]=w;s=s+1|0}while((s|0)<(q|0))}if(!p){s=g-1&65535;g=0;do{t=n+((($n(0,s)|0)&65535)<<1)|0;u=(d[t]|d[t+1|0]<<8)<<16>>16;v=n+(g<<1)|0;w=(d[v]|d[v+1|0]<<8)<<16>>16;a[t]=w;w=w>>8;a[t+1|0]=w;w=u;a[v]=w;w=w>>8;a[v+1|0]=w;g=g+1|0}while((g|0)<(h|0))}if(r){x=80;y=0;z=200;A=0;i=l;return}g=o-1&65535;s=0;do{v=m+((($n(0,g)|0)&65535)<<1)|0;u=(d[v]|d[v+1|0]<<8)<<16>>16;t=m+(s<<1)|0;w=(d[t]|d[t+1|0]<<8)<<16>>16;a[v]=w;w=w>>8;a[v+1|0]=w;w=u;a[t]=w;w=w>>8;a[t+1|0]=w;s=s+1|0}while((s|0)<(q|0));if(r){x=80;y=0;z=200;A=0;i=l;return}r=c&65535;c=f&65535;f=0;do{if(!p){s=f&65535;g=0;while(1){t=n+(g<<1)|0;u=(d[t]|d[t+1|0]<<8)<<16>>16;t=m+((s&65535)<<1)|0;v=u+b&65535;B=((d[t]|d[t+1|0]<<8)<<16>>16&65535)<<1;t=B+r&65535;C=u+e&65535;u=B+c&65535;if(v<<16>>16<0){D=0;E=v+1&65535;F=C-v&65535}else{D=v;E=1;F=C}if(!(D<<16>>16>39|F<<16>>16>39)){if(F<<16>>16<0){G=D-F&65535;H=E+F&65535;I=0}else{G=D;H=E;I=F}if(t<<16>>16<0){J=0;K=t+2&65535;L=u-t&65535}else{J=t;K=2;L=u}if(L<<16>>16<0){M=J-L&65535;N=K+L&65535;O=0}else{M=J;N=K;O=L}ie(G<<3,M,I<<3,O,H<<3,N,j,k)}u=s+1&65535;t=g+1|0;if((t|0)<(h|0)){s=u<<16>>16==o<<16>>16?0:u;g=t}else{break}}}if((f&3|0)==0){g=d[219112]|d[219113]<<8|d[219114]<<16|d[219115]<<24|0;do{xp()}while((g|0)==(d[219112]|d[219113]<<8|d[219114]<<16|d[219115]<<24|0))}f=f+1|0}while((f|0)<(q|0));x=80;y=0;z=200;A=0;i=l;return}function Jf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return}function Kf(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;ie(72,24,72,40,32,128,0,2);c=((d[258592]|d[258593]<<8)<<16>>16)-1&65535;e=c<<16>>16;do{if(!(c<<16>>16<0)?!((e|0)>=((d[258240]|d[258241]<<8)<<16>>16&65535|0)|(258280+(e*12|0)|0)==0):0){f=258288+(e*12|0)|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=g+26|0;h=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(((d[f]|d[f+1|0]<<8)<<16>>16&65535)<<2)|0;f=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;if((a[g+50|0]|0)==-1){Ie(2,f,72,8,0,256,(j=i,i=i+16|0,w=202480,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,w=1,a[j+8|0]=w,w=w>>8,a[j+9|0]=w,w=w>>8,a[j+10|0]=w,w=w>>8,a[j+11|0]=w,j)|0);i=j;break}else{Ie(2,f,72,8,0,0,(j=i,i=i+1|0,i=i+7&-8,w=0,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0);i=j;break}}else{k=6}}while(0);if((k|0)==6){ie(72,32,72,24,32,8,2,2)}k=((d[258592]|d[258593]<<8)<<16>>16)+4&65535;e=k<<16>>16;if(!(k<<16>>16<0)?!((e|0)>=((d[258240]|d[258241]<<8)<<16>>16&65535|0)|(258280+(e*12|0)|0)==0):0){k=258288+(e*12|0)|0;e=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;k=e+26|0;c=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(((d[k]|d[k+1|0]<<8)<<16>>16&65535)<<2)|0;k=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((a[e+50|0]|0)==-1){Ie(2,k,72,168,0,256,(j=i,i=i+16|0,w=202480,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,w=1,a[j+8|0]=w,w=w>>8,a[j+9|0]=w,w=w>>8,a[j+10|0]=w,w=w>>8,a[j+11|0]=w,j)|0);i=j;i=b;return}else{Ie(2,k,72,168,0,0,(j=i,i=i+1|0,i=i+7&-8,w=0,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0);i=j;i=b;return}}ie(72,0,72,168,32,8,2,2);i=b;return}function Lf(){return}function Mf(){return}function Nf(){return}function Of(){return}function Pf(){return}function Qf(){return}function Rf(b,c,d,e,f){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;if(d<<16>>16<1){return}g=e<<16>>16;if(e<<16>>16<1){return}if(b<<16>>16>319){return}h=c<<16>>16;if(c<<16>>16>199){return}do{if(b<<16>>16<0){i=(d<<16>>16)+(b<<16>>16)|0;if((i|0)<1){return}else{j=0;k=i&65535;break}}else{j=b;k=d}}while(0);do{if(c<<16>>16<0){d=g+h|0;if((d|0)<1){return}else{l=d&65535;m=0;break}}else{l=e;m=c}}while(0);c=j<<16>>16;e=m<<16>>16;h=((l<<16>>16)+e|0)>199?200-m&65535:l;l=_d()|0;if(!(h<<16>>16>0)){return}m=((c+(k<<16>>16)|0)>319?320-j&65535:k)<<16>>16;k=m&1;j=320-m|0;g=h;h=l+((e*320|0)+c)|0;while(1){c=g&1;e=(c|0)==(k|0);l=e?h:h+1|0;d=m+((e^1)<<31>>31)|0;if((d|0)>0){e=l;b=d;while(1){a[e]=f;d=e+2|0;i=b-2|0;if((i|0)>0){e=d;b=i}else{n=d;break}}}else{n=l}b=g-1&65535;if(b<<16>>16>0){g=b;h=n+(j-c)|0}else{break}}return}function Sf(b,c,d,e,f){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0;g=_d()|0;if(b<<16>>16>319){return}h=b<<16>>16<0?0:b;if(c<<16>>16>199){return}i=c<<16>>16<0?0:c;c=d<<16>>16>319?319:d;j=c<<16>>16<0?0:c;c=e<<16>>16>199?199:e;e=c<<16>>16<0?0:c;if(h<<16>>16>j<<16>>16|i<<16>>16>e<<16>>16){return}c=(j-h&65535)+1&65535;j=(1-i&65535)+e&65535;if(j<<16>>16==0){return}e=c<<16>>16==0;k=320-(c&65535)|0;l=d<<16>>16<319?d:319;d=((l<<16>>16>0?l:0)-(b<<16>>16>0?b:0)&65535)+1|0;b=0;l=g+(((i<<16>>16)*320|0)+(h<<16>>16))|0;while(1){if(e){m=l}else{h=0;i=l;while(1){a[i]=a[i]^f;g=h+1&65535;if((g&65535)>>>0<(c&65535)>>>0){h=g;i=i+1|0}else{break}}m=l+d|0}i=b+1&65535;if((i&65535)>>>0<(j&65535)>>>0){b=i;l=m+k|0}else{break}}return}function Tf(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;f=i;i=i+112|0;g=f|0;h=f+96|0;j=f+104|0;k=f+8|0;l=((b&255)<<4)+144|0;b=0;m=231736;n=0;while(1){a[m]=b;if((((n|0)/16|0)&65535|0)==9?(o=(n|0)%16|0,(o&65535)<<16>>16<7):0){a[m]=l+o}o=b+1&65535;if(o<<16>>16<256){b=o;m=m+1|0;n=o<<16>>16}else{break}}n=g|0;g=c&65535;Ta(n|0,61896,(c=i,i=i+8|0,w=g,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0)|0;i=c;Ph(61584,n,0,k,81,d[258216]|d[258217]<<8|d[258218]<<16|d[258219]<<24|0)|0;Mb(k|0,61288,(c=i,i=i+16|0,w=h,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,w=j,a[c+8|0]=w,w=w>>8,a[c+9|0]=w,w=w>>8,a[c+10|0]=w,w=w>>8,a[c+11|0]=w,c)|0)|0;i=c;k=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(g+477<<2)|0;g=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;Ie(3,g,((d[h]|d[h+1|0]<<8)<<16>>16)+8&65535,((d[j]|d[j+1|0]<<8)<<16>>16)+24&65535,0,256,(c=i,i=i+16|0,w=231736,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,w=1,a[c+8|0]=w,w=w>>8,a[c+9|0]=w,w=w>>8,a[c+10|0]=w,w=w>>8,a[c+11|0]=w,c)|0);i=c;if(e<<24>>24==0){p=81;q=0;i=f;return}e=((d[h]|d[h+1|0]<<8)<<16>>16)+8&65535;h=((d[j]|d[j+1|0]<<8)<<16>>16)+24&65535;j=(om(g)|0)&255;c=(pm(g)|0)&255;if(!((di()|0)<<16>>16==0)?(bi()|0)<<16>>16==27:0){a[71848]=(a[71848]|0)==0|0;Xh()}tf(e,h,j,c,2,0,0,0);p=81;q=0;i=f;return}function Uf(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;e=i;i=i+128|0;f=e|0;g=e+8|0;h=f|0;j=15512+((b&255)<<5)|0;Np(h|0,d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0,3)|0;a[f+3|0]=0;f=e+112|0;Ka(f|0,16,48616,(j=i,i=i+8|0,w=c&65535,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0)|0;i=j;j=(Ph(f,h,0,g,99,d[258216]|d[258217]<<8|d[258218]<<16|d[258219]<<24|0)|0)==0;if(j|(a[g]|0)==0){k=100;l=0;i=e;return}j=b&255;b=g;a:while(1){g=(ub(b|0)|0)&65535;if((g|0)==0){m=b}else{h=(d[231992]|d[231993]<<8|d[231994]<<16|d[231995]<<24)+(g<<1)|0;w=j;a[h]=w;w=w>>8;a[h+1|0]=w;m=b}do{h=a[m]|0;if(h<<24>>24==0){n=8;break a}m=m+1|0}while(!(h<<24>>24==44));if((a[m]|0)==0){n=8;break}else{b=m}}if((n|0)==8){k=100;l=0;i=e;return}}function Vf(a,b){a=a|0;b=b|0;var c=0;c=b+6|0;b=a+6|0;return((d[c]|d[c+1|0]<<8)<<16>>16&65535)-((d[b]|d[b+1|0]<<8)<<16>>16&65535)|0}function Wf(){var b=0;w=Kg(1,(Jg(a[Dm(175)|0]|0)|0)&255,168,168,379,0)|0;a[266924]=w;w=w>>8;a[266925]=w;w=w>>8;a[266926]=w;w=w>>8;a[266927]=w;b=Kg(2,(Jg(a[Dm(176)|0]|0)|0)&255,240,168,381,0)|0;w=b;a[266928]=w;w=w>>8;a[266929]=w;w=w>>8;a[266930]=w;w=w>>8;a[266931]=w;w=Qg(d[266924]|d[266925]<<8|d[266926]<<16|d[266927]<<24|0,b)|0;a[266924]=w;w=w>>8;a[266925]=w;w=w>>8;a[266926]=w;w=w>>8;a[266927]=w;xd(-2);Uc(0,255);rd((d[266920]|d[266921]<<8)<<16>>16);w=(((d[266914]|d[266915]<<8)<<16>>16)+405&65535)+((d[266912]|0)*40&65535)&65535;a[266914]=w;w=w>>8;a[266915]=w;return}function Xf(){a[d[266936]|d[266937]<<8|d[266938]<<16|d[266939]<<24|0]=(d[266932]|d[266933]<<8)<<16>>16<<16>>16==-32766|0;return}function Yf(b){b=b|0;var c=0;if((d[266936]|d[266937]<<8|d[266938]<<16|d[266939]<<24|0)==0){w=b;a[266936]=w;w=w>>8;a[266937]=w;w=w>>8;a[266938]=w;w=w>>8;a[266939]=w;a[b]=1;return}else{b=d[266916]|d[266917]<<8|d[266918]<<16|d[266919]<<24|0;c=d[266924]|d[266925]<<8|d[266926]<<16|d[266927]<<24|0;w=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;a[266944]=w;w=w>>8;a[266945]=w;w=w>>8;a[266946]=w;w=w>>8;a[266947]=w;w=b;a[266948]=w;w=w>>8;a[266949]=w;w=w>>8;a[266950]=w;w=w>>8;a[266951]=w;w=c;a[266952]=w;w=w>>8;a[266953]=w;w=w>>8;a[266954]=w;w=w>>8;a[266955]=w;a[266956]=1;w=0;a[266958]=w;w=w>>8;a[266959]=w;Bc(108,28,116,100);Jc(266932);Cc(56);return}}function Zf(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;w=b;a[266944]=w;w=w>>8;a[266945]=w;w=w>>8;a[266946]=w;w=w>>8;a[266947]=w;w=c;a[266948]=w;w=w>>8;a[266949]=w;w=w>>8;a[266950]=w;w=w>>8;a[266951]=w;w=d;a[266952]=w;w=w>>8;a[266953]=w;w=w>>8;a[266954]=w;w=w>>8;a[266955]=w;a[266956]=e;w=0;a[266958]=w;w=w>>8;a[266959]=w;Bc(108,28,116,100);return}function _f(){var a=0,b=0;a=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;b=Dm((d[266914]|d[266915]<<8)<<16>>16)|0;Np(a|0,b|0,d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24|0)|0;xp();return}function $f(){zp(d[266928]|d[266929]<<8|d[266930]<<16|d[266931]<<24|0);zp(d[266924]|d[266925]<<8|d[266926]<<16|d[266927]<<24|0);if((d[266920]|d[266921]<<8)<<16>>16<<16>>16==-1){return}Xc();return}function ag(b){b=b|0;a[b]=(d[267176]|d[267177]<<8)<<16>>16<<16>>16!=-32767|0;return}function bg(){var b=0,c=0,e=0;b=d[203120]|d[203121]<<8|d[203122]<<16|d[203123]<<24|0;w=Ig(b)|0;a[267176]=w;w=w>>8;a[267177]=w;cg(0);c=(d[267176]|d[267177]<<8)<<16>>16;if((c&2048)==0){if(c<<16>>16==-32767){return}else{e=c}}else{w=0;a[267176]=w;w=w>>8;a[267177]=w;e=0}c=e&-32513;w=c;a[267176]=w;w=w>>8;a[267177]=w;a[71968]=1;a:do{switch(c&65535|0){case 61:case 43:{dg(Eg(b,((d[71960]|d[71961]<<8)<<16>>16)+3&65535)|0)|0;break};case 84:case 98:{e=(d[71960]|d[71961]<<8)<<16>>16;if((e&65535)>>>0<10>>>0){dg(Eg(b,e+4&65535)|0)|0;break a}else{$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;break a}break};case 85:case 101:{_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;break};case 83:case 96:{e=(d[71960]|d[71961]<<8)<<16>>16;if(e<<16>>16==0){_g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;break a}else{dg(Eg(b,e+2&65535)|0)|0;break a}break};case 86:case 103:{$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;$g(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0)|0;break};default:{}}}while(0);a[71968]=0;xp();return}function cg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;c=i;e=d[267944]|d[267945]<<8|d[267946]<<16|d[267947]<<24|0;do{if(!(e>>>0>=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0|(a[260264]|0)!=0)){if((e|0)!=0){f=(d[267936]|d[267937]<<8)<<16>>16;g=f<<16>>16;h=72936+((f<<16>>16>-1?g:-g|0)+1<<2)|0;g=((d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)==0?-f&65535:f)+1&65535;w=g;a[267936]=w;w=w>>8;a[267937]=w;f=g<<16>>16;h=72936+((g<<16>>16>-1?f:-f|0)<<2)|0;f=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;h=d[72224]|0;g=d[72216]|0;j=((om(f)|0)&255)+h&65535;k=d[72216]|0;Jf(h,g,j,((pm(f)|0)&255)+k&65535);Ie(0,f,d[72224]|0,d[72216]|0,0,0,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;Pf()}f=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((f|0)==1){k=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;w=((($n(1,3)|0)&65535)*60|0)+k|0;a[267944]=w;w=w>>8;a[267945]=w;w=w>>8;a[267946]=w;w=w>>8;a[267947]=w;break}else if((f|0)==0){w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+18e3|0;a[267944]=w;w=w>>8;a[267945]=w;w=w>>8;a[267946]=w;w=w>>8;a[267947]=w;break}else if((f|0)==2){f=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[267936]|d[267937]<<8)<<16>>16<<16>>16==0){w=((($n(10,19)|0)&65535)*60|0)+f|0;a[267944]=w;w=w>>8;a[267945]=w;w=w>>8;a[267946]=w;w=w>>8;a[267947]=w;break}else{w=f+6|0;a[267944]=w;w=w>>8;a[267945]=w;w=w>>8;a[267946]=w;w=w>>8;a[267947]=w;break}}else{break}}}while(0);e=b&65535;a:do{if(b<<16>>16==1){if((d[267952]|d[267953]<<8|d[267954]<<16|d[267955]<<24|0)>>>0<(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0){f=$n(0,4)|0;w=f;a[267960]=w;w=w>>8;a[267961]=w;k=72916+((f&65535)<<2)|0;f=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;k=d[72800]|0;j=d[72784]|0;g=((om(f)|0)&255)+k&65535;h=d[72784]|0;Jf(k,j,g,((pm(f)|0)&255)+h&65535);Ie(0,f,d[72800]|0,d[72784]|0,0,0,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;Pf();switch((d[267960]|d[267961]<<8)<<16>>16&65535|0){case 4:{w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+(($n(5,6)|0)&65535)|0;a[267952]=w;w=w>>8;a[267953]=w;w=w>>8;a[267954]=w;w=w>>8;a[267955]=w;break a;break};case 0:{w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+(($n(7,30)|0)&65535)|0;a[267952]=w;w=w>>8;a[267953]=w;w=w>>8;a[267954]=w;w=w>>8;a[267955]=w;break a;break};case 1:case 2:case 3:{w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+(($n(6,10)|0)&65535)|0;a[267952]=w;w=w>>8;a[267953]=w;w=w>>8;a[267954]=w;w=w>>8;a[267955]=w;break a;break};default:{break a}}}}else{if(($h(65)|0)<<16>>16==0?($h(66)|0)<<16>>16==0:0){if((d[267960]|d[267961]<<8)<<16>>16<<16>>16==0){break}w=0;a[267960]=w;w=w>>8;a[267961]=w;w=0;a[267952]=w;w=w>>8;a[267953]=w;w=w>>8;a[267954]=w;w=w>>8;a[267955]=w;m=0}else{n=20}do{if((n|0)==20){if((ji(d[72800]|0,d[72784]|0,d[72792]|0,d[72808]|0)|0)<<16>>16==0){if((d[267960]|d[267961]<<8)<<16>>16<<16>>16==0){break a}w=0;a[267960]=w;w=w>>8;a[267961]=w;w=0;a[267952]=w;w=w>>8;a[267953]=w;w=w>>8;a[267954]=w;w=w>>8;a[267955]=w;m=0;break}else{if((d[267952]|d[267953]<<8|d[267954]<<16|d[267955]<<24|0)==-1){break a}w=-1;a[267952]=w;w=w>>8;a[267953]=w;w=w>>8;a[267954]=w;w=w>>8;a[267955]=w;f=$n(1,4)|0;w=f;a[267960]=w;w=w>>8;a[267961]=w;m=f&65535;break}}}while(0);f=72916+(m<<2)|0;h=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=d[72800]|0;g=d[72784]|0;j=((om(h)|0)&255)+f&65535;k=d[72784]|0;Jf(f,g,j,((pm(h)|0)&255)+k&65535);Ie(0,h,d[72800]|0,d[72784]|0,0,0,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;Pf()}}while(0);if(!(($h(65)|0)<<16>>16==0?($h(66)|0)<<16>>16==0:0)){n=28}if((n|0)==28?!((ji(d[202752]|0,d[202736]|0,d[202744]|0,d[202760]|0)|0)<<16>>16==0):0){m=(d[267976]|d[267977]<<8)<<16>>16;if(m<<16>>16==4){i=c;return}b=m<<16>>16==3?4:3;w=b;a[267976]=w;w=w>>8;a[267977]=w;w=0;a[267984]=w;w=w>>8;a[267985]=w;w=0;a[267968]=w;w=w>>8;a[267969]=w;w=w>>8;a[267970]=w;w=w>>8;a[267971]=w;m=72896+((b&65535)<<2)|0;b=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0;m=d[202752]|0;h=d[202736]|0;k=((om(b)|0)&255)+m&65535;j=d[202736]|0;Jf(m,h,k,((pm(b)|0)&255)+j&65535);Ie(0,b,d[202752]|0,d[202736]|0,0,0,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;Pf();i=c;return}do{if((ji((d[202752]|0)-16&65535,(d[202736]|0)-8&65535,(d[202744]|0)+16&65535,(d[202760]|0)+24&65535)|0)<<16>>16==0){b=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if(!((d[267968]|d[267969]<<8|d[267970]<<16|d[267971]<<24|0)>>>0<b>>>0)){i=c;return}j=(d[267984]|d[267985]<<8)<<16>>16;if(!(j<<16>>16==0)){w=j;a[267976]=w;w=w>>8;a[267977]=w;w=0;a[267984]=w;w=w>>8;a[267985]=w;if(j<<16>>16==4){w=(($n(12,30)|0)&65535)+b|0;a[267968]=w;w=w>>8;a[267969]=w;w=w>>8;a[267970]=w;w=w>>8;a[267971]=w;break}else{w=(($n(20,180)|0)&65535)+b|0;a[267968]=w;w=w>>8;a[267969]=w;w=w>>8;a[267970]=w;w=w>>8;a[267971]=w;break}}if((e|0)==1){if(((d[267976]|d[267977]<<8)<<16>>16&65535|0)==(((a[257664]|0)==0?0:3)|0)?(b=$n(0,17)|0,!((b&65535)>>>0>9>>>0)):0){o=(b&65535)>>>0>4>>>0?4:b;n=51}else{p=0;n=50}}else if((e|0)==0){b=$n(0,7)|0;if((b&65535)>>>0>5>>>0){p=1;n=50}else{o=b<<16>>16==5?4:b;n=51}}else{b=$n(0,15)|0;if((b&65535)>>>0>10>>>0){o=2;n=51}else{o=(b&65535)>>>0>4>>>0?4:b;n=51}}if((n|0)==50){q=p;r=(d[267976]|d[267977]<<8)<<16>>16;n=52}else if((n|0)==51){b=(d[267976]|d[267977]<<8)<<16>>16;if(o<<16>>16==2&b<<16>>16==1){s=2;n=53}else{q=o;r=b;n=52}}do{if((n|0)==52){if(!(q<<16>>16==1&r<<16>>16==2)){if(!(q<<16>>16==r<<16>>16)?q<<16>>16==4|r<<16>>16==4:0){w=q;a[267984]=w;w=w>>8;a[267985]=w;w=3;a[267976]=w;w=w>>8;a[267977]=w;w=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;a[267968]=w;w=w>>8;a[267969]=w;w=w>>8;a[267970]=w;w=w>>8;a[267971]=w;break}w=q;a[267976]=w;w=w>>8;a[267977]=w;b=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if(q<<16>>16==4){w=(($n(6,60)|0)&65535)+b|0;a[267968]=w;w=w>>8;a[267969]=w;w=w>>8;a[267970]=w;w=w>>8;a[267971]=w;break}else{w=(($n(15,180)|0)&65535)+b|0;a[267968]=w;w=w>>8;a[267969]=w;w=w>>8;a[267970]=w;w=w>>8;a[267971]=w;break}}else{s=1;n=53}}}while(0);if((n|0)==53){w=s;a[267984]=w;w=w>>8;a[267985]=w;w=0;a[267976]=w;w=w>>8;a[267977]=w;b=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;w=(($n(1,5)|0)&65535)+b|0;a[267968]=w;w=w>>8;a[267969]=w;w=w>>8;a[267970]=w;w=w>>8;a[267971]=w}if((a[257664]|0)!=0&(d[267976]|d[267977]<<8)<<16>>16<<16>>16==0){w=3;a[267976]=w;w=w>>8;a[267977]=w}}else{if((ji((d[202752]|0)-8&65535,d[202760]|0,(d[202744]|0)+8&65535,199)|0)<<16>>16==0){b=d[202744]|0;if((ji(b,(d[202736]|0)-8&65535,b+16&65535,(d[202760]|0)+8&65535)|0)<<16>>16==0){b=d[202752]|0;t=(ji(b-16&65535,(d[202736]|0)-8&65535,b,(d[202760]|0)+8&65535)|0)<<16>>16!=0|0}else{t=2}}else{t=3}if(t<<16>>16==(d[267976]|d[267977]<<8)<<16>>16<<16>>16){i=c;return}else{w=t;a[267976]=w;w=w>>8;a[267977]=w;w=0;a[267984]=w;w=w>>8;a[267985]=w;w=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;a[267968]=w;w=w>>8;a[267969]=w;w=w>>8;a[267970]=w;w=w>>8;a[267971]=w;break}}}while(0);t=72896+(((d[267976]|d[267977]<<8)<<16>>16&65535)<<2)|0;s=d[t]|d[t+1|0]<<8|d[t+2|0]<<16|d[t+3|0]<<24|0;t=d[202752]|0;n=d[202736]|0;q=((om(s)|0)&255)+t&65535;r=d[202736]|0;Jf(t,n,q,((pm(s)|0)&255)+r&65535);Ie(0,s,d[202752]|0,d[202736]|0,0,0,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;Pf();i=c;return}function dg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;c=i;i=i+16|0;e=c|0;f=((d[71960]|d[71961]<<8)<<16>>16)+3&65535;g=b+4|0;if(!((d[g]|d[g+1|0]<<8)<<16>>16<<16>>16==f<<16>>16)){h=Eg(d[203120]|d[203121]<<8|d[203122]<<16|d[203123]<<24|0,f)|0;Pg(b,0);Pg(h,0);f=h+60|0;if((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==49){a[h+46|0]=15;a[h+42|0]=15;Gg(h)}h=b+60|0;if((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==49){a[b+46|0]=8;a[b+42|0]=8;Gg(b)}w=((d[g]|d[g+1|0]<<8)<<16>>16)-3&65535;a[71960]=w;w=w>>8;a[71961]=w;j=1;i=c;return j|0}g=b+48|0;if(!(((d[g]|d[g+1|0]<<8)<<16>>16&4352)!=0|(a[71968]|0)!=0)){j=1;i=c;return j|0}g=b+60|0;if(!((d[g]|d[g+1|0]<<8)<<16>>16<<16>>16==49)){j=1;i=c;return j|0}Pg(b,0);b=e|0;g=d[73304]|d[73305]<<8|d[73306]<<16|d[73307]<<24|0;if((d[71960]|d[71961]<<8)<<16>>16<<16>>16==0){k=g}else{h=0;f=g;while(1){g=Im(f)|0;l=h+1&65535;if((l&65535)>>>0<((d[71960]|d[71961]<<8)<<16>>16&65535)>>>0){h=l;f=g}else{k=g;break}}}f=a[k+5|0]|0;h=k+1|0;k=Fb(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)|0;h=Wd(72960)|0;Zd(h,1330007625,b,12)|0;Xd(h);h=e+8|0;w=Fb(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;e=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;b=$d(3)|0;g=Md(72960,1)|0;Pd(g,k,0)|0;Nd(g,b,d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)|0;Bm(b,e)|0;Em(e,e);Ld(g);g=e;while(1){e=a[g]|0;m=e<<24>>24==42;n=g+1|0;if(e<<24>>24!=63&(m^1)){g=n}else{break}}a[g]=0;g=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;if(!(f<<24>>24==48)){f=n;while(1){e=a[f]|0;o=e<<24>>24==0;p=f+1|0;if(e<<24>>24!=12&(o^1)){f=p}else{break}}if(o){q=f;r=g;s=n}else{a[f]=0;q=p;r=g;s=n}}else{n=Dm((a[g]|0)+361+(((d[262360]|d[262361]<<8)<<16>>16&65535)<<2)+((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)*40|0)&65535)|0;Np(g|0,n|0,d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24|0)|0;q=g;r=231264;s=0}g=d[203152]|d[203153]<<8|d[203154]<<16|d[203155]<<24|0;w=r;a[267120]=w;w=w>>8;a[267121]=w;w=w>>8;a[267122]=w;w=w>>8;a[267123]=w;w=s;a[267112]=w;w=w>>8;a[267113]=w;w=w>>8;a[267114]=w;w=w>>8;a[267115]=w;w=q;a[267024]=w;w=w>>8;a[267025]=w;w=w>>8;a[267026]=w;w=w>>8;a[267027]=w;a[267008]=m&1;w=g;a[267e3]=w;w=w>>8;a[267001]=w;w=w>>8;a[267002]=w;w=w>>8;a[267003]=w;Bc(14,2,24,30);Cc(40);Cc(22);j=0;i=c;return j|0}function eg(){zp(d[203152]|d[203153]<<8|d[203154]<<16|d[203155]<<24|0);w=0;a[203152]=w;w=w>>8;a[203153]=w;w=w>>8;a[203154]=w;w=w>>8;a[203155]=w;ni();Ug(d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0);w=0;a[203128]=w;w=w>>8;a[203129]=w;w=w>>8;a[203130]=w;w=w>>8;a[203131]=w;zp(d[203136]|d[203137]<<8|d[203138]<<16|d[203139]<<24|0);w=0;a[203136]=w;w=w>>8;a[203137]=w;w=w>>8;a[203138]=w;w=w>>8;a[203139]=w;zp(d[203144]|d[203145]<<8|d[203146]<<16|d[203147]<<24|0);w=0;a[203144]=w;w=w>>8;a[203145]=w;w=w>>8;a[203146]=w;w=w>>8;a[203147]=w;Vh(1)|0;de((d[267904]|d[267905]<<8)<<16>>16)|0;return}function fg(){vp(2,1)|0;Sc(1,255);rm();a[219160]=1;$e(0);rd(($n(0,5)|0)+8&65535);return}function gg(b){b=b|0;var c=0;w=0;a[261336]=w;w=w>>8;a[261337]=w;b=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;vm(0,0,d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0);xd(-2);Uc(0,255);b=15536+((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)<<5)|0;rd((d[b]|d[b+1|0]<<8)<<16>>16);sm();vp(2,0)|0;w=de(2)|0;a[267904]=w;w=w>>8;a[267905]=w;Wh(1)|0;Xh();ig(0,(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255);b=Kg(1,(Jg(a[Dm(193)|0]|0)|0)&255,200,168,377,5)|0;w=b;a[203152]=w;w=w>>8;a[203153]=w;w=w>>8;a[203154]=w;w=w>>8;a[203155]=w;c=b+8|0;w=110;a[c]=w;w=w>>8;a[c+1|0]=w;pg();Nf();Be(0,0,0,0,40,200,2,0);Of();sg(1);tg(1);de(0)|0;w=0;a[267176]=w;w=w>>8;a[267177]=w;Bc(16,26,122,16);Cc(114);Cc(12);return 1}function hg(){var b=0,c=0,e=0,f=0;b=i;sm();ig(d[266948]|d[266949]<<8|d[266950]<<16|d[266951]<<24|0,(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255);de(2)|0;Xg(8)|0;c=d[266948]|d[266949]<<8|d[266950]<<16|d[266951]<<24|0;if((c|0)!=0){e=$d(5)|0;f=lp(c,e,(ae(5)|0)&65535,0)|0;np(f,0,(d[261360]|d[261361]<<8)<<16>>16<<3,(d[261352]|d[261353]<<8)<<16>>16,2)|0;mp(f)}f=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)*15|0)+397<<2)|0;Ie(2,d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0,d[231152]|0,d[231144]|0,0,0,(f=i,i=i+1|0,i=i+7&-8,w=0,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0);i=f;de(0)|0;Nf();Be(0,0,0,0,40,200,2,0);Of();Ve(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,15);f=d[266944]|d[266945]<<8|d[266946]<<16|d[266947]<<24|0;w=d[266948]|d[266949]<<8|d[266950]<<16|d[266951]<<24|0;a[267120]=w;w=w>>8;a[267121]=w;w=w>>8;a[267122]=w;w=w>>8;a[267123]=w;w=0;a[267112]=w;w=w>>8;a[267113]=w;w=w>>8;a[267114]=w;w=w>>8;a[267115]=w;w=f;a[267024]=w;w=w>>8;a[267025]=w;w=w>>8;a[267026]=w;w=w>>8;a[267027]=w;a[267008]=1;w=0;a[267e3]=w;w=w>>8;a[267001]=w;w=w>>8;a[267002]=w;w=w>>8;a[267003]=w;Bc(14,2,24,30);Jc(266958);i=b;return}function ig(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;e=i;i=i+16|0;f=e|0;g=c&255;h=15512+(g<<5)|0;Ka(f|0,16,66136,(j=i,i=i+8|0,w=a[d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0]|0,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0)|0;i=j;tm(f,3,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0)|0;f=de(2)|0;if(c<<24>>24==5){Td(67080,d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,768)|0}Lp(72896,0,60)|0;c=a[32+(g<<3)|0]|0;a[202744]=c;a[202752]=c;c=a[33+(g<<3)|0]|0;a[202760]=c;a[202736]=c;c=g*15|0;h=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;k=h+(c+387<<2)|0;l=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;w=l;a[72896]=w;w=w>>8;a[72897]=w;w=w>>8;a[72898]=w;w=w>>8;a[72899]=w;k=h+(c+388<<2)|0;w=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;a[72900]=w;w=w>>8;a[72901]=w;w=w>>8;a[72902]=w;w=w>>8;a[72903]=w;k=h+(c+389<<2)|0;w=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;a[72904]=w;w=w>>8;a[72905]=w;w=w>>8;a[72906]=w;w=w>>8;a[72907]=w;k=h+(c+390<<2)|0;w=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;a[72908]=w;w=w>>8;a[72909]=w;w=w>>8;a[72910]=w;w=w>>8;a[72911]=w;k=h+(c+391<<2)|0;w=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;a[72912]=w;w=w>>8;a[72913]=w;w=w>>8;a[72914]=w;w=w>>8;a[72915]=w;k=om(l)|0;a[202744]=(a[202744]|0)+k;k=pm(d[72896]|d[72897]<<8|d[72898]<<16|d[72899]<<24|0)|0;a[202760]=(a[202760]|0)+k;k=a[34+(g<<3)|0]|0;a[72792]=k;a[72800]=k;k=a[35+(g<<3)|0]|0;a[72808]=k;a[72784]=k;k=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;l=k+(c+392<<2)|0;h=d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0;w=h;a[72916]=w;w=w>>8;a[72917]=w;w=w>>8;a[72918]=w;w=w>>8;a[72919]=w;l=k+(c+393<<2)|0;w=d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0;a[72920]=w;w=w>>8;a[72921]=w;w=w>>8;a[72922]=w;w=w>>8;a[72923]=w;l=k+(c+394<<2)|0;w=d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0;a[72924]=w;w=w>>8;a[72925]=w;w=w>>8;a[72926]=w;w=w>>8;a[72927]=w;l=k+(c+395<<2)|0;w=d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0;a[72928]=w;w=w>>8;a[72929]=w;w=w>>8;a[72930]=w;w=w>>8;a[72931]=w;l=k+(c+396<<2)|0;w=d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0;a[72932]=w;w=w>>8;a[72933]=w;w=w>>8;a[72934]=w;w=w>>8;a[72935]=w;l=om(h)|0;a[72792]=(a[72792]|0)+l;l=pm(d[72916]|d[72917]<<8|d[72918]<<16|d[72919]<<24|0)|0;a[72808]=(a[72808]|0)+l;a[72224]=a[36+(g<<3)|0]|0;a[72216]=a[37+(g<<3)|0]|0;l=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;h=l+(c+398<<2)|0;w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;a[72936]=w;w=w>>8;a[72937]=w;w=w>>8;a[72938]=w;w=w>>8;a[72939]=w;h=l+(c+399<<2)|0;w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;a[72940]=w;w=w>>8;a[72941]=w;w=w>>8;a[72942]=w;w=w>>8;a[72943]=w;h=l+(c+400<<2)|0;w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;a[72944]=w;w=w>>8;a[72945]=w;w=w>>8;a[72946]=w;w=w>>8;a[72947]=w;h=l+(c+401<<2)|0;w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;a[72948]=w;w=w>>8;a[72949]=w;w=w>>8;a[72950]=w;w=w>>8;a[72951]=w;a[231152]=a[38+(g<<3)|0]|0;a[231144]=a[39+(g<<3)|0]|0;Xg(8)|0;if((b|0)==0){m=c+397|0;n=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;o=n+(m<<2)|0;p=d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0;q=a[231152]|0;r=q&255;s=a[231144]|0;t=s&255;Ie(2,p,r,t,0,0,(j=i,i=i+1|0,i=i+7&-8,w=0,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0);i=j;u=de(f)|0;i=e;return}g=$d(5)|0;h=lp(b,g,(ae(5)|0)&65535,0)|0;np(h,0,(d[261360]|d[261361]<<8)<<16>>16<<3,(d[261352]|d[261353]<<8)<<16>>16,2)|0;mp(h);m=c+397|0;n=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;o=n+(m<<2)|0;p=d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0;q=a[231152]|0;r=q&255;s=a[231144]|0;t=s&255;Ie(2,p,r,t,0,0,(j=i,i=i+1|0,i=i+7&-8,w=0,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0);i=j;u=de(f)|0;i=e;return}function jg(b){b=b|0;var c=0;if((d[266952]|d[266953]<<8|d[266954]<<16|d[266955]<<24|0)==0){c=0;a[b]=c;return}c=(((d[266958]|d[266959]<<8)<<16>>16&65535)>>>15^1)&255;a[b]=c;return}function kg(){Fh(d[266952]|d[266953]<<8|d[266954]<<16|d[266955]<<24|0);w=Ig(d[266952]|d[266953]<<8|d[266954]<<16|d[266955]<<24|0)|0;a[266958]=w;w=w>>8;a[266959]=w;Ee();cg(0);xp();return}function lg(){Xh();if((a[266956]|0)!=0){ni();rm()}Kc((d[266958]|d[266959]<<8)<<16>>16);return}function mg(){var b=0,c=0,e=0;b=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((a[261312]|0)!=0){return}c=15536+(b<<5)|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;c=((d[262360]|d[262361]<<8)<<16>>16<<2)+4&65535;a[266912]=b;w=c;a[266914]=w;w=w>>8;a[266915]=w;w=231264;a[266916]=w;w=w>>8;a[266917]=w;w=w>>8;a[266918]=w;w=w>>8;a[266919]=w;w=e;a[266920]=w;w=w>>8;a[266921]=w;w=0;a[266936]=w;w=w>>8;a[266937]=w;w=w>>8;a[266938]=w;w=w>>8;a[266939]=w;w=0;a[266924]=w;w=w>>8;a[266925]=w;w=w>>8;a[266926]=w;w=w>>8;a[266927]=w;w=0;a[266928]=w;w=w>>8;a[266929]=w;w=w>>8;a[266930]=w;w=w>>8;a[266931]=w;Bc(104,8,86,96);return}function ng(){var b=0,c=0,e=0;b=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((a[261312]|0)!=0){return}c=15532+(b<<5)|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;c=((d[262360]|d[262361]<<8)<<16>>16<<2)+5&65535;a[266912]=b;w=c;a[266914]=w;w=w>>8;a[266915]=w;w=231278;a[266916]=w;w=w>>8;a[266917]=w;w=w>>8;a[266918]=w;w=w>>8;a[266919]=w;w=e;a[266920]=w;w=w>>8;a[266921]=w;w=0;a[266936]=w;w=w>>8;a[266937]=w;w=w>>8;a[266938]=w;w=w>>8;a[266939]=w;w=0;a[266924]=w;w=w>>8;a[266925]=w;w=w>>8;a[266926]=w;w=w>>8;a[266927]=w;w=0;a[266928]=w;w=w>>8;a[266929]=w;w=w>>8;a[266930]=w;w=w>>8;a[266931]=w;Bc(104,8,86,96);return}function og(){var b=0,c=0,e=0;b=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((a[261312]|0)!=0){return}c=15534+(b<<5)|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;c=((d[262360]|d[262361]<<8)<<16>>16<<2)+6&65535;a[266912]=b;w=c;a[266914]=w;w=w>>8;a[266915]=w;w=231292;a[266916]=w;w=w>>8;a[266917]=w;w=w>>8;a[266918]=w;w=w>>8;a[266919]=w;w=e;a[266920]=w;w=w>>8;a[266921]=w;w=0;a[266936]=w;w=w>>8;a[266937]=w;w=w>>8;a[266938]=w;w=w>>8;a[266939]=w;w=0;a[266924]=w;w=w>>8;a[266925]=w;w=w>>8;a[266926]=w;w=w>>8;a[266927]=w;w=0;a[266928]=w;w=w>>8;a[266929]=w;w=w>>8;a[266930]=w;w=w>>8;a[266931]=w;Bc(104,8,86,96);return}function pg(){var b=0,c=0,e=0,f=0,g=0,h=0;b=d[203128]|d[203129]<<8|d[203130]<<16|d[203131]<<24|0;if((b|0)!=0){Ug(b);w=0;a[203128]=w;w=w>>8;a[203129]=w;w=w>>8;a[203130]=w;w=w>>8;a[203131]=w}zp(d[203136]|d[203137]<<8|d[203138]<<16|d[203139]<<24|0);w=0;a[203136]=w;w=w>>8;a[203137]=w;w=w>>8;a[203138]=w;w=w>>8;a[203139]=w;zp(d[203144]|d[203145]<<8|d[203146]<<16|d[203147]<<24|0);w=0;a[203144]=w;w=w>>8;a[203145]=w;w=w>>8;a[203146]=w;w=w>>8;a[203147]=w;w=0;a[203120]=w;w=w>>8;a[203121]=w;w=w>>8;a[203122]=w;w=w>>8;a[203123]=w;b=$d(5)|0;Lp(b|0,0,832)|0;c=b+768|0;e=8;f=b;b=0;while(1){g=f+4|0;w=b+2&65535;a[g]=w;w=w>>8;a[g+1|0]=w;g=f+16|0;w=6400;a[g]=w;w=w>>8;a[g+1|0]=w;g=f+52|0;w=20;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=f+28|0;w=267928;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=f+24|0;w=267928;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=f+20|0;w=267928;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;a[f+10|0]=2;g=f+48|0;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;g=f+34|0;w=24;a[g]=w;w=w>>8;a[g+1|0]=w;g=f+36|0;w=e;a[g]=w;w=w>>8;a[g+1|0]=w;g=f+38|0;w=136;a[g]=w;w=w>>8;a[g+1|0]=w;g=f+40|0;w=8;a[g]=w;w=w>>8;a[g+1|0]=w;g=f+32|0;w=8;a[g]=w;w=w>>8;a[g+1|0]=w;g=d[203120]|d[203121]<<8|d[203122]<<16|d[203123]<<24|0;if((g|0)==0){h=f}else{h=Qg(g,f)|0}w=h;a[203120]=w;w=w>>8;a[203121]=w;w=w>>8;a[203122]=w;w=w>>8;a[203123]=w;g=b+1|0;if((g|0)<13){e=e+8&65535;f=f+64|0;b=g}else{break}}Fg(h);Fg(c);c=Lg(15,8,168,24,8,72,38)|0;w=c;a[203128]=w;w=w>>8;a[203129]=w;w=w>>8;a[203130]=w;w=w>>8;a[203131]=w;h=Qg(d[203120]|d[203121]<<8|d[203122]<<16|d[203123]<<24|0,c)|0;w=h;a[203120]=w;w=w>>8;a[203121]=w;w=w>>8;a[203122]=w;w=w>>8;a[203123]=w;c=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;b=c+1540|0;f=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;b=c+1544|0;c=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;b=Ng(16,0,168,96,f,c,Eg(h,15)|0,1)|0;w=b;a[203144]=w;w=w>>8;a[203145]=w;w=w>>8;a[203146]=w;w=w>>8;a[203147]=w;h=b+6|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;h=b+8|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;h=b+32|0;w=8;a[h]=w;w=w>>8;a[h+1|0]=w;h=Qg(d[203120]|d[203121]<<8|d[203122]<<16|d[203123]<<24|0,b)|0;w=h;a[203120]=w;w=w>>8;a[203121]=w;w=w>>8;a[203122]=w;w=w>>8;a[203123]=w;b=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;c=b+1532|0;f=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;c=b+1536|0;b=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;c=Ng(17,0,168,16,f,b,Eg(h,15)|0,0)|0;w=c;a[203136]=w;w=w>>8;a[203137]=w;w=w>>8;a[203138]=w;w=w>>8;a[203139]=w;h=c+6|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;h=c+8|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;h=c+32|0;w=8;a[h]=w;w=w>>8;a[h+1|0]=w;h=Qg(d[203120]|d[203121]<<8|d[203122]<<16|d[203123]<<24|0,c)|0;w=h;a[203120]=w;w=w>>8;a[203121]=w;w=w>>8;a[203122]=w;w=w>>8;a[203123]=w;w=Qg(h,d[203152]|d[203153]<<8|d[203154]<<16|d[203155]<<24|0)|0;a[203120]=w;w=w>>8;a[203121]=w;w=w>>8;a[203122]=w;w=w>>8;a[203123]=w;Gg(d[203152]|d[203153]<<8|d[203154]<<16|d[203155]<<24|0);return}function qg(b){b=b|0;var c=0,e=0,f=0;c=Rg(b)|0;b=(d[71624]|d[71625]<<8)<<16>>16;e=c-b&65535;if(e<<16>>16>0){c=(d[72488]|d[72489]<<8)<<16>>16;if(((b&65535)+11+(e<<16>>16)|0)>(c&65535|0)){f=(-11-b&65535)+c&65535}else{f=e}w=f+b&65535;a[71624]=w;w=w>>8;a[71625]=w;if(f<<16>>16==0){tg(0);return}c=f;f=d[73304]|d[73305]<<8|d[73306]<<16|d[73307]<<24|0;do{c=c-1&65535;f=Im(f)|0;w=f;a[73304]=w;w=w>>8;a[73305]=w;w=w>>8;a[73306]=w;w=w>>8;a[73307]=w}while(!(c<<16>>16==0));tg(0);return}else{if(!(e<<16>>16<0)){tg(0);return}c=-e&65535;e=b<<16>>16<c<<16>>16?b:c;w=b-e&65535;a[71624]=w;w=w>>8;a[71625]=w;if(e<<16>>16==0){tg(0);return}b=e;e=d[73304]|d[73305]<<8|d[73306]<<16|d[73307]<<24|0;do{b=b-1&65535;e=Jm(e)|0;w=e;a[73304]=w;w=w>>8;a[73305]=w;w=w>>8;a[73306]=w;w=w>>8;a[73307]=w}while(!(b<<16>>16==0));tg(0);return}}function rg(){Pg(d[203152]|d[203153]<<8|d[203154]<<16|d[203155]<<24|0,0);sg(0);pg();tg(1);return}function sg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;c=i;if(!(b<<24>>24==0)){w=$d(3)|0;a[267912]=w;w=w>>8;a[267913]=w;w=w>>8;a[267914]=w;w=w>>8;a[267915]=w;w=0;a[71624]=w;w=w>>8;a[71625]=w;w=0;a[71960]=w;w=w>>8;a[71961]=w;b=15512+((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)<<5)|0;Ta(72960,62520,(e=i,i=i+8|0,w=a[d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0]|0,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,e)|0)|0;i=e;Hp(72960,Cm(72960)|0)|0}e=Wd(72960)|0;b=d[267912]|d[267913]<<8|d[267914]<<16|d[267915]<<24|0;f=Zd(e,1162690894,b,(ae(3)|0)&65535)|0;Xd(e);w=0;a[72488]=w;w=w>>8;a[72489]=w;if((f|0)!=0){e=0;b=d[267912]|d[267913]<<8|d[267914]<<16|d[267915]<<24|0;while(1){g=a[b]|0;h=g&255;j=h+e|0;k=b+(h-1)|0;if((d[k]|0)>>>0>(((d[262360]|d[262361]<<8)<<16>>16&65535)+1|0)>>>0){if(g<<24>>24==0){l=b}else{m=g-1&255;Lp(b|0,0,m+1|0)|0;l=b+(m+1)|0}}else{a[k]=g;w=((d[72488]|d[72489]<<8)<<16>>16)+1&65535;a[72488]=w;w=w>>8;a[72489]=w;l=b+h|0}if(j>>>0<f>>>0){e=j;b=l}else{break}}}l=d[267912]|d[267913]<<8|d[267914]<<16|d[267915]<<24|0;while(1){if((a[l]|0)==0){l=l+1|0}else{break}}if((d[71624]|d[71625]<<8)<<16>>16<<16>>16==0){n=l;w=n;a[73304]=w;w=w>>8;a[73305]=w;w=w>>8;a[73306]=w;w=w>>8;a[73307]=w;i=c;return}else{o=l;p=0}while(1){l=Im(o)|0;b=p+1&65535;if((b&65535)>>>0<((d[71624]|d[71625]<<8)<<16>>16&65535)>>>0){o=l;p=b}else{n=l;break}}w=n;a[73304]=w;w=w>>8;a[73305]=w;w=w>>8;a[73306]=w;w=w>>8;a[73307]=w;i=c;return}function tg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0;c=i;e=d[203120]|d[203121]<<8|d[203122]<<16|d[203123]<<24|0;f=(d[71624]|d[71625]<<8)<<16>>16;if(b<<24>>24==0&f<<16>>16==(d[267920]|d[267921]<<8)<<16>>16<<16>>16){i=c;return}b=d[73304]|d[73305]<<8|d[73306]<<16|d[73307]<<24|0;w=f;a[267920]=w;w=w>>8;a[267921]=w;f=de(2)|0;Xg(8)|0;g=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)*15|0)+397<<2)|0;Ie(2,d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0,d[231152]|0,d[231144]|0,0,0,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;h=Dm(48)|0;ze(h,((d[261360]|d[261361]<<8)<<16>>16<<3)+16&65535,((d[261352]|d[261353]<<8)<<16>>16)+2&65535,12,0,18,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;ze(0,0,0,0,0,17,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;g=b;b=0;h=Eg(e,3)|0;do{j=g+7|0;k=h+28|0;w=j;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=h+24|0;w=j;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=h+20|0;w=j;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;if((a[g+6|0]|0)==48){k=h+34|0;w=16;a[k]=w;w=w>>8;a[k+1|0]=w;a[h+44|0]=11;a[h+46|0]=11;a[h+42|0]=11;k=h+60|0;w=48;a[k]=w;w=w>>8;a[k+1|0]=w}else{k=b<<16>>16==(d[71960]|d[71961]<<8)<<16>>16<<16>>16?8:15;j=h+34|0;w=24;a[j]=w;w=w>>8;a[j+1|0]=w;a[h+44|0]=k;a[h+46|0]=k;a[h+42|0]=k;k=h+60|0;w=49;a[k]=w;w=w>>8;a[k+1|0]=w}Pg(h,0);Gg(h);h=Dg(h)|0;g=Im(g)|0;b=b+1&65535}while((b&65535)>>>0<11>>>0);b=Eg(e,15)|0;Sg(b,(d[72488]|d[72489]<<8)<<16>>16,11,(d[71624]|d[71625]<<8)<<16>>16)|0;Gg(Eg(e,16)|0);Gg(Eg(e,17)|0);Nf();e=(d[261360]|d[261361]<<8)<<16>>16;b=(d[261352]|d[261353]<<8)<<16>>16;Be(e,b,e,b,(d[261368]|d[261369]<<8)<<16>>16,(d[261384]|d[261385]<<8)<<16>>16,2,0);Of();de(f)|0;i=c;return}function ug(){tg(1);Uh(2113);Uh(2114);return}function vg(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0;b=i;a[266960]=0;w=0;a[267056]=w;w=w>>8;a[267057]=w;w=w>>8;a[267058]=w;w=w>>8;a[267059]=w;w=0;a[267048]=w;w=w>>8;a[267049]=w;w=w>>8;a[267050]=w;w=w>>8;a[267051]=w;w=Wg(8)|0;a[266984]=w;w=w>>8;a[266985]=w;w=de(4)|0;a[266992]=w;w=w>>8;a[266993]=w;w=0;a[266976]=w;w=w>>8;a[266977]=w;w=w>>8;a[266978]=w;w=w>>8;a[266979]=w;c=d[267120]|d[267121]<<8|d[267122]<<16|d[267123]<<24|0;if((c|0)!=0){e=$d(3)|0;f=lp(c,e,(ae(3)|0)&65535,0)|0;w=f;a[266976]=w;w=w>>8;a[266977]=w;w=w>>8;a[266978]=w;w=w>>8;a[266979]=w;w=0;a[267016]=w;w=w>>8;a[267017]=w;if((f|0)==0){g=4}}else{w=0;a[267016]=w;w=w>>8;a[267017]=w;g=4}if((g|0)==4){Yg();w=1;a[267016]=w;w=w>>8;a[267017]=w}ze(0,0,0,0,0,49,(f=i,i=i+1|0,i=i+7&-8,w=0,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0);i=f;w=He(d[267112]|d[267113]<<8|d[267114]<<16|d[267115]<<24|0,((d[261368]|d[261369]<<8)<<16>>16<<3)+10&65535,0)|0;a[266968]=w;w=w>>8;a[266969]=w;ze(0,0,0,0,0,50,(f=i,i=i+1|0,i=i+7&-8,w=0,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0);i=f;f=d[267024]|d[267025]<<8|d[267026]<<16|d[267027]<<24|0;a:do{if((f|0)!=0?(e=a[f]|0,!(e<<24>>24==0)):0){c=f;h=0;j=e;b:while(1){e=c;k=1;l=j;c:while(1){m=e;n=0;o=l;d:while(1){switch(o<<24>>24){case 0:{p=0;q=m;break d;break};case 13:case 46:case 33:case 63:{r=m;s=o;break c;break};default:{}}t=m+1|0;u=(pe(o)|0)+n&65535;v=a[t]|0;if((u&65535)>>>0<304>>>0){m=t;n=u;o=v}else{g=14;break}}if((g|0)==14){g=0;if(v<<24>>24==32){p=32;q=t}else{o=t;n=v;while(1){m=o-1|0;pe(n)|0;u=a[m]|0;if(u<<24>>24==32){p=32;q=m;break}else{o=m;n=u}}}}if((k&65535)>>>0>2>>>0){r=q;s=p;break}if(p<<24>>24==0){break b}n=q+1|0;a[q]=13;o=a[n]|0;if(o<<24>>24==0){x=h;break a}else{e=n;k=k+1&65535;l=o}}e:while(1){switch(s<<24>>24){case 0:{break b;break};case 13:case 32:case 46:case 33:case 63:{break};default:{break e}}l=r+1|0;r=l;s=a[l]|0}a[r-1|0]=0;c=r;h=h+1&65535;j=s}x=h+1&65535}else{x=0}}while(0);w=x;a[267032]=w;w=w>>8;a[267033]=w;w=2;a[267072]=w;w=w>>8;a[267073]=w;w=0;a[267040]=w;w=w>>8;a[267041]=w;w=0;a[267088]=w;w=w>>8;a[267089]=w;w=0;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+30|0;a[267080]=w;w=w>>8;a[267081]=w;w=w>>8;a[267082]=w;w=w>>8;a[267083]=w;Xh();a[267096]=0;a[267104]=0;w=0;a[267064]=w;w=w>>8;a[267065]=w;i=b;return}function wg(b){b=b|0;a[b]=a[267104]^1;return}function xg(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;b=i;de(0)|0;c=Ig(d[267e3]|d[267001]<<8|d[267002]<<16|d[267003]<<24|0)|0;Ee();e=c&65535;do{if(!(c<<16>>16==0)?(e&2048|0)==0:0){if((d[267e3]|d[267001]<<8|d[267002]<<16|d[267003]<<24|0)==0){if((a[267096]|0)==0){f=c;break}w=c;a[267064]=w;w=w>>8;a[267065]=w;f=c;break}else{if(!((e&32768|0)!=0&(d[267064]|d[267065]<<8)<<16>>16<<16>>16==0)){f=c;break}w=c;a[267064]=w;w=w>>8;a[267065]=w;f=c;break}}else{f=0}}while(0);switch((d[267016]|d[267017]<<8)<<16>>16&65535|0){case 3:{g=f;h=21;break};case 0:{if(!(f<<16>>16==0)){w=1;a[267016]=w;w=w>>8;a[267017]=w;h=11}break};case 1:{h=11;break};case 2:{Jf(0,0,320,40);Be(0,0,0,160,40,40,0,4);Pf();w=3;a[267016]=w;w=w>>8;a[267017]=w;g=1;h=21;break};case 5:{a[266960]=1;a[267104]=1;break};case 4:{if((d[267064]|d[267065]<<8)<<16>>16<<16>>16!=0|(d[267e3]|d[267001]<<8|d[267002]<<16|d[267003]<<24|0)==0){w=5;a[267016]=w;w=w>>8;a[267017]=w}break};default:{}}a:do{if((h|0)==11){do{if(f<<16>>16==0){c=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if(c>>>0>(d[267080]|d[267081]<<8|d[267082]<<16|d[267083]<<24|0)>>>0){w=c+15|0;a[267080]=w;w=w>>8;a[267081]=w;w=w>>8;a[267082]=w;w=w>>8;a[267083]=w;c=((d[267040]|d[267041]<<8)<<16>>16)+1&65535;w=c;a[267040]=w;w=w>>8;a[267041]=w;a[266960]=1;j=c;break}else{j=(d[267040]|d[267041]<<8)<<16>>16;break}}else{if((d[267064]|d[267065]<<8)<<16>>16<<16>>16==0){c=(d[266968]|d[266969]<<8)<<16>>16;w=c;a[267040]=w;w=w>>8;a[267041]=w;a[266960]=1;j=c;break}else{w=5;a[267016]=w;w=w>>8;a[267017]=w;break a}}}while(0);c=(d[266968]|d[266969]<<8)<<16>>16;if(!((j&65535)>>>0<(c&65535)>>>0&(j&65535)>>>0<13>>>0)){w=(d[267024]|d[267025]<<8|d[267026]<<16|d[267027]<<24|0)!=0?2:4;a[267016]=w;w=w>>8;a[267017]=w;w=c;a[267040]=w;w=w>>8;a[267041]=w}}else if((h|0)==21){c=(d[267072]|d[267073]<<8)<<16>>16;if(c<<16>>16==2){k=(d[267056]|d[267057]<<8|d[267058]<<16|d[267059]<<24|0)>>>0<(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0?1:g}else{k=g}e=k<<16>>16!=0;if(!(((a[267096]|0)==0|e^1)&(d[267064]|d[267065]<<8)<<16>>16<<16>>16==0)){Jf(0,0,320,40);Be(0,160,0,0,40,40,4,0);Pf();w=4;a[267016]=w;w=w>>8;a[267017]=w;w=0;a[267072]=w;w=w>>8;a[267073]=w;break}if(!e){if(c<<16>>16==0){break}c=d[267056]|d[267057]<<8|d[267058]<<16|d[267059]<<24|0;if(c>>>0>(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0){break}w=2;a[267072]=w;w=w>>8;a[267073]=w;e=d[267048]|d[267049]<<8|d[267050]<<16|d[267051]<<24|0;w=(e>>>1)+e+c|0;a[267056]=w;w=w>>8;a[267057]=w;w=w>>8;a[267058]=w;w=w>>8;a[267059]=w;break}Be(0,160,0,0,40,40,4,4);c=(d[267032]|d[267033]<<8)<<16>>16;w=c-1&65535;a[267032]=w;w=w>>8;a[267033]=w;if(!(c<<16>>16==0)){de(4)|0;ze(d[267024]|d[267025]<<8|d[267026]<<16|d[267027]<<24|0,4,1,a[261400]|0,0,50,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;w=1;a[267072]=w;w=w>>8;a[267073]=w;c=d[267024]|d[267025]<<8|d[267026]<<16|d[267027]<<24|0;e=(Ip(c|0)|0)<<2;w=e;a[267048]=w;w=w>>8;a[267049]=w;w=w>>8;a[267050]=w;w=w>>8;a[267051]=w;w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+e|0;a[267056]=w;w=w>>8;a[267057]=w;w=w>>8;a[267058]=w;w=w>>8;a[267059]=w;if((d[267032]|d[267033]<<8)<<16>>16<<16>>16==0){a[267096]=1}else{e=c;while(1){c=e+1|0;w=c;a[267024]=w;w=w>>8;a[267025]=w;w=w>>8;a[267026]=w;w=w>>8;a[267027]=w;if((a[e]|0)==0){break}else{e=c}}}de(0)|0}Jf(0,0,320,40);Be(0,0,0,0,40,40,4,0);Pf()}}while(0);cg((d[267072]|d[267073]<<8)<<16>>16);if(!((d[266976]|d[266977]<<8|d[266978]<<16|d[266979]<<24|0)!=0&(d[219104]|d[219105]<<8|d[219106]<<16|d[219107]<<24|0)==0)){if((a[266960]|0)==0){xp();i=b;return}}else{w=7;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;k=(d[267088]|d[267089]<<8)<<16>>16;b:while(1){if((d[267016]|d[267017]<<8)<<16>>16<<16>>16==0&(k&65535)>>>0>4>>>0){w=1;a[267016]=w;w=w>>8;a[267017]=w}g=d[266976]|d[266977]<<8|d[266978]<<16|d[266979]<<24|0;w=k+1&65535;a[267088]=w;w=w>>8;a[267089]=w;do{if((np(g,k,(d[261360]|d[261361]<<8)<<16>>16<<3,(d[261352]|d[261353]<<8)<<16>>16,4)|0)<<24>>24==0){if((d[267016]|d[267017]<<8)<<16>>16<<16>>16==0){w=1;a[267016]=w;w=w>>8;a[267017]=w}if((a[267008]|0)==0){mp(d[266976]|d[266977]<<8|d[266978]<<16|d[266979]<<24|0);w=0;a[266976]=w;w=w>>8;a[266977]=w;w=w>>8;a[266978]=w;w=w>>8;a[266979]=w;break}else{w=0;a[267088]=w;w=w>>8;a[267089]=w;k=0;continue b}}}while(0);if((d[267088]|d[267089]<<8)<<16>>16<<16>>16==0){k=0}else{break}}a[266960]=1}k=(d[261360]|d[261361]<<8)<<16>>16<<3|5;g=(d[267040]|d[267041]<<8)<<16>>16;if(!(g<<16>>16<1)){h=((d[261352]|d[261353]<<8)<<16>>16)+3&65535;j=d[267112]|d[267113]<<8|d[267114]<<16|d[267115]<<24|0;f=de(4)|0;e=h;h=j;j=g;while(1){g=j-1&65535;if((a[h]|0)!=0){ze(h,k,e,a[261400]|0,0,49,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l}c=h+((Ip(h|0)|0)+1)|0;if(g<<16>>16==0){break}else{e=e+8&65535;h=c;j=g}}de(f)|0}f=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)*15|0)+397<<2)|0;Ie(4,d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0,d[231152]|0,d[231144]|0,0,0,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;Ae((d[261376]|d[261377]<<8)<<16>>16);l=(d[261360]|d[261361]<<8)<<16>>16;f=(d[261352]|d[261353]<<8)<<16>>16;Be(l,f,l,f,(d[261368]|d[261369]<<8)<<16>>16,(d[261384]|d[261385]<<8)<<16>>16,4,0);Qf();a[266960]=0;xp();i=b;return}function yg(){var b=0,c=0,e=0;b=i;c=d[266976]|d[266977]<<8|d[266978]<<16|d[266979]<<24|0;if((c|0)!=0){mp(c)}de(4)|0;c=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)*15|0)+397<<2)|0;Ie(4,d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0,d[231152]|0,d[231144]|0,0,0,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;Ae((d[261376]|d[261377]<<8)<<16>>16);c=(d[261360]|d[261361]<<8)<<16>>16;e=(d[261352]|d[261353]<<8)<<16>>16;Be(c,e,c,e,(d[261368]|d[261369]<<8)<<16>>16,(d[261384]|d[261385]<<8)<<16>>16,4,0);Qf();Wg((d[266984]|d[266985]<<8)<<16>>16)|0;de((d[266992]|d[266993]<<8)<<16>>16)|0;Xh();Kc((d[267064]|d[267065]<<8)<<16>>16);i=b;return}function zg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0;c=i;e=b+4|0;f=(d[e]|d[e+1|0]<<8)<<16>>16;switch(f&65535|0){case 41:{g=4;h=8;break};case 42:{g=3;h=8;break};case 40:{g=2;h=8;break};case 44:{g=(d[261344]|d[261345]<<8)<<16>>16;h=8;break};case 45:{g=0;h=8;break};case 43:{g=(d[261344]|d[261345]<<8)<<16>>16;h=8;break};case 39:{g=1;h=8;break};default:{j=f}}if((h|0)==8){k=g&65535;if(g<<16>>16==(d[261336]|d[261337]<<8)<<16>>16<<16>>16){j=f}else{f=71112+(k<<2)|0;l=71114+(k<<2)|0;m=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(k<<2)|0;vm((d[f]|d[f+1|0]<<8)<<16>>16,(d[l]|d[l+1|0]<<8)<<16>>16,d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0);w=g;a[261336]=w;w=w>>8;a[261337]=w;j=(d[e]|d[e+1|0]<<8)<<16>>16}}g=j<<16>>16==43;m=g&1;a[203064]=m;if(!(j<<16>>16==45)?(l=a[203072]^1,(l|m)<<24>>24==1):0){m=b+48|0;b=(d[m]|d[m+1|0]<<8)<<16>>16;f=g^1;if((b&17408)==0|f){n=(b&4352)!=0?f&1:0}else{n=1}if(!((d[231176]|d[231177]<<8)<<16>>16<<16>>16==2|(b&8704)==0)){if(j<<16>>16==44){o=(a[260272]|0)==0|0}else{o=1}}else{o=0}do{if(n<<24>>24==0){if(!(o<<24>>24==0|g^1)){if((a[203056]|0)==0){w=0;a[203088]=w;w=w>>8;a[203089]=w;w=w>>8;a[203090]=w;w=w>>8;a[203091]=w;w=0;a[203080]=w;w=w>>8;a[203081]=w;w=w>>8;a[203082]=w;w=w>>8;a[203083]=w;a[203056]=1;p=0;break}else{w=((d[232920]|d[232921]<<8)<<16>>16&65535)-((d[203104]|d[203105]<<8)<<16>>16&65535)+(d[203088]|d[203089]<<8|d[203090]<<16|d[203091]<<24)|0;a[203088]=w;w=w>>8;a[203089]=w;w=w>>8;a[203090]=w;w=w>>8;a[203091]=w;w=((d[232912]|d[232913]<<8)<<16>>16&65535)-((d[203096]|d[203097]<<8)<<16>>16&65535)+(d[203080]|d[203081]<<8|d[203082]<<16|d[203083]<<24)|0;a[203080]=w;w=w>>8;a[203081]=w;w=w>>8;a[203082]=w;w=w>>8;a[203083]=w;p=0;break}}else{p=0}}else{a[260272]=0;a[203072]=0;a[203056]=0;p=l}}while(0);l=(d[232920]|d[232921]<<8)<<16>>16;w=l;a[203104]=w;w=w>>8;a[203105]=w;g=(d[232912]|d[232913]<<8)<<16>>16;w=g;a[203096]=w;w=w>>8;a[203097]=w;n=p<<24>>24==0;j=n?l:(d[233064]|d[233065]<<8)<<16>>16;l=n?g:(d[233056]|d[233057]<<8)<<16>>16;g=(d[e]|d[e+1|0]<<8)<<16>>16;if((g<<16>>16|0)==44){n=(d[231260]|d[231261]<<8)<<16>>16&65535;b=n+1|0;f=(((j&65535)>>>0>256>>>0?(j&65535)-256|0:0)|0)/(b|0)|0;k=46564+(n<<3)|0;q=((d[k]|d[k+1|0]<<8)<<16>>16&65535)-1|0;k=46560+(n<<3)|0;r=(((l&65535)>>>0>136>>>0?(l&65535)-136|0:0)|0)/(b|0)|0;b=46566+(n<<3)|0;s=((d[b]|d[b+1|0]<<8)<<16>>16&65535)-1|0;b=46562+(n<<3)|0;t=((f|0)<(q|0)?f:q)+((d[k]|d[k+1|0]<<8)<<16>>16&65535)&65535;u=((r|0)<(s|0)?r:s)+((d[b]|d[b+1|0]<<8)<<16>>16&65535)&65535}else if((g<<16>>16|0)==43){g=((yn((d[233072]|d[233073]<<8)<<16>>16)|0)&255)+((j&65535)>>>4)&65535;t=g;u=((zn((d[233072]|d[233073]<<8)<<16>>16)|0)&255)+(((l&65535)-40|0)/16|0)&65535}else{t=j;u=l}l=wn(t,u)|0;u=p<<24>>24!=0;p=(d[231176]|d[231177]<<8)<<16>>16;if(u&p<<16>>16==1){ye(0,-1,(v=i,i=i+1|0,i=i+7&-8,w=0,a[v]=w,w=w>>8,a[v+1|0]=w,w=w>>8,a[v+2|0]=w,w=w>>8,a[v+3|0]=w,v)|0);i=v;if((d[204392]|d[204393]<<8|d[204394]<<16|d[204395]<<24|0)!=0){dp(l);i=c;return 1}t=d[219096]|d[219097]<<8|d[219098]<<16|d[219099]<<24|0;j=(d[48048]|d[48049]<<8)<<16>>16;g=j&65535;Ti(t|0);b=t+92|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w;s=t+94|0;w=0;a[s]=w;w=w>>8;a[s+1|0]=w;a[t+124|0]=-1;if((j<<16>>16|0)==5|(j<<16>>16|0)==1){x=Sn(l,1)|0}else{x=Sn(Wo(l)|0,1)|0}lo(t,g);if((j<<16>>16|0)==5){w=x;a[s]=w;w=w>>8;a[s+1|0]=w}else if((j<<16>>16|0)!=1){Oo(t,x);j=Wn((d[b]|d[b+1|0]<<8)<<16>>16)|0;if((j|0)!=0){a[j+120|0]=8}}else{Bo(t,x)}do{if((a[47968]|0)!=0){x=8862+((d[t+2|0]|0)*100|0)|0;if((d[x]|d[x+1|0]<<8)<<16>>16<<16>>16==0){x=44140+(g<<4)|0;wd((d[x]|d[x+1|0]<<8)<<16>>16);break}else{x=((Zn()|0)&1)==0;wd(x?20:17);break}}else{Sc(36,255)}}while(0);w=0;a[219096]=w;w=w>>8;a[219097]=w;w=w>>8;a[219098]=w;w=w>>8;a[219099]=w;w=-1;a[48048]=w;w=w>>8;a[48049]=w;Oe(3);i=c;return 1}if(u&p<<16>>16==2){g=d[231048]|d[231049]<<8|d[231050]<<16|d[231051]<<24|0;t=(d[231032]|d[231033]<<8)<<16>>16&65535;x=d[232072]|d[232073]<<8|d[232074]<<16|d[232075]<<24|0;if((Pm(g,(d[231192]|d[231193]<<8)<<16>>16)|0)<<24>>24==0){td(47);if(((d[231032]|d[231033]<<8)<<16>>16&65535)>>>0<2>>>0){ye(Dm(135)|0,2,(v=i,i=i+1|0,i=i+7&-8,w=0,a[v]=w,w=w>>8,a[v+1|0]=w,w=w>>8,a[v+2|0]=w,w=w>>8,a[v+3|0]=w,v)|0);i=v;i=c;return 1}else{Ze(365,-1)|0;j=Dm(134)|0;b=13152+(t*100|0)|0;s=Dm((d[b]|d[b+1|0]<<8)<<16>>16)|0;ye(j,2,(v=i,i=i+8|0,w=s,a[v]=w,w=w>>8,a[v+1|0]=w,w=w>>8,a[v+2|0]=w,w=w>>8,a[v+3|0]=w,v)|0);i=v;i=c;return 1}}td(20);if((a[g+2|0]|0)==2){s=Hj(a[g+8|0]|0)|0;j=g+12|0;b=s+32|0;w=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w}do{if((d[231032]|d[231033]<<8)<<16>>16<<16>>16==12&(d[204376]|d[204377]<<8)<<16>>16<<16>>16==0){w=1;a[204376]=w;w=w>>8;a[204377]=w;b=(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255;j=g|0;s=Vo(b,16,Sn((d[j]|d[j+1|0]<<8)<<16>>16,3)|0)|0;w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;if((s|0)==0){b=x+2|0;w=((d[b]|d[b+1|0]<<8)<<16>>16)+1&65535;a[b]=w;w=w>>8;a[b+1|0]=w;break}else{b=s+84|0;w=Sn((d[j]|d[j+1|0]<<8)<<16>>16,3)|0;a[b]=w;w=w>>8;a[b+1|0]=w;break}}}while(0);Oe(4);g=_m((d[231040]|d[231041]<<8)<<16>>16)|0;if((g|0)!=0?(b=gn(g)|0,j=g+84|0,(1<<((d[j]|d[j+1|0]<<8)<<16>>16&65535)&b|0)==0):0){Sm(g,-2)|0}w=-1;a[231032]=w;w=w>>8;a[231033]=w;w=0;a[231048]=w;w=w>>8;a[231049]=w;w=w>>8;a[231050]=w;w=w>>8;a[231051]=w;w=0;a[44352]=w;w=w>>8;a[44353]=w;g=13204+(t*100|0)|0;b=13178+(t*100|0)|0;Ze((d[g]|d[g+1|0]<<8)<<16>>16,(d[b]|d[b+1|0]<<8)<<16>>16)|0;Lh(x)|0;b=x+24|0;g=x+26|0;if(!(((d[b]|d[b+1|0]<<8)<<16>>16&65535)>>>0<((d[g]|d[g+1|0]<<8)<<16>>16&65535)>>>0)){i=c;return 1}g=x+16|0;if(((d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24)&262144|0)==0){i=c;return 1}ye(Dm(332)|0,3,(v=i,i=i+1|0,i=i+7&-8,w=0,a[v]=w,w=w>>8,a[v+1|0]=w,w=w>>8,a[v+2|0]=w,w=w>>8,a[v+3|0]=w,v)|0);i=v;i=c;return 1}if(u){u=(d[e]|d[e+1|0]<<8)<<16>>16;if(u<<16>>16==43){v=a[261320]|0;if(v<<24>>24==0){g=Wo(l)|0;y=g;z=a[261320]|0}else{y=l;z=v}v=241272+((y&65535)<<2)|0;if(!(((d[v]|d[v+1|0]<<8|d[v+2|0]<<16|d[v+3|0]<<24|0)>>>9&127|0)==((d[203224]|d[203225]<<8)<<16>>16&65535|0)&z<<24>>24==0)?(z=(Ui(y)|0)==0,!(z&(a[261320]|0)==0)):0){qi(y);Uo(d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0)}if(((d[m]|d[m+1|0]<<8)<<16>>16&4096)==0){i=c;return 1}Ii(l);i=c;return 1}else{A=u;h=72}}else{if(!(o<<24>>24==0)){A=(d[e]|d[e+1|0]<<8)<<16>>16;h=72}}if((h|0)==72){if(A<<16>>16==44){Ii(l);i=c;return 1}if(!(o<<24>>24==0|(a[203064]|0)==0)){o=d[203088]|d[203089]<<8|d[203090]<<16|d[203091]<<24|0;A=d[203080]|d[203081]<<8|d[203082]<<16|d[203083]<<24|0;h=(o+9|0)>>>0>18>>>0;if(h){w=0;a[203088]=w;w=w>>8;a[203089]=w;w=w>>8;a[203090]=w;w=w>>8;a[203091]=w}if(!((A+9|0)>>>0>18>>>0)){if(!h){i=c;return 1}}else{w=0;a[203080]=w;w=w>>8;a[203081]=w;w=w>>8;a[203082]=w;w=w>>8;a[203083]=w}pi(((o|0)/-10|0)&65535,((A|0)/-10|0)&65535)|0;a[203072]=1;i=c;return 1}}if((p<<16>>16|0)==1){qi(Wo(l)|0);i=c;return 1}else if((p<<16>>16|0)==2){qi(l);i=c;return 1}else{i=c;return 1}}w=(d[232920]|d[232921]<<8)<<16>>16;a[203104]=w;w=w>>8;a[203105]=w;w=(d[232912]|d[232913]<<8)<<16>>16;a[203096]=w;w=w>>8;a[203097]=w;i=c;return 1}function Ag(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0;f=i;i=i+72|0;g=f|0;h=f+8|0;j=f+16|0;k=f+40|0;l=f+64|0;Lp(j|0,15,20)|0;Lp(k|0,0,20)|0;m=de(2)|0;n=Wg(2)|0;o=b<<24>>24==0;if((d[260280]|d[260281]<<8)<<16>>16<<16>>16==0&o){p=0}else{w=0;a[h]=w;w=w>>8;a[h+1|0]=w;q=e<<24>>24!=0?15:16;r=0;s=b;while(1){t=r<<4;u=t+40&65535;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;v=t+55&65535;t=0;x=s;y=r;while(1){z=(d[203200]|d[203201]<<8)<<16>>16;A=(wn(t,y)|0)+z&65535;if(((d[g]|d[g+1|0]<<8)<<16>>16&65535)>>>0<15>>>0&o?!((ao(260288,A)|0)<<24>>24==0):0){z=(d[h]|d[h+1|0]<<8)<<16>>16&65535;B=k+(z<<1)|0;C=(d[g]|d[g+1|0]<<8)<<16>>16;D=C&65535;if(((d[B]|d[B+1|0]<<8)<<16>>16<<16>>16|0)<(D|0)){w=C;a[B]=w;w=w>>8;a[B+1|0]=w}B=j+(z<<1)|0;if(((d[B]|d[B+1|0]<<8)<<16>>16<<16>>16|0)>(D|0)){w=C;a[B]=w;w=w>>8;a[B+1|0]=w;E=1}else{E=1}}else{E=x}do{if(!((ao(260800,A)|0|b)<<24>>24==0)){bo(260288,A);B=(d[g]|d[g+1|0]<<8)<<16>>16;if((B&65535)>>>0<15>>>0){C=B&65535;D=(d[h]|d[h+1|0]<<8)<<16>>16&65535;z=k+(D<<1)|0;if(((d[z]|d[z+1|0]<<8)<<16>>16<<16>>16|0)<(C|0)){w=B;a[z]=w;w=w>>8;a[z+1|0]=w}z=j+(D<<1)|0;if(((d[z]|d[z+1|0]<<8)<<16>>16<<16>>16|0)>(C|0)){w=B;a[z]=w;w=w>>8;a[z+1|0]=w;F=1}else{F=1}}else{F=E}z=241272+((A&65535)<<2)|0;C=B<<4;if((a[261320]|0)==0){B=z;D=d[B]|d[B+1|0]<<8|d[B+2|0]<<16|d[B+3|0]<<24|0;if(((d[203224]|d[203225]<<8)<<16>>16&65535|0)==(D>>>9&127|0)){xe(C,u,C|15,v,12);G=F;break}else{H=D>>>16&255;I=D&65535}}else{D=z;B=d[D]|d[D+1|0]<<8|d[D+2|0]<<16|d[D+3|0]<<24|0;H=B>>>16&255;I=B&65535}B=z;ee(I&511,C,u,H&7);z=d[B]|d[B+1|0]<<8|d[B+2|0]<<16|d[B+3|0]<<24|0;B=z>>>9&127;if((B|0)!=0&(a[261320]|0)==0){ee(B&65535,C,u,z>>>16&7);G=F}else{G=F}}else{G=E}}while(0);A=((d[g]|d[g+1|0]<<8)<<16>>16)+1&65535;w=A;a[g]=w;w=w>>8;a[g+1|0]=w;J=(d[h]|d[h+1|0]<<8)<<16>>16;if((A&65535)>>>0<q>>>0){t=A;x=G;y=J}else{break}}y=J+1&65535;w=y;a[h]=w;w=w>>8;a[h+1|0]=w;if((y&65535)>>>0<10>>>0){r=y;s=G}else{break}}w=0;a[260280]=w;w=w>>8;a[260281]=w;p=G}G=l+2|0;w=25;a[G]=w;w=w>>8;a[G+1|0]=w;s=l+4|0;w=-1;a[s]=w;w=w>>8;a[s+1|0]=w;r=l|0;a[r]=-1;J=Xj(l)|0;if((J|0)!=0){q=J;do{J=q+4|0;E=d[J]|d[J+1|0]<<8|d[J+2|0]<<16|d[J+3|0]<<24|0;if(!((E&4096|0)==0&o)?(w=E&-4097,a[J]=w,w=w>>8,a[J+1|0]=w,w=w>>8,a[J+2|0]=w,w=w>>8,a[J+3|0]=w,J=q+12|0,E=241272+(((vn(J)|0)&65535)<<2)|0,((d[E]|d[E+1|0]<<8|d[E+2|0]<<16|d[E+3|0]<<24)&524288|0)!=0|(a[261320]|0)!=0):0){E=8870+((d[q+2|0]|0)*100|0)|0;F=(d[E]|d[E+1|0]<<8)<<16>>16;E=mo(q)|0;if(!((F&65535)>>>0>355>>>0)?(H=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((F&65535)<<2)|0,F=d[H]|d[H+1|0]<<8|d[H+2|0]<<16|d[H+3|0]<<24|0,(F|0)!=0):0){if(((qm(F)|0)&1)==0){K=F}else{H=E<<4;E=0;I=0;while(1){y=a[F+(I+10)|0]|0;a[72184+I|0]=((y+112&255)>>>0<9>>>0?H:0)+y;y=E+1&255;if((y&255)>>>0<16>>>0){E=y;I=y&255}else{K=F;break}}}}else{K=0}w=512;a[71912]=w;w=w>>8;a[71913]=w;if(!((yi(J,g,h)|0)<<24>>24==0)){Ie((d[231240]|d[231241]<<8)<<16>>16,K,(d[g]|d[g+1|0]<<8)<<16>>16,(d[h]|d[h+1|0]<<8)<<16>>16,2,(d[71912]|d[71913]<<8)<<16>>16|-16384,(L=i,i=i+1|0,i=i+7&-8,w=0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}if(!((yi(q+100|0,g,h)|0)<<24>>24==0)){Ie((d[231240]|d[231241]<<8)<<16>>16,K,(d[g]|d[g+1|0]<<8)<<16>>16,(d[h]|d[h+1|0]<<8)<<16>>16,2,(d[71912]|d[71913]<<8)<<16>>16|-16384,(L=i,i=i+1|0,i=i+7&-8,w=0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}if(!((yi(q+104|0,g,h)|0)<<24>>24==0)){Ie((d[231240]|d[231241]<<8)<<16>>16,K,(d[g]|d[g+1|0]<<8)<<16>>16,(d[h]|d[h+1|0]<<8)<<16>>16,2,(d[71912]|d[71913]<<8)<<16>>16|-16384,(L=i,i=i+1|0,i=i+7&-8,w=0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}if((q|0)==(d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0)?!((yi(J,g,h)|0)<<24>>24==0):0){F=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+24|0;Ie((d[231240]|d[231241]<<8)<<16>>16,d[F]|d[F+1|0]<<8|d[F+2|0]<<16|d[F+3|0]<<24|0,(d[g]|d[g+1|0]<<8)<<16>>16,(d[h]|d[h+1|0]<<8)<<16>>16,2,-16384,(L=i,i=i+1|0,i=i+7&-8,w=0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}}q=Xj(l)|0}while((q|0)!=0)}if(((d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0)==0?!((d[204352]|d[204353]<<8)<<16>>16<<16>>16==0&c<<24>>24==0):0)?(q=_m((d[231184]|d[231185]<<8)<<16>>16)|0,!((d[231176]|d[231177]<<8)<<16>>16<<16>>16!=2&(q|0)==0&(a[261320]|0)==0)):0){q=(yn((d[231184]|d[231185]<<8)<<16>>16)|0)&255;K=(q-((yn((d[233072]|d[233073]<<8)<<16>>16)|0)&255)&65535)<<4;q=(zn((d[231184]|d[231185]<<8)<<16>>16)|0)&255;F=((q-((zn((d[233072]|d[233073]<<8)<<16>>16)|0)&255)&65535)<<4)+40&65535;q=(K-1&65535)+((d[231160]|d[231161]<<8)<<16>>16<<4)&65535;I=(((d[231200]|d[231201]<<8)<<16>>16<<4)-1&65535)+F&65535;df(0,40,239,199);ve(K,F,q,I,-1);if((d[44352]|d[44353]<<8)<<16>>16<<16>>16==0&(d[231176]|d[231177]<<8)<<16>>16<<16>>16==2){we(K,F,q,I,-1);we(q,F,K,I,-1)}df(0,0,319,199);w=0;a[204352]=w;w=w>>8;a[204353]=w}I=p<<24>>24==0;if((d[204368]|d[204369]<<8)<<16>>16<<16>>16==0&o&I){M=0}else{w=-1;a[G]=w;w=w>>8;a[G+1|0]=w;w=-1;a[s]=w;w=w>>8;a[s+1|0]=w;a[r]=-1;K=Xj(l)|0;if((K|0)!=0){F=K;do{K=F|0;do{if(!((((d[K]|d[K+1|0]<<8)<<16>>16)-20&65535)>>>0>81>>>0)){q=F+12|0;E=vn(q)|0;H=F+4|0;y=d[H]|d[H+1|0]<<8|d[H+2|0]<<16|d[H+3|0]<<24|0;if((y&4100|0)!=4096&o){if((ao(260288,E)|0)<<24>>24==0){break}N=d[H]|d[H+1|0]<<8|d[H+2|0]<<16|d[H+3|0]<<24|0}else{N=y}w=N&-4097;a[H]=w;w=w>>8;a[H+1|0]=w;w=w>>8;a[H+2|0]=w;w=w>>8;a[H+3|0]=w;y=241272+((E&65535)<<2)|0;if(((d[y]|d[y+1|0]<<8|d[y+2|0]<<16|d[y+3|0]<<24)&524288|0)!=0|(a[261320]|0)!=0?(y=F+2|0,x=d[y]|0,!((yi(q,g,h)|0)<<24>>24==0)):0){q=F+118|0;t=11496+(d[q]<<2)|0;w=((d[g]|d[g+1|0]<<8)<<16>>16&65535)+(d[t]|d[t+1|0]<<8|d[t+2|0]<<16|d[t+3|0]<<24)&65535;a[g]=w;w=w>>8;a[g+1|0]=w;t=11496+(d[q]<<2)|0;w=((d[h]|d[h+1|0]<<8)<<16>>16&65535)+((d[t]|d[t+1|0]<<8|d[t+2|0]<<16|d[t+3|0]<<24|0)>>>16)&65535;a[h]=w;w=w>>8;a[h+1|0]=w;t=Nn(a[F+110|0]|0)|0;q=F+119|0;u=a[q]|0;v=u<<24>>24;if(!(u<<24>>24>-1)?(A=8878+(x*100|0)|0,z=(d[A]|d[A+1|0]<<8)<<16>>16,!(z<<16>>16==0)):0){w=0;a[71912]=w;w=w>>8;a[71913]=w;O=z+~v&65535}else{P=59}do{if((P|0)==59){P=0;v=8870+(x*100|0)|0;z=(d[v]|d[v+1|0]<<8)<<16>>16;v=8876+(x*100|0)|0;A=(d[v]|d[v+1|0]<<8)<<16>>16&65535;if((A|0)==3){v=t&255;C=71048+(v<<2)|0;B=70944+((u&3)<<1)|0;D=((((d[C]|d[C+1|0]<<8)<<16>>16)*3&65535)+z&65535)+((d[B]|d[B+1|0]<<8)<<16>>16)&65535;B=71050+(v<<2)|0;w=(d[B]|d[B+1|0]<<8)<<16>>16;a[71912]=w;w=w>>8;a[71913]=w;O=D;break}else if((A|0)==4){D=t&255;B=71048+(D<<2)|0;v=(((d[B]|d[B+1|0]<<8)<<16>>16<<2)+z&65535)+(u&3)&65535;B=71050+(D<<2)|0;w=(d[B]|d[B+1|0]<<8)<<16>>16;a[71912]=w;w=w>>8;a[71913]=w;O=v;break}else if((A|0)==1|(A|0)==2){A=8862+(x*100|0)|0;if((d[A]|d[A+1|0]<<8)<<16>>16<<16>>16==5){O=z;break}A=t&255;v=71080+(A<<2)|0;B=((d[v]|d[v+1|0]<<8)<<16>>16)+z&65535;v=71082+(A<<2)|0;w=(d[v]|d[v+1|0]<<8)<<16>>16;a[71912]=w;w=w>>8;a[71913]=w;O=B;break}else{w=0;a[71912]=w;w=w>>8;a[71913]=w;O=z;break}}}while(0);if((a[y]|0)!=25?((d[H]|d[H+1|0]<<8|d[H+2|0]<<16|d[H+3|0]<<24)&2048|0)!=0:0){w=(d[71912]|d[71913]<<8)<<16>>16|256;a[71912]=w;w=w>>8;a[71913]=w}u=8808+(x*100|0)|0;if(!(((d[u]|d[u+1|0]<<8)<<16>>16&16)==0)){w=(d[71912]|d[71913]<<8)<<16>>16|512;a[71912]=w;w=w>>8;a[71913]=w}z=(d[231240]|d[231241]<<8)<<16>>16;if((a[F+97|0]|0)==0){Q=(mo(F)|0)<<4}else{Q=32}if(!((O&65535)>>>0>355>>>0)?(B=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((O&65535)<<2)|0,v=d[B]|d[B+1|0]<<8|d[B+2|0]<<16|d[B+3|0]<<24|0,(v|0)!=0):0){if(((qm(v)|0)&1)==0){R=v}else{B=0;A=0;while(1){D=a[v+(A+10)|0]|0;a[72184+A|0]=((D+112&255)>>>0<9>>>0?Q:0)+D;D=B+1&255;if((D&255)>>>0<16>>>0){B=D;A=D&255}else{R=v;break}}}}else{R=0}v=d[232104]|d[232105]<<8|d[232106]<<16|d[232107]<<24|0;Ie(z,R,(d[g]|d[g+1|0]<<8)<<16>>16,(d[h]|d[h+1|0]<<8)<<16>>16,2,(d[71912]|d[71913]<<8)<<16>>16|-8192,(L=i,i=i+24|0,w=72184,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,w=v,a[L+8|0]=w,w=w>>8,a[L+9|0]=w,w=w>>8,a[L+10|0]=w,w=w>>8,a[L+11|0]=w,w=1,a[L+16|0]=w,w=w>>8,a[L+17|0]=w,w=w>>8,a[L+18|0]=w,w=w>>8,a[L+19|0]=w,L)|0);i=L;if((a[y]|0)==16?(a[F+86|0]|0)==5:0){if((a[q]|0)>-1){if(((Ai(E)|0)-8&65535)>>>0<2>>>0){v=(d[231240]|d[231241]<<8)<<16>>16;A=t&255;B=71080+(A<<2)|0;D=((a[q]|0)%3|0)+223+(((d[B]|d[B+1|0]<<8)<<16>>16&65535)*3|0)|0;B=mo(F)|0;if(!((D&65535)>>>0>355>>>0)?(C=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((D&65535)<<2)|0,D=d[C]|d[C+1|0]<<8|d[C+2|0]<<16|d[C+3|0]<<24|0,(D|0)!=0):0){if(((qm(D)|0)&1)==0){S=D}else{C=B<<4;B=0;T=0;while(1){U=a[D+(T+10)|0]|0;a[72184+T|0]=((U+112&255)>>>0<9>>>0?C:0)+U;U=B+1&255;if((U&255)>>>0<16>>>0){B=U;T=U&255}else{S=D;break}}}}else{S=0}D=70912+(A<<2)|0;T=70914+(A<<2)|0;B=71082+(A<<2)|0;Ie(v,S,((d[D]|d[D+1|0]<<8)<<16>>16)+((d[g]|d[g+1|0]<<8)<<16>>16)&65535,((d[T]|d[T+1|0]<<8)<<16>>16)+((d[h]|d[h+1|0]<<8)<<16>>16)&65535,2,(d[B]|d[B+1|0]<<8)<<16>>16|-16384,(L=i,i=i+1|0,i=i+7&-8,w=0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L;P=87}else{P=87}}}else{P=87}if(((P|0)==87?(P=0,(a[q]|0)>-1):0)?(B=8872+(x*100|0)|0,T=(d[B]|d[B+1|0]<<8)<<16>>16,!(T<<16>>16==-1)):0){D=Nn(a[F+108+((((d[u]|d[u+1|0]<<8)<<16>>16&65535)>>>5&1)*3|0)+2|0]|0)|0;C=(d[B]|d[B+1|0]<<8)<<16>>16&65535;if((C|0)==136){B=D&255;t=70848+(B<<2)|0;E=70850+(B<<2)|0;V=(d[t]|d[t+1|0]<<8)<<16>>16;W=(d[E]|d[E+1|0]<<8)<<16>>16}else if((C|0)==141){V=0;W=-2}else if((C|0)==146){V=0;W=-3}else if((C|0)==126){C=D&255;E=70880+(C<<2)|0;t=70882+(C<<2)|0;V=(d[E]|d[E+1|0]<<8)<<16>>16;W=(d[t]|d[t+1|0]<<8)<<16>>16}else{V=0;W=0}t=D&255;D=71082+(t<<2)|0;w=(d[D]|d[D+1|0]<<8)<<16>>16;a[71912]=w;w=w>>8;a[71913]=w;D=71080+(t<<2)|0;t=((d[D]|d[D+1|0]<<8)<<16>>16)+T&65535;T=(d[231240]|d[231241]<<8)<<16>>16;D=mo(F)|0;if(!((t&65535)>>>0>355>>>0)?(E=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((t&65535)<<2)|0,t=d[E]|d[E+1|0]<<8|d[E+2|0]<<16|d[E+3|0]<<24|0,(t|0)!=0):0){if(((qm(t)|0)&1)==0){X=t}else{E=D<<4;D=0;C=0;while(1){B=a[t+(C+10)|0]|0;a[72184+C|0]=((B+112&255)>>>0<9>>>0?E:0)+B;B=D+1&255;if((B&255)>>>0<16>>>0){D=B;C=B&255}else{X=t;break}}}}else{X=0}Ie(T,X,((d[g]|d[g+1|0]<<8)<<16>>16)+V&65535,((d[h]|d[h+1|0]<<8)<<16>>16)+W&65535,2,(d[71912]|d[71913]<<8)<<16>>16|-8192,(L=i,i=i+8|0,w=72184,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}if(((d[H]|d[H+1|0]<<8|d[H+2|0]<<16|d[H+3|0]<<24)&8|0)!=0){t=a[q]&3|180;C=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((t<<16>>16==183?181:t&65535)<<2)|0;Ie((d[231240]|d[231241]<<8)<<16>>16,d[C]|d[C+1|0]<<8|d[C+2|0]<<16|d[C+3|0]<<24|0,(d[g]|d[g+1|0]<<8)<<16>>16,((d[h]|d[h+1|0]<<8)<<16>>16)-14&65535,2,-16384,(L=i,i=i+1|0,i=i+7&-8,w=0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}if((F|0)==(d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0)){C=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+24|0;Ie((d[231240]|d[231241]<<8)<<16>>16,d[C]|d[C+1|0]<<8|d[C+2|0]<<16|d[C+3|0]<<24|0,(d[g]|d[g+1|0]<<8)<<16>>16,(d[h]|d[h+1|0]<<8)<<16>>16,2,-16384,(L=i,i=i+1|0,i=i+7&-8,w=0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}}}}while(0);F=Xj(l)|0}while((F|0)!=0)}w=0;a[204368]=w;w=w>>8;a[204369]=w;M=0}do{F=M&65535;W=258616+(F*20|0)|0;V=vn(W)|0;if(!((ao(260288,V)|0)<<24>>24==0)){a[258605+(F*20|0)|0]=1}X=258612+(F*20|0)|0;if(((((d[X]|d[X+1|0]<<8|d[X+2|0]<<16|d[X+3|0]<<24|0)!=0?(X=258605+(F*20|0)|0,!((a[X]|b)<<24>>24==0)):0)?(P=258608+(F*20|0)|0,!((d[P]|d[P+1|0]<<8)<<16>>16<<16>>16==0)):0)?(a[X]=0,X=241272+((V&65535)<<2)|0,((d[X]|d[X+1|0]<<8|d[X+2|0]<<16|d[X+3|0]<<24)&524288|0)!=0|(a[261320]|0)!=0):0)?!((yi(W,g,h)|0)<<24>>24==0):0){w=-16384;a[71912]=w;w=w>>8;a[71913]=w;W=(d[231240]|d[231241]<<8)<<16>>16;X=(d[P]|d[P+1|0]<<8)<<16>>16;P=a[258604+(F*20|0)|0]|0;if(!((X&65535)>>>0>355>>>0)?(F=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((X&65535)<<2)|0,X=d[F]|d[F+1|0]<<8|d[F+2|0]<<16|d[F+3|0]<<24|0,(X|0)!=0):0){if(((qm(X)|0)&1)==0){Y=X}else{F=P<<4;P=0;V=0;while(1){S=a[X+(V+10)|0]|0;a[72184+V|0]=((S+112&255)>>>0<9>>>0?F:0)+S;S=P+1&255;if((S&255)>>>0<16>>>0){P=S;V=S&255}else{Y=X;break}}}}else{Y=0}Ie(W,Y,(d[g]|d[g+1|0]<<8)<<16>>16,(d[h]|d[h+1|0]<<8)<<16>>16,2,(d[71912]|d[71913]<<8)<<16>>16,(L=i,i=i+8|0,w=72184,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}M=M+1&65535}while((M&65535)>>>0<32>>>0);if(!((d[204360]|d[204361]<<8)<<16>>16<<16>>16==0&o&I)){w=-1;a[G]=w;w=w>>8;a[G+1|0]=w;w=-1;a[s]=w;w=w>>8;a[s+1|0]=w;a[r]=-1;r=Xj(l)|0;if((r|0)!=0){s=r;do{r=s|0;do{if(!(((d[r]|d[r+1|0]<<8)<<16>>16&65535)>>>0>15>>>0)){G=s+12|0;M=vn(G)|0;Y=s+4|0;b=d[Y]|d[Y+1|0]<<8|d[Y+2|0]<<16|d[Y+3|0]<<24|0;if((b&4100|0)!=4096&o){if((ao(260288,M)|0)<<24>>24==0){break}Z=d[Y]|d[Y+1|0]<<8|d[Y+2|0]<<16|d[Y+3|0]<<24|0}else{Z=b}w=Z&-4097;a[Y]=w;w=w>>8;a[Y+1|0]=w;w=w>>8;a[Y+2|0]=w;w=w>>8;a[Y+3|0]=w;b=241272+((M&65535)<<2)|0;if(((d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)&524288|0)!=0|(a[261320]|0)!=0?(b=s+2|0,M=d[b]|0,!((yi(G,g,h)|0)<<24>>24==0)):0){G=8870+(M*100|0)|0;X=(d[G]|d[G+1|0]<<8)<<16>>16;G=a[s+110|0]|0;w=-16384;a[71912]=w;w=w>>8;a[71913]=w;V=8876+(M*100|0)|0;P=(d[V]|d[V+1|0]<<8)<<16>>16&65535;if((P|0)==0){_=((d[Y]|d[Y+1|0]<<8|d[Y+2|0]<<16|d[Y+3|0]<<24|0)>>>6&1)+X&65535}else if((P|0)==1){V=(Nn(G)|0)&255;F=71016+(V<<2)|0;S=((d[F]|d[F+1|0]<<8)<<16>>16)+X&65535;F=71018+(V<<2)|0;w=(d[71912]|d[71913]<<8)<<16>>16|(d[F]|d[F+1|0]<<8)<<16>>16;a[71912]=w;w=w>>8;a[71913]=w;_=S}else if((P|0)==2){S=(On(G)|0)&255;F=70952+(S<<2)|0;V=((d[F]|d[F+1|0]<<8)<<16>>16)+X&65535;F=70954+(S<<2)|0;w=(d[71912]|d[71913]<<8)<<16>>16|(d[F]|d[F+1|0]<<8)<<16>>16;a[71912]=w;w=w>>8;a[71913]=w;_=V}else if((P|0)==5){P=(Nn(G)|0)&255;G=71016+(P<<2)|0;V=70840+((a[s+119|0]&3)<<1)|0;F=((((d[G]|d[G+1|0]<<8)<<16>>16)*3&65535)+X&65535)+((d[V]|d[V+1|0]<<8)<<16>>16)&65535;V=71018+(P<<2)|0;w=(d[71912]|d[71913]<<8)<<16>>16|(d[V]|d[V+1|0]<<8)<<16>>16;a[71912]=w;w=w>>8;a[71913]=w;_=F}else{w=0;a[71912]=w;w=w>>8;a[71913]=w;_=X}X=8856+(M*100|0)|0;if(((d[X]|d[X+1|0]<<8)<<16>>16&1024)==0){$=_}else{$=((d[Y]|d[Y+1|0]<<8|d[Y+2|0]<<16|d[Y+3|0]<<24)&32|0)==0?_:_+5&65535}if((a[b]|0)==0){aa=((d[Y]|d[Y+1|0]<<8|d[Y+2|0]<<16|d[Y+3|0]<<24)&256|0)==0?$:$+3&65535}else{aa=$}Y=mo(s)|0;if(!((aa&65535)>>>0>355>>>0)?(b=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((aa&65535)<<2)|0,X=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0,(X|0)!=0):0){if(((qm(X)|0)&1)==0){ba=X}else{b=Y<<4;Y=0;F=0;while(1){V=a[X+(F+10)|0]|0;a[72184+F|0]=((V+112&255)>>>0<9>>>0?b:0)+V;V=Y+1&255;if((V&255)>>>0<16>>>0){Y=V;F=V&255}else{ba=X;break}}}}else{ba=0}X=8808+(M*100|0)|0;F=(d[X]|d[X+1|0]<<8)<<16>>16;if((F&1)==0){ca=F}else{Ie((d[231240]|d[231241]<<8)<<16>>16,ba,((d[g]|d[g+1|0]<<8)<<16>>16)+1&65535,((d[h]|d[h+1|0]<<8)<<16>>16)+3&65535,2,(d[71912]|d[71913]<<8)<<16>>16&-8961|768,(L=i,i=i+16|0,w=d[232112]|d[232113]<<8|d[232114]<<16|d[232115]<<24|0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,w=1,a[L+8|0]=w,w=w>>8,a[L+9|0]=w,w=w>>8,a[L+10|0]=w,w=w>>8,a[L+11|0]=w,L)|0);i=L;ca=(d[X]|d[X+1|0]<<8)<<16>>16}if(!((ca&16)==0)){w=(d[71912]|d[71913]<<8)<<16>>16|512;a[71912]=w;w=w>>8;a[71913]=w}Ie((d[231240]|d[231241]<<8)<<16>>16,ba,(d[g]|d[g+1|0]<<8)<<16>>16,(d[h]|d[h+1|0]<<8)<<16>>16,2,(d[71912]|d[71913]<<8)<<16>>16|8192,(L=i,i=i+8|0,w=72184,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L}}}while(0);s=Xj(l)|0}while((s|0)!=0)}w=0;a[204360]=w;w=w>>8;a[204361]=w}if(!I){Lp(260800,0,512)|0;Lp(260288,0,512)|0}a:do{if(!((d[261952]|d[261953]<<8)<<16>>16<<16>>16==0)){I=0;s=0;l=2;ba=0;while(1){ca=261960+((ba&65535)<<1)|0;aa=(d[ca]|d[ca+1|0]<<8)<<16>>16;co(261440,aa);if(I<<24>>24==0){ca=de(2)|0;Ae(3);da=ca;ea=1}else{da=l;ea=I}Bg(aa);if(s<<24>>24==0){fa=(ao(259752,aa)|0)<<24>>24!=0|0}else{fa=s}aa=ba+1&65535;if((aa&65535)>>>0<((d[261952]|d[261953]<<8)<<16>>16&65535)>>>0){I=ea;s=fa;l=da;ba=aa}else{break}}if(!(fa<<24>>24==0)){ti((d[233072]|d[233073]<<8)<<16>>16,1)}if(!(ea<<24>>24==0)){Be(32,136,32,136,8,64,(d[231240]|d[231241]<<8)<<16>>16,0);de(da)|0;Qf()}ba=(d[261952]|d[261953]<<8)<<16>>16<<16>>16==200;w=0;a[261952]=w;w=w>>8;a[261953]=w;if(ba){ba=0;do{if(!((ao(261440,ba)|0)<<24>>24==0)?(l=(d[261952]|d[261953]<<8)<<16>>16,s=l+1&65535,w=s,a[261952]=w,w=w>>8,a[261953]=w,I=261960+((l&65535)<<1)|0,w=ba,a[I]=w,w=w>>8,a[I+1|0]=w,s<<16>>16==200):0){break a}ba=ba+1&65535}while((ba&65535)>>>0<4096>>>0)}}}while(0);da=d[203208]|d[203209]<<8|d[203210]<<16|d[203211]<<24|0;do{if(((d[203216]|d[203217]<<8)<<16>>16&1)!=0&(da|0)!=0){ea=j+12|0;fa=k+12|0;if(!((d[ea]|d[ea+1|0]<<8)<<16>>16<<16>>16<15)?(d[fa]|d[fa+1|0]<<8)<<16>>16<<16>>16<0&c<<24>>24==0&o:0){break}ze(da,112,139,15,0,306,(L=i,i=i+1|0,i=i+7&-8,w=0,a[L]=w,w=w>>8,a[L+1|0]=w,w=w>>8,a[L+2|0]=w,w=w>>8,a[L+3|0]=w,L)|0);i=L;w=-1;a[ea]=w;w=w>>8;a[ea+1|0]=w;w=14;a[fa]=w;w=w>>8;a[fa+1|0]=w}}while(0);if(!(p<<24>>24!=0&e<<24>>24==0)){ga=de(m)|0;ha=Wg(n)|0;i=f;return}if((a[204344]|0)!=0){Ae((d[261376]|d[261377]<<8)<<16>>16);if((a[47984]|0)!=0){e=(d[231240]|d[231241]<<8)<<16>>16;de(0)|0;p=(d[261360]|d[261361]<<8)<<16>>16;L=(d[261352]|d[261353]<<8)<<16>>16;xe(p<<3,L,(((d[261368]|d[261369]<<8)<<16>>16)+p&65535)<<3,((d[261384]|d[261385]<<8)<<16>>16)+L&65535,0);de(e)|0}e=(d[261360]|d[261361]<<8)<<16>>16;L=(d[261352]|d[261353]<<8)<<16>>16;If(e,L,e,L,(d[261368]|d[261369]<<8)<<16>>16,(d[261384]|d[261385]<<8)<<16>>16,(d[231240]|d[231241]<<8)<<16>>16,0);Qf();a[204344]=0;ga=de(m)|0;ha=Wg(n)|0;i=f;return}if(c<<24>>24==0){c=0;L=0;e=0;while(1){p=k+(e<<1)|0;da=(d[p]|d[p+1|0]<<8)<<16>>16;p=j+(e<<1)|0;o=(d[p]|d[p+1|0]<<8)<<16>>16;if(da<<16>>16<o<<16>>16){ia=c}else{p=o<<1;w=p;a[g]=w;w=w>>8;a[g+1|0]=w;fa=(L<<4)+40&65535;w=fa;a[h]=w;w=w>>8;a[h+1|0]=w;if(c<<24>>24==0){Ae((d[261376]|d[261377]<<8)<<16>>16);ja=1;ka=(d[g]|d[g+1|0]<<8)<<16>>16;la=(d[h]|d[h+1|0]<<8)<<16>>16}else{ja=c;ka=p;la=fa}Be(ka,la,ka,la,((da-o&65535)<<1)+2&65535,16,(d[231240]|d[231241]<<8)<<16>>16,0);ia=ja}o=L+1&65535;if((o&65535)>>>0<10>>>0){c=ia;L=o;e=o&65535}else{ma=ia;break}}}else{ia=0;e=0;L=0;while(1){c=j+(L<<1)|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;c=k+(L<<1)|0;w=14;a[c]=w;w=w>>8;a[c+1|0]=w;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;c=(e<<4)+40&65535;w=c;a[h]=w;w=w>>8;a[h+1|0]=w;if(ia<<24>>24==0){Ae((d[261376]|d[261377]<<8)<<16>>16);na=1;oa=(d[g]|d[g+1|0]<<8)<<16>>16;pa=(d[h]|d[h+1|0]<<8)<<16>>16}else{na=ia;oa=0;pa=c}Be(oa,pa,oa,pa,30,16,(d[231240]|d[231241]<<8)<<16>>16,0);c=e+1&65535;if((c&65535)>>>0<10>>>0){ia=na;e=c;L=c&65535}else{ma=na;break}}}if(ma<<24>>24==0){ga=de(m)|0;ha=Wg(n)|0;i=f;return}Qf();ga=de(m)|0;ha=Wg(n)|0;i=f;return}function Bg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0;c=i;if(!((An(b)|0)<<24>>24==0)){i=c;return}if((ui(b)|0)<<24>>24==0){i=c;return}e=yn(b)|0;f=zn(b)|0;g=(d[231260]|d[231261]<<8)<<16>>16;h=g+1&65535;j=h&65535;if(h<<16>>16==0){i=c;return}if(!((ao(259752,b)|0)<<24>>24==0)){i=c;return}k=241272+((b&65535)<<2)|0;if(((d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&524288|0)==0){if((a[261320]|0)==0){l=22}else{l=8}}else{if((a[(d[232072]|d[232073]<<8|d[232074]<<16|d[232075]<<24)+4|0]&16|a[261320])<<24>>24==0){l=22}else{l=8}}do{if((l|0)==8){m=Ai(b)|0;n=(h&65535)>>>0>1>>>0;if(n){o=m&65535;p=15286+(o<<4)|0;q=15284+(o<<4)|0;r=12;s=(((d[231260]|d[231261]<<8)<<16>>16)-1&65535)+((d[p]|d[p+1|0]<<8)<<16>>16)&65535;t=(d[q]|d[q+1|0]<<8)<<16>>16}else{q=15284+((m&65535)<<4)|0;m=(d[q]|d[q+1|0]<<8)<<16>>16;r=m&255;s=-1;t=m}do{if(t<<16>>16==-1){m=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;if(n){u=r;v=j+29+(m>>>15&14)&65535;break}else{q=15522+((m>>>16&7)<<5)|0;u=(d[q]|d[q+1|0]<<8)<<16>>16&255;v=s;break}}else{u=r;v=s}}while(0);q=zo(b)|0;if((q|0)!=0){m=(a[q+2|0]|0)==25;if(!n){if(m){x=-1;y=v;break}p=15522+(((mo(q)|0)&255)<<5)|0;x=(d[p]|d[p+1|0]<<8)<<16>>16&255;y=v;break}if(m){x=u;y=g+54&65535;break}else{x=u;y=(g+30&65535)+(((mo(q)|0)&255)<<1)&65535;break}}else{x=u;y=v}}else if((l|0)==22){q=_m(b)|0;if((q|0)!=0?(m=d[q+8|0]|0,(m|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)):0){if((h&65535)>>>0>1>>>0){x=12;y=j+29+(m<<1)&65535;break}else{q=15522+(m<<5)|0;x=(d[q]|d[q+1|0]<<8)<<16>>16&255;y=-1;break}}if((h&65535)>>>0>1>>>0){x=12;y=(((d[231260]|d[231261]<<8)<<16>>16)-1&65535)+((d[15382]|d[15383]<<8)<<16>>16)&65535}else{x=12;y=-1}}}while(0);h=(d[231260]|d[231261]<<8)<<16>>16&65535;j=46560+(h<<3)|0;b=(e&255)-((d[j]|d[j+1|0]<<8)<<16>>16)&65535;j=46562+(h<<3)|0;e=(f&255)-((d[j]|d[j+1|0]<<8)<<16>>16)&65535;if(y<<16>>16==-1){ge(b+256&65535,e+136&65535,x);i=c;return}else{x=h+1|0;h=(aa(b&65535,x)|0)&65535;b=(aa(e&65535,x)|0)&65535;x=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((y&65535)<<2)|0;Ie((d[231240]|d[231241]<<8)<<16>>16,d[x]|d[x+1|0]<<8|d[x+2|0]<<16|d[x+3|0]<<24|0,h,b,3,16384,(b=i,i=i+1|0,i=i+7&-8,w=0,a[b]=w,w=w>>8,a[b+1|0]=w,w=w>>8,a[b+2|0]=w,w=w>>8,a[b+3|0]=w,b)|0);i=b;i=c;return}}function Cg(a){a=a|0;var b=0,c=0;b=a<<16>>16==0;if(b){c=de(2)|0}else{c=2}a=0;do{Bg(a);a=a+1&65535}while((a&65535)>>>0<4096>>>0);ti((d[233072]|d[233073]<<8)<<16>>16,1);if(!b){return}de(c)|0;Ae(3);Be(32,136,32,136,8,64,2,0);Qf();return}function Dg(a){a=a|0;var b=0;b=a|0;return d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0}function Eg(a,b){a=a|0;b=b|0;var c=0,e=0,f=0,g=0;if(b<<16>>16==0){c=a;return c|0}if((a|0)==0){c=0;return c|0}else{e=a}while(1){a=e+4|0;if((d[a]|d[a+1|0]<<8)<<16>>16<<16>>16==b<<16>>16){c=e;f=5;break}a=e|0;g=d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0;if((g|0)==0){c=0;f=5;break}else{e=g}}if((f|0)==5){return c|0}return 0}function Fg(b){b=b|0;var c=0,e=0;if((b|0)==0){return}c=b+16|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;if(!((e&8)==0)){return}w=e|8;a[c]=w;w=w>>8;a[c+1|0]=w;Gg(b);return}function Gg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0;c=i;if((b|0)==0){i=c;return}e=b+16|0;f=(d[e]|d[e+1|0]<<8)<<16>>16;if(!((f&8)==0)){if((f&16)==0){i=c;return}f=(d[231240]|d[231241]<<8)<<16>>16;e=b+34|0;if(f<<16>>16==0){g=(d[e]|d[e+1|0]<<8)<<16>>16;h=b+36|0;j=(d[h]|d[h+1|0]<<8)<<16>>16;k=b+38|0;l=b+40|0;Jf(g,j,((d[k]|d[k+1|0]<<8)<<16>>16)+g&65535,((d[l]|d[l+1|0]<<8)<<16>>16)+j&65535);m=(d[231240]|d[231241]<<8)<<16>>16;n=h;o=k;p=l}else{m=f;n=b+36|0;o=b+38|0;p=b+40|0}f=b+20|0;l=b+32|0;Ie(m,d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0,(d[e]|d[e+1|0]<<8)<<16>>16,(d[n]|d[n+1|0]<<8)<<16>>16,(d[l]|d[l+1|0]<<8)<<16>>16,0,(q=i,i=i+1|0,i=i+7&-8,w=0,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;Rf((d[e]|d[e+1|0]<<8)<<16>>16,(d[n]|d[n+1|0]<<8)<<16>>16,(d[o]|d[o+1|0]<<8)<<16>>16,(d[p]|d[p+1|0]<<8)<<16>>16,12);if(!((d[231240]|d[231241]<<8)<<16>>16<<16>>16==0)){i=c;return}Pf();i=c;return}p=b+48|0;o=(d[p]|d[p+1|0]<<8)<<16>>16;do{if((o&4)==0){if((o&1)==0){r=b+20|0;s=b+43|0;t=b+42|0;u=b+10|0;break}else{r=b+24|0;s=b+45|0;t=b+44|0;u=b+11|0;break}}else{r=b+28|0;s=b+47|0;t=b+46|0;u=b+12|0}}while(0);o=a[u]|0;u=d[r]|d[r+1|0]<<8|d[r+2|0]<<16|d[r+3|0]<<24|0;r=a[s]|0;s=a[t]|0;t=b+34|0;p=(d[t]|d[t+1|0]<<8)<<16>>16;t=b+32|0;n=(d[t]|d[t+1|0]<<8)<<16>>16;if(p<<16>>16<0){t=5716+((n&65535)*12|0)|0;v=((d[t]|d[t+1|0]<<8)<<16>>16<<3)+p&65535}else{v=p}p=b+32|0;t=n&65535;n=5712+(t*12|0)|0;e=((d[n]|d[n+1|0]<<8)<<16>>16<<3)+v&65535;n=b+38|0;l=(((d[n]|d[n+1|0]<<8)<<16>>16)-1&65535)+e&65535;n=b+36|0;f=(d[n]|d[n+1|0]<<8)<<16>>16;if(f<<16>>16<0){n=5718+(t*12|0)|0;x=((d[n]|d[n+1|0]<<8)<<16>>16)+f&65535}else{x=f}f=5714+(t*12|0)|0;t=((d[f]|d[f+1|0]<<8)<<16>>16)+x&65535;f=b+40|0;n=(((d[f]|d[f+1|0]<<8)<<16>>16)-1&65535)+t&65535;if(!((o&255)>>>0<7>>>0)){Nb(64488,66800,201,69472)}f=(o&-5)<<24>>24!=0;if(f&(d[231240]|d[231241]<<8)<<16>>16<<16>>16==0){Jf(e,t,l,n)}a:do{switch(o&255|0){case 1:{Ie((d[231240]|d[231241]<<8)<<16>>16,u,v,x,(d[p]|d[p+1|0]<<8)<<16>>16,16640,(q=i,i=i+16|0,w=231736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=1,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;break};case 2:{Ce(u,e,t,s,r);break};case 3:{ee(u&65535,e,t,0);break};case 6:{Sf(e,t,l,n,s);break};case 4:{if((u|0)==0){i=c;return}else{fc[u&63](b);break a}break};case 5:{ve(e,t,l,n,s);break};default:{}}}while(0);if(!(f&(d[231240]|d[231241]<<8)<<16>>16<<16>>16==0)){i=c;return}Pf();i=c;return}function Hg(b){b=b|0;var c=0,e=0;if((b|0)==0){return}c=b+16|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;if((e&8)==0){return}w=e&-9;a[c]=w;w=w>>8;a[c+1|0]=w;Gg(b);return}function Ig(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0;if((Yh()|0)<<16>>16==0){c=0}else{c=Zh()|0}if((b|0)==0){e=c&32767;return e|0}if(!((d[267832]|d[267833]<<8|d[267834]<<16|d[267835]<<24|0)==(b|0)&(a[71568]|0)==0)){w=b;a[267832]=w;w=w>>8;a[267833]=w;w=w>>8;a[267834]=w;w=w>>8;a[267835]=w;w=0;a[267824]=w;w=w>>8;a[267825]=w;w=w>>8;a[267826]=w;w=w>>8;a[267827]=w;w=0;a[267840]=w;w=w>>8;a[267841]=w;a[71568]=0;if(!(($h(65)|0)<<16>>16==0)){w=(d[267840]|d[267841]<<8)<<16>>16|512;a[267840]=w;w=w>>8;a[267841]=w}if(($h(66)|0)<<16>>16==0){f=b}else{w=(d[267840]|d[267841]<<8)<<16>>16|8192;a[267840]=w;w=w>>8;a[267841]=w;f=b}do{Gg(f);b=f|0;f=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0}while((f|0)!=0)}f=(d[232920]|d[232921]<<8)<<16>>16;b=(d[232912]|d[232913]<<8)<<16>>16;if((a[204296]|0)==0){g=c&65535;h=g&255;if((g&32768|0)==0){i=(h|0)==65?256:(h|0)==66?4096:0}else{i=(h|0)==198?256:(h|0)==199?4096:0}h=(g&2048|0)==0?i:i<<2;if(h<<16>>16==0){j=b;k=f}else{j=(d[233056]|d[233057]<<8)<<16>>16;k=(d[233064]|d[233065]<<8)<<16>>16}i=(d[267840]|d[267841]<<8)<<16>>16&(((h&65535)>>>1|-8705)^8704)|h<<1&8704;w=i;a[267840]=w;w=w>>8;a[267841]=w;l=i|h|i<<2^-30720;m=j;n=k}else{l=0;m=b;n=f}f=d[267824]|d[267825]<<8|d[267826]<<16|d[267827]<<24|0;if((f|0)!=0){b=f+16|0;if(((d[b]|d[b+1|0]<<8)<<16>>16&8)==0){o=f;p=22}else{w=0;a[267824]=w;w=w>>8;a[267825]=w;w=w>>8;a[267826]=w;w=w>>8;a[267827]=w;q=f;p=21}}else{q=d[267832]|d[267833]<<8|d[267834]<<16|d[267835]<<24|0;p=21}if((p|0)==21){if((q|0)==0){r=c}else{o=q;p=22}}if((p|0)==22){q=n&65535;f=m&65535;b=o;o=l;l=0;k=c;while(1){c=b+16|0;j=(d[c]|d[c+1|0]<<8)<<16>>16;if((j&8)==0){i=b+48|0;h=(d[i]|d[i+1|0]<<8)<<16>>16;g=h<<3;s=g&8|h&-25|g&16;w=s;a[i]=w;w=w>>8;a[i+1|0]=w;g=b+34|0;h=(d[g]|d[g+1|0]<<8)<<16>>16;g=b+32|0;t=(d[g]|d[g+1|0]<<8)<<16>>16;if(h<<16>>16<0){g=5716+((t&65535)*12|0)|0;u=((d[g]|d[g+1|0]<<8)<<16>>16<<3)+h&65535}else{u=h}h=t&65535;t=5712+(h*12|0)|0;g=((d[t]|d[t+1|0]<<8)<<16>>16<<3)+u&65535;t=b+36|0;v=(d[t]|d[t+1|0]<<8)<<16>>16;if(v<<16>>16<0){t=5718+(h*12|0)|0;x=((d[t]|d[t+1|0]<<8)<<16>>16)+v&65535}else{x=v}v=5714+(h*12|0)|0;h=((d[v]|d[v+1|0]<<8)<<16>>16)+x&65535;w=s&-129;a[i]=w;w=w>>8;a[i+1|0]=w;if(!((g&65535)>>>0>(n&65535)>>>0)?(v=b+38|0,!((q|0)>(((d[v]|d[v+1|0]<<8)<<16>>16&65535)+(g&65535)|0)|(h&65535)>>>0>(m&65535)>>>0)):0){g=b+40|0;y=(f|0)<=(((d[g]|d[g+1|0]<<8)<<16>>16&65535)+(h&65535)|0)|0}else{y=0}h=k&127;do{if((h|0)==0){p=38}else{g=b+6|0;v=b+8|0;t=(d[v]|d[v+1|0]<<8)<<16>>16;if((h|0)!=((d[g]|d[g+1|0]<<8)<<16>>16&65535|0)?(h|0)!=(t&65535|0):0){p=38;break}w=s|128;a[i]=w;w=w>>8;a[i+1|0]=w;if(t<<16>>16==0?(t=j&-4096,!(t<<16>>16==0)):0){z=t}else{z=j&3840}w=b;a[267824]=w;w=w>>8;a[267825]=w;w=w>>8;a[267826]=w;w=w>>8;a[267827]=w;t=(d[i]|d[i+1|0]<<8)<<16>>16&-7;w=t;a[i]=w;w=w>>8;a[i+1|0]=w;A=z;B=0;C=1;D=t;p=39}}while(0);if((p|0)==38){p=0;j=s&-135;w=j;a[i]=w;w=w>>8;a[i+1|0]=w;if(y<<24>>24==0){E=o;F=k;G=0;H=0}else{A=o;B=k;C=y;D=j;p=39}}if((p|0)==39){p=0;j=A&65535;if((((j&13056|0)!=0?!(((d[c]|d[c+1|0]<<8)<<16>>16&4)==0):0)?(h=d[267824]|d[267825]<<8|d[267826]<<16|d[267827]<<24|0,(b|0)==(h|0)|(h|0)==0):0)?(w=D|6,a[i]=w,w=w>>8,a[i+1|0]=w,(d[267824]|d[267825]<<8|d[267826]<<16|d[267827]<<24|0)==0):0){w=b;a[267824]=w;w=w>>8;a[267825]=w;w=w>>8;a[267826]=w;w=w>>8;a[267827]=w}if((j&34816|0)!=0?((d[c]|d[c+1|0]<<8)<<16>>16&4)==0:0){w=(d[i]|d[i+1|0]<<8)<<16>>16|6;a[i]=w;w=w>>8;a[i+1|0]=w;E=A;F=B;G=C;H=1}else{E=A;F=B;G=C;H=1}}j=d[267824]|d[267825]<<8|d[267826]<<16|d[267827]<<24|0;h=(j|0)==0;if(!h?(t=j+16|0,!(((d[t]|d[t+1|0]<<8)<<16>>16&64)==0)):0){I=(j|0)==(b|0)|0}else{I=G}do{if(!(I<<24>>24==0)){if((E&4352)!=0&h){w=b;a[267824]=w;w=w>>8;a[267825]=w;w=w>>8;a[267826]=w;w=w>>8;a[267827]=w;J=0;K=b}else{J=F;K=j}t=(d[c]|d[c+1|0]<<8)<<16>>16;g=t&E;if(!(g<<16>>16==0)){if(G<<24>>24==0?!((t&1)==0):0){L=0;M=l;N=J;O=0;break}v=g&65535;if((v&4352|0)!=0){g=(d[i]|d[i+1|0]<<8)<<16>>16^1;w=g;a[i]=w;w=w>>8;a[i+1|0]=w;P=b+4|0;Q=(d[P]|d[P+1|0]<<8)<<16>>16|-32768;if(!((t&4)==0)){w=g|6;a[i]=w;w=w>>8;a[i+1|0]=w}w=b;a[267824]=w;w=w>>8;a[267825]=w;w=w>>8;a[267826]=w;w=w>>8;a[267827]=w;R=1;S=J;T=Q;p=72;break}if((v&8704|0)!=0){if((t&4)==0){w=(d[i]|d[i+1|0]<<8)<<16>>16|6;a[i]=w;w=w>>8;a[i+1|0]=w}R=(t&1^1)&255;S=J;T=l;p=72;break}if((v&17408|0)==0){if(!((t&4)==0)){w=(d[i]|d[i+1|0]<<8)<<16>>16|6;a[i]=w;w=w>>8;a[i+1|0]=w}R=(t&1^1)&255;S=J;T=l;p=72;break}if((t&1)==0|(b|0)==(K|0)){w=(d[i]|d[i+1|0]<<8)<<16>>16^1;a[i]=w;w=w>>8;a[i+1|0]=w;v=b+4|0;U=1;V=(d[v]|d[v+1|0]<<8)<<16>>16|-32768}else{U=0;V=l}if((t&4)==0){w=(d[i]|d[i+1|0]<<8)<<16>>16&-7;a[i]=w;w=w>>8;a[i+1|0]=w;R=U;S=J;T=V;p=72}else{R=U;S=J;T=V;p=72}}else{R=0;S=J;T=l;p=72}}else{R=0;S=F;T=l;p=72}}while(0);if((p|0)==72){p=0;if(((!(G<<24>>24==0)?!((E&8704)==0):0)?(j=(d[i]|d[i+1|0]<<8)<<16>>16,w=j|6,a[i]=w,w=w>>8,a[i+1|0]=w,((d[c]|d[c+1|0]<<8)<<16>>16&4)==0):0)?(j&1)==0:0){w=j|7;a[i]=w;w=w>>8;a[i+1|0]=w;L=1;M=T;N=S;O=R}else{L=0;M=T;N=S;O=R}}do{if((E&-30720)<<16>>16==-30720){w=0;a[267824]=w;w=w>>8;a[267825]=w;w=w>>8;a[267826]=w;w=w>>8;a[267827]=w;if(H?((d[c]|d[c+1|0]<<8)<<16>>16&4)==0:0){break}w=(d[i]|d[i+1|0]<<8)<<16>>16&-7;a[i]=w;w=w>>8;a[i+1|0]=w;p=81}else{p=81}}while(0);if(((p|0)==81?(p=0,(d[267824]|d[267825]<<8|d[267826]<<16|d[267827]<<24|0)==(b|0)&(H^1)):0)?((d[c]|d[c+1|0]<<8)<<16>>16&64)==0:0){w=0;a[267824]=w;w=w>>8;a[267825]=w;w=w>>8;a[267826]=w;w=w>>8;a[267827]=w}j=(d[i]|d[i+1|0]<<8)<<16>>16;if(!((((j&65535)>>>3^j)&1)==0?(((j&65535)>>>1^(j&65535)>>>4)&1)==0:0)){Gg(b)}if(!(L<<24>>24==0)){w=(d[i]|d[i+1|0]<<8)<<16>>16&-2;a[i]=w;w=w>>8;a[i+1|0]=w}if(!(O<<24>>24==0)){w=(d[i]|d[i+1|0]<<8)<<16>>16&255|E&-256;a[i]=w;w=w>>8;a[i+1|0]=w;j=b+52|0;h=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;if((h|0)!=0?!((gc[h&255](b)|0)<<24>>24==0):0){W=N;X=M;break}if(!(((d[c]|d[c+1|0]<<8)<<16>>16&32)==0)){W=N;X=M;break}}if((b|0)==(d[267824]|d[267825]<<8|d[267826]<<16|d[267827]<<24|0)?!(((d[c]|d[c+1|0]<<8)<<16>>16&64)==0):0){W=N;X=M;break}else{Y=N;Z=M;_=E}}else{Y=k;Z=l;_=o}h=b|0;j=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;if((j|0)==0){W=Y;X=Z;break}else{b=j;o=_;l=Z;k=Y}}if(X<<16>>16==0){r=W}else{e=X;return e|0}}e=r&32767;return e|0}function Jg(b){b=b|0;if((b&255)>>>0<206>>>0){return a[71136+(b&255)|0]|0}else{Nb(62336,66800,533,69448);return 0}return 0}function Kg(b,c,e,f,g,h){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0;i=Ap(1,64)|0;j=i;k=i+4|0;w=b;a[k]=w;w=w>>8;a[k+1|0]=w;k=i+6|0;w=c;a[k]=w;w=w>>8;a[k+1|0]=w;b=i+8|0;w=c;a[b]=w;w=w>>8;a[b+1|0]=w;c=i+32|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;a[i+44|0]=11;a[i+45|0]=12;a[i+42|0]=15;a[i+43|0]=12;c=i+60|0;w=h;a[c]=w;w=w>>8;a[c+1|0]=w;c=i+48|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;c=i+34|0;w=e;a[c]=w;w=w>>8;a[c+1|0]=w;c=i+36|0;w=f;a[c]=w;w=w>>8;a[c+1|0]=w;c=i+16|0;w=17477;a[c]=w;w=w>>8;a[c+1|0]=w;c=g<<16>>16;if((c|0)==(-2|0)){l=36;m=36;n=4}else if((c|0)==(-4|0)){l=24;m=24;n=4}else if((c|0)==(-3|0)){if(!(h<<16>>16==0)){do{if((Dm(h)|0)!=0){f=a[Dm(h)|0]|0;if((f&255)>>>0<206>>>0){w=d[71136+(f&255)|0]|0;a[k]=w;w=w>>8;a[k+1|0]=w;break}else{Nb(62336,66800,533,69448);return 0}}}while(0);if(h<<16>>16==30){w=110;a[b]=w;w=w>>8;a[b+1|0]=w;l=34;m=34;n=4}else{l=34;m=34;n=4}}else{l=34;m=34;n=4}}else if((c|0)!=(-1|0)){c=g&65535;b=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;h=b+(c<<2)|0;k=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;h=b+(c+1<<2)|0;c=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;if((k|0)==0){l=c;m=0;n=1}else{h=i+38|0;w=(om(k)|0)&255;a[h]=w;w=w>>8;a[h+1|0]=w;h=i+40|0;w=(pm(k)|0)&255;a[h]=w;w=w>>8;a[h+1|0]=w;l=c;m=k;n=1}}else{l=0;m=0;n=0}a[i+11|0]=n;a[i+12|0]=n;a[i+10|0]=n;n=i+20|0;w=m;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;n=i+28|0;w=l;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;n=i+24|0;w=g<<16>>16==25?l:m;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;return j|0}function Lg(b,c,e,f,g,h,i){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,l=0;j=Ap(1,64)|0;k=j;l=j+4|0;w=b;a[l]=w;w=w>>8;a[l+1|0]=w;l=j+32|0;w=c;a[l]=w;w=w>>8;a[l+1|0]=w;l=j+34|0;w=e;a[l]=w;w=w>>8;a[l+1|0]=w;l=j+36|0;w=f;a[l]=w;w=w>>8;a[l+1|0]=w;l=j+38|0;w=g;a[l]=w;w=w>>8;a[l+1|0]=w;l=j+40|0;w=h;a[l]=w;w=w>>8;a[l+1|0]=w;a[j+44|0]=10;a[j+45|0]=12;a[j+42|0]=15;a[j+43|0]=12;l=j+16|0;w=1856;a[l]=w;w=w>>8;a[l+1|0]=w;l=j+48|0;w=32;a[l]=w;w=w>>8;a[l+1|0]=w;a[j+10|0]=4;a[j+11|0]=4;l=j+20|0;w=42;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=j+24|0;w=42;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=j+52|0;w=58;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=Ap(1,24)|0;f=j+56|0;w=l;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=l;w=k;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=l+8|0;w=1;a[f]=w;w=w>>8;a[f+1|0]=w;f=l+10|0;w=1;a[f]=w;w=w>>8;a[f+1|0]=w;f=l+15|0;e=l+20|0;c=l+12|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;w=i;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;if((j|0)==0){return k|0}j=((g&65535)>>>0>(h&65535)>>>0?g:h)-2&65535;h=l+4|0;if(!((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==j<<16>>16)){w=j;a[h]=w;w=w>>8;a[h+1|0]=w;a[f]=1}h=l+6|0;if((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==0){return k|0}w=0;a[h]=w;w=w>>8;a[h+1|0]=w;a[f]=1;return k|0}function Mg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;c=b|0;e=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((e|0)==0){f=-1;return f|0}c=b+8|0;g=(d[c]|d[c+1|0]<<8)<<16>>16;c=b+10|0;h=(d[c]|d[c+1|0]<<8)<<16>>16;c=g-h&65535;if(g<<16>>16==h<<16>>16){i=c}else{h=b+12|0;g=e+38|0;j=(d[g]|d[g+1|0]<<8)<<16>>16;g=e+40|0;e=(d[g]|d[g+1|0]<<8)<<16>>16;g=b+4|0;i=((aa(-2-((d[g]|d[g+1|0]<<8)<<16>>16&65535)+(((j&65535)>>>0>(e&65535)>>>0?j:e)&65535)|0,(d[h]|d[h+1|0]<<8)<<16>>16&65535)|0)/(c&65535|0)|0)&65535}c=b+6|0;if((d[c]|d[c+1|0]<<8)<<16>>16<<16>>16==i<<16>>16){f=i;return f|0}w=i;a[c]=w;w=w>>8;a[c+1|0]=w;a[b+15|0]=1;f=i;return f|0}function Ng(b,c,e,f,g,h,i,j){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,l=0;k=Ap(1,64)|0;l=k+4|0;w=b;a[l]=w;w=w>>8;a[l+1|0]=w;l=k+32|0;w=c;a[l]=w;w=w>>8;a[l+1|0]=w;l=k+34|0;w=e;a[l]=w;w=w>>8;a[l+1|0]=w;l=k+36|0;w=f;a[l]=w;w=w>>8;a[l+1|0]=w;a[k+10|0]=1;a[k+12|0]=1;a[k+11|0]=1;l=k+38|0;w=((om(g)|0)&255)<<3;a[l]=w;w=w>>8;a[l+1|0]=w;l=k+40|0;w=(pm(g)|0)&255;a[l]=w;w=w>>8;a[l+1|0]=w;l=k+16|0;w=4421;a[l]=w;w=w>>8;a[l+1|0]=w;l=k+20|0;w=g;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=k+24|0;w=g;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=k+28|0;w=h;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=k+52|0;w=j<<16>>16==0?26:40;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=i+56|0;i=k+56|0;w=d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0;a[i]=w;w=w>>8;a[i+1|0]=w;w=w>>8;a[i+2|0]=w;w=w>>8;a[i+3|0]=w;return k|0}function Og(b,c){b=b|0;c=c|0;var e=0,f=0;if((b|0)==0){return}e=b+16|0;if(!(((d[e]|d[e+1|0]<<8)<<16>>16&8)==0)){return}e=b+48|0;f=(d[e]|d[e+1|0]<<8)<<16>>16;w=f&-10|f<<3&8|1;a[e]=w;w=w>>8;a[e+1|0]=w;Gg(b);if(c<<24>>24==0){return}c=b+52|0;e=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((e|0)==0){return}gc[e&255](b)|0;return}function Pg(b,c){b=b|0;c=c|0;var e=0,f=0;if((b|0)==0){return}e=b+16|0;if(!(((d[e]|d[e+1|0]<<8)<<16>>16&8)==0)){return}e=b+48|0;f=(d[e]|d[e+1|0]<<8)<<16>>16;w=f<<3&8|f&-32|f<<2&16;a[e]=w;w=w>>8;a[e+1|0]=w;Gg(b);if(c<<24>>24==0){return}c=b+52|0;e=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((e|0)==0){return}gc[e&255](b)|0;return}function Qg(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0;a[71568]=1;if((c|0)==0){e=b;return e|0}f=c|0;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;if((b|0)==0){e=c;return e|0}else{g=b}do{h=g|0;g=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0}while((g|0)!=0);w=c;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;e=b;return e|0}function Rg(a){a=a|0;var b=0,c=0;if((a|0)==0){b=-1;return b|0}c=a+56|0;a=(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24)+12|0;b=(d[a]|d[a+1|0]<<8)<<16>>16;return b|0}function Sg(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;if((b|0)==0){g=-1;return g|0}h=b+56|0;i=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;h=i+12|0;j=(d[h]|d[h+1|0]<<8)<<16>>16;if(c<<16>>16>0){k=i+8|0;w=c;a[k]=w;w=w>>8;a[k+1|0]=w}if(e<<16>>16>-1){k=i+8|0;c=(d[k]|d[k+1|0]<<8)<<16>>16;k=i+10|0;w=(e<<16>>16|0)<(c&65535|0)?e:c;a[k]=w;w=w>>8;a[k+1|0]=w}if(f<<16>>16>-1){k=i+8|0;c=i+10|0;e=((d[k]|d[k+1|0]<<8)<<16>>16&65535)-((d[c]|d[c+1|0]<<8)<<16>>16&65535)|0;c=(f<<16>>16|0)<(e|0)?f:e&65535;w=c;a[h]=w;w=w>>8;a[h+1|0]=w;l=c}else{l=j}c=i;h=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((h|0)!=0){c=i+10|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;c=h+38|0;f=(d[c]|d[c+1|0]<<8)<<16>>16;k=h+40|0;h=(d[k]|d[k+1|0]<<8)<<16>>16;m=aa((((f&65535)>>>0>(h&65535)>>>0?f:h)&65535)-2|0,e&65535)|0;h=i+8|0;f=(d[h]|d[h+1|0]<<8)<<16>>16;h=i+4|0;n=(d[h]|d[h+1|0]<<8)<<16>>16;o=((m|0)/(f&65535|0)|0)&65535;if(n<<16>>16==o<<16>>16){p=n}else{w=o;a[h]=w;w=w>>8;a[h+1|0]=w;a[i+15|0]=1;p=o}o=f-e&65535;if(f<<16>>16==e<<16>>16){q=o}else{e=(d[c]|d[c+1|0]<<8)<<16>>16;c=(d[k]|d[k+1|0]<<8)<<16>>16;q=((aa(-2-(p&65535)+(((e&65535)>>>0>(c&65535)>>>0?e:c)&65535)|0,l&65535)|0)/(o&65535|0)|0)&65535}o=i+6|0;if(!((d[o]|d[o+1|0]<<8)<<16>>16<<16>>16==q<<16>>16)){w=q;a[o]=w;w=w>>8;a[o+1|0]=w;a[i+15|0]=1}}Dh(b);o=i+20|0;i=d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0;if((i|0)==0){g=j;return g|0}fc[i&63](b);g=j;return g|0}function Tg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;c=b|0;e=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((e|0)==0){f=-1;return f|0}c=b+6|0;g=b+8|0;h=b+10|0;i=aa(((d[g]|d[g+1|0]<<8)<<16>>16&65535)-((d[h]|d[h+1|0]<<8)<<16>>16&65535)|0,(d[c]|d[c+1|0]<<8)<<16>>16&65535)|0;c=e+38|0;h=(d[c]|d[c+1|0]<<8)<<16>>16;c=e+40|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;c=b+4|0;g=((i|0)/(-2-((d[c]|d[c+1|0]<<8)<<16>>16&65535)+(((h&65535)>>>0>(e&65535)>>>0?h:e)&65535)|0)|0)&65535;e=b+12|0;w=g;a[e]=w;w=w>>8;a[e+1|0]=w;f=g;return f|0}function Ug(a){a=a|0;var b=0;if((a|0)==0){return}b=a+56|0;zp(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0);zp(a);return}function Vg(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;if((b|0)==0){e=c;return e|0}if((c|0)==0){e=b;return e|0}f=c+4|0;g=(d[f]|d[f+1|0]<<8)<<16>>16;f=b+4|0;h=(d[f]|d[f+1|0]<<8)<<16>>16;if((g&65535)>>>0>(h&65535)>>>0){i=b;j=b;k=h}else{h=c|0;w=b;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;e=c;return e|0}while(1){if(!((g&65535)>>>0>(k&65535)>>>0)){l=11;break}h=j|0;f=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;if((f|0)==0){l=8;break}h=f+4|0;i=j;j=f;k=(d[h]|d[h+1|0]<<8)<<16>>16}if((l|0)==8){a[71568]=1;k=c|0;w=0;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=b;do{m=k|0;k=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0}while((k|0)!=0);w=c;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w}else if((l|0)==11){l=i|0;w=c;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=c|0;w=j;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w}a[71568]=1;e=b;return e|0}function Wg(b){b=b|0;var c=0,e=0;c=(d[261376]|d[261377]<<8)<<16>>16;w=b;a[261376]=w;w=w>>8;a[261377]=w;e=b&65535;b=5712+(e*12|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[261360]=w;w=w>>8;a[261361]=w;b=5714+(e*12|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[261352]=w;w=w>>8;a[261353]=w;b=5716+(e*12|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[261368]=w;w=w>>8;a[261369]=w;b=5718+(e*12|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[261384]=w;w=w>>8;a[261385]=w;a[261400]=a[5720+(e*12|0)|0]|0;a[261392]=a[5721+(e*12|0)|0]|0;return c|0}function Xg(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;c=(d[261376]|d[261377]<<8)<<16>>16;w=b;a[261376]=w;w=w>>8;a[261377]=w;e=b&65535;b=5712+(e*12|0)|0;f=(d[b]|d[b+1|0]<<8)<<16>>16;w=f;a[261360]=w;w=w>>8;a[261361]=w;b=5714+(e*12|0)|0;g=(d[b]|d[b+1|0]<<8)<<16>>16;w=g;a[261352]=w;w=w>>8;a[261353]=w;b=5716+(e*12|0)|0;h=(d[b]|d[b+1|0]<<8)<<16>>16;w=h;a[261368]=w;w=w>>8;a[261369]=w;b=5718+(e*12|0)|0;i=(d[b]|d[b+1|0]<<8)<<16>>16;w=i;a[261384]=w;w=w>>8;a[261385]=w;a[261400]=a[5720+(e*12|0)|0]|0;b=a[5721+(e*12|0)|0]|0;a[261392]=b;xe(f<<3,g,((h+f&65535)<<3)-1&65535,(g-1&65535)+i&65535,b);return c|0}function Yg(){var b=0,c=0;b=(d[261360]|d[261361]<<8)<<16>>16;c=(d[261352]|d[261353]<<8)<<16>>16;xe(b<<3,c,((((d[261368]|d[261369]<<8)<<16>>16)+b&65535)<<3)-1&65535,(c-1&65535)+((d[261384]|d[261385]<<8)<<16>>16)&65535,a[261392]|0);return}function Zg(b){b=b|0;var c=0,e=0;b=_m((d[231192]|d[231193]<<8)<<16>>16)|0;switch((d[232056]|d[232057]<<8)<<16>>16&65535|0){case 42:case 43:case 44:{Lm(b);return 0};case 40:{c=b+4|0;w=(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24)&-155649;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;return 0};case 46:{c=b+4|0;w=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|16384;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;return 0};case 41:{c=b+84|0;Sm(b,(d[c]|d[c+1|0]<<8)<<16>>16)|0;return 0};case 38:{if((a[b+2|0]|0)!=8){return 0}c=b+3|0;w=Lj(d[c]|0)|0;a[231048]=w;w=w>>8;a[231049]=w;w=w>>8;a[231050]=w;w=w>>8;a[231051]=w;e=b+84|0;b=(d[e]|d[e+1|0]<<8)<<16>>16;w=b;a[231032]=w;w=w>>8;a[231033]=w;w=Vm((d[231184]|d[231185]<<8)<<16>>16,b&65535)|0;a[44352]=w;w=w>>8;a[44353]=w;w=(d[231192]|d[231193]<<8)<<16>>16;a[231040]=w;w=w>>8;a[231041]=w;a[c]=-1;Oe(2);return 0};default:{return 0}}return 0}function _g(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;c=b+56|0;b=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;c=b+12|0;e=((d[c]|d[c+1|0]<<8)<<16>>16)-1&65535;w=e;a[c]=w;w=w>>8;a[c+1|0]=w;f=b+8|0;g=b+10|0;h=((d[f]|d[f+1|0]<<8)<<16>>16&65535)-((d[g]|d[g+1|0]<<8)<<16>>16&65535)|0;if((e<<16>>16|0)<(h|0)){i=e}else{e=h&65535;w=e;a[c]=w;w=w>>8;a[c+1|0]=w;i=e}if(i<<16>>16<1){w=0;a[c]=w;w=w>>8;a[c+1|0]=w}Mg(b)|0;c=b;Dh(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);return 0}function $g(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;c=b+56|0;b=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;c=b+12|0;e=((d[c]|d[c+1|0]<<8)<<16>>16)+1&65535;w=e;a[c]=w;w=w>>8;a[c+1|0]=w;f=b+8|0;g=b+10|0;h=((d[f]|d[f+1|0]<<8)<<16>>16&65535)-((d[g]|d[g+1|0]<<8)<<16>>16&65535)|0;if((e<<16>>16|0)<(h|0)){i=e}else{e=h&65535;w=e;a[c]=w;w=w>>8;a[c+1|0]=w;i=e}if(i<<16>>16<1){w=0;a[c]=w;w=w>>8;a[c+1|0]=w}Mg(b)|0;c=b;Dh(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);return 0}function ah(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;c=b+56|0;e=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;c=e;f=b+34|0;g=(d[f]|d[f+1|0]<<8)<<16>>16;f=b+32|0;h=(d[f]|d[f+1|0]<<8)<<16>>16;if(g<<16>>16<0){f=5716+((h&65535)*12|0)|0;i=((d[f]|d[f+1|0]<<8)<<16>>16<<3)+g&65535}else{i=g}g=h&65535;h=5712+(g*12|0)|0;f=((d[h]|d[h+1|0]<<8)<<16>>16<<3)+i&65535;i=b+36|0;h=(d[i]|d[i+1|0]<<8)<<16>>16;if(h<<16>>16<0){i=5718+(g*12|0)|0;j=((d[i]|d[i+1|0]<<8)<<16>>16)+h&65535}else{j=h}h=5714+(g*12|0)|0;g=((d[h]|d[h+1|0]<<8)<<16>>16)+j&65535;j=b+48|0;h=(d[j]|d[j+1|0]<<8)<<16>>16;if((h&17408)==0){k=h}else{a[e+14|0]=0;Dh(b);k=(d[j]|d[j+1|0]<<8)<<16>>16}do{if(!((k&4352)==0)){h=e+14|0;a[h]=0;i=b+38|0;l=b+40|0;m=((d[i]|d[i+1|0]<<8)<<16>>16&65535)>>>0>((d[l]|d[l+1|0]<<8)<<16>>16&65535)>>>0;l=e+6|0;i=(((d[l]|d[l+1|0]<<8)<<16>>16)+1&65535)+(m?f:g)&65535;l=m?(d[232920]|d[232921]<<8)<<16>>16:(d[232912]|d[232913]<<8)<<16>>16;m=e+4|0;n=l<<16>>16<i<<16>>16;if(!(l<<16>>16>(((d[m]|d[m+1|0]<<8)<<16>>16)+i&65535)<<16>>16|n)){a[h]=1;h=e+16|0;w=l-i&65535;a[h]=w;w=w>>8;a[h+1|0]=w;break}h=e+10|0;i=(d[h]|d[h+1|0]<<8)<<16>>16;h=e+12|0;l=((d[h]|d[h+1|0]<<8)<<16>>16)+(n?-i&65535:i)&65535;w=l;a[h]=w;w=w>>8;a[h+1|0]=w;n=e+8|0;m=((d[n]|d[n+1|0]<<8)<<16>>16&65535)-(i&65535)|0;if((l<<16>>16|0)<(m|0)){o=l}else{l=m&65535;w=l;a[h]=w;w=w>>8;a[h+1|0]=w;o=l}if(o<<16>>16<1){w=0;a[h]=w;w=w>>8;a[h+1|0]=w}Mg(c)|0;h=e;Dh(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)}}while(0);if(((d[j]|d[j+1|0]<<8)<<16>>16&8704)==0){return 0}if((a[e+14|0]|0)==0){return 0}j=b+38|0;o=(d[j]|d[j+1|0]<<8)<<16>>16;j=b+40|0;k=(d[j]|d[j+1|0]<<8)<<16>>16;if((o&65535)>>>0>(k&65535)>>>0){j=e+4|0;h=e+16|0;p=(o-2&65535)-((d[j]|d[j+1|0]<<8)<<16>>16)&65535;q=(((d[232920]|d[232921]<<8)<<16>>16)-f&65535)-((d[h]|d[h+1|0]<<8)<<16>>16)&65535}else{h=e+4|0;f=e+16|0;p=(k-2&65535)-((d[h]|d[h+1|0]<<8)<<16>>16)&65535;q=(((d[232912]|d[232913]<<8)<<16>>16)-g&65535)-((d[f]|d[f+1|0]<<8)<<16>>16)&65535}f=q-1&65535;if(f<<16>>16<0){r=0}else{r=f<<16>>16>p<<16>>16?p:f}f=e+6|0;if(((d[f]|d[f+1|0]<<8)<<16>>16&65535|0)==(r<<16>>16|0)){s=e+15|0}else{w=r;a[f]=w;w=w>>8;a[f+1|0]=w;f=e+15|0;a[f]=1;s=f}Tg(c)|0;if((a[s]|0)==0){return 0}Dh(b);return 0}function bh(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;c=d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0;e=c|0;f=c+2|0;g=d[f]|0;h=8834+(g*100|0)|0;i=(mo(c)|0)&255;if((i|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){j=h}else{j=(a[f]|0)==10?h:44120}h=b+4|0;f=j+(((d[h]|d[h+1|0]<<8)<<16>>16&65535)-8<<1)|0;h=(d[f]|d[f+1|0]<<8)<<16>>16;f=h&65535;i=a[c+87|0]|0;if(i<<24>>24==-1){k=a[c+86|0]|0}else{k=i}i=k&255;k=c+97|0;if((a[k]|0)!=0?(ko(c,5)|0,(a[k]|0)==0):0){Pg(b,0);return 1}Og(b,0);b=44138+(f<<4)|0;k=(d[b]|d[b+1|0]<<8)<<16>>16;if(!(k<<16>>16==(d[231176]|d[231177]<<8)<<16>>16<<16>>16)){w=d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0;a[219096]=w;w=w>>8;a[219097]=w;w=w>>8;a[219098]=w;w=w>>8;a[219099]=w;w=h;a[48048]=w;w=w>>8;a[48049]=w;Oe(k);return 1}Ti(e);e=c+92|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;e=c+94|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;a[c+124|0]=-1;lo(c,f);c=8862+(g*100|0)|0;if((d[c]|d[c+1|0]<<8)<<16>>16<<16>>16==0){wd(k)}if((i|0)==(f|0)){return 1}f=Ia(j|0,i|0,4)|0;if((f|0)==0){return 1}Pg(Eg(d[203168]|d[203169]<<8|d[203170]<<16|d[203171]<<24|0,((f-j|0)>>>1)+8&65535)|0,0);return 1}function ch(a){a=a|0;var b=0;a=Ui((d[231192]|d[231193]<<8)<<16>>16)|0;if((a|0)==0){return 0}b=vn(a+12|0)|0;Ii(b);qi(b);return 0}function dh(b){b=b|0;var c=0,e=0;if(!((d[231032]|d[231033]<<8)<<16>>16<<16>>16==-1)){b=_m((d[231040]|d[231041]<<8)<<16>>16)|0;c=d[231048]|d[231049]<<8|d[231050]<<16|d[231051]<<24|0;if((c|0)==0){Nb(62432,66472,343,69488);return 0}if((b|0)==0){Qj(c)}else{e=c|0;a[b+3|0]=(d[e]|d[e+1|0]<<8)<<16>>16}w=0;a[231048]=w;w=w>>8;a[231049]=w;w=w>>8;a[231050]=w;w=w>>8;a[231051]=w;w=-1;a[231040]=w;w=w>>8;a[231041]=w;Oe(4);w=0;a[44352]=w;w=w>>8;a[44353]=w}if((d[219096]|d[219097]<<8|d[219098]<<16|d[219099]<<24|0)==0){return 1}w=0;a[219096]=w;w=w>>8;a[219097]=w;w=w>>8;a[219098]=w;w=w>>8;a[219099]=w;w=-1;a[48048]=w;w=w>>8;a[48049]=w;w=0;a[261336]=w;w=w>>8;a[261337]=w;e=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;vm(0,0,d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0);Oe(3);return 1}function eh(a){a=a|0;var b=0;a=d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0;if((a|0)!=0){Uo(a);return 0}a=_m((d[231192]|d[231193]<<8)<<16>>16)|0;if((a|0)==0){return 0}b=13168+((d[a+2|0]|0)*100|0)|0;if(((d[b]|d[b+1|0]<<8)<<16>>16&2)==0){return 0}Sm(a,-1)|0;return 0}function fh(a){a=a|0;var b=0;b=_m((d[231192]|d[231193]<<8)<<16>>16)|0;if(!((Qm(b,-1,a)|0)<<24>>24==0)){return 0}fn(b,-1,a)|0;return 0}function gh(){var b=0,c=0,e=0,f=0,g=0;b=i;w=0;a[261336]=w;w=w>>8;a[261337]=w;c=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;vm(0,0,d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);sm();Mp(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0,232120,768)|0;Uc(0,255);vp(2,0)|0;ze(0,0,0,0,0,34,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;Mp(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0,d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,768)|0;c=0;do{e=(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+(c&65535)|0;a[e]=(d[e]|0)>>>1;c=c+1&65535}while((c&65535)>>>0<768>>>0);Mp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+693|0,(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24)+693|0,3)|0;Mp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+696|0,(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24)+696|0,3)|0;Mp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+699|0,(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24)+699|0,3)|0;Mp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+702|0,(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24)+702|0,3)|0;Mp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+705|0,(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24)+705|0,3)|0;Mp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+708|0,(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24)+708|0,3)|0;Mp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+711|0,(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24)+711|0,3)|0;Mp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+714|0,(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24)+714|0,3)|0;ke(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0);c=d[267152]|d[267153]<<8|d[267154]<<16|d[267155]<<24|0;Wg((d[c]|d[c+1|0]<<8)<<16>>16)|0;Nf();c=(d[261360]|d[261361]<<8)<<16>>16<<3;e=(d[261352]|d[261353]<<8)<<16>>16;f=(d[261368]|d[261369]<<8)<<16>>16<<3;g=(d[261384]|d[261385]<<8)<<16>>16;oe(c,e,f,g,$d(5)|0);Of();hh(d[267152]|d[267153]<<8|d[267154]<<16|d[267155]<<24|0);a[267144]=1;i=b;return}function hh(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0;c=i;if((b|0)==0){i=c;return}w=0;a[203160]=w;w=w>>8;a[203161]=w;w=w>>8;a[203162]=w;w=w>>8;a[203163]=w;de(2)|0;e=b|0;Wg((d[e]|d[e+1|0]<<8)<<16>>16)|0;zh((d[261376]|d[261377]<<8)<<16>>16,2,1);f=b+2|0;if((lf((d[f]|d[f+1|0]<<8)<<16>>16)|0)!=0){g=lf((d[f]|d[f+1|0]<<8)<<16>>16)|0;ze(g,((d[261368]|d[261369]<<8)<<16>>16<<2)+((d[261360]|d[261361]<<8)<<16>>16<<3)&65535,((b|0)==5608?8:6)+((d[261352]|d[261353]<<8)<<16>>16)&65535,-18,0,290,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h}g=b+6|0;if((lf((d[g]|d[g+1|0]<<8)<<16>>16)|0)==0){g=Dm(337)|0;ze(g,((d[261360]|d[261361]<<8)<<16>>16<<3)+16&65535,((d[261352]|d[261353]<<8)<<16>>16)+42&65535,-24,0,34,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h}g=b+5|0;a:do{if((a[g]|0)!=0){if((b|0)==45160){f=0;j=0;while(1){k=6928+(j<<6)|0;l=45166+(j*14|0)|0;do{if((lf((d[l]|d[l+1|0]<<8)<<16>>16)|0)!=0?(m=k|0,w=0,a[m]=w,w=w>>8,a[m+1|0]=w,w=w>>8,a[m+2|0]=w,w=w>>8,a[m+3|0]=w,m=45168+(j*14|0)|0,n=6962+(j<<6)|0,w=(d[m]|d[m+1|0]<<8)<<16>>16,a[n]=w,w=w>>8,a[n+1|0]=w,m=45170+(j*14|0)|0,o=6964+(j<<6)|0,w=(d[m]|d[m+1|0]<<8)<<16>>16,a[o]=w,w=w>>8,a[o+1|0]=w,m=45172+(j*14|0)|0,p=6966+(j<<6)|0,w=(d[m]|d[m+1|0]<<8)<<16>>16,a[p]=w,w=w>>8,a[p+1|0]=w,p=45174+(j*14|0)|0,m=6968+(j<<6)|0,w=(d[p]|d[p+1|0]<<8)<<16>>16,a[m]=w,w=w>>8,a[m+1|0]=w,m=6934+(j<<6)|0,w=0,a[m]=w,w=w>>8,a[m+1|0]=w,m=6936+(j<<6)|0,p=45178+(j*14|0)|0,w=(d[p]|d[p+1|0]<<8)<<16>>16,a[m]=w,w=w>>8,a[m+1|0]=w,m=6988+(j<<6)|0,w=(d[l]|d[l+1|0]<<8)<<16>>16,a[m]=w,w=w>>8,a[m+1|0]=w,a[6938+(j<<6)|0]=4,a[6939+(j<<6)|0]=4,a[6940+(j<<6)|0]=4,m=6948+(j<<6)|0,w=20,a[m]=w,w=w>>8,a[m+1|0]=w,w=w>>8,a[m+2|0]=w,w=w>>8,a[m+3|0]=w,m=6952+(j<<6)|0,w=20,a[m]=w,w=w>>8,a[m+1|0]=w,w=w>>8,a[m+2|0]=w,w=w>>8,a[m+3|0]=w,m=6956+(j<<6)|0,w=20,a[m]=w,w=w>>8,a[m+1|0]=w,w=w>>8,a[m+2|0]=w,w=w>>8,a[m+3|0]=w,m=6960+(j<<6)|0,w=(d[e]|d[e+1|0]<<8)<<16>>16,a[m]=w,w=w>>8,a[m+1|0]=w,p=6976+(j<<6)|0,w=0,a[p]=w,w=w>>8,a[p+1|0]=w,w=Qg(d[203160]|d[203161]<<8|d[203162]<<16|d[203163]<<24|0,k)|0,a[203160]=w,w=w>>8,a[203161]=w,w=w>>8,a[203162]=w,w=w>>8,a[203163]=w,Hg(k),Pg(k,0),Gg(k),p=45176+(j*14|0)|0,q=(d[p]|d[p+1|0]<<8)<<16>>16,!(q<<16>>16==0)):0){p=(a[261416]|0)==1;r=lf(q)|0;if(p){p=(d[m]|d[m+1|0]<<8)<<16>>16&65535;q=5712+(p*12|0)|0;s=5714+(p*12|0)|0;ze(r,((d[q]|d[q+1|0]<<8)<<16>>16<<3)+40&65535,(((d[o]|d[o+1|0]<<8)<<16>>16)+3&65535)+((d[s]|d[s+1|0]<<8)<<16>>16)&65535,-24,0,34,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;break}else{s=(d[m]|d[m+1|0]<<8)<<16>>16&65535;m=5712+(s*12|0)|0;q=5714+(s*12|0)|0;ze(r,(((d[n]|d[n+1|0]<<8)<<16>>16)-10&65535)+((d[m]|d[m+1|0]<<8)<<16>>16<<3)&65535,(((d[o]|d[o+1|0]<<8)<<16>>16)+3&65535)+((d[q]|d[q+1|0]<<8)<<16>>16)&65535,-24,0,546,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;break}}}while(0);k=f+1&255;if((k&255)>>>0<(d[g]|0)>>>0){f=k;j=k&255}else{break a}}}else{t=0;u=0}while(1){j=6928+(u<<6)|0;f=b+6+(u*14|0)|0;do{if((lf((d[f]|d[f+1|0]<<8)<<16>>16)|0)!=0){k=j|0;w=0;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=b+6+(u*14|0)+2|0;l=6962+(u<<6)|0;w=(d[k]|d[k+1|0]<<8)<<16>>16;a[l]=w;w=w>>8;a[l+1|0]=w;k=b+6+(u*14|0)+4|0;q=6964+(u<<6)|0;w=(d[k]|d[k+1|0]<<8)<<16>>16;a[q]=w;w=w>>8;a[q+1|0]=w;k=b+6+(u*14|0)+6|0;o=6966+(u<<6)|0;w=(d[k]|d[k+1|0]<<8)<<16>>16;a[o]=w;w=w>>8;a[o+1|0]=w;o=b+6+(u*14|0)+8|0;k=6968+(u<<6)|0;w=(d[o]|d[o+1|0]<<8)<<16>>16;a[k]=w;w=w>>8;a[k+1|0]=w;k=6934+(u<<6)|0;w=0;a[k]=w;w=w>>8;a[k+1|0]=w;o=6936+(u<<6)|0;w=0;a[o]=w;w=w>>8;a[o+1|0]=w;m=b+6+(u*14|0)+10|0;n=(d[m]|d[m+1|0]<<8)<<16>>16;if(n<<16>>16==0){r=(Jg(a[lf((d[f]|d[f+1|0]<<8)<<16>>16)|0]|0)|0)&255;v=r;x=r}else{r=(Jg(a[lf(n)|0]|0)|0)&255;v=r;x=r}w=x;a[k]=w;w=w>>8;a[k+1|0]=w;k=b+6+(u*14|0)+12|0;w=v<<16>>16==27?19:(d[k]|d[k+1|0]<<8)<<16>>16;a[o]=w;w=w>>8;a[o+1|0]=w;o=6988+(u<<6)|0;w=(d[f]|d[f+1|0]<<8)<<16>>16;a[o]=w;w=w>>8;a[o+1|0]=w;a[6938+(u<<6)|0]=4;a[6939+(u<<6)|0]=4;a[6940+(u<<6)|0]=4;o=6948+(u<<6)|0;w=20;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;o=6952+(u<<6)|0;w=20;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;o=6956+(u<<6)|0;w=20;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;o=6960+(u<<6)|0;w=(d[e]|d[e+1|0]<<8)<<16>>16;a[o]=w;w=w>>8;a[o+1|0]=w;k=6976+(u<<6)|0;w=0;a[k]=w;w=w>>8;a[k+1|0]=w;w=Qg(d[203160]|d[203161]<<8|d[203162]<<16|d[203163]<<24|0,j)|0;a[203160]=w;w=w>>8;a[203161]=w;w=w>>8;a[203162]=w;w=w>>8;a[203163]=w;Hg(j);Pg(j,0);Gg(j);k=(d[m]|d[m+1|0]<<8)<<16>>16;if(!(k<<16>>16==0)){m=(a[261416]|0)==1;r=lf(k)|0;if(m){m=(d[o]|d[o+1|0]<<8)<<16>>16&65535;k=5712+(m*12|0)|0;n=5714+(m*12|0)|0;ze(r,((d[k]|d[k+1|0]<<8)<<16>>16<<3)+40&65535,(((d[q]|d[q+1|0]<<8)<<16>>16)+3&65535)+((d[n]|d[n+1|0]<<8)<<16>>16)&65535,-24,0,34,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;break}else{n=(d[o]|d[o+1|0]<<8)<<16>>16&65535;o=5712+(n*12|0)|0;k=5714+(n*12|0)|0;ze(r,(((d[l]|d[l+1|0]<<8)<<16>>16)-10&65535)+((d[o]|d[o+1|0]<<8)<<16>>16<<3)&65535,(((d[q]|d[q+1|0]<<8)<<16>>16)+3&65535)+((d[k]|d[k+1|0]<<8)<<16>>16)&65535,-24,0,546,(h=i,i=i+1|0,i=i+7&-8,w=0,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;break}}}}while(0);j=t+1&255;if((j&255)>>>0<(d[g]|0)>>>0){t=j;u=j&255}else{break}}}}while(0);if(((d[72080]|d[72081]<<8)<<16>>16&65535)>>>0>4>>>0?(a[b+4|0]|0)!=0:0){b=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;u=b+236|0;w=d[u]|d[u+1|0]<<8|d[u+2|0]<<16|d[u+3|0]<<24|0;a[7396]=w;w=w>>8;a[7397]=w;w=w>>8;a[7398]=w;w=w>>8;a[7399]=w;u=b+240|0;w=d[u]|d[u+1|0]<<8|d[u+2|0]<<16|d[u+3|0]<<24|0;a[7400]=w;w=w>>8;a[7401]=w;w=w>>8;a[7402]=w;w=w>>8;a[7403]=w;w=d[u]|d[u+1|0]<<8|d[u+2|0]<<16|d[u+3|0]<<24|0;a[7404]=w;w=w>>8;a[7405]=w;w=w>>8;a[7406]=w;w=w>>8;a[7407]=w;w=0;a[7376]=w;w=w>>8;a[7377]=w;w=w>>8;a[7378]=w;w=w>>8;a[7379]=w;w=(d[e]|d[e+1|0]<<8)<<16>>16;a[7408]=w;w=w>>8;a[7409]=w;Pg(7376,0);Fg(7376);u=(d[7408]|d[7409]<<8)<<16>>16&65535;b=5712+(u*12|0)|0;t=((d[b]|d[b+1|0]<<8)<<16>>16<<3)+((d[7410]|d[7411]<<8)<<16>>16)&65535;b=5714+(u*12|0)|0;u=((d[b]|d[b+1|0]<<8)<<16>>16)+((d[7412]|d[7413]<<8)<<16>>16)&65535;b=((d[7414]|d[7415]<<8)<<16>>16)+t&65535;g=((d[7416]|d[7417]<<8)<<16>>16)+u&65535;if((d[231240]|d[231241]<<8)<<16>>16<<16>>16==0){Jf(t,u,b,g)}xe(t,u,b,g,-23);if((d[231240]|d[231241]<<8)<<16>>16<<16>>16==0){Pf()}w=Qg(d[203160]|d[203161]<<8|d[203162]<<16|d[203163]<<24|0,7376)|0;a[203160]=w;w=w>>8;a[203161]=w;w=w>>8;a[203162]=w;w=w>>8;a[203163]=w;g=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;b=g+244|0;w=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;a[7460]=w;w=w>>8;a[7461]=w;w=w>>8;a[7462]=w;w=w>>8;a[7463]=w;b=g+248|0;w=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;a[7464]=w;w=w>>8;a[7465]=w;w=w>>8;a[7466]=w;w=w>>8;a[7467]=w;w=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;a[7468]=w;w=w>>8;a[7469]=w;w=w>>8;a[7470]=w;w=w>>8;a[7471]=w;w=0;a[7440]=w;w=w>>8;a[7441]=w;w=w>>8;a[7442]=w;w=w>>8;a[7443]=w;w=(d[e]|d[e+1|0]<<8)<<16>>16;a[7472]=w;w=w>>8;a[7473]=w;Pg(7440,0);Fg(7440);b=(d[7472]|d[7473]<<8)<<16>>16&65535;g=5712+(b*12|0)|0;u=((d[g]|d[g+1|0]<<8)<<16>>16<<3)+((d[7474]|d[7475]<<8)<<16>>16)&65535;g=5714+(b*12|0)|0;b=((d[g]|d[g+1|0]<<8)<<16>>16)+((d[7476]|d[7477]<<8)<<16>>16)&65535;g=((d[7478]|d[7479]<<8)<<16>>16)+u&65535;t=((d[7480]|d[7481]<<8)<<16>>16)+b&65535;if((d[231240]|d[231241]<<8)<<16>>16<<16>>16==0){Jf(u,b,g,t)}xe(u,b,g,t,-23);if((d[231240]|d[231241]<<8)<<16>>16<<16>>16==0){Pf()}w=Qg(d[203160]|d[203161]<<8|d[203162]<<16|d[203163]<<24|0,7440)|0;a[203160]=w;w=w>>8;a[203161]=w;w=w>>8;a[203162]=w;w=w>>8;a[203163]=w}Nf();Wg((d[e]|d[e+1|0]<<8)<<16>>16)|0;e=(d[261360]|d[261361]<<8)<<16>>16;t=(d[261352]|d[261353]<<8)<<16>>16;Be(e,t,e,t,(d[261368]|d[261369]<<8)<<16>>16,(d[261384]|d[261385]<<8)<<16>>16,2,0);Of();de(0)|0;i=c;return}function ih(b){b=b|0;a[b]=a[267144]|0;return}function jh(b){b=b|0;var c=0,d=0,e=0,f=0,g=0;c=i;i=i+1024|0;d=c|0;if((b|0)==0){e=1024;f=0;i=c;return}Ka(d|0,1024,62104,(g=i,i=i+8|0,w=b,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0)|0;i=g;ak(b,58768)|0;cc(d|0);e=1024;f=0;i=c;return}function kh(a){a=a|0;if((a|0)==0){return}mi(a)|0;return}function lh(){var b=0,c=0,e=0,f=0,g=0;b=d[203160]|d[203161]<<8|d[203162]<<16|d[203163]<<24|0;c=Ig(b)|0;e=c&65535;if((e&32768|0)==0){Ee();xp();return}w=Eg(b,c)|0;a[267168]=w;w=w>>8;a[267169]=w;w=w>>8;a[267170]=w;w=w>>8;a[267171]=w;c=d[267152]|d[267153]<<8|d[267154]<<16|d[267155]<<24|0;Wg((d[c]|d[c+1|0]<<8)<<16>>16)|0;Nf();c=(d[261360]|d[261361]<<8)<<16>>16<<3;b=(d[261352]|d[261353]<<8)<<16>>16;f=(d[261368]|d[261369]<<8)<<16>>16<<3;g=(d[261384]|d[261385]<<8)<<16>>16;ne(c,b,f,g,$d(5)|0);Of();g=e&32767;if((g|0)==35){a[267144]=0}else if((g|0)==30){a[267144]=0;if(!((eb()|0)<<24>>24==0)){wb(55904,12)}}else if((g|0)==33){a[267144]=0;w=1;a[258168]=w;w=w>>8;a[258169]=w;w=w>>8;a[258170]=w;w=w>>8;a[258171]=w}else if((g|0)==31?(a[267144]=0,!((ra()|0)<<24>>24==0)):0){oa(55904,4)}if((a[5976]|0)==0|(a[267144]|0)==0){Ee();xp();return}g=d[267152]|d[267153]<<8|d[267154]<<16|d[267155]<<24|0;Wg((d[g]|d[g+1|0]<<8)<<16>>16)|0;Nf();g=(d[261360]|d[261361]<<8)<<16>>16<<3;e=(d[261352]|d[261353]<<8)<<16>>16;f=(d[261368]|d[261369]<<8)<<16>>16<<3;b=(d[261384]|d[261385]<<8)<<16>>16;oe(g,e,f,b,$d(5)|0);Of();hh(d[267152]|d[267153]<<8|d[267154]<<16|d[267155]<<24|0);Ee();xp();return}function mh(){var b=0,c=0;a[219160]=1;rm();$e(0);Mp(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0,768)|0;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);Og(d[267168]|d[267169]<<8|d[267170]<<16|d[267171]<<24|0,0);vp(2,1)|0;Fd();Oj();Zj();b=(d[267160]|d[267161]<<8)<<16>>16;w=b;a[261336]=w;w=w>>8;a[261337]=w;c=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((b&65535)<<2)|0;vm(0,0,d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);return}function nh(b){b=b|0;w=b;a[267168]=w;w=w>>8;a[267169]=w;w=w>>8;a[267170]=w;w=w>>8;a[267171]=w;w=(d[261336]|d[261337]<<8)<<16>>16;a[267160]=w;w=w>>8;a[267161]=w;w=46456;a[267152]=w;w=w>>8;a[267153]=w;w=w>>8;a[267154]=w;w=w>>8;a[267155]=w;Bc(132,46,88,62);return 0}function oh(b){b=b|0;var c=0;Df();c=b+4|0;w=((d[c]|d[c+1|0]<<8)<<16>>16)-46&65535;a[258256]=w;w=w>>8;a[258257]=w;Ff();ff(1);return 1}function ph(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;w=0;a[258264]=w;w=w>>8;a[258265]=w;w=w>>8;a[258266]=w;w=w>>8;a[258267]=w;if(!((a[258248]|0)==0|(d[258272]|d[258273]<<8)<<16>>16<<16>>16==0)){c=(d[232072]|d[232073]<<8|d[232074]<<16|d[232075]<<24)+20|0;e=0;while(1){f=e&255;g=258282+(f*12|0)|0;h=a[g]|0;if(!(h<<24>>24==0)){i=258284+(f*12|0)|0;f=aa((d[i]|d[i+1|0]<<8)<<16>>16,h<<24>>24)|0;w=((d[c]|d[c+1|0]<<8)<<16>>16)+f&65535;a[c]=w;w=w>>8;a[c+1|0]=w;w=((d[258272]|d[258273]<<8)<<16>>16)-(a[g]|0)&65535;a[258272]=w;w=w>>8;a[258273]=w;a[g]=0}cf((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255,0);if((d[258272]|d[258273]<<8)<<16>>16<<16>>16==0){break}else{e=e+1&255}}}if((b|0)==0){return 1}Pg(b,0);return 1}function qh(b){b=b|0;Pg(b,0);w=2;a[258264]=w;w=w>>8;a[258265]=w;w=w>>8;a[258266]=w;w=w>>8;a[258267]=w;return 1}function rh(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=(d[258256]|d[258257]<<8)<<16>>16;if((c&65535)>>>0<3>>>0){e=(d[258240]|d[258241]<<8)<<16>>16;if(((c&65535)+1|0)>>>0<(e&65535)>>>0){w=10;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;Df();w=((d[258256]|d[258257]<<8)<<16>>16)+1&65535;a[258256]=w;w=w>>8;a[258257]=w;ff(1);f=1}else{g=e;h=5}}else{g=(d[258240]|d[258241]<<8)<<16>>16;h=5}do{if((h|0)==5){e=(d[258592]|d[258593]<<8)<<16>>16;if(!(((e&65535)+4|0)>>>0<(g&65535)>>>0)){Ff();sh(1);f=0;break}w=10;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;w=e+1&65535;a[258592]=w;w=w>>8;a[258593]=w;Df();Nf();e=0;c=32;do{c=c+1&65535;he(72,c,72,16,32,136,2,0,0);e=e+1&65535}while((e&65535)>>>0<32>>>0);Of();Kf();ff(1);ff(1);f=1}}while(0);do{ff(0);xp()}while((d[219104]|d[219105]<<8|d[219106]<<16|d[219107]<<24|0)!=0);if(f<<24>>24==0){Pg(b,0);return 1}Ff();Pg(b,0);return 1}function sh(a){a=a|0;var b=0,c=0;Df();Nf();Df();b=a+32&65535;he(72,b,72,16,32,136,2,0,0);c=b+a&65535;he(72,c,72,16,32,136,2,0,0);b=c+a&65535;he(72,b,72,16,32,136,2,0,0);c=b+a&65535;he(72,c,72,16,32,136,2,0,0);b=c+a&65535;he(72,b,72,16,32,136,2,0,0);he(72,b+a&65535,72,16,32,136,2,0,0);b=((a*6&65535)+32&65535)-a&65535;he(72,b,72,16,32,136,2,0,0);c=b-a&65535;he(72,c,72,16,32,136,2,0,0);b=c-a&65535;he(72,b,72,16,32,136,2,0,0);c=b-a&65535;he(72,c,72,16,32,136,2,0,0);b=c-a&65535;he(72,b,72,16,32,136,2,0,0);he(72,b-a&65535,72,16,32,136,2,0,0);Of();ff(1);return}function th(b){b=b|0;var c=0,e=0,f=0;do{if((d[258256]|d[258257]<<8)<<16>>16<<16>>16==0){c=(d[258592]|d[258593]<<8)<<16>>16;if(c<<16>>16==0){Ff();sh(-1);e=0;break}w=10;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;w=c-1&65535;a[258592]=w;w=w>>8;a[258593]=w;Df();Nf();c=0;f=32;do{f=f-1&65535;he(72,f,72,16,32,136,2,0,0);c=c+1&65535}while((c&65535)>>>0<32>>>0);Of();Kf();ff(1);ff(1);e=1}else{w=10;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;Df();w=((d[258256]|d[258257]<<8)<<16>>16)-1&65535;a[258256]=w;w=w>>8;a[258257]=w;ff(1);e=1}}while(0);do{ff(0);xp()}while((d[219104]|d[219105]<<8|d[219106]<<16|d[219107]<<24|0)!=0);if(e<<24>>24==0){Pg(b,0);return 1}Ff();Pg(b,0);return 1}function uh(a){a=a|0;Fg(a);Hg(a);Pg(a,0);return 1}function vh(b){b=b|0;var c=0,e=0;if((a[258248]|0)==0){c=Ef((d[258256]|d[258257]<<8)<<16>>16)|0;e=c+8|0;if((a[(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+50|0]|0)<=0){Pg(b,0);return 1}a[c+2|0]=1;w=1;a[258264]=w;w=w>>8;a[258265]=w;w=w>>8;a[258266]=w;w=w>>8;a[258267]=w;Pg(b,0);return 1}if((d[258272]|d[258273]<<8)<<16>>16<<16>>16==0){Fg(b);Hg(b);Pg(b,0);return 1}else{w=1;a[258264]=w;w=w>>8;a[258265]=w;w=w>>8;a[258266]=w;w=w>>8;a[258267]=w;Pg(b,0);return 1}return 0}



function kc(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+7&-8;return b|0}function lc(){return i|0}function mc(a){a=a|0;i=a}function nc(a,b){a=a|0;b=b|0;if((r|0)==0){r=a;s=b}}function oc(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0]}function pc(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0];a[k+4|0]=a[b+4|0];a[k+5|0]=a[b+5|0];a[k+6|0]=a[b+6|0];a[k+7|0]=a[b+7|0]}function qc(a){a=a|0;E=a}function rc(a){a=a|0;F=a}function sc(a){a=a|0;G=a}function tc(a){a=a|0;H=a}function uc(a){a=a|0;I=a}function vc(a){a=a|0;J=a}function wc(a){a=a|0;K=a}function xc(a){a=a|0;L=a}function yc(a){a=a|0;M=a}function zc(a){a=a|0;N=a}function Ac(){}function Bc(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0;g=yp(36)|0;h=g;w=b;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=g+4|0;w=c;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=g+8|0;w=e;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=g+12|0;w=f;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=g+16|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=g+20|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=g+28|0;w=1;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;a[g+24|0]=0;h=g+32|0;w=d[267760]|d[267761]<<8|d[267762]<<16|d[267763]<<24|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;w=g;a[267760]=w;w=w>>8;a[267761]=w;w=w>>8;a[267762]=w;w=w>>8;a[267763]=w;return}function Cc(b){b=b|0;var c=0,e=0;c=d[267760]|d[267761]<<8|d[267762]<<16|d[267763]<<24|0;if((c|0)==0){Qb()}e=c+16|0;if((d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0)==0){w=b;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;return}e=c+20|0;if((d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0)!=0){Qb()}w=b;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;return}function Dc(b){b=b|0;var c=0,e=0;c=d[267760]|d[267761]<<8|d[267762]<<16|d[267763]<<24|0;if((c|0)==0){ic[b&255]();return}e=c+16|0;if((d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0)==0){w=b;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;return}e=c+20|0;if((d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0)!=0){Qb()}w=b;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;return}function Ec(){return(d[267760]|d[267761]<<8|d[267762]<<16|d[267763]<<24|0)!=0|0}function Fc(){var b=0,c=0,e=0,f=0;b=d[267760]|d[267761]<<8|d[267762]<<16|d[267763]<<24|0;c=b+28|0;e=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((e|0)==1){f=b|0;ic[(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)&255]();w=2;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;return}else if((e|0)==2){f=b+4|0;fc[(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)&63](b+24|0);w=4;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;return}else if((e|0)==4){if((a[b+24|0]|0)==0){w=8;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;return}else{f=b+8|0;ic[(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)&255]();w=2;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;return}}else if((e|0)==8){if((b|0)!=0){e=b+32|0;w=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;a[267760]=w;w=w>>8;a[267761]=w;w=w>>8;a[267762]=w;w=w>>8;a[267763]=w}e=b+12|0;ic[(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)&255]();e=b+16|0;c=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;if((c|0)!=0){ic[c&255]()}c=b+20|0;e=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((e|0)!=0){ic[e&255]()}zp(b);return}else{Qb()}}function Gc(){return}function Hc(b){b=b|0;a[b]=0;return}function Ic(b){b=b|0;a[b]=1;return}function Jc(b){b=b|0;var c=0,e=0;c=yp(8)|0;e=c;w=b;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=c+4|0;w=d[267768]|d[267769]<<8|d[267770]<<16|d[267771]<<24|0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;w=c;a[267768]=w;w=w>>8;a[267769]=w;w=w>>8;a[267770]=w;w=w>>8;a[267771]=w;return}function Kc(b){b=b|0;var c=0,e=0,f=0;c=d[267768]|d[267769]<<8|d[267770]<<16|d[267771]<<24|0;if((c|0)==0){return}e=c|0;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;w=b;a[f]=w;w=w>>8;a[f+1|0]=w;f=c+4|0;w=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;a[267768]=w;w=w>>8;a[267769]=w;w=w>>8;a[267770]=w;w=w>>8;a[267771]=w;return}function Lc(b,c,e,f,g){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;h=i;j=c;c=i;i=i+4|0;i=i+7&-8;w=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;j=vn(c)|0;k=241272+((j&65535)<<2)|0;a:do{if(((d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&4194304|0)==0){l=262384;m=0}else{n=262384;o=0;while(1){p=n+12|0;if((d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24|0)!=0?(vn(n+16|0)|0)<<16>>16==j<<16>>16:0){break}p=o+1|0;if((p|0)<112){n=n+20|0;o=p}else{l=262384;m=0;break a}}Nc(n);l=262384;m=0}}while(0);while(1){q=l+12|0;if((d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0)==0){break}j=m+1|0;if((j|0)<112){l=l+20|0;m=j}else{r=9;break}}if((r|0)==9){i=h;return}r=l|0;w=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;a[r]=w;w=w>>8;a[r+1|0]=w;w=w>>8;a[r+2|0]=w;w=w>>8;a[r+3|0]=w;r=l+4|0;w=e;a[r]=w;w=w>>8;a[r+1|0]=w;a[l+6|0]=f;a[l+7|0]=0;a[l+8|0]=g;w=b;a[q]=w;w=w>>8;a[q+1|0]=w;w=w>>8;a[q+2|0]=w;w=w>>8;a[q+3|0]=w;q=c|0;c=l+16|0;w=d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;w=0;a[202992]=w;w=w>>8;a[202993]=w;w=w>>8;a[202994]=w;w=w>>8;a[202995]=w;w=(f&255)<<16&458752|(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&-4653057|4194304;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;i=h;return}function Mc(a){a=a|0;var b=0,c=0,e=0,f=0;b=241272+((a&65535)<<2)|0;if(((d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)&4194304|0)==0){return}else{c=262384;e=0}while(1){b=c+12|0;if((d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0)!=0?(vn(c+16|0)|0)<<16>>16==a<<16>>16:0){break}b=e+1|0;if((b|0)<112){c=c+20|0;e=b}else{f=6;break}}if((f|0)==6){return}Nc(c);return}function Nc(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;c=b+4|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;f=vn(b+16|0)|0;g=241272+((f&65535)<<2)|0;w=(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24)&-4194305;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=b+12|0;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=(d[c]|d[c+1|0]<<8)<<16>>16;b=12992+((g&65535)<<1)|0;if((d[b]|d[b+1|0]<<8)<<16>>16<<16>>16==0){return}b=0;h=12832+((e&65535)*18|0)|0;e=g;while(1){g=((d[h]|d[h+1|0]<<8)<<16>>16)+f&65535;if(!(e<<16>>16==0)){i=g&65535;j=233080+(i<<1)|0;k=241272+(i<<2)|0;w=(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&-512|(d[j]|d[j+1|0]<<8)<<16>>16&511;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w}if(!((xi(g)|0)<<24>>24==0)){k=241272+((g&65535)<<2)|0;w=(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&-65025;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w}Bi(g,0,0);g=b+1|0;k=(d[c]|d[c+1|0]<<8)<<16>>16;j=12992+((k&65535)<<1)|0;if((g|0)<((d[j]|d[j+1|0]<<8)<<16>>16&65535|0)){b=g;h=h+2|0;e=k}else{break}}return}function Oc(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0;b=i;i=i+8|0;c=d[202992]|d[202993]<<8|d[202994]<<16|d[202995]<<24|0;if(c>>>0>(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0){i=b;return}w=c+1e4|0;a[202992]=w;w=w>>8;a[202993]=w;w=w>>8;a[202994]=w;w=w>>8;a[202995]=w;c=b|0;e=0;f=262384;a:while(1){g=f+12|0;h=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;do{if((h|0)!=0){j=f|0;k=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;if(k>>>0>(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0){l=k}else{k=f+7|0;m=a[k]|0;a[k]=m+1;n=m&255;o=h+(n<<2)+2|0;p=(d[o]|d[o+1|0]<<8)<<16>>16;o=p<<16>>16;if((o&63488|0)==2048){q=6;break a}b:do{switch(d[h+(n<<2)|0]|0|0){case 3:{if(!(p<<16>>16>-1)){q=15;break a}w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+o+((Zn()|0)&3)|0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;break};case 1:{r=vn(f+16|0)|0;s=241272+((r&65535)<<2)|0;w=(d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24)&-4194305;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;Bi(r,0,0);break};case 2:{r=vn(f+16|0)|0;if(!(p<<16>>16>-1)){q=11;break a}if(!((xi(r)|0)<<24>>24==0)){s=d[257696]|d[257697]<<8|d[257698]<<16|d[257699]<<24|0;t=s+((d[f+8|0]|0)<<1)|0;u=s+(((d[t]|d[t+1|0]<<8)<<16>>16&65535)+o<<1)|0;t=241272+((r&65535)<<2)|0;s=((d[u]|d[u+1|0]<<8)<<16>>16&65535)<<9&65024|(d[t]|d[t+1|0]<<8|d[t+2|0]<<16|d[t+3|0]<<24)&-65025;w=s;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;w=s&-458753|(d[f+6|0]|0)<<16&458752;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;Bi(r,0,0)}break};case 4:{a[k]=0;break};case 5:{sd(p,f+16|0);break};case 6:{r=f+4|0;t=12832+(((d[r]|d[r+1|0]<<8)<<16>>16&65535)*18|0)|0;s=vn(f+16|0)|0;u=12992+(((d[r]|d[r+1|0]<<8)<<16>>16&65535)<<1)|0;r=(d[u]|d[u+1|0]<<8)<<16>>16;u=f+8|0;v=a[u]|0;x=d[257696]|d[257697]<<8|d[257698]<<16|d[257699]<<24|0;y=x+((v&255)<<1)|0;z=r&65535;A=x+(((d[y]|d[y+1|0]<<8)<<16>>16&65535)+(aa(z,o)|0)<<1)|0;if(p<<16>>16>1?(v-23&255)>>>0<2>>>0:0){v=_m(s)|0;if((v|0)==0){q=22;break a}if(!(r<<16>>16==1)){q=24;break a}y=v+82|0;v=d[257696]|d[257697]<<8|d[257698]<<16|d[257699]<<24|0;x=v+((d[u]|0)<<1)|0;u=v+(((d[x]|d[x+1|0]<<8)<<16>>16&65535)<<1)|0;w=(((d[y]|d[y+1|0]<<8)<<16>>16)+2&65535)+((d[u]|d[u+1|0]<<8)<<16>>16)&65535;a[c]=w;w=w>>8;a[c+1|0]=w;B=c}else{if(r<<16>>16==0){break b}else{B=A}}A=f+6|0;r=1;u=t;t=B;while(1){y=u+2|0;x=((d[u]|d[u+1|0]<<8)<<16>>16)+s&65535;v=t+2|0;C=241272+((x&65535)<<2)|0;D=d[C]|d[C+1|0]<<8|d[C+2|0]<<16|d[C+3|0]<<24|0;E=(d[t]|d[t+1|0]<<8)<<16>>16&65535;if((D&511|0)!=(E|0)){F=D&-512|E&511;w=F;a[C]=w;w=w>>8;a[C+1|0]=w;w=w>>8;a[C+2|0]=w;w=w>>8;a[C+3|0]=w;w=(d[A]|0)<<16&458752|F&-458753;a[C]=w;w=w>>8;a[C+1|0]=w;w=w>>8;a[C+2|0]=w;w=w>>8;a[C+3|0]=w;if(!((xi(x)|0)<<24>>24==0)){w=(d[C]|d[C+1|0]<<8|d[C+2|0]<<16|d[C+3|0]<<24)&-65025;a[C]=w;w=w>>8;a[C+1|0]=w;w=w>>8;a[C+2|0]=w;w=w>>8;a[C+3|0]=w}Bi(x,0,0);Gi(x)}if((r|0)>=(z|0)){break b}r=r+1|0;u=y;t=v}break};case 7:{a[k]=(p&255)+m;break};case 8:{if(!(p<<16>>16>-1)){q=36;break a}a[f+8|0]=p;break};default:{Nc(f)}}}while(0);if((d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0)==0){break}l=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0}if(l>>>0<(d[202992]|d[202993]<<8|d[202994]<<16|d[202995]<<24|0)>>>0){w=l;a[202992]=w;w=w>>8;a[202993]=w;w=w>>8;a[202994]=w;w=w>>8;a[202995]=w}}}while(0);g=e+1|0;if((g|0)<112){e=g;f=f+20|0}else{q=43;break}}if((q|0)==6){Nb(67968,67920,276,69680)}else if((q|0)==11){Nb(63040,67920,96,69696)}else if((q|0)==15){Nb(63040,67920,81,69792)}else if((q|0)==22){Nb(59584,67920,138,69760)}else if((q|0)==24){Nb(56512,67920,139,69760)}else if((q|0)==36){Nb(63040,67920,182,69728)}else if((q|0)==43){i=b;return}}function Pc(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;Lp(202864,0,16)|0;Lp(202848,0,16)|0;b=a[47976]|0;c=d[48e3]|d[48001]<<8|d[48002]<<16|d[48003]<<24|0;e=d[48008]|d[48009]<<8|d[48010]<<16|d[48011]<<24|0;f=c|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;g=e|0;w=-1;a[g]=w;w=w>>8;a[g+1|0]=w;do{if(!(b<<24>>24==0)?!((md()|0)<<24>>24==0):0){g=0;h=0;while(1){i=g+1&65535;if((a[202864+h|0]|0)==0){j=g;k=h;break}l=i&65535;if((i&65535)>>>0<16>>>0){g=i;h=l}else{j=i;k=l;break}}if(j<<16>>16==16){w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;m=0;break}a[202864+k|0]=1;w=j;a[f]=w;w=w>>8;a[f+1|0]=w;if(!(j<<16>>16==-1)){if(!((j&65535)>>>0>15>>>0)){a[202848+(j&65535)|0]=1}h=c+2|0;w=3487043;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=e;g=c;w=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;w=d[g+4|0]|d[g+5|0]<<8|d[g+6|0]<<16|d[g+7|0]<<24|0;a[h+4|0]=w;w=w>>8;a[h+5|0]=w;w=w>>8;a[h+6|0]=w;w=w>>8;a[h+7|0]=w;w=d[g+8|0]|d[g+9|0]<<8|d[g+10|0]<<16|d[g+11|0]<<24|0;a[h+8|0]=w;w=w>>8;a[h+9|0]=w;w=w>>8;a[h+10|0]=w;w=w>>8;a[h+11|0]=w;w=d[g+12|0]|d[g+13|0]<<8|d[g+14|0]<<16|d[g+15|0]<<24|0;a[h+12|0]=w;w=w>>8;a[h+13|0]=w;w=w>>8;a[h+14|0]=w;w=w>>8;a[h+15|0]=w;w=d[g+16|0]|d[g+17|0]<<8|d[g+18|0]<<16|d[g+19|0]<<24|0;a[h+16|0]=w;w=w>>8;a[h+17|0]=w;w=w>>8;a[h+18|0]=w;w=w>>8;a[h+19|0]=w;sp(66,8333);h=(ld()|0)&65535;g=d[48024]|d[48025]<<8|d[48026]<<16|d[48027]<<24|0;l=g+4|0;w=Ap(1,h)|0;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=g|0;w=-1;a[l]=w;w=w>>8;a[l+1|0]=w;l=d[48028]|d[48029]<<8|d[48030]<<16|d[48031]<<24|0;g=l+4|0;w=Ap(1,h)|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=l|0;w=-1;a[g]=w;w=w>>8;a[g+1|0]=w;g=d[48032]|d[48033]<<8|d[48034]<<16|d[48035]<<24|0;l=g+4|0;w=Ap(1,h)|0;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=g|0;w=-1;a[l]=w;w=w>>8;a[l+1|0]=w;l=d[48036]|d[48037]<<8|d[48038]<<16|d[48039]<<24|0;g=l+4|0;w=Ap(1,h)|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=l|0;w=-1;a[g]=w;w=w>>8;a[g+1|0]=w;a[202912]=0;g=Ap(1,h)|0;h=(d[48040]|d[48041]<<8|d[48042]<<16|d[48043]<<24)+4|0;w=g;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=d[48040]|d[48041]<<8|d[48042]<<16|d[48043]<<24|0;w=-1;a[h]=w;w=w>>8;a[h+1|0]=w;m=1}else{m=0}}else{m=0}}while(0);a[47976]=m;m=a[47968]|0;c=d[47992]|d[47993]<<8|d[47994]<<16|d[47995]<<24|0;e=c|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;if(m<<24>>24==0){n=0;a[47968]=n;return}if((_c()|0)<<24>>24==0){n=0;a[47968]=n;return}else{o=0;p=0}while(1){m=o+1&65535;if((a[202864+p|0]|0)==0){q=o;r=p;break}j=m&65535;if((m&65535)>>>0<16>>>0){o=m;p=j}else{q=m;r=j;break}}if(q<<16>>16==16){w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;n=0;a[47968]=n;return}a[202864+r|0]=1;w=q;a[e]=w;w=w>>8;a[e+1|0]=w;if(q<<16>>16==-1){n=0;a[47968]=n;return}if(!((q&65535)>>>0>15>>>0)){a[202848+(q&65535)|0]=1}q=c+2|0;w=4411222;a[q]=w;w=w>>8;a[q+1|0]=w;w=w>>8;a[q+2|0]=w;w=w>>8;a[q+3|0]=w;n=1;a[47968]=n;return}function Qc(){return Jb()|0}function Rc(){var a=0,b=0;a=d[47992]|d[47993]<<8|d[47994]<<16|d[47995]<<24|0;if((d[a]|d[a+1|0]<<8)<<16>>16<<16>>16==-1){b=0;return b|0}b=(bd()|0)<<24>>24==2|0;return b|0}function Sc(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0;e=d[48e3]|d[48001]<<8|d[48002]<<16|d[48003]<<24|0;f=48024+((d[202912]|0)<<2)|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;if((b&65535)>>>0>119>>>0){return}if((d[46610]|d[46611]<<8)<<16>>16<<16>>16==0&b<<16>>16>1){return}f=e|0;if((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==-1){return}f=g|0;h=(d[f]|d[f+1|0]<<8)<<16>>16;if(!(h<<16>>16==-1)){jd(h);od((d[f]|d[f+1|0]<<8)<<16>>16);w=-1;a[f]=w;w=w>>8;a[f+1|0]=w}h=e+8|0;e=g+4|0;g=hd(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0,b,d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0)|0;w=g;a[f]=w;w=w>>8;a[f+1|0]=w;id(g);pd((d[f]|d[f+1|0]<<8)<<16>>16,((c&255)*90&65535)>>>8,0);a[202912]=((d[202912]|0)+1|0)%4|0;return}function Tc(a,b,c){a=a|0;b=b|0;c=c|0;var e=0;if((b|0)==0){Nb(54136,64520,251,69616)}if((a|0)==0){return}e=d[47992]|d[47993]<<8|d[47994]<<16|d[47995]<<24|0;if((d[e]|d[e+1|0]<<8)<<16>>16<<16>>16==-1){return}if((Jd(a)|0)<<24>>24==0){return}Td(a,b,c)|0;return}function Uc(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0;if((d[46610]|d[46611]<<8)<<16>>16<<16>>16==0){return}e=d[47992]|d[47993]<<8|d[47994]<<16|d[47995]<<24|0;if((d[e]|d[e+1|0]<<8)<<16>>16<<16>>16==-1){return}e=(b|0)==0;if(e){f=256}else{f=c<<16>>16<255?c:255}if((bd()|0)<<24>>24==2){g=(d[71560]|d[71561]<<8)<<16>>16}else{w=-1;a[71560]=w;w=w>>8;a[71561]=w;g=-1}if(f<<16>>16<g<<16>>16){return}g=d[47992]|d[47993]<<8|d[47994]<<16|d[47995]<<24|0;c=g|0;if(!((d[c]|d[c+1|0]<<8)<<16>>16<<16>>16==-1)?(bd()|0)<<24>>24==2:0){Yc()}c=g+16|0;h=g+8|0;if((a[c]|0)!=0){zp(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0);a[c]=0}w=0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;if(e){return}w=f;a[71560]=w;w=w>>8;a[71561]=w;ad(b);return}function Vc(){var b=0,c=0,e=0;b=d[47992]|d[47993]<<8|d[47994]<<16|d[47995]<<24|0;c=b|0;if(!((d[c]|d[c+1|0]<<8)<<16>>16<<16>>16==-1)?(bd()|0)<<24>>24==2:0){Yc()}c=b+16|0;e=b+8|0;if((a[c]|0)!=0){zp(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0);a[c]=0}w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;return}function Wc(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=d[48e3]|d[48001]<<8|d[48002]<<16|d[48003]<<24|0;c=d[48008]|d[48009]<<8|d[48010]<<16|d[48011]<<24|0;e=c|0;if(!((d[e]|d[e+1|0]<<8)<<16>>16<<16>>16==-1)){e=d[48040]|d[48041]<<8|d[48042]<<16|d[48043]<<24|0;f=e|0;g=(d[f]|d[f+1|0]<<8)<<16>>16;if(!(g<<16>>16==-1)){jd(g);od((d[f]|d[f+1|0]<<8)<<16>>16);w=-1;a[f]=w;w=w>>8;a[f+1|0]=w}f=e+4|0;zp(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0);w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w}f=b|0;if(!((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==-1)){e=d[48024]|d[48025]<<8|d[48026]<<16|d[48027]<<24|0;g=e|0;h=(d[g]|d[g+1|0]<<8)<<16>>16;if(!(h<<16>>16==-1)){jd(h);od((d[g]|d[g+1|0]<<8)<<16>>16);w=-1;a[g]=w;w=w>>8;a[g+1|0]=w}g=e+4|0;zp(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0);w=0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=d[48028]|d[48029]<<8|d[48030]<<16|d[48031]<<24|0;e=g|0;h=(d[e]|d[e+1|0]<<8)<<16>>16;if(!(h<<16>>16==-1)){jd(h);od((d[e]|d[e+1|0]<<8)<<16>>16);w=-1;a[e]=w;w=w>>8;a[e+1|0]=w}e=g+4|0;zp(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0);w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=d[48032]|d[48033]<<8|d[48034]<<16|d[48035]<<24|0;g=e|0;h=(d[g]|d[g+1|0]<<8)<<16>>16;if(!(h<<16>>16==-1)){jd(h);od((d[g]|d[g+1|0]<<8)<<16>>16);w=-1;a[g]=w;w=w>>8;a[g+1|0]=w}g=e+4|0;zp(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0);w=0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=d[48036]|d[48037]<<8|d[48038]<<16|d[48039]<<24|0;e=g|0;h=(d[e]|d[e+1|0]<<8)<<16>>16;if(!(h<<16>>16==-1)){jd(h);od((d[e]|d[e+1|0]<<8)<<16>>16);w=-1;a[e]=w;w=w>>8;a[e+1|0]=w}e=g+4|0;zp(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0);w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w}e=c+8|0;g=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;h=b+8|0;if((g|0)!=(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)){i=c+16|0;if((a[i]|0)!=0){zp(g)}g=c+12|0;zp(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0);w=0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;a[i]=0}i=b+16|0;if((a[i]|0)!=0){zp(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)}e=b+12|0;zp(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0);w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;a[i]=0;if((b|0)!=0){i=(d[f]|d[f+1|0]<<8)<<16>>16;do{if(!((i&65535)>>>0>15>>>0)){h=202848+(i&65535)|0;if((a[h]|0)!=0){a[h]=0;h=(d[f]|d[f+1|0]<<8)<<16>>16;if((h&65535)>>>0>15>>>0){break}else{j=h}}else{j=i}a[202864+(j&65535)|0]=0}}while(0);w=-1;a[f]=w;w=w>>8;a[f+1|0]=w}f=c;c=b;w=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;w=d[c+4|0]|d[c+5|0]<<8|d[c+6|0]<<16|d[c+7|0]<<24|0;a[f+4|0]=w;w=w>>8;a[f+5|0]=w;w=w>>8;a[f+6|0]=w;w=w>>8;a[f+7|0]=w;w=d[c+8|0]|d[c+9|0]<<8|d[c+10|0]<<16|d[c+11|0]<<24|0;a[f+8|0]=w;w=w>>8;a[f+9|0]=w;w=w>>8;a[f+10|0]=w;w=w>>8;a[f+11|0]=w;w=d[c+12|0]|d[c+13|0]<<8|d[c+14|0]<<16|d[c+15|0]<<24|0;a[f+12|0]=w;w=w>>8;a[f+13|0]=w;w=w>>8;a[f+14|0]=w;w=w>>8;a[f+15|0]=w;w=d[c+16|0]|d[c+17|0]<<8|d[c+18|0]<<16|d[c+19|0]<<24|0;a[f+16|0]=w;w=w>>8;a[f+17|0]=w;w=w>>8;a[f+18|0]=w;w=w>>8;a[f+19|0]=w;tp(66);nd();f=d[47992]|d[47993]<<8|d[47994]<<16|d[47995]<<24|0;if((f|0)==0){Zc();return}c=f|0;f=(d[c]|d[c+1|0]<<8)<<16>>16;do{if(!((f&65535)>>>0>15>>>0)){b=202848+(f&65535)|0;if((a[b]|0)!=0){a[b]=0;b=(d[c]|d[c+1|0]<<8)<<16>>16;if((b&65535)>>>0>15>>>0){break}else{k=b}}else{k=f}a[202864+(k&65535)|0]=0}}while(0);w=-1;a[c]=w;w=w>>8;a[c+1|0]=w;Zc();return}function Xc(){Wb();return}function Yc(){Ha(1);w=0;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;w=0;a[202968]=w;w=w>>8;a[202969]=w;w=w>>8;a[202970]=w;w=w>>8;a[202971]=w;a[71856]=0;return}function Zc(){if((Ba(16)|0)==0){return}Ha(1);w=0;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;w=0;a[202968]=w;w=w>>8;a[202969]=w;w=w>>8;a[202970]=w;w=w>>8;a[202971]=w;a[71856]=0;Cb();zp(d[202888]|d[202889]<<8|d[202890]<<16|d[202891]<<24|0);w=0;a[202888]=w;w=w>>8;a[202889]=w;w=w>>8;a[202890]=w;w=w>>8;a[202891]=w;w=0;a[202880]=w;w=w>>8;a[202881]=w;w=w>>8;a[202882]=w;w=w>>8;a[202883]=w;Kb(16);return}function _c(){var b=0;if((nb(16)|0)!=0){b=0;return b|0}w=22050;a[71936]=w;w=w>>8;a[71937]=w;w=w>>8;a[71938]=w;w=w>>8;a[71939]=w;w=8;a[71940]=w;w=w>>8;a[71941]=w;a[71942]=1;w=512;a[71944]=w;w=w>>8;a[71945]=w;w=2;a[71952]=w;w=w>>8;a[71953]=w;w=w>>8;a[71954]=w;w=w>>8;a[71955]=w;w=0;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;w=0;a[202968]=w;w=w>>8;a[202969]=w;w=w>>8;a[202970]=w;w=w>>8;a[202971]=w;a[71856]=0;w=0;a[202888]=w;w=w>>8;a[202889]=w;w=w>>8;a[202890]=w;w=w>>8;a[202891]=w;w=0;a[202880]=w;w=w>>8;a[202881]=w;w=w>>8;a[202882]=w;w=w>>8;a[202883]=w;b=(Ib(71936,71936)|0)==0|0;return b|0}function $c(b,c,e){b=b|0;c=c|0;e=e|0;var f=0;b=d[202960]|d[202961]<<8|d[202962]<<16|d[202963]<<24|0;f=d[202968]|d[202969]<<8|d[202970]<<16|d[202971]<<24|0;if((a[71856]|0)==0|(b|0)==0|(f|0)==0){Ha(1);w=0;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;w=0;a[202968]=w;w=w>>8;a[202969]=w;w=w>>8;a[202970]=w;w=w>>8;a[202971]=w;a[71856]=0;return}if((b|0)<(e|0)){Kp(c|0,f|0,b)|0;w=0;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;a[71856]=0;return}else{Kp(c|0,f|0,e)|0;w=(d[202960]|d[202961]<<8|d[202962]<<16|d[202963]<<24)-e|0;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;w=(d[202968]|d[202969]<<8|d[202970]<<16|d[202971]<<24)+e|0;a[202968]=w;w=w>>8;a[202969]=w;w=w>>8;a[202970]=w;w=w>>8;a[202971]=w;return}}function ad(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;Ha(1);w=0;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;w=0;a[202968]=w;w=w>>8;a[202969]=w;w=w>>8;a[202970]=w;w=w>>8;a[202971]=w;a[71856]=0;c=b+20|0;e=(d[c]|d[c+1|0]<<8)<<16>>16&65535;c=b+e|0;if((a[c]|0)!=1){return}f=c;c=((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)>>>8)-2|0;w=c;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;f=d[202888]|d[202889]<<8|d[202890]<<16|d[202891]<<24|0;if((d[202880]|d[202881]<<8|d[202882]<<16|d[202883]<<24|0)>>>0<c>>>0){g=Bp(f,c)|0;w=g;a[202888]=w;w=w>>8;a[202889]=w;w=w>>8;a[202890]=w;w=w>>8;a[202891]=w;h=d[202960]|d[202961]<<8|d[202962]<<16|d[202963]<<24|0;w=h;a[202880]=w;w=w>>8;a[202881]=w;w=w>>8;a[202882]=w;w=w>>8;a[202883]=w;i=h;j=g}else{i=c;j=f}Kp(j|0,b+(e+6)|0,i)|0;i=1e6/((256-(d[b+(e+4)|0]|0)|0)>>>0)|0;e=d[202960]|d[202961]<<8|d[202962]<<16|d[202963]<<24|0;b=d[71936]|d[71937]<<8|d[71938]<<16|d[71939]<<24|0;j=((aa(b,e)|0)>>>0)/(i>>>0)|0;if((b|0)<=(i|0)){Nb(49152,63424,97,69640)}b=d[202888]|d[202889]<<8|d[202890]<<16|d[202891]<<24|0;if((d[202880]|d[202881]<<8|d[202882]<<16|d[202883]<<24|0)>>>0<j>>>0){f=Bp(b,j)|0;w=f;a[202888]=w;w=w>>8;a[202889]=w;w=w>>8;a[202890]=w;w=w>>8;a[202891]=w;w=j;a[202880]=w;w=w>>8;a[202881]=w;w=w>>8;a[202882]=w;w=w>>8;a[202883]=w;k=d[202960]|d[202961]<<8|d[202962]<<16|d[202963]<<24|0;l=f}else{k=e;l=b}b=l+(j-1)|0;e=l+(k-1)|0;if((k|0)==0){m=e;n=b;o=0;p=0;q=d[71936]|d[71937]<<8|d[71938]<<16|d[71939]<<24|0}else{k=e;e=b;b=0;l=0;while(1){f=l;c=e;while(1){r=c-1|0;a[c]=a[k]|0;s=f+1|0;t=d[71936]|d[71937]<<8|d[71938]<<16|d[71939]<<24|0;if(s>>>0>(((aa(t,b)|0)>>>0)/(i>>>0)|0)>>>0){break}else{f=s;c=r}}c=k-1|0;f=b+1|0;if(f>>>0<(d[202960]|d[202961]<<8|d[202962]<<16|d[202963]<<24|0)>>>0){k=c;e=r;b=f;l=s}else{m=c;n=r;o=f;p=s;q=t;break}}}t=m+1|0;if(p>>>0<(((aa(o,q)|0)>>>0)/(i>>>0)|0)>>>0){q=n;s=p;while(1){p=q-1|0;a[q]=a[t]|0;r=s+1|0;if(r>>>0<(((aa(d[71936]|d[71937]<<8|d[71938]<<16|d[71939]<<24|0,o)|0)>>>0)/(i>>>0)|0)>>>0){q=p;s=r}else{u=p;break}}}else{u=n}n=u+1|0;if((n|0)!=(d[202888]|d[202889]<<8|d[202890]<<16|d[202891]<<24|0)){Nb(62768,63424,121,69640)}if((m|0)!=(u|0)){Nb(59248,63424,122,69640)}w=j;a[202960]=w;w=w>>8;a[202961]=w;w=w>>8;a[202962]=w;w=w>>8;a[202963]=w;w=n;a[202968]=w;w=w>>8;a[202969]=w;w=w>>8;a[202970]=w;w=w>>8;a[202971]=w;a[71856]=2;Ha(0);return}function bd(){return a[71856]|0}function cd(){return 0}function dd(){return}function ed(a){a=a|0;return}function fd(){return}function gd(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0;if(!((a[267792]|a[72776])<<24>>24==0)){return}a[267792]=1;w=-1;a[72568]=w;w=w>>8;a[72569]=w;b=(d[72560]|d[72561]<<8)<<16>>16;a:do{if(!(b<<16>>16==0)){c=b;e=-1;b:while(1){f=c-1&65535;g=e;do{g=g+1&65535;if(!((g&65535)>>>0<8>>>0)){h=148;break b}i=72576+((g&65535)<<2)|0;j=d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24|0}while((j|0)==0);w=g;a[72568]=w;w=w>>8;a[72569]=w;i=j+8|0;c:do{if((d[i]|d[i+1|0]<<8)<<16>>16<<16>>16==1){k=j+34|0;l=j+32|0;m=((d[l]|d[l+1|0]<<8)<<16>>16)+((d[k]|d[k+1|0]<<8)<<16>>16)&65535;w=m;a[l]=w;w=w>>8;a[l+1|0]=w;if((m&65535)>>>0>99>>>0){n=j+60|0;o=j+56|0;p=j+64|0;q=j+14|0;r=j+12|0;s=j+4|0;t=j+10|0;u=j+52|0;v=j+18|0;x=j+48|0;y=j+50|0;z=m;do{w=z-100&65535;a[l]=w;w=w>>8;a[l+1|0]=w;m=(d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24)+(d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24)|0;A=d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24|0;if((m|0)>=(A|0)){B=m-A|0;A=((d[x]|d[x+1|0]<<8)<<16>>16)+1&65535;w=A;a[x]=w;w=w>>8;a[x+1|0]=w;if((A&65535)>>>0<((d[u]|d[u+1|0]<<8)<<16>>16&65535)>>>0){C=B}else{w=0;a[x]=w;w=w>>8;a[x+1|0]=w;w=((d[y]|d[y+1|0]<<8)<<16>>16)+1&65535;a[y]=w;w=w>>8;a[y+1|0]=w;C=B}}else{C=m}w=C;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;d:do{if(!((d[q]|d[q+1|0]<<8)<<16>>16<<16>>16==0)){m=-1;while(1){B=m+1&65535;A=B&65535;if((B&65535)>>>0<32>>>0?(a[j+252+A|0]|0)==-1:0){m=B;continue}if(B<<16>>16==32){break d}D=j+316+(A<<2)|0;E=(d[D]|d[D+1|0]<<8|d[D+2|0]<<16|d[D+3|0]<<24)-1|0;w=E;a[D]=w;w=w>>8;a[D+1|0]=w;w=w>>8;a[D+2|0]=w;w=w>>8;a[D+3|0]=w;if((E|0)==0){E=j+252+A|0;D=a[(d[E]|0)+(j+92)|0]|0;a[E]=-1;E=a[j+284+A|0]|0;A=72544+(D&255)|0;a[A]=(a[A]|0)-1;a[72776]=1;ed((E&255)<<8|(D|-128)&255);a[72776]=0;D=((d[q]|d[q+1|0]<<8)<<16>>16)-1&65535;w=D;a[q]=w;w=w>>8;a[q+1|0]=w;F=D}else{F=(d[q]|d[q+1|0]<<8)<<16>>16}if(F<<16>>16==0){break}else{m=B}}}}while(0);m=((d[r]|d[r+1|0]<<8)<<16>>16)-1&65535;w=m;a[r]=w;w=w>>8;a[r+1|0]=w;if(m<<16>>16<1){m=d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24|0;while(1){G=a[m]|0;if(G<<24>>24>-1){break}B=G&15;D=G&-16;E=a[m+1|0]|0;A=m+2|0;H=a[A]|0;e:do{if(D<<24>>24==-16){if(!(B<<24>>24==15)){h=29;break b}I=m+3|0;J=H&255;K=J&127;if((J&128|0)==0){L=A;M=I;N=K}else{J=I;I=K;while(1){K=J+1|0;O=d[J]|0;P=O&127|I<<7&65408;if((O&128|0)==0){L=J;M=K;N=P;break}else{J=K;I=P}}}I=N-m+M&65535;J=E&255;if((J|0)==47){kd(j);w=2;a[i]=w;w=w>>8;a[i+1|0]=w;if((a[t]|0)==0){Q=I;break}P=(d[72568]|d[72569]<<8)<<16>>16;if(P<<16>>16==-1){Q=I;break}K=72576+((P&65535)<<2)|0;P=d[K]|d[K+1|0]<<8|d[K+2|0]<<16|d[K+3|0]<<24|0;if((P|0)==0){Q=I;break}O=P+8|0;if((d[O]|d[O+1|0]<<8)<<16>>16<<16>>16==1){a[P+10|0]=1;Q=I;break}else{w=0;a[K]=w;w=w>>8;a[K+1|0]=w;w=w>>8;a[K+2|0]=w;w=w>>8;a[K+3|0]=w;w=((d[72560]|d[72561]<<8)<<16>>16)-1&65535;a[72560]=w;w=w>>8;a[72561]=w;Q=I;break}}else if((J|0)==88){w=d[M]|0;a[u]=w;w=w>>8;a[u+1|0]=w;K=(a[L+2|0]|0)-2&255;P=K<<24>>24;if(K<<24>>24<0){R=133333>>>((-P|0)>>>0)}else{R=133333<<P}w=R;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;w=R;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;Q=I;break}else if((J|0)==81){w=d[L+2|0]<<12|d[M]<<20|d[L+3|0]<<4;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;Q=I;break}else{Q=I;break}}else{if((D&255)>>>0>223>>>0){I=B&255;J=72512+(I<<1)|0;w=(H&255)<<8|E&255;a[J]=w;w=w>>8;a[J+1|0]=w;if(!((a[72608+I|0]|0)>-1)){Q=3;break}J=a[j+92+I|0]|D;a[72776]=1;ed((H&255)<<16|(E&255)<<8|J&255);a[72776]=0;Q=3;break}if((D&255)>>>0>207>>>0){J=B&255;if(!((a[72608+J|0]|0)>-1)){Q=2;break}I=a[j+92+J|0]|D;a[72776]=1;ed((H&255)<<16|(E&255)<<8|I&255);a[72776]=0;Q=2;break}if((D&255)>>>0>191>>>0){I=B&255;a[72496+I|0]=E;if(!((a[72608+I|0]|0)>-1)){Q=2;break}J=a[j+92+I|0]|D;a[72776]=1;ed((H&255)<<16|(E&255)<<8|J&255);a[72776]=0;Q=2;break}if(!((D&255)>>>0>175>>>0)){if((D&255)>>>0>159>>>0){J=B&255;if(!((a[72608+J|0]|0)>-1)){Q=3;break}I=a[j+92+J|0]|D;a[72776]=1;ed((H&255)<<16|(E&255)<<8|I&255);a[72776]=0;Q=3;break}I=0;J=m+3|0;while(1){S=J+1|0;P=d[J]|0;T=P&127|I;if((P&128|0)==0){break}else{I=T<<7;J=S}}J=S-m&65535;I=B&255;if((a[72608+I|0]|0)<0){Q=J;break}else{U=0}while(1){P=U+1&255;if((a[(U&255)+(j+252)|0]|0)==-1){h=123;break}if((P&255)>>>0<32>>>0){U=P}else{V=P;break}}if((h|0)==123){h=0;w=((d[q]|d[q+1|0]<<8)<<16>>16)+1&65535;a[q]=w;w=w>>8;a[q+1|0]=w;V=U}P=V<<24>>24==32?0:V&255;a[j+252+P|0]=B;a[j+284+P|0]=E;K=j+316+(P<<2)|0;w=T;a[K]=w;w=w>>8;a[K+1|0]=w;w=w>>8;a[K+2|0]=w;w=w>>8;a[K+3|0]=w;K=a[j+92+I|0]|0;P=72544+(K&255)|0;a[P]=(a[P]|0)+1;a[72776]=1;ed((H&255)<<16|(E&255)<<8|(K|-112)&255);a[72776]=0;Q=J;break}K=E&255;switch(K|0){case 1:{P=B&255;a[72633+(P*9|0)|0]=H;a[j+108+(P*9|0)+1|0]=H;if(!((a[72608+P|0]|0)>-1)){Q=3;break e}O=a[j+92+P|0]|-80;a[72776]=1;ed((H&255)<<16|O&255|256);a[72776]=0;Q=3;break e;break};case 7:{O=(d[v]|d[v+1|0]<<8)<<16>>16;if(O<<16>>16==100){Q=3;break e}P=aa(O&65535,H&255)|0;if(P>>>0<12700>>>0){W=((P>>>0)/100|0)&255}else{W=127}P=B&255;a[72632+(P*9|0)|0]=W;if(!((a[72608+P|0]|0)>-1)){Q=3;break e}O=a[j+92+P|0]|-80;a[72776]=1;ed((W&255)<<16|O&255|1792);a[72776]=0;Q=3;break e;break};case 10:{O=B&255;a[72634+(O*9|0)|0]=H;a[j+108+(O*9|0)+2|0]=H;if(!((a[72608+O|0]|0)>-1)){Q=3;break e}P=a[j+92+O|0]|-80;a[72776]=1;ed((H&255)<<16|P&255|2560);a[72776]=0;Q=3;break e;break};case 11:{P=B&255;a[72635+(P*9|0)|0]=H;a[j+108+(P*9|0)+3|0]=H;if(!((a[72608+P|0]|0)>-1)){Q=3;break e}O=a[j+92+P|0]|-80;a[72776]=1;ed((H&255)<<16|O&255|2816);a[72776]=0;Q=3;break e;break};case 64:{O=B&255;a[72636+(O*9|0)|0]=H;a[j+108+(O*9|0)+4|0]=H;if(!((a[72608+O|0]|0)>-1)){Q=3;break e}P=a[j+92+O|0]|-80;a[72776]=1;ed((H&255)<<16|P&255|16384);a[72776]=0;Q=3;break e;break};case 110:{P=B&255;a[72638+(P*9|0)|0]=H;a[j+108+(P*9|0)+6|0]=H;if((H&255)>>>0<64>>>0){O=(d[72560]|d[72561]<<8)<<16>>16;if(!(O<<16>>16==0)){X=0;Y=O;while(1){O=X;while(1){Z=72576+((O&65535)<<2)|0;_=d[Z]|d[Z+1|0]<<8|d[Z+2|0]<<16|d[Z+3|0]<<24|0;if((_|0)==0){O=O+1&65535}else{break}}Z=Y-1&65535;$=_+14|0;if(!((d[$]|d[$+1|0]<<8)<<16>>16<<16>>16==0)){ba=_+92+P|0;ca=0;da=0;while(1){ea=_+252+da|0;if((a[ea]|0)==B<<24>>24){a[ea]=-1;ea=a[_+284+da|0]|0;fa=a[ba]|0;ga=72544+(fa&255)|0;a[ga]=(a[ga]|0)-1;a[72776]=1;ed((fa|-128)&255|(ea&255)<<8);a[72776]=0;w=((d[$]|d[$+1|0]<<8)<<16>>16)-1&65535;a[$]=w;w=w>>8;a[$+1|0]=w}ea=ca+1&255;if((ea&255)>>>0<32>>>0){ca=ea;da=ea&255}else{break}}}if(Z<<16>>16==0){break}else{X=O;Y=Z}}}Y=j+92+P|0;qd(a[Y]|0);a[Y]=B;Q=3;break e}else{ha=-1;ia=192}while(1){Y=0;X=-1;J=ha;while(1){I=15-(Y&255)|0;if((d[72608+I|0]&ia|0)==0){da=a[72544+I|0]|0;ca=(da&255)>>>0<(J&255)>>>0;ja=ca?da:J;ka=ca?I&255:X}else{ja=J;ka=X}I=Y+1&255;if((I&255)>>>0<16>>>0){Y=I;X=ka;J=ja}else{break}}la=ka&255;if(!(ka<<24>>24==-1)){h=85;break}if((ia|0)==128){ma=-1;break}else{ha=ja;ia=128}}if((h|0)==85){h=0;a[72776]=1;ed((ka|-80)&255|16384);a[72776]=0;J=(d[72560]|d[72561]<<8)<<16>>16;if(!(J<<16>>16==0)){X=0;Y=J;while(1){J=X;while(1){Z=72576+((J&65535)<<2)|0;na=d[Z]|d[Z+1|0]<<8|d[Z+2|0]<<16|d[Z+3|0]<<24|0;if((na|0)==0){J=J+1&65535}else{break}}Z=Y-1&65535;O=na+14|0;if(!((d[O]|d[O+1|0]<<8)<<16>>16<<16>>16==0)){I=na+92+la|0;ca=0;da=0;while(1){$=na+252+da|0;if((a[$]|0)==ka<<24>>24){a[$]=-1;$=a[na+284+da|0]|0;ba=a[I]|0;ea=72544+(ba&255)|0;a[ea]=(a[ea]|0)-1;a[72776]=1;ed((ba|-128)&255|($&255)<<8);a[72776]=0;w=((d[O]|d[O+1|0]<<8)<<16>>16)-1&65535;a[O]=w;w=w>>8;a[O+1|0]=w}$=ca+1&255;if(($&255)>>>0<32>>>0){ca=$;da=$&255}else{break}}}if(Z<<16>>16==0){break}else{X=J;Y=Z}}}a[72544+la|0]=0;Y=72608+la|0;a[Y]=a[Y]|-128;ma=ka}a[j+92+P|0]=ma<<24>>24==-1?B:ma;Q=3;break e;break};case 111:{Y=B&255;a[72639+(Y*9|0)|0]=H;a[j+108+(Y*9|0)+7|0]=H;if(!((H&255)>>>0>63>>>0)){Q=3;break e}X=72608+Y|0;a[X]=a[X]|64;Q=3;break e;break};case 112:{X=B&255;a[72640+(X*9|0)|0]=H;a[j+108+(X*9|0)+8|0]=H;if(!((a[72608+X|0]|0)>-1)){Q=3;break e}Y=a[j+92+X|0]|-80;a[72776]=1;ed((H&255)<<16|Y&255|28672);a[72776]=0;Q=3;break e;break};case 114:{Y=B&255;a[72637+(Y*9|0)|0]=H;a[j+108+(Y*9|0)+5|0]=H;if(!((a[72608+Y|0]|0)>-1)){Q=3;break e}X=a[j+92+Y|0]|-80;a[72776]=1;ed((H&255)<<16|X&255|29184);a[72776]=0;Q=3;break e;break};case 115:{h=102;break b;break};case 116:{X=0;Y=0;while(1){oa=j+84+(Y<<1)|0;da=X+1&255;if((d[oa]|d[oa+1|0]<<8)<<16>>16<<16>>16==-1){break}if((da&255)>>>0<4>>>0){X=da;Y=da&255}else{Q=3;break e}}w=H&255;a[oa]=w;w=w>>8;a[oa+1|0]=w;X=j+68+(Y<<2)|0;w=d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24|0;a[X]=w;w=w>>8;a[X+1|0]=w;w=w>>8;a[X+2|0]=w;w=w>>8;a[X+3|0]=w;Q=3;break e;break};case 117:{if((H&255)>>>0<64>>>0){Q=3;break e}else{pa=0}while(1){qa=3-(pa&255)|0;ra=j+84+(qa<<1)|0;sa=(d[ra]|d[ra+1|0]<<8)<<16>>16;if((sa<<16>>16|0)==0){break}else if((sa<<16>>16|0)!=(-1|0)){h=108;break}X=pa+1&255;if((X&255)>>>0<4>>>0){pa=X}else{Q=3;break e}}if((h|0)==108?(h=0,Y=sa-1&65535,w=Y,a[ra]=w,w=w>>8,a[ra+1|0]=w,Y<<16>>16==0):0){w=-1;a[ra]=w;w=w>>8;a[ra+1|0]=w;Q=3;break e}Y=j+68+(qa<<2)|0;w=d[Y]|d[Y+1|0]<<8|d[Y+2|0]<<16|d[Y+3|0]<<24|0;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;Q=3;break e;break};case 118:case 119:{h=112;break b;break};default:{Y=B&255;if(!((a[72608+Y|0]|0)>-1)){Q=3;break e}X=a[j+92+Y|0]|-80;a[72776]=1;ed((H&255)<<16|K<<8|X&255);a[72776]=0;Q=3;break e}}}}while(0);H=(d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24)+(Q&65535)|0;w=H;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;if((d[i]|d[i+1|0]<<8)<<16>>16<<16>>16==1){m=H}else{break c}}w=m+1|0;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;w=G&255;a[r]=w;w=w>>8;a[r+1|0]=w}if(!((d[i]|d[i+1|0]<<8)<<16>>16<<16>>16==1)){break c}z=(d[l]|d[l+1|0]<<8)<<16>>16}while((z&65535)>>>0>99>>>0)}z=(d[k]|d[k+1|0]<<8)<<16>>16;l=j+36|0;r=(d[l]|d[l+1|0]<<8)<<16>>16;do{if(!(z<<16>>16==r<<16>>16)){l=j+40|0;s=j+44|0;v=d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24|0;s=-1;q=(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24)+83|0;while(1){ta=s+1&65535;p=q-v|0;if((p|0)>-1){s=ta;q=p}else{break}}w=q;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;s=ta&65535;if(!(ta<<16>>16==0)){v=z&65535;m=r&65535;if((z&65535)>>>0<(r&65535)>>>0){p=v+s|0;w=(p|0)<(m|0)?p&65535:r;a[k]=w;w=w>>8;a[k+1|0]=w;break}else{p=v-s|0;w=(p|0)>(m|0)?p&65535:r;a[k]=w;w=w>>8;a[k+1|0]=w;break}}}}while(0);k=j+18|0;r=(d[k]|d[k+1|0]<<8)<<16>>16;z=j+20|0;p=(d[z]|d[z+1|0]<<8)<<16>>16;if(!(r<<16>>16==p<<16>>16)){z=j+24|0;m=j+28|0;s=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0;m=-1;v=(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24)+83|0;while(1){ua=m+1&65535;n=v-s|0;if((n|0)>-1){m=ua;v=n}else{break}}w=v;a[z]=w;w=w>>8;a[z+1|0]=w;w=w>>8;a[z+2|0]=w;w=w>>8;a[z+3|0]=w;m=ua&65535;if(!(ua<<16>>16==0)){s=r&65535;n=p&65535;if((r&65535)>>>0<(p&65535)>>>0){o=s+m|0;va=(o|0)<(n|0)?o&65535:p}else{o=s-m|0;va=(o|0)>(n|0)?o&65535:p}w=va;a[k]=w;w=w>>8;a[k+1|0]=w;o=0;n=0;while(1){m=a[j+108+(n*9|0)|0]|0;if(!(m<<24>>24==-1)){s=aa((d[k]|d[k+1|0]<<8)<<16>>16&65535,m&255)|0;if(s>>>0<12700>>>0){wa=((s>>>0)/100|0)&255}else{wa=127}a[72632+(n*9|0)|0]=wa;if((a[72608+n|0]|0)>=0){s=a[j+92+n|0]|-80;a[72776]=1;ed((wa&255)<<16|s&255|1792);a[72776]=0}}s=o+1&255;if((s&255)>>>0<16>>>0){o=s;n=s&255}else{break}}}}}}while(0);if(f<<16>>16==0){break a}c=f;e=(d[72568]|d[72569]<<8)<<16>>16}if((h|0)==29){Nb(62256,66384,519,69392)}else if((h|0)==102){Nb(62064,66384,314,69408)}else if((h|0)==112){Nb(62064,66384,345,69408)}else if((h|0)==148){w=g;a[72568]=w;w=w>>8;a[72569]=w;break}}}while(0);a[267792]=0;return}function hd(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;f=e;if((b|0)==0){g=-1;return g|0}else{h=0;i=0}while(1){j=72576+(i<<2)|0;k=h+1&65535;if((d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0)==0){l=h;m=i;break}j=k&65535;if((k&65535)>>>0<8>>>0){h=k;i=j}else{l=k;m=j;break}}if(l<<16>>16==8){g=-1;return g|0}i=c+1&65535;h=b;while(1){b=h;n=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;b=h+4|0;o=Fb(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0)|0;if(!((n|0)==1297239878|(n|0)==542392643)){g=-1;p=20;break}b=h+8|0;if((d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0)==1145654616){break}h=h+(o+8)|0}if((p|0)==20){return g|0}a:do{if((n|0)==1297239878){q=c<<16>>16==0?h:0}else{p=o-5|0;b=i;j=h+12|0;while(1){k=j+4|0;r=Fb(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0)|0;k=j+8|0;if((d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0)==1145654616){k=b-1&65535;if(k<<16>>16==0){q=j;break a}else{s=k}}else{s=b}k=r+8|0;r=p-k|0;if((r|0)<0){g=-1;break}p=r;b=s;j=j+k|0}return g|0}}while(0);if((q|0)==0){g=-1;return g|0}s=72576+(m<<2)|0;w=f;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;s=e;w=0;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;f=q;if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)==1414420037){t=q}else{f=q;q=12;while(1){m=f+q|0;h=m;i=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;h=f+(q+4)|0;o=(Fb(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)|0)+8|0;if((i|0)==1414420037){t=m;break}else{f=m;q=o}}}w=t;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;s=e+8|0;w=0;a[s]=w;w=w>>8;a[s+1|0]=w;a[e+10|0]=0;w=((d[72560]|d[72561]<<8)<<16>>16)+1&65535;a[72560]=w;w=w>>8;a[72561]=w;s=e+84|0;t=s|0;w=-1;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;t=s+4|0;w=-1;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;a[e+92|0]=0;a[e+93|0]=1;a[e+94|0]=2;a[e+95|0]=3;a[e+96|0]=4;a[e+97|0]=5;a[e+98|0]=6;a[e+99|0]=7;a[e+100|0]=8;a[e+101|0]=9;a[e+102|0]=10;a[e+103|0]=11;a[e+104|0]=12;a[e+105|0]=13;a[e+106|0]=14;a[e+107|0]=15;t=e+12|0;Lp(e+108|0,-1|0,176)|0;w=0;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+14|0;w=0;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+18|0;w=90;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+20|0;w=90;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+32|0;w=0;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+34|0;w=100;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+36|0;w=100;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+48|0;w=0;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+50|0;w=0;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+52|0;w=4;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+56|0;w=133333;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;t=e+60|0;w=133333;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;t=e+64|0;w=8e6;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;g=l;return g|0}function id(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;if(b<<16>>16==-1){return}c=72576+((b&65535)<<2)|0;b=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;c=b+8|0;if((d[c]|d[c+1|0]<<8)<<16>>16<<16>>16!=1|(b|0)==0){e=b+14|0}else{f=0;g=0;while(1){h=b+252+g|0;i=a[h]|0;if(!(i<<24>>24==-1)){a[h]=-1;h=a[b+284+g|0]|0;j=a[(i&255)+(b+92)|0]|-128;a[72776]=1;ed(j&255|(h&255)<<8);a[72776]=0}h=f+1&255;if((h&255)>>>0<32>>>0){f=h;g=h&255}else{break}}g=b+14|0;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;kd(b);w=0;a[c]=w;w=w>>8;a[c+1|0]=w;e=g}g=b+84|0;f=g|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=g+4|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;a[b+92|0]=0;a[b+93|0]=1;a[b+94|0]=2;a[b+95|0]=3;a[b+96|0]=4;a[b+97|0]=5;a[b+98|0]=6;a[b+99|0]=7;a[b+100|0]=8;a[b+101|0]=9;a[b+102|0]=10;a[b+103|0]=11;a[b+104|0]=12;a[b+105|0]=13;a[b+106|0]=14;a[b+107|0]=15;f=b+12|0;Lp(b+108|0,-1|0,176)|0;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+18|0;w=90;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+20|0;w=90;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+32|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+34|0;w=100;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+36|0;w=100;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+48|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+50|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+52|0;w=4;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+56|0;w=133333;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=b+60|0;w=133333;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=b+64|0;w=8e6;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=b|0;f=b+4|0;w=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+8|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;w=1;a[c]=w;w=w>>8;a[c+1|0]=w;return}function jd(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;if(b<<16>>16==-1){return}c=72576+((b&65535)<<2)|0;b=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((b|0)==0){return}c=b+8|0;if((d[c]|d[c+1|0]<<8)<<16>>16<<16>>16==1){e=0;f=0}else{return}while(1){g=b+252+f|0;h=a[g]|0;if(!(h<<24>>24==-1)){a[g]=-1;g=a[b+284+f|0]|0;i=a[(h&255)+(b+92)|0]|-128;a[72776]=1;ed(i&255|(g&255)<<8);a[72776]=0}g=e+1&255;if((g&255)>>>0<32>>>0){e=g;f=g&255}else{break}}f=b+14|0;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;kd(b);w=0;a[c]=w;w=w>>8;a[c+1|0]=w;return}function kd(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;c=0;e=0;while(1){f=a[b+108+(e*9|0)+4|0]|0;if(f<<24>>24!=-1&(f&255)>>>0>63>>>0){a[72636+(e*9|0)|0]=0;a[72776]=1;ed((c|-80)&255|16384);a[72776]=0}f=a[b+108+(e*9|0)+6|0]|0;if(f<<24>>24!=-1&(f&255)>>>0>63>>>0){f=(d[72560]|d[72561]<<8)<<16>>16;if(!(f<<16>>16==0)){g=0;h=f;while(1){f=g;while(1){i=72576+((f&65535)<<2)|0;j=d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24|0;if((j|0)==0){f=f+1&65535}else{break}}i=h-1&65535;k=j+14|0;if(!((d[k]|d[k+1|0]<<8)<<16>>16<<16>>16==0)){l=j+92+e|0;m=0;n=0;while(1){o=j+252+n|0;if((a[o]|0)==c<<24>>24){a[o]=-1;o=a[j+284+n|0]|0;p=a[l]|0;q=72544+(p&255)|0;a[q]=(a[q]|0)-1;a[72776]=1;ed((p|-128)&255|(o&255)<<8);a[72776]=0;w=((d[k]|d[k+1|0]<<8)<<16>>16)-1&65535;a[k]=w;w=w>>8;a[k+1|0]=w}o=m+1&255;if((o&255)>>>0<32>>>0){m=o;n=o&255}else{break}}}if(i<<16>>16==0){break}else{g=f;h=i}}}h=b+92+e|0;qd(a[h]|0);a[h]=c}h=a[b+108+(e*9|0)+7|0]|0;if(h<<24>>24!=-1&(h&255)>>>0>63>>>0){h=72608+e|0;a[h]=a[h]&-65}h=a[b+108+(e*9|0)+8|0]|0;if(h<<24>>24!=-1&(h&255)>>>0>63>>>0){a[72776]=1;ed((c|-80)&255|28672);a[72776]=0}h=c+1&255;if((h&255)>>>0<16>>>0){c=h;e=h&255}else{break}}return}function ld(){return 444}function md(){var b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;if((cd()|0)<<24>>24==0){b=0;return b|0}w=0;a[72560]=w;w=w>>8;a[72561]=w;w=0;a[72568]=w;w=w>>8;a[72569]=w;Lp(72576,0,32)|0;Lp(72632,-1|0,144)|0;Lp(72496,-1|0,16)|0;Lp(72512,-1|0,32)|0;Lp(72544,0,16)|0;Lp(72608,0,16)|0;a[72776]=1;fd();a[72776]=0;c=0;while(1){d=c+1&255;e=d&255;a[72632+(e*9|0)|0]=127;f=72633+(e*9|0)|0;a[f]=0;g=72634+(e*9|0)|0;a[g]=64;h=72635+(e*9|0)|0;a[h]=127;i=72636+(e*9|0)|0;Lp(i|0,0,5)|0;a[72776]=1;j=(d|-80)&255;ed(j|8324864);k=a[f]|0;a[72776]=1;ed(j|(k&255)<<16|256);k=a[g]|0;a[72776]=1;ed(j|(k&255)<<16|2560);k=a[h]|0;a[72776]=1;ed(j|(k&255)<<16|2816);k=a[i]|0;a[72776]=1;ed(j|(k&255)<<16|16384);k=a[72637+(e*9|0)|0]|0;a[72776]=1;ed(j|(k&255)<<16|29184);k=a[72638+(e*9|0)|0]|0;a[72776]=1;ed(j|(k&255)<<16|28160);k=a[72639+(e*9|0)|0]|0;a[72776]=1;ed(j|(k&255)<<16|28416);k=a[72640+(e*9|0)|0]|0;a[72776]=1;ed(j|(k&255)<<16|28672);k=72512+(e<<1)|0;w=16384;a[k]=w;w=w>>8;a[k+1|0]=w;a[72776]=1;ed((d|-32)&255|4194304);a[72776]=0;if(!(c<<24>>24==8)){k=a[70672+(c&255)|0]|0;a[72496+e|0]=k;a[72776]=1;ed((k&255)<<16|(d|-64)&255);a[72776]=0}if((d&255)>>>0<9>>>0){c=d}else{break}}a[72624]=1;b=1;return b|0}function nd(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;if((a[72624]|0)==0){return}if(!((d[72560]|d[72561]<<8)<<16>>16<<16>>16==0)){b=0;do{c=72576+((b&65535)<<2)|0;e=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;do{if((e|0)!=0){f=e+8|0;if((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==1){g=0;h=0;while(1){i=e+252+h|0;j=a[i]|0;if(!(j<<24>>24==-1)){a[i]=-1;i=a[e+284+h|0]|0;k=a[(j&255)+(e+92)|0]|-128;a[72776]=1;ed(k&255|(i&255)<<8);a[72776]=0}i=g+1&255;if((i&255)>>>0<32>>>0){g=i;h=i&255}else{break}}h=e+14|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;kd(e);w=0;a[f]=w;w=w>>8;a[f+1|0]=w;h=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((h|0)==0){break}else{l=h}}else{l=e}h=l+8|0;if((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==1){a[l+10|0]=1;break}else{w=0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;w=((d[72560]|d[72561]<<8)<<16>>16)-1&65535;a[72560]=w;w=w>>8;a[72561]=w;break}}}while(0);b=b+1&65535}while((b&65535)>>>0<((d[72560]|d[72561]<<8)<<16>>16&65535)>>>0)}a[72776]=1;fd();a[72624]=0;dd();a[72776]=0;return}function od(b){b=b|0;var c=0,e=0;if(b<<16>>16==-1){return}c=72576+((b&65535)<<2)|0;b=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((b|0)==0){return}e=b+8|0;if((d[e]|d[e+1|0]<<8)<<16>>16<<16>>16==1){a[b+10|0]=1;return}else{w=0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;w=((d[72560]|d[72561]<<8)<<16>>16)-1&65535;a[72560]=w;w=w>>8;a[72561]=w;return}}function pd(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0;if(b<<16>>16==-1){return}f=72576+((b&65535)<<2)|0;b=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=b+20|0;w=c;a[f]=w;w=w>>8;a[f+1|0]=w;f=e&65535;g=b+18|0;if(!(e<<16>>16==0)){e=(d[g]|d[g+1|0]<<8)<<16>>16;if(e<<16>>16==c<<16>>16){return}h=((f*10|0)>>>0)/((c-e&65535)>>>0)|0;e=b+28|0;w=(h|0)==0?1:h;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=b+24|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;return}w=c;a[g]=w;w=w>>8;a[g+1|0]=w;c=0;e=0;while(1){h=a[b+108+(e*9|0)|0]|0;if(!(h<<24>>24==-1)){f=aa((d[g]|d[g+1|0]<<8)<<16>>16&65535,h&255)|0;if(f>>>0<12700>>>0){i=((f>>>0)/100|0)&255}else{i=127}a[72632+(e*9|0)|0]=i;if((a[72608+e|0]|0)>=0){f=a[b+92+e|0]|-80;a[72776]=1;ed((i&255)<<16|f&255|1792);a[72776]=0}}f=c+1&255;if((f&255)>>>0<16>>>0){c=f;e=f&255}else{break}}return}function qd(b){b=b|0;var c=0,e=0,f=0,g=0;c=b&255;e=72608+c|0;f=a[e]|0;if(f<<24>>24>-1){return}a[e]=f&127;a[72544+c|0]=0;a[72776]=1;f=(b|-80)&255;e=f|16384;ed(e);a[72776]=1;ed(f|31488);a[72776]=0;g=a[72632+(c*9|0)|0]|0;if(!(g<<24>>24==-1)){a[72776]=1;ed(f|(g&255)<<16|1792);a[72776]=0}g=a[72633+(c*9|0)|0]|0;if(!(g<<24>>24==-1)){a[72776]=1;ed(f|(g&255)<<16|256);a[72776]=0}g=a[72634+(c*9|0)|0]|0;if(!(g<<24>>24==-1)){a[72776]=1;ed(f|(g&255)<<16|2560);a[72776]=0}g=a[72635+(c*9|0)|0]|0;if(!(g<<24>>24==-1)){a[72776]=1;ed(f|(g&255)<<16|2816);a[72776]=0}g=a[72636+(c*9|0)|0]|0;if(!(g<<24>>24==-1)){a[72776]=1;ed((g&255)<<16|e);a[72776]=0}e=a[72637+(c*9|0)|0]|0;if(!(e<<24>>24==-1)){a[72776]=1;ed(f|(e&255)<<16|29184);a[72776]=0}e=a[72638+(c*9|0)|0]|0;if(!(e<<24>>24==-1)){a[72776]=1;ed(f|(e&255)<<16|28160);a[72776]=0}e=a[72639+(c*9|0)|0]|0;if(!(e<<24>>24==-1)){a[72776]=1;ed(f|(e&255)<<16|28416);a[72776]=0}e=a[72640+(c*9|0)|0]|0;if(!(e<<24>>24==-1)){a[72776]=1;ed(f|(e&255)<<16|28672);a[72776]=0}e=a[72496+c|0]|0;if(!(e<<24>>24==-1)){a[72776]=1;ed((e&255)<<8|(b|-64)&255);a[72776]=0}e=72512+(c<<1)|0;c=(d[e]|d[e+1|0]<<8)<<16>>16;if(c<<16>>16==-1){return}a[72776]=1;ed((c&255)<<8|(b|-32)&255|((c&65535)>>>8&65535)<<16);a[72776]=0;return}function rd(a){a=a|0;$b(a|0);return}function sd(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=c;c=i;i=i+4|0;i=i+7&-8;w=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;if(b<<16>>16<0){i=e;return}if(!(b<<16>>16<120&(d[46610]|d[46611]<<8)<<16>>16<<16>>16!=0)){i=e;return}f=c|0;if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)==0){g=255}else{f=(d[233072]|d[233073]<<8)<<16>>16;h=En(f,vn(c)|0)|0;g=(h&65535)>>>0>64>>>0?51:255-((((h&65535)*255|0)>>>0)/80|0)&65535}if((((a[47968]|0)!=0?(h=8552+(b<<16>>16<<1)|0,c=(d[h]|d[h+1|0]<<8)<<16>>16,h=c&65535,!(c<<16>>16==-1)):0)?(c=203760+(h<<2)|0,f=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0,(f|0)!=0):0)?(c=7508+(h<<3)|0,j=(d[c]|d[c+1|0]<<8)<<16>>16,!((j&65535)>>>0<((d[71592]|d[71593]<<8)<<16>>16&65535)>>>0)):0){w=j;a[71592]=w;w=w>>8;a[71593]=w;j=203232+(h<<2)|0;Mp(d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0,f|0,d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0)|0;Uc(d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0,(d[71592]|d[71593]<<8)<<16>>16);i=e;return}Sc(b,g);i=e;return}function td(b){b=b|0;var c=0,d=0,e=0;c=i;i=i+8|0;d=c|0;e=d|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;sd(b,d);i=c;return}function ud(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0;c=i;i=i+16|0;e=c|0;if((a[47968]|0)==0){i=c;return}f=(b&65535)>>>0>65533>>>0;g=b<<16>>16==-1;h=b<<16>>16==-2;a:do{if(g){j=0;k=0;while(1){l=7504+(k<<3)|0;m=a[d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0]|0;if((m|0)==47){if(h){l=203760+(k<<2)|0;zp(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0);w=0;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w}}else if((m|0)==43){if(f){l=203760+(k<<2)|0;zp(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0);w=0;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w}}else if((m|0)==37?(d[69816]|d[69817]<<8)<<16>>16<<16>>16!=-1&(a[261416]|0)==0|f:0){m=203760+(k<<2)|0;zp(d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0);w=0;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w}m=j+1&65535;if((m&65535)>>>0<131>>>0){j=m;k=m&65535}else{break}}}else{if(h){n=0;o=0}else{k=0;j=0;while(1){m=7504+(j<<3)|0;l=a[d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0]|0;if((l|0)==43){if(f){m=203760+(j<<2)|0;zp(d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0);w=0;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w}}else if((l|0)==37){if((d[69816]|d[69817]<<8)<<16>>16<<16>>16!=b<<16>>16&(a[261416]|0)==0|f){m=203760+(j<<2)|0;zp(d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0);w=0;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w}}else if((l|0)==45){m=203760+(j<<2)|0;zp(d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0);w=0;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w}else if((l|0)==63){l=203760+(j<<2)|0;w=0;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w}l=k+1&65535;if((l&65535)>>>0<131>>>0){k=l;j=l&65535}else{break a}}}while(1){j=7504+(o<<3)|0;switch(a[d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0]|0){case 43:{if(f){j=203760+(o<<2)|0;zp(d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0);w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w}break};case 63:{j=203760+(o<<2)|0;w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;break};case 47:{j=203760+(o<<2)|0;zp(d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0);w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;break};case 45:{j=203760+(o<<2)|0;zp(d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0);w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;break};case 37:{if((d[69816]|d[69817]<<8)<<16>>16<<16>>16!=-2&(a[261416]|0)==0|f){j=203760+(o<<2)|0;zp(d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0);w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w}break};default:{}}j=n+1&65535;if((j&65535)>>>0<131>>>0){n=j;o=j&65535}else{break a}}}}while(0);if((d[69816]|d[69817]<<8)<<16>>16<<16>>16==b<<16>>16){i=c;return}o=15528+((b&65535)<<5)|0;n=e|0;j=e+1|0;e=0;k=0;while(1){l=7504+(k<<3)|0;m=d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0;switch(a[m]|0){case 43:{if(!g?(l=203760+(k<<2)|0,(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0)==0):0){p=d[261416]|0;if((p|0)==2){q=71}else if((p|0)==1){q=70}else{q=90}Ka(n|0,16,m+1|0,(r=i,i=i+8|0,w=q,a[r]=w,w=w>>8,a[r+1|0]=w,w=w>>8,a[r+2|0]=w,w=w>>8,a[r+3|0]=w,r)|0)|0;i=r;if((Jd(n)|0)<<24>>24==0){Mp(n|0,j|0,Ip(n|0)|0)|0}if((Jd(n)|0)<<24>>24==0){s=0}else{p=203232+(k<<2)|0;t=Md(n,1)|0;u=Qd(t)|0;Ld(t);t=u+1&-2;w=t;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;p=yp(t)|0;Tc(n,p,t);s=p}w=s;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w}break};case 37:{l=203760+(k<<2)|0;if(!((d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0)!=0|(d[69816]|d[69817]<<8)<<16>>16<<16>>16==b<<16>>16|f)){p=d[261416]|0;if((p|0)==1){v=70}else if((p|0)==2){v=71}else{v=(d[o]|d[o+1|0]<<8)<<16>>16&65535}Ka(n|0,16,m|0,(r=i,i=i+8|0,w=v,a[r]=w,w=w>>8,a[r+1|0]=w,w=w>>8,a[r+2|0]=w,w=w>>8,a[r+3|0]=w,r)|0)|0;i=r;if((Jd(n)|0)<<24>>24==0){x=0}else{p=203232+(k<<2)|0;t=Md(n,1)|0;u=Qd(t)|0;Ld(t);t=u+1&-2;w=t;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;p=yp(t)|0;Tc(n,p,t);x=p}w=x;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w}break};case 45:{if(g?(l=203760+(k<<2)|0,(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0)==0):0){p=m+1|0;t=203232+(k<<2)|0;if((p|0)!=0?!((Jd(p)|0)<<24>>24==0):0){u=Md(p,1)|0;y=Qd(u)|0;Ld(u);u=y+1&-2;w=u;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;t=yp(u)|0;Tc(p,t,u);z=t}else{z=0}w=z;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w}break};case 63:{break};case 47:{if(h){l=m+1|0;t=203232+(k<<2)|0;if((l|0)!=0?!((Jd(l)|0)<<24>>24==0):0){u=Md(l,1)|0;p=Qd(u)|0;Ld(u);u=p+1&-2;w=u;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;t=yp(u)|0;Tc(l,t,u);A=t}else{A=0}t=203760+(k<<2)|0;w=A;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w}break};default:{t=203760+(k<<2)|0;if((d[t]|d[t+1|0]<<8|d[t+2|0]<<16|d[t+3|0]<<24|0)==0){u=203232+(k<<2)|0;if((m|0)!=0?!((Jd(m)|0)<<24>>24==0):0){l=Md(m,1)|0;p=Qd(l)|0;Ld(l);l=p+1&-2;w=l;a[u]=w;w=w>>8;a[u+1|0]=w;w=w>>8;a[u+2|0]=w;w=w>>8;a[u+3|0]=w;u=yp(l)|0;Tc(m,u,l);B=u}else{B=0}w=B;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w}}}t=e+1&65535;if((t&65535)>>>0<131>>>0){e=t;k=t&65535}else{break}}w=b;a[69816]=w;w=w>>8;a[69817]=w;i=c;return}function vd(){var b=0,c=0;b=0;do{c=203760+((b&65535)<<2)|0;zp(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);w=0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;b=b+1&65535}while((b&65535)>>>0<131>>>0);return}function wd(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=i;i=i+16|0;e=b&65535;if(b<<16>>16==-1|(d[46610]|d[46611]<<8)<<16>>16<<16>>16==0){i=c;return}b=7508+(e<<3)|0;f=(d[b]|d[b+1|0]<<8)<<16>>16;if(f<<16>>16<(d[71592]|d[71593]<<8)<<16>>16<<16>>16){i=c;return}w=f;a[71592]=w;w=w>>8;a[71593]=w;f=203760+(e<<2)|0;b=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;if((b|0)!=0){Uc(b,255);i=c;return}b=7504+(e<<3)|0;e=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((a[e]|0)!=63){i=c;return}b=c|0;f=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if(f>>>0<6>>>0){g=15528+(f<<5)|0;h=(d[g]|d[g+1|0]<<8)<<16>>16&65535}else{h=32}Ka(b|0,16,e+1|0,(e=i,i=i+8|0,w=h,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,e)|0)|0;i=e;Tc(b,d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0,d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24|0);Uc(d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0,255);i=c;return}function xd(b){b=b|0;var c=0,e=0,f=0;c=b&65535;if((b<<16>>16|0)==(-2|0)){Lp(71920,-1|0,10)|0;Vc();w=0;a[203208]=w;w=w>>8;a[203209]=w;w=w>>8;a[203210]=w;w=w>>8;a[203211]=w;if(!(((d[203216]|d[203217]<<8)<<16>>16&1)==0)){a[203192]=1;w=0;a[203216]=w;w=w>>8;a[203217]=w}w=0;a[71592]=w;w=w>>8;a[71593]=w;return}else if((b<<16>>16|0)==(-1|0)){return}else{if((a[47968]|0)==0|(d[46610]|d[46611]<<8)<<16>>16<<16>>16==0){b=46660+(c*14|0)|0;Sc((d[b]|d[b+1|0]<<8)<<16>>16,255);b=46658+(c*14|0)|0;w=Dm((d[b]|d[b+1|0]<<8)<<16>>16)|0;a[203208]=w;w=w>>8;a[203209]=w;w=w>>8;a[203210]=w;w=w>>8;a[203211]=w;if(!(((d[203216]|d[203217]<<8)<<16>>16&1)==0)){a[203192]=1}w=4;a[203216]=w;w=w>>8;a[203217]=w;return}if((d[71920]|d[71921]<<8)<<16>>16<<16>>16==-1){if((a[261416]|0)==0){b=46648+(c*14|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[71920]=w;w=w>>8;a[71921]=w;b=46650+(c*14|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[71922]=w;w=w>>8;a[71923]=w;b=46652+(c*14|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[71924]=w;w=w>>8;a[71925]=w;b=46654+(c*14|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[71926]=w;w=w>>8;a[71927]=w;e=46656+(c*14|0)|0}else{b=5984+(c*10|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[71920]=w;w=w>>8;a[71921]=w;b=5986+(c*10|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[71922]=w;w=w>>8;a[71923]=w;b=5988+(c*10|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[71924]=w;w=w>>8;a[71925]=w;b=5990+(c*10|0)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16;a[71926]=w;w=w>>8;a[71927]=w;e=5992+(c*10|0)|0}w=(d[e]|d[e+1|0]<<8)<<16>>16;a[71928]=w;w=w>>8;a[71929]=w}if(!((Rc()|0)<<24>>24==0)){return}w=0;a[71592]=w;w=w>>8;a[71593]=w;e=(d[71920]|d[71921]<<8)<<16>>16;if(e<<16>>16==-1){return}wd(e);e=71922;c=e|0;b=e+4|0;e=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;b=71920;f=b|0;w=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=b+4|0;w=e;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;w=-1;a[71928]=w;w=w>>8;a[71929]=w;return}}function yd(){var b=0,c=0,e=0,f=0,g=0;if((d[46610]|d[46611]<<8)<<16>>16<<16>>16==0){b=0;return b|0}if(!((Rc()|0)<<24>>24==0)){b=1;return b|0}w=0;a[71592]=w;w=w>>8;a[71593]=w;c=(d[71920]|d[71921]<<8)<<16>>16;if(c<<16>>16==-1){b=0;return b|0}wd(c);c=71922;e=c|0;f=c+4|0;c=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=71920;g=f|0;w=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=f+4|0;w=c;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;w=-1;a[71928]=w;w=w>>8;a[71929]=w;b=1;return b|0}function zd(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;e=c;c=b;while(1){b=e+1|0;f=a[e]|0;g=f&255;if(f<<24>>24==0){h=e+2|0;i=a[b]|0;if(i<<24>>24==0){j=c}else{k=i&255;i=k-1&65535;l=c;m=k;while(1){a[l]=a[l]^a[h];k=m-1&65535;if(k<<16>>16==0){break}else{l=l+1|0;m=k}}j=c+(i+1)|0}e=e+3|0;c=j;continue}m=f&255;if((g&128|0)==0){l=m-1&65535;h=c;k=b;n=m;while(1){a[h]=a[h]^a[k];m=n-1&65535;if(m<<16>>16==0){break}else{h=h+1|0;k=k+1|0;n=m}}e=e+(l+2)|0;c=c+(l+1)|0;continue}if(!(f<<24>>24==-128)){e=b;c=c+(g&127)|0;continue}n=e+3|0;k=(d[e+2|0]|0)<<8|(d[b]|0);h=k&65535;if(k<<16>>16==0){break}if((h&32768|0)==0){e=n;c=c+h|0;continue}i=k&16383;m=i<<16>>16==0;if((h&16384|0)==0){if(m){e=n;continue}h=(k&16383)-1&65535;o=c;p=n;q=i;while(1){a[o]=a[o]^a[p];r=q-1&65535;if(r<<16>>16==0){break}else{o=o+1|0;p=p+1|0;q=r}}e=e+(h+4)|0;c=c+(h+1)|0;continue}if(m){s=c}else{q=(k&16383)-1&65535;p=c;o=i;while(1){a[p]=a[p]^a[n];b=o-1&65535;if(b<<16>>16==0){break}else{p=p+1|0;o=b}}s=c+(q+1)|0}e=e+4|0;c=s}return}function Ad(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0;f=b;g=c;c=0;h=b;while(1){b=g+1|0;i=a[g]|0;j=i&255;if(i<<24>>24==0){k=a[g+2|0]|0;l=f;m=d[b]|0;n=c;o=h;do{a[o]=a[o]^k;p=n+1&65535;q=p<<16>>16==e<<16>>16;r=l+320|0;o=q?r:o+1|0;n=q?0:p;l=q?r:l;m=m-1&65535}while(!(m<<16>>16==0));f=l;g=g+3|0;c=n;h=o;continue}if(i<<24>>24>-1){m=i&255;k=m-1&65535;r=f;q=b;p=m;m=c;s=h;while(1){a[s]=a[s]^a[q];t=m+1&65535;u=t<<16>>16==e<<16>>16;v=r+320|0;w=u?v:s+1|0;x=u?0:t;y=u?v:r;v=p-1&65535;if(v<<16>>16==0){break}else{r=y;q=q+1|0;p=v;m=x;s=w}}f=y;g=g+(k+2)|0;c=x;h=w;continue}if((i&255)>>>0>128>>>0){s=j&127;m=s+(c&65535)&65535;if((m&65535)>>>0<(e&65535)>>>0){g=b;c=m;h=h+s|0;continue}else{z=m;A=f}while(1){B=z-e&65535;C=A+320|0;if((B&65535)>>>0<(e&65535)>>>0){break}else{z=B;A=C}}f=C;g=b;c=B;h=A+((B&65535)+320)|0;continue}j=(d[g+2|0]|0)<<8|(d[b]|0);i=g+3|0;k=j&65535;if(j<<16>>16==0){break}if(j<<16>>16>-1){m=j+c&65535;if((m&65535)>>>0<(e&65535)>>>0){g=i;c=m;h=h+k|0;continue}else{D=m;E=f}while(1){F=D-e&65535;G=E+320|0;if((F&65535)>>>0<(e&65535)>>>0){break}else{D=F;E=G}}f=G;g=i;c=F;h=E+((F&65535)+320)|0;continue}b=j&16383;if((k&16384|0)==0){m=(j&16383)-1&65535;s=f;p=i;q=b;r=c;o=h;while(1){a[o]=a[o]^a[p];n=r+1&65535;l=n<<16>>16==e<<16>>16;v=s+320|0;H=l?v:o+1|0;I=l?0:n;J=l?v:s;v=q-1&65535;if(v<<16>>16==0){break}else{s=J;p=p+1|0;q=v;r=I;o=H}}f=J;g=g+(m+4)|0;c=I;h=H;continue}else{o=a[i]|0;r=f;q=b;p=c;s=h;do{a[s]=a[s]^o;j=p+1&65535;k=j<<16>>16==e<<16>>16;v=r+320|0;s=k?v:s+1|0;p=k?0:j;r=k?v:r;q=q-1&65535}while(!(q<<16>>16==0));f=r;g=g+4|0;c=p;h=s;continue}}return}function Bd(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0;f=b;g=c;c=0;h=b;while(1){b=g+1|0;i=a[g]|0;j=i&255;if(i<<24>>24==0){k=a[g+2|0]|0;l=f;m=d[b]|0;n=c;o=h;do{a[o]=k;p=n+1&65535;q=p<<16>>16==e<<16>>16;r=l+320|0;o=q?r:o+1|0;n=q?0:p;l=q?r:l;m=m-1&65535}while(!(m<<16>>16==0));f=l;g=g+3|0;c=n;h=o;continue}if(i<<24>>24>-1){m=i&255;k=m-1&65535;r=f;q=b;p=m;m=c;s=h;while(1){a[s]=a[q]|0;t=m+1&65535;u=t<<16>>16==e<<16>>16;v=r+320|0;w=u?v:s+1|0;x=u?0:t;y=u?v:r;v=p-1&65535;if(v<<16>>16==0){break}else{r=y;q=q+1|0;p=v;m=x;s=w}}f=y;g=g+(k+2)|0;c=x;h=w;continue}if((i&255)>>>0>128>>>0){s=j&127;m=s+(c&65535)&65535;if((m&65535)>>>0<(e&65535)>>>0){g=b;c=m;h=h+s|0;continue}else{z=m;A=f}while(1){B=z-e&65535;C=A+320|0;if((B&65535)>>>0<(e&65535)>>>0){break}else{z=B;A=C}}f=C;g=b;c=B;h=A+((B&65535)+320)|0;continue}j=(d[g+2|0]|0)<<8|(d[b]|0);i=g+3|0;k=j&65535;if(j<<16>>16==0){break}if(j<<16>>16>-1){m=j+c&65535;if((m&65535)>>>0<(e&65535)>>>0){g=i;c=m;h=h+k|0;continue}else{D=m;E=f}while(1){F=D-e&65535;G=E+320|0;if((F&65535)>>>0<(e&65535)>>>0){break}else{D=F;E=G}}f=G;g=i;c=F;h=E+((F&65535)+320)|0;continue}b=j&16383;if((k&16384|0)==0){m=(j&16383)-1&65535;s=f;p=i;q=b;r=c;o=h;while(1){a[o]=a[p]|0;n=r+1&65535;l=n<<16>>16==e<<16>>16;v=s+320|0;H=l?v:o+1|0;I=l?0:n;J=l?v:s;v=q-1&65535;if(v<<16>>16==0){break}else{s=J;p=p+1|0;q=v;r=I;o=H}}f=J;g=g+(m+4)|0;c=I;h=H;continue}else{o=a[i]|0;r=f;q=b;p=c;s=h;do{a[s]=o;j=p+1&65535;k=j<<16>>16==e<<16>>16;v=r+320|0;s=k?v:s+1|0;p=k?0:j;r=k?v:r;q=q-1&65535}while(!(q<<16>>16==0));f=r;g=g+4|0;c=p;h=s;continue}}return}function Cd(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;f=b+(e&65535)|0;if((f|0)==(b|0)){g=b;h=g;i=b;j=h-i|0;k=j&65535;return k|0}e=f;l=~e;m=c;c=b;a:while(1){n=m+1|0;o=a[m]|0;p=o&255;do{if((p&128|0)==0){q=p>>>4;r=q+3|0;s=c;t=e-s|0;u=((r&65535|0)>(t|0)?t:r)&65535;r=m+2|0;if(u<<16>>16==0){v=c;w=r}else{t=-(d[n]|0|p<<8&3840)|0;x=s+l|0;s=-4-q|0;q=((((x|0)>(s|0)?x:s)^65535)&65535)-1&65535;s=c;x=u;while(1){a[s]=a[s+t|0]|0;u=x-1&65535;if(u<<16>>16==0){break}else{s=s+1|0;x=u}}v=c+(q+1)|0;w=r}}else{if((o<<24>>24|0)==(-2|0)){x=(d[m+2|0]|0)<<8|(d[n]|0);s=e-c|0;t=((x&65535|0)>(s|0)?s&65535:x)&65535;Lp(c|0,a[m+3|0]|0,t|0)|0;v=c+t|0;w=m+4|0;break}else if((o<<24>>24|0)==(-1|0)){t=(d[m+2|0]|0)<<8|(d[n]|0);x=e-c|0;s=(t&65535|0)>(x|0)?x&65535:t;t=m+5|0;if(s<<16>>16==0){v=c;w=t;break}x=s-1&65535;u=c;y=s;s=b+(((d[m+4|0]|0)<<8|(d[m+3|0]|0))&65535)|0;while(1){a[u]=a[s]|0;z=y-1&65535;if(z<<16>>16==0){break}else{u=u+1|0;y=z;s=s+1|0}}v=c+(x+1)|0;w=t;break}else if((o<<24>>24|0)!=(-128|0)){s=p&63;if((p&64|0)==0){y=c;u=e-y|0;r=((s|0)>(u|0)?u:s)&65535;if(r<<16>>16==0){v=c;w=n;break}u=y+l|0;y=~(o&63);q=((((u|0)>(y|0)?u:y)^65535)&65535)-1&65535;y=n;u=c;z=r;while(1){a[u]=a[y]|0;r=z-1&65535;if(r<<16>>16==0){break}else{y=y+1|0;u=u+1|0;z=r}}v=c+(q+1)|0;w=m+(q+2)|0;break}else{z=s+3|0;u=e-c|0;y=((z&65535|0)>(u|0)?u:z)&65535;z=m+3|0;if(y<<16>>16==0){v=c;w=z;break}u=y-1&65535;t=c;x=y;y=b+(((d[m+2|0]|0)<<8|(d[n]|0))&65535)|0;while(1){a[t]=a[y]|0;r=x-1&65535;if(r<<16>>16==0){break}else{t=t+1|0;x=r;y=y+1|0}}v=c+(u+1)|0;w=z;break}}else{g=c;A=24;break a}}}while(0);if((v|0)==(f|0)){g=f;A=24;break}else{m=w;c=v}}if((A|0)==24){h=g;i=b;j=h-i|0;k=j&65535;return k|0}return 0}function Dd(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;e=i;i=i+24|0;if(!((Ip(b|0)|0)>>>0<13>>>0)){Nb(53904,64952,36,69664);return 0}f=e|0;a[f]=a[61088]|0;a[f+1|0]=a[61089]|0;a[f+2|0]=a[61090]|0;a[f+3|0]=a[61091]|0;a[f+4|0]=a[61092]|0;a[f+5|0]=a[61093]|0;Jp(f|0,b|0)|0;b=ib(f|0,57688)|0;if((b|0)==0){g=0;i=e;return g|0}f=c|0;h=rb(f|0,1,10,b|0)|0;qa(b|0)|0;if((h|0)!=10){g=0;i=e;return g|0}h=(a[f]^-91)-7&255;a[f]=h;b=f+1|0;j=(a[b]^-91)-6&255;a[b]=j;b=f+2|0;k=(a[b]^-91)-5&255;a[b]=k;b=f+3|0;l=(a[b]^-91)-4&255;a[b]=l;b=f+4|0;m=(a[b]^-91)-3&255;a[b]=m;b=f+5|0;n=(a[b]^-91)-2&255;a[b]=n;b=f+6|0;o=(a[b]^-91)-1&255;a[b]=o;b=f+7|0;f=a[b]^-91;a[b]=f;g=((f&255)+((o&255)+((n&255)+((m&255)+((l&255)+((k&255)+((j&255)+(h&255)))))))&255^165|0)==(d[c+9|0]|0|0)|0;i=e;return g|0}function Ed(){var a=0;if((Jd(55200)|0)<<24>>24==0){a=0;return a|0}Td(55200,46608,10)|0;a=1;return a|0}function Fd(){var a=0;a=Md(55200,2)|0;Od(a,46608,10)|0;Ld(a);if(!((d[46608]|d[46609]<<8)<<16>>16<<16>>16==0)){return}rd(0);return}function Gd(){return}function Hd(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;e=i;f=c;c=i;i=i+4|0;i=i+7&-8;w=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;if((b&65535)>>>0>19>>>0){i=e;return}f=41160+((b&65535)<<2)|0;b=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=vn(c)|0;g=241272+((f&65535)<<2)|0;if(((d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24)&8388608|0)==0){h=0}else{j=0;while(1){k=j&255;l=258600+(k*20|0)|0;m=258612+(k*20|0)|0;if((d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0)!=0?(n=258616+(k*20|0)|0,(vn(n)|0)<<16>>16==f<<16>>16):0){o=241272+(((vn(n)|0)&65535)<<2)|0;w=(d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24)&-8388609;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;if((l|0)!=0){a[258605+(k*20|0)|0]=0;Li(24,n,0,a[46630]|0)}w=0;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w}m=j+1&255;if((m&255)>>>0<32>>>0){j=m}else{h=0;break}}}while(1){p=h&255;q=258612+(p*20|0)|0;j=h+1&255;if((d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0)==0){break}if((j&255)>>>0<32>>>0){h=j}else{r=12;break}}if((r|0)==12){i=e;return}w=b;a[q]=w;w=w>>8;a[q+1|0]=w;w=w>>8;a[q+2|0]=w;w=w>>8;a[q+3|0]=w;a[258606+(p*20|0)|0]=0;q=258608+(p*20|0)|0;w=0;a[q]=w;w=w>>8;a[q+1|0]=w;q=c|0;c=258616+(p*20|0)|0;w=d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;a[258605+(p*20|0)|0]=0;c=258600+(p*20|0)|0;w=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;w=0;a[202768]=w;w=w>>8;a[202769]=w;w=w>>8;a[202770]=w;w=w>>8;a[202771]=w;w=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|8388608;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;i=e;return}function Id(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;b=d[202768]|d[202769]<<8|d[202770]<<16|d[202771]<<24|0;if(b>>>0>(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0){return}w=b+1e4|0;a[202768]=w;w=w>>8;a[202769]=w;w=w>>8;a[202770]=w;w=w>>8;a[202771]=w;b=0;a:while(1){c=b&255;e=258600+(c*20|0)|0;f=258612+(c*20|0)|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;b:do{if((g|0)!=0){h=e|0;i=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;c:do{if(!((d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)>>>0>i>>>0)){j=258606+(c*20|0)|0;k=a[j]|0;l=k&255;m=g+(l<<2)+2|0;n=(d[m]|d[m+1|0]<<8)<<16>>16;m=a[g+(l<<2)|0]|0;a[j]=k+1;switch(m&255|0){case 1:{m=258608+(c*20|0)|0;w=n;a[m]=w;w=w>>8;a[m+1|0]=w;if((e|0)==0){break c}a[258605+(c*20|0)|0]=1;Li(24,258616+(c*20|0)|0,0,a[46632]|0);break c;break};case 2:{w=i+(n&65535)|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;break c;break};case 3:{w=(($n(0,n)|0)&65535)+i|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;break c;break};case 4:{m=258616+(c*20|0)|0;w=(((n&2048)==0?n:n|-4096)&65535)<<16;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w;break c;break};case 5:{m=vn(258616+(c*20|0)|0)|0;if((xi(m)|0)<<24>>24==0){break c}k=Ai(m)|0;if((k-12&65535)>>>0<2>>>0){break c}j=m&65535;l=241272+(j<<2)|0;if(k<<16>>16==10){o=233080+(j<<1)|0;j=l;w=(d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24)&-512|(d[o]|d[o+1|0]<<8)<<16>>16&511;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;Bi(m,0,0)}j=a[15283+((k&65535)<<4)|0]|0;k=71552+((j&255)<<1)|0;o=(d[k]|d[k+1|0]<<8)<<16>>16<<16>>16;if(j<<24>>24==0){break c}j=l;l=(d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0)>>>9&127;if((xm(l)|0)<<24>>24==0){break c}k=d[257696]|d[257697]<<8|d[257698]<<16|d[257699]<<24|0;p=k+(o<<1)|0;o=(d[p]|d[p+1|0]<<8)<<16>>16&65535;p=k+(o<<1)|0;q=(d[p]|d[p+1|0]<<8)<<16>>16;if(!((q&65535)>>>0>(l&65535)>>>0)?(r=k+(o+10<<1)|0,!((l&65535)>>>0>((d[r]|d[r+1|0]<<8)<<16>>16&65535)>>>0)):0){r=l-q&65535;s=(r&65535)>>>0<4>>>0?r+2&65535:r}else{s=(Zn()|0)&1}Fi(m,-1);r=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;if((r&511|0)==((d[262376]|d[262377]<<8)<<16>>16&65535|0)){Di(m,(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255);break c}else{w=((d[p]|d[p+1|0]<<8)<<16>>16&65535)+(s&65535)<<9&65024|r&-65025;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;Bi(m,0,0);break c}break};case 6:{sd(n,258616+(c*20|0)|0);break c;break};case 8:{m=258616+(c*20|0)|0;j=vn(m)|0;if((_m(j)|0)!=0){break c}r=((Zn()|0)&1)+n&65535;n=(a[15280+(((Ai(j)|0)&65535)<<4)|0]|0)!=0;j=r+(n?0:2)&65535;if(!((j&65535)>>>0<16>>>0)){t=30;break a}Lc(43608+((j&65535)<<5)|0,m,0,a[258604+(c*20|0)|0]|0,3);break c;break};case 9:{m=vn(258616+(c*20|0)|0)|0;j=241272+((m&65535)<<2)|0;if(((d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24)&511|0)!=((d[262376]|d[262377]<<8)<<16>>16&65535|0)){break c}Di(m,(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255);break c;break};case 7:{break c;break};default:{m=258616+(c*20|0)|0;j=241272+(((vn(m)|0)&65535)<<2)|0;w=(d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24)&-8388609;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;if((e|0)!=0){a[258605+(c*20|0)|0]=0;Li(24,m,0,a[46630]|0)}w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;break b}}}}while(0);if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)!=0?(i=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0,!(i>>>0>(d[202768]|d[202769]<<8|d[202770]<<16|d[202771]<<24|0)>>>0)):0){w=i;a[202768]=w;w=w>>8;a[202769]=w;w=w>>8;a[202770]=w;w=w>>8;a[202771]=w}}}while(0);f=b+1&255;if((f&255)>>>0<32>>>0){b=f}else{t=38;break}}if((t|0)==30){Nb(49592,63976,158,69584)}else if((t|0)==38){return}}function Jd(b){b=b|0;var c=0,e=0;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;c=Kd(b,1)|0;if(!(c<<24>>24==-1)){if(!((c&255)>>>0>19>>>0)?(b=137328+((c&255)<<4)|0,c=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0,(c|0)!=0):0){w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(c|0)|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;e=1}else{e=1}}else{e=0}w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;return e|0}function Kd(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0;e=i;i=i+3080|0;f=e+2048|0;g=e+3072|0;h=e|0;j=e+1024|0;Ka(h|0,1024,57072,(k=i,i=i+8|0,w=b,a[k]=w,w=w>>8,a[k+1|0]=w,w=w>>8,a[k+2|0]=w,w=w>>8,a[k+3|0]=w,k)|0)|0;i=k;l=a[h]|0;if(!(l<<24>>24==0)){m=h;n=l;do{if((n-65&255)>>>0<26>>>0){a[m]=n+32}m=m+1|0;n=a[m]|0}while(!(n<<24>>24==0))}n=c&255;m=(n&1|0)==0;l=(n&2|0)==0;if((n&3|0)==0){o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}else{t=0;u=0}while(1){n=137328+(u<<4)|0;v=t+1&255;if((d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0)==0){x=t;y=u;break}n=v&255;if((v&255)>>>0<20>>>0){t=v;u=n}else{x=v;y=n;break}}if(x<<24>>24==20){o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}if(c<<24>>24==2){z=54680}else{z=c<<24>>24==3?52304:49952}c=ib(h|0,z|0)|0;z=137328+(y<<4)|0;w=c;a[z]=w;w=w>>8;a[z+1|0]=w;w=w>>8;a[z+2|0]=w;w=w>>8;a[z+3|0]=w;if((c|0)!=0){h=137336+(y<<4)|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=137340+(y<<4)|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=137332+(y<<4)|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;if(m){o=x;p=1024;q=0;r=1024;s=0;i=e;return o|0}Tb(c|0,0,2)|0;w=Ra(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;Tb(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0,0,0)|0;o=x;p=1024;q=0;r=1024;s=0;i=e;return o|0}if(l){A=0}else{o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}while(1){B=A&65535;l=24624+(B*24|0)|0;h=A+1&65535;if((Fp(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0,b)|0)==0){break}if((h&65535)>>>0<676>>>0){A=h}else{o=-1;C=50;break}}if((C|0)==50){p=1024;q=0;r=1024;s=0;i=e;return o|0}if(A<<16>>16==-1){o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}A=24644+(B*24|0)|0;if((a[A]&4)==0){o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}b=24640+(B*24|0)|0;h=24624+((d[b]|0)*24|0)|0;Ka(j|0,1024,57072,(k=i,i=i+8|0,w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0,a[k]=w,w=w>>8,a[k+1|0]=w,w=w>>8,a[k+2|0]=w,w=w>>8,a[k+3|0]=w,k)|0)|0;i=k;k=a[j]|0;if(!(k<<24>>24==0)){h=j;l=k;do{if((l-65&255)>>>0<26>>>0){a[h]=l+32}h=h+1|0;l=a[h]|0}while(!(l<<24>>24==0))}l=ib(j|0,49952)|0;w=l;a[z]=w;w=w>>8;a[z+1|0]=w;w=w>>8;a[z+2|0]=w;w=w>>8;a[z+3|0]=w;if((l|0)==0){o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}a:do{if((a[A]&1)==0){j=f|0;h=g;b:do{if((rb(h|0,4,1,l|0)|0)==1){k=-1;c:while(1){while(1){D=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;if((D|0)==0){C=45;break c}else{E=0}while(1){c=f+(E&65535)|0;if((rb(c|0,1,1,d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0)!=1){C=29;break c}m=a[c]|0;if(m<<24>>24==0){F=E;break}if((m-65&255)>>>0<26>>>0){a[c]=m+32}m=E+1&65535;if((m&65535)>>>0<1024>>>0){E=m}else{F=m;break}}if(F<<16>>16==1024){C=35;break c}else{G=0}while(1){H=G&65535;m=24624+(H*24|0)|0;c=G+1&65535;if((Fp(d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0,j)|0)==0){C=38;break}if((c&65535)>>>0<676>>>0){G=c}else{break}}if(((C|0)==38?(C=0,!(G<<16>>16==-1)):0)?(a[24640+(H*24|0)|0]|0)==(a[b]|0):0){break}if((rb(h|0,4,1,d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0)!=1){break b}}c=24644+(H*24|0)|0;a[c]=a[c]|1;c=24636+(H*24|0)|0;w=D;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;if(!(k<<16>>16==-1)){c=k&65535;m=24636+(c*24|0)|0;u=24628+(c*24|0)|0;w=D-(d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24)|0;a[u]=w;w=w>>8;a[u+1|0]=w;w=w>>8;a[u+2|0]=w;w=w>>8;a[u+3|0]=w}if((rb(h|0,4,1,d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0)==1){k=G}else{break b}}if((C|0)==29){qa(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0;w=0;a[z]=w;w=w>>8;a[z+1|0]=w;w=w>>8;a[z+2|0]=w;w=w>>8;a[z+3|0]=w;o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}else if((C|0)==35){qa(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0;w=0;a[z]=w;w=w>>8;a[z+1|0]=w;w=w>>8;a[z+2|0]=w;w=w>>8;a[z+3|0]=w;o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}else if((C|0)==45){if(k<<16>>16==-1){break a}u=k&65535;Tb(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0,0,2)|0;m=Ra(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0;c=24636+(u*24|0)|0;t=24628+(u*24|0)|0;w=m-(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24)|0;a[t]=w;w=w>>8;a[t+1|0]=w;w=w>>8;a[t+2|0]=w;w=w>>8;a[t+3|0]=w;break a}}}while(0);qa(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0;w=0;a[z]=w;w=w>>8;a[z+1|0]=w;w=w>>8;a[z+2|0]=w;w=w>>8;a[z+3|0]=w;o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}}while(0);if((a[A]&1)==0){qa(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0)|0;w=0;a[z]=w;w=w>>8;a[z+1|0]=w;w=w>>8;a[z+2|0]=w;w=w>>8;a[z+3|0]=w;o=-1;p=1024;q=0;r=1024;s=0;i=e;return o|0}else{A=24636+(B*24|0)|0;C=d[A]|d[A+1|0]<<8|d[A+2|0]<<16|d[A+3|0]<<24|0;A=137336+(y<<4)|0;w=C;a[A]=w;w=w>>8;a[A+1|0]=w;w=w>>8;a[A+2|0]=w;w=w>>8;a[A+3|0]=w;A=137340+(y<<4)|0;w=0;a[A]=w;w=w>>8;a[A+1|0]=w;w=w>>8;a[A+2|0]=w;w=w>>8;a[A+3|0]=w;A=24628+(B*24|0)|0;B=137332+(y<<4)|0;w=d[A]|d[A+1|0]<<8|d[A+2|0]<<16|d[A+3|0]<<24|0;a[B]=w;w=w>>8;a[B+1|0]=w;w=w>>8;a[B+2|0]=w;w=w>>8;a[B+3|0]=w;Tb(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0,C|0,0)|0;o=x;p=1024;q=0;r=1024;s=0;i=e;return o|0}return 0}function Ld(b){b=b|0;var c=0;if((b&255)>>>0>19>>>0){return}c=137328+((b&255)<<4)|0;b=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((b|0)==0){return}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(b|0)|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;return}function Md(b,c){b=b|0;c=c|0;var e=0,f=0;e=i;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;f=Kd(b,c)|0;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;if(f<<24>>24==-1){Gj(49488,(c=i,i=i+8|0,w=b,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;Sa(1);return 0}else{i=e;return f|0}return 0}function Nd(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;f=i;if((b&255)>>>0>19>>>0){g=0;i=f;return g|0}h=b&255;b=137328+(h<<4)|0;j=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((j|0)==0){g=0;i=f;return g|0}k=137340+(h<<4)|0;l=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;m=137332+(h<<4)|0;h=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0;if(l>>>0>=h>>>0|(e|0)==0){g=0;i=f;return g|0}m=h-l|0;l=m>>>0<e>>>0?m:e;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;if((rb(c|0,l|0,1,j|0)|0)!=1){Gj(63904,(j=i,i=i+1|0,i=i+7&-8,w=0,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0);i=j;j=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((j|0)==0){n=0}else{w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(j|0)|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;n=0}}else{n=l}w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;w=(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)+n|0;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;g=n;i=f;return g|0}function Od(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,j=0,k=0;f=i;if((b&255)>>>0>19>>>0){g=0;i=f;return g|0}h=b&255;b=137328+(h<<4)|0;j=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((j|0)==0){g=0;i=f;return g|0}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;if((wa(c|0,e|0,1,j|0)|0)!=1){Gj(60352,(j=i,i=i+1|0,i=i+7&-8,w=0,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0);i=j;j=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((j|0)==0){k=0}else{w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(j|0)|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;k=0}}else{k=e}w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;e=137340+(h<<4)|0;b=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+k|0;w=b;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=137332+(h<<4)|0;if(!(b>>>0>(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0)>>>0)){g=k;i=f;return g|0}w=b;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;g=k;i=f;return g|0}function Pd(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;if((b&255)>>>0>19>>>0){f=0;return f|0}g=b&255;b=137328+(g<<4)|0;h=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((h|0)==0){f=0;return f|0}if((e&255)>>>0>2>>>0){w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(h|0)|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;f=0;return f|0}b=e&255;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;if((b|0)==2){e=137336+(g<<4)|0;i=137332+(g<<4)|0;Tb(h|0,(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)-c+(d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24)|0,0)|0;e=(d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24)-c|0;i=137340+(g<<4)|0;w=e;a[i]=w;w=w>>8;a[i+1|0]=w;w=w>>8;a[i+2|0]=w;w=w>>8;a[i+3|0]=w;j=e}else if((b|0)==1){Tb(h|0,c|0,1)|0;e=137340+(g<<4)|0;i=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+c|0;w=i;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;j=i}else if((b|0)==0){b=137336+(g<<4)|0;Tb(h|0,(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)+c|0,0)|0;b=137340+(g<<4)|0;w=c;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;j=c}else{c=137340+(g<<4)|0;j=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0}w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;f=j;return f|0}function Qd(a){a=a|0;var b=0,c=0;if((a&255)>>>0>19>>>0){b=0;return b|0}c=a&255;a=137328+(c<<4)|0;if((d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0)==0){b=0;return b|0}a=137332+(c<<4)|0;b=d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0;return b|0}function Rd(b){b=b|0;var c=0,e=0,f=0,g=0;c=i;i=i+1024|0;e=c|0;Ka(e|0,1024,57072,(f=i,i=i+8|0,w=b,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0)|0;i=f;f=a[e]|0;if(!(f<<24>>24==0)){b=e;g=f;do{if((g-65&255)>>>0<26>>>0){a[b]=g+32}b=b+1|0;g=a[b]|0}while(!(g<<24>>24==0))}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;_b(e|0)|0;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;i=c;return}function Sd(b){b=b|0;var c=0;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;c=Kd(b,2)|0;if(!((c&255)>>>0>19>>>0)?(b=137328+((c&255)<<4)|0,c=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0,(c|0)!=0):0){w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(c|0)|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w}w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;return}function Td(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0;f=i;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;g=Kd(b,1)|0;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;if(g<<24>>24==-1){Gj(49488,(h=i,i=i+8|0,w=b,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;Sa(1);return 0}h=Nd(g,c,e)|0;if((g&255)>>>0>19>>>0){i=f;return h|0}e=137328+((g&255)<<4)|0;g=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;if((g|0)==0){i=f;return h|0}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(g|0)|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;i=f;return h|0}function Ud(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=i;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;e=Kd(b,1)|0;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;if(e<<24>>24==-1){Gj(49488,(f=i,i=i+8|0,w=b,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0);i=f;Sa(1);return 0}f=(e&255)>>>0>19>>>0;if(!f?(b=e&255,g=137328+(b<<4)|0,(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0)!=0):0){g=137332+(b<<4)|0;h=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0}else{h=0}g=yp(h+1|0)|0;Nd(e,g,h)|0;a[g+h|0]=0;if(f){i=c;return g|0}f=137328+((e&255)<<4)|0;e=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;if((e|0)==0){i=c;return g|0}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(e|0)|0;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;i=c;return g|0}function Vd(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;f=Kd(b,1)|0;g=(d[258224]|d[258225]<<8)<<16>>16;w=g-1&65535;a[258224]=w;w=w>>8;a[258225]=w;if(f<<24>>24==-1){Gj(49488,(h=i,i=i+8|0,w=b,a[h]=w,w=w>>8,a[h+1|0]=w,w=w>>8,a[h+2|0]=w,w=w>>8,a[h+3|0]=w,h)|0);i=h;Sa(1);return 0}if((f&255)>>>0>19>>>0){Nd(f,c,0)|0;j=0;i=e;return j|0}h=f&255;b=137328+(h<<4)|0;k=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((k|0)!=0){w=g;a[258224]=w;w=w>>8;a[258225]=w;g=137336+(h<<4)|0;l=137332+(h<<4)|0;Tb(k|0,(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24)+(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24)|0,0)|0;g=d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0;l=137340+(h<<4)|0;w=g;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;l=(d[258224]|d[258225]<<8)<<16>>16;w=l-1&65535;a[258224]=w;w=w>>8;a[258225]=w;k=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((k|0)==0){m=g}else{w=l;a[258224]=w;w=w>>8;a[258225]=w;l=137336+(h<<4)|0;Tb(k|0,d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0,0)|0;l=137340+(h<<4)|0;w=0;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;m=g}}else{m=0}Nd(f,c,m)|0;c=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((c|0)==0){j=m;i=e;return j|0}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(c|0)|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;j=m;i=e;return j|0}function Wd(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;c=i;i=i+8|0;e=c|0;w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;f=Kd(b,1)|0;g=(d[258224]|d[258225]<<8)<<16>>16;h=g-1&65535;w=h;a[258224]=w;w=w>>8;a[258225]=w;if(f<<24>>24==-1){Gj(49488,(j=i,i=i+8|0,w=b,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0);i=j;Sa(1);return 0}if(!((f&255)>>>0>19>>>0)?(k=137328+((f&255)<<4)|0,f=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0,(f|0)!=0):0){w=g;a[258224]=w;w=w>>8;a[258225]=w;qa(f|0)|0;w=0;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;w=k;a[258224]=w;w=w>>8;a[258225]=w;l=k}else{l=h}w=l+1&65535;a[258224]=w;w=w>>8;a[258225]=w;l=Kd(b,1)|0;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;if(l<<24>>24==-1){Gj(49488,(j=i,i=i+8|0,w=b,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0);i=j;Sa(1);return 0}Nd(l,e,4)|0;j=(l&255)>>>0>19>>>0;if((d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0)==1297239878){if(j){m=l;i=c;return m|0}e=l&255;b=137328+(e<<4)|0;h=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((h|0)==0){m=l;i=c;return m|0}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;Tb(h|0,4,1)|0;h=137340+(e<<4)|0;w=(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+4|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;m=l;i=c;return m|0}else{if(j){m=-1;i=c;return m|0}j=137328+((l&255)<<4)|0;l=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;if((l|0)==0){m=-1;i=c;return m|0}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(l|0)|0;w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;m=-1;i=c;return m|0}return 0}function Xd(b){b=b|0;var c=0;if((b&255)>>>0>19>>>0){return}c=137328+((b&255)<<4)|0;b=d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0;if((b|0)==0){return}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;qa(b|0)|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;return}function Yd(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;e=i;i=i+16|0;f=e|0;g=e+8|0;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;h=f;Nd(b,h,4)|0;j=g;k=(b&255)>>>0>19>>>0;l=b&255;m=137328+(l<<4)|0;n=137340+(l<<4)|0;o=137336+(l<<4)|0;l=(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)==0;if(k){if(l){Nd(b,h,4)|0}Nd(b,j,4)|0;p=Fb(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0)|0;w=p;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)==(c|0)){q=p}else{r=19}}else{if(l){Nd(b,h,4)|0}Nd(b,j,4)|0;l=Fb(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0)|0;w=l;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)==(c|0)){q=l}else{r=19}}a:do{if((r|0)==19){if(!k?(l=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0,(l|0)!=0):0){w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;Tb(l|0,(d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24)+12|0,0)|0;w=12;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w}b:while(1){if((Nd(b,h,4)|0)!=4){s=0;r=23;break}while(1){if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)==0?(Nd(b,h,4)|0)!=4:0){s=0;r=23;break b}if((Nd(b,j,4)|0)!=4){s=0;r=23;break b}l=Fb(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0)|0;w=l;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)==(c|0)){q=l;break a}p=l+1&-2;w=p;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;if(k){continue b}l=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0;if((l|0)!=0){w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;Tb(l|0,p|0,1)|0;w=(d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24)+p|0;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w}if((Nd(b,h,4)|0)!=4){s=0;r=23;break b}}}if((r|0)==23){i=e;return s|0}}}while(0);if(k){s=q;i=e;return s|0}k=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0;if((k|0)==0){s=q;i=e;return s|0}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;Tb(k|0,-8|0,1)|0;w=(d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24)-8|0;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;s=q;i=e;return s|0}function Zd(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;g=i;i=i+16|0;h=g|0;j=g+8|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;k=h;Nd(b,k,4)|0;l=j;m=(b&255)>>>0>19>>>0;n=b&255;o=137328+(n<<4)|0;p=137340+(n<<4)|0;q=137336+(n<<4)|0;n=0;a:while(1){while(1){if((d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)==0?(Nd(b,k,4)|0)!=4&n:0){r=0;s=20;break a}if((Nd(b,l,4)|0)!=4&n){r=0;s=20;break a}t=Fb(d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0)|0;w=t;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;if((d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)==(c|0)){s=7;break a}if(!n){s=12;break}u=t+1&-2;w=u;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;if(m){break}v=d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0;if((v|0)!=0){w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;Tb(v|0,u|0,1)|0;w=(d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24)+u|0;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w}if((Nd(b,k,4)|0)!=4){r=0;s=20;break a}}if(((s|0)==12?(s=0,!m):0)?(u=d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0,(u|0)!=0):0){w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;Tb(u|0,(d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24)+12|0,0)|0;w=12;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w}if((Nd(b,k,4)|0)==4){n=1}else{r=0;s=20;break}}if((s|0)==7){n=t>>>0>f>>>0?f:t;Nd(b,e,n)|0;e=t+1&-2;w=e;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;if(!(n>>>0<e>>>0)){r=n;i=g;return r|0}j=e-n|0;if(m){r=n;i=g;return r|0}m=d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0;if((m|0)==0){r=n;i=g;return r|0}w=((d[258224]|d[258225]<<8)<<16>>16)+1&65535;a[258224]=w;w=w>>8;a[258225]=w;Tb(m|0,j|0,1)|0;w=(d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24)+j|0;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;w=((d[258224]|d[258225]<<8)<<16>>16)-1&65535;a[258224]=w;w=w>>8;a[258225]=w;r=n;i=g;return r|0}else if((s|0)==20){i=g;return r|0}return 0}function _d(){var a=0;a=72048+(((d[231240]|d[231241]<<8)<<16>>16&65535)>>>1<<2)|0;return d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0}function $d(a){a=a|0;var b=0;b=72048+((a&65535)>>>1<<2)|0;return d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0}function ae(a){a=a|0;var b=0;b=136+((a&65535)>>>1<<1)|0;return(d[b]|d[b+1|0]<<8)<<16>>16|0}function be(){var b=0;b=Ap(1,298309)|0;w=b;a[72048]=w;w=w>>8;a[72049]=w;w=w>>8;a[72050]=w;w=w>>8;a[72051]=w;w=b+64e3|0;a[72052]=w;w=w>>8;a[72053]=w;w=w>>8;a[72054]=w;w=w>>8;a[72055]=w;w=b+128500|0;a[72056]=w;w=w>>8;a[72057]=w;w=w>>8;a[72058]=w;w=w>>8;a[72059]=w;w=b+192500|0;a[72060]=w;w=w>>8;a[72061]=w;w=w>>8;a[72062]=w;w=w>>8;a[72063]=w;w=b+257281|0;a[72064]=w;w=w>>8;a[72065]=w;w=w>>8;a[72066]=w;w=w>>8;a[72067]=w;w=0;a[231240]=w;w=w>>8;a[231241]=w;return}function ce(){zp(d[72048]|d[72049]<<8|d[72050]<<16|d[72051]<<24|0);Lp(72048,0,20)|0;return}function de(b){b=b|0;var c=0;c=(d[231240]|d[231241]<<8)<<16>>16;w=b;a[231240]=w;w=w>>8;a[231241]=w;return c|0}function ee(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;g=i;i=i+16|0;h=g|0;if(!((f&255)>>>0<6>>>0)){Nb(48344,63168,127,69568)}j=b&65535;b=f<<4;f=a[47984]|0;k=(d[257688]|d[257689]<<8|d[257690]<<16|d[257691]<<24)+(d[(d[257680]|d[257681]<<8|d[257682]<<16|d[257683]<<24)+j|0]<<4)|0;l=0;while(1){m=a[k]|0;n=m+112&255;if(f<<24>>24==0){o=(n&255)>>>0<17>>>0?b:0}else{o=(n&255)>>>0<7>>>0?b:0}a[h+l|0]=m+o;m=l+1|0;if((m|0)<16){k=k+1|0;l=m}else{break}}if((a[71888]|0)==4){i=g;return}l=72048+(((d[231240]|d[231241]<<8)<<16>>16&65535)>>>1<<2)|0;k=(d[231128]|d[231129]<<8|d[231130]<<16|d[231131]<<24)+(aa(j<<4,d[71896]|0)|0)|0;j=(d[71904]|d[71905]<<8)<<16>>16;o=j&65535;if(j<<16>>16==0){i=g;return}j=(d[71872]|d[71873]<<8)<<16>>16;b=j&65535;f=(d[71880]|d[71881]<<8)<<16>>16&65535;if(j<<16>>16==0){i=g;return}j=b>>>0>1>>>0?b:1;m=j<<1;n=(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24)+(((e&65535)*320|0)+(c&65535))|0;c=k;k=0;while(1){e=n;l=c;p=0;while(1){q=a[l]|0;r=a[h+((q&255)>>>4&255)|0]|0;if(!(r<<24>>24==0)){a[e]=r}r=a[h+(q&15)|0]|0;if(!(r<<24>>24==0)){a[e+1|0]=r}r=p+1|0;if((r|0)<(b|0)){e=e+2|0;l=l+1|0;p=r}else{break}}p=k+1|0;if((p|0)<(o|0)){n=n+(m+f)|0;c=c+j|0;k=p}else{break}}i=g;return}function fe(b,c){b=b|0;c=c|0;var d=0;if(b<<16>>16==c<<16>>16&(b&65535)>>>0<3>>>0){a[71888]=b&2;a[71896]=2<<(b&65535);w=b<<2;a[71872]=w;w=w>>8;a[71873]=w;c=b<<3;w=c;a[71904]=w;w=w>>8;a[71905]=w;d=320-c&65535;w=d;a[71880]=w;w=w>>8;a[71881]=w;return}else{a[71888]=4;a[71896]=2;w=4;a[71872]=w;w=w>>8;a[71873]=w;w=8;a[71904]=w;w=w>>8;a[71905]=w;d=312;w=d;a[71880]=w;w=w>>8;a[71881]=w;return}}function ge(b,c,e){b=b|0;c=c|0;e=e|0;var f=0;if((c&65535)>>>0>199>>>0|(b&65535)>>>0>319>>>0){return}f=72048+(((d[231240]|d[231241]<<8)<<16>>16&65535)>>>1<<2)|0;a[(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)+(((c&65535)*320|0)+(b&65535))|0]=e;return}function he(b,c,e,f,g,h,i,j,k){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;var l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;if(b<<16>>16>319){return}if(b<<16>>16<0){l=0;m=e+b&65535;n=g+b&65535}else{l=b;m=e;n=g}if(c<<16>>16>199){return}if(c<<16>>16<0){o=0;p=h+c&65535;q=f+c&65535}else{o=c;p=h;q=f}if(m<<16>>16>319){return}if(m<<16>>16<0){r=l+m&65535;s=0;t=m+n&65535}else{r=l;s=m;t=n}if(q<<16>>16>199){return}if(q<<16>>16<0){u=o+q&65535;v=p+q&65535;w=0}else{u=o;v=p;w=q}q=r<<16>>16;p=320-q|0;o=(p-(t<<16>>16)|0)<0?p&65535:t;t=u<<16>>16;p=200-t|0;n=(p-(v<<16>>16)|0)<0?p&65535:v;v=s<<16>>16;p=320-v|0;m=(p-(o<<16>>16)|0)<0?p&65535:o;o=w<<16>>16;p=200-o|0;l=(p-(n<<16>>16)|0)<0?p&65535:n;if((r&65535)>>>0>319>>>0|s<<16>>16<0|s<<16>>16>319|u<<16>>16<0|u<<16>>16>199|w<<16>>16<0|w<<16>>16>199){return}w=m<<16>>16;if((m&65535)>>>0>319>>>0|l<<16>>16<0|l<<16>>16>199){return}u=72048+((i&65535)>>>1<<2)|0;i=72048+((j&65535)>>>1<<2)|0;j=(d[u]|d[u+1|0]<<8|d[u+2|0]<<16|d[u+3|0]<<24)+((t*320|0)+q)|0;q=(d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24)+((o*320|0)+v)|0;v=l-1&65535;if(l<<16>>16==0){return}l=m<<16>>16>0;if(k<<24>>24==0){if(l){k=j;m=q;o=v;while(1){Mp(m|0,k|0,w|0)|0;if(o<<16>>16==0){break}else{k=k+320|0;m=m+320|0;o=o-1&65535}}return}else{o=j;m=q;k=v;while(1){Mp(m|0,o|0,w|0)|0;if(k<<16>>16==0){break}else{o=o+320|0;m=m+320|0;k=k-1&65535}}return}}if(l){x=j;y=q;z=v}else{return}while(1){v=0;q=0;do{j=a[x+q|0]|0;if(!(j<<24>>24==0)){a[y+q|0]=j}v=v+1&65535;q=v&65535}while((q|0)<(w|0));if(z<<16>>16==0){break}else{x=x+320|0;y=y+320|0;z=z-1&65535}}return}function ie(a,b,c,e,f,g,h,i){a=a|0;b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0,o=0;if(a<<16>>16>319){return}if(b<<16>>16>199){return}if(c<<16>>16>319){return}j=e<<16>>16;k=((g<<16>>16)+j|0)>200?199-e&65535:g;if(k<<16>>16<0|e<<16>>16>199){return}g=f<<16>>16;if(f<<16>>16<1){return}l=72048+((i&65535)>>>1<<2)|0;i=72048+((h&65535)>>>1<<2)|0;if(f<<16>>16>320|k<<16>>16==0){return}else{m=k;n=(d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24)+((b<<16>>16<0?0:(b<<16>>16)*320|0)+(a<<16>>16<0?0:a<<16>>16))|0;o=(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24)+((e<<16>>16<0?0:j*320|0)+(c<<16>>16<0?0:c<<16>>16))|0}while(1){c=m-1&65535;Mp(o|0,n|0,g|0)|0;if(c<<16>>16==0){break}else{m=c;n=n+320|0;o=o+320|0}}return}function je(){var a=0;a=72048+(((d[231240]|d[231241]<<8)<<16>>16&65535)>>>1<<2)|0;Lp(d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0,0,64e3)|0;return}function ke(a){a=a|0;jp(a,0,256);Kp(232120,a|0,768)|0;return}function le(b,c){b=b|0;c=c|0;var e=0,f=0;if((c&65535)>>>0>199>>>0|(b&65535)>>>0>319>>>0){e=0;return e|0}f=72048+(((d[231240]|d[231241]<<8)<<16>>16&65535)>>>1<<2)|0;e=a[(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)+(((c&65535)*320|0)+(b&65535))|0]|0;return e|0}function me(a,b){a=a|0;b=b|0;var c=0;c=a<<16>>16<1?1:a;a=b<<16>>16<1?1:b;return aa(a<<16>>16>200?200:a,c<<16>>16>320?320:c)|0}function ne(a,b,c,e,f){a=a|0;b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0;if(c<<16>>16==0|e<<16>>16==0){return}g=a<<16>>16<0?0:a;a=b<<16>>16<0?0:b;b=g<<16>>16>319?319:g<<16>>16;g=320-b|0;h=a<<16>>16>199?199:a<<16>>16;a=200-h|0;i=(e&65535|0)>(a|0)?a&65535:e;if(i<<16>>16==0){return}e=((c&65535|0)>(g|0)?g&65535:c)&65535;c=i;i=f;f=(d[72048]|d[72049]<<8|d[72050]<<16|d[72051]<<24)+((h*320|0)+b)|0;while(1){b=c-1&65535;Kp(f|0,i|0,e)|0;if(b<<16>>16==0){break}else{c=b;i=i+e|0;f=f+320|0}}return}function oe(a,b,c,e,f){a=a|0;b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0;if(c<<16>>16==0|e<<16>>16==0){return}g=a<<16>>16<0?0:a;a=b<<16>>16<0?0:b;b=g<<16>>16>319?319:g<<16>>16;g=320-b|0;h=a<<16>>16>199?199:a<<16>>16;a=200-h|0;i=(e&65535|0)>(a|0)?a&65535:e;if(i<<16>>16==0){return}e=((c&65535|0)>(g|0)?g&65535:c)&65535;c=i;i=f;f=(d[72048]|d[72049]<<8|d[72050]<<16|d[72051]<<24)+((h*320|0)+b)|0;while(1){b=c-1&65535;Kp(i|0,f|0,e)|0;if(b<<16>>16==0){break}else{c=b;i=i+e|0;f=f+320|0}}return}function pe(b){b=b|0;var c=0;c=(d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24)+4|0;return(a[46640]|0)+(d[(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24)+((b&255)<<3)|0]|0)&65535|0}function qe(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;if((b|0)==0){c=0;return c|0}e=a[b]|0;if(e<<24>>24==0){c=0;return c|0}f=(d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24)+4|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=a[46640]|0;h=b;b=0;i=e;while(1){e=h+1|0;j=((d[g+((i&255)<<3)|0]|0)+b&65535)+f&65535;k=a[e]|0;if(k<<24>>24==0){c=j;break}else{h=e;b=j;i=k}}return c|0}function re(b){b=b|0;if((b|0)==0){return}w=b;a[258200]=w;w=w>>8;a[258201]=w;w=w>>8;a[258202]=w;w=w>>8;a[258203]=w;return}function se(){var b=0;w=te(48232)|0;a[258192]=w;w=w>>8;a[258193]=w;w=w>>8;a[258194]=w;w=w>>8;a[258195]=w;w=te((a[261416]|0)==2?63120:59616)|0;a[258184]=w;w=w>>8;a[258185]=w;w=w>>8;a[258186]=w;w=w>>8;a[258187]=w;b=te(59280)|0;w=b;a[258176]=w;w=w>>8;a[258177]=w;w=w>>8;a[258178]=w;w=w>>8;a[258179]=w;return(b|0)!=0|0}function te(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0;if((Jd(b)|0)<<24>>24==0){c=0;return c|0}e=Ud(b)|0;b=e;f=e+2|0;if(!((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==1280)){zp(e);c=0;return c|0}f=Ap(1,8)|0;g=f;h=e+4|0;i=(d[h]|d[h+1|0]<<8)<<16>>16&65535;a[f]=a[e+(i+4)|0]|0;a[f+1|0]=a[e+(i+5)|0]|0;i=e+10|0;h=(d[i]|d[i+1|0]<<8)<<16>>16&255;i=e+8|0;j=(d[i]|d[i+1|0]<<8)<<16>>16&255;k=h-j&255;a[f+2|0]=k;l=Ap(k&255,8)|0;m=f+4|0;w=l;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w;if(!(h<<24>>24==j<<24>>24)){j=e+12|0;h=e+6|0;m=0;f=0;while(1){n=a[e+(((d[i]|d[i+1|0]<<8)<<16>>16&65535)+f)|0]|0;o=l+(f<<3)|0;a[o]=n;p=f<<1;a[l+(f<<3)+1|0]=a[e+(((d[j]|d[j+1|0]<<8)<<16>>16&65535)+p)|0]|0;q=a[e+((p|1)+((d[j]|d[j+1|0]<<8)<<16>>16&65535))|0]|0;p=l+(f<<3)+2|0;a[p]=q;r=b+((((d[h]|d[h+1|0]<<8)<<16>>16&65535)>>>1)+f<<1)|0;s=(d[r]|d[r+1|0]<<8)<<16>>16;r=s&65535;if(!(s<<16>>16==0)?(s=l+(f<<3)+4|0,w=yp(aa(n&255,q&255)|0)|0,a[s]=w,w=w>>8,a[s+1|0]=w,w=w>>8,a[s+2|0]=w,w=w>>8,a[s+3|0]=w,!(q<<24>>24==0)):0){t=0;u=0;v=n;n=q;while(1){if(v<<24>>24==0){x=0;y=n}else{q=1;z=0;A=v;while(1){B=A&255;C=a[e+((z>>>1)+r+(aa((B+1|0)/2|0,u)|0))|0]|0;D=(aa(B,u)|0)+z|0;a[(d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24)+D|0]=((z&1|0)==0?C:(C&255)>>>4)&15;E=a[o]|0;if(!((q&255)>>>0<(E&255)>>>0)){break}C=q&255;q=q+1&255;z=C;A=E}x=E;y=a[p]|0}A=t+1&255;if((A&255)>>>0<(y&255)>>>0){t=A;u=A&255;v=x;n=y}else{break}}}n=m+1&255;if((n&255)>>>0<(k&255)>>>0){m=n;f=n&255}else{break}}}zp(e);c=g;return c|0}function ue(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=d[258192]|d[258193]<<8|d[258194]<<16|d[258195]<<24|0;c=b+2|0;e=b+4|0;if((a[c]|0)!=0){f=0;do{g=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+((f&255)<<3)+4|0;zp(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0);f=f+1&255}while((f&255)>>>0<(d[c]|0)>>>0)}zp(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0);zp(b|0);w=0;a[258192]=w;w=w>>8;a[258193]=w;w=w>>8;a[258194]=w;w=w>>8;a[258195]=w;b=d[258184]|d[258185]<<8|d[258186]<<16|d[258187]<<24|0;e=b+2|0;c=b+4|0;if((a[e]|0)!=0){f=0;do{g=(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24)+((f&255)<<3)+4|0;zp(d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0);f=f+1&255}while((f&255)>>>0<(d[e]|0)>>>0)}zp(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);zp(b|0);w=0;a[258184]=w;w=w>>8;a[258185]=w;w=w>>8;a[258186]=w;w=w>>8;a[258187]=w;b=d[258176]|d[258177]<<8|d[258178]<<16|d[258179]<<24|0;c=b+2|0;e=b+4|0;if((a[c]|0)==0){h=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;i=h|0;zp(i);j=b|0;zp(j);w=0;a[258176]=w;w=w>>8;a[258177]=w;w=w>>8;a[258178]=w;w=w>>8;a[258179]=w;return}else{k=0}do{f=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+((k&255)<<3)+4|0;zp(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0);k=k+1&255}while((k&255)>>>0<(d[c]|0)>>>0);h=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;i=h|0;zp(i);j=b|0;zp(j);w=0;a[258176]=w;w=w>>8;a[258177]=w;w=w>>8;a[258178]=w;w=w>>8;a[258179]=w;return}function ve(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;we(a,b,c,b,e);we(a,d,c,d,e);we(a,b,a,d,e);we(c,b,c,d,e);return}function we(b,c,e,f,g){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0;h=_d()|0;i=b<<16>>16;j=(d[48016]|d[48017]<<8)<<16>>16;k=j&65535;l=(d[48020]|d[48021]<<8)<<16>>16;if((((((i|0)>=(k|0)?(m=l&65535,(i|0)<=(m|0)):0)?(i=c<<16>>16,n=(d[48018]|d[48019]<<8)<<16>>16&65535,(i|0)>=(n|0)):0)?(o=(d[48022]|d[48023]<<8)<<16>>16&65535,(i|0)<=(o|0)):0)?(i=e<<16>>16,!((i|0)<(k|0)|(i|0)>(m|0))):0)?(m=f<<16>>16,!((m|0)<(n|0)|(m|0)>(o|0))):0){p=f;q=e;r=c;s=b}else{t=7}a:do{if((t|0)==7){o=(d[48018]|d[48019]<<8)<<16>>16;m=o&65535;n=(d[48022]|d[48023]<<8)<<16>>16;i=n&65535;u=l&65535;v=f;w=e;x=c;y=b;b:while(1){z=x<<16>>16;A=(z|0)<(m|0)|0;B=(z|0)>(i|0)?A|2:A;A=y<<16>>16;C=(A|0)<(k|0)?B|4:B;B=(A|0)>(u|0)?C|8:C;C=v<<16>>16;D=(C|0)<(m|0)|0;E=(C|0)>(i|0)?D|2:D;D=w<<16>>16;F=(D|0)<(k|0)?E|4:E;E=(D|0)>(u|0)?F|8:F;if((B|E)<<16>>16==0){p=v;q=w;r=x;s=y;break a}if(!((B&E)<<16>>16==0)){break}switch(B&65535|0){case 1:case 9:{x=o;y=((aa(m-z|0,D-A|0)|0)/(C-z|0)|0)+A&65535;continue b;break};case 2:case 6:{x=n;y=((aa(z-i|0,D-A|0)|0)/(z-C|0)|0)+A&65535;continue b;break};case 8:case 10:{x=((aa(A-u|0,C-z|0)|0)/(A-D|0)|0)+z&65535;y=l;continue b;break};case 4:case 5:{x=((aa(k-A|0,C-z|0)|0)/(D-A|0)|0)+z&65535;y=j;continue b;break};default:{switch(E&65535|0){case 8:case 10:{v=((aa(D-u|0,z-C|0)|0)/(D-A|0)|0)+C&65535;w=l;continue b;break};case 2:case 6:{v=n;w=((aa(C-i|0,A-D|0)|0)/(C-z|0)|0)+D&65535;continue b;break};case 4:case 5:{v=((aa(k-D|0,z-C|0)|0)/(A-D|0)|0)+C&65535;w=j;continue b;break};case 1:case 9:{v=o;w=((aa(m-C|0,A-D|0)|0)/(z-C|0)|0)+D&65535;continue b;break};default:{continue b}}}}}return}}while(0);j=p-r&65535;if(p<<16>>16==r<<16>>16){k=s<<16>>16<q<<16>>16;l=k?s:q;Lp(h+((l<<16>>16)+((r<<16>>16)*320|0))|0,g|0,((1-l&65535)+(k?q:s)&65535)<<16>>16|0)|0;return}k=j<<16>>16<0;l=k?q:s;b=k?s:q;q=k?-j&65535:j;j=((k?p:r)<<16>>16)*320|0;r=b-l&65535;if(b<<16>>16==l<<16>>16){if(q<<16>>16==0){return}b=q;p=h+(j+(l<<16>>16))|0;while(1){k=b-1&65535;a[p]=g;if(k<<16>>16==0){break}else{b=k;p=p+320|0}}return}p=r<<16>>16<0;b=p?-r&65535:r;r=p?-1:1;p=h+(j+(l<<16>>16))|0;a[p]=g;if(!(b<<16>>16<q<<16>>16)){if(b<<16>>16==0){return}l=r+320|0;j=p;h=((b<<16>>16|0)/2|0)&65535;k=b;while(1){s=k-1&65535;c=h-q&65535;e=c<<16>>16<0;f=j+(e?l:r)|0;a[f]=g;if(s<<16>>16==0){break}else{j=f;h=c+(e?b:0)&65535;k=s}}return}if(q<<16>>16==0){return}k=r+320|0;r=((q<<16>>16|0)/2|0)&65535;h=p;p=q;while(1){j=p-1&65535;l=r-b&65535;if(l<<16>>16<0){G=h+k|0;H=l+q&65535}else{G=h+320|0;H=l}a[G]=g;if(j<<16>>16==0){break}else{r=H;h=G;p=j}}return}function xe(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=_d()|0;if(a<<16>>16>319){return}g=a<<16>>16<0?0:a;if(b<<16>>16>199){return}h=b<<16>>16<0?0:b;b=c<<16>>16>319?319:c;i=b<<16>>16<0?0:b;b=d<<16>>16>199?199:d;d=b<<16>>16<0?0:b;if(g<<16>>16>i<<16>>16|h<<16>>16>d<<16>>16){return}b=(i-g&65535)+1&65535;i=(1-h&65535)+d&65535;if(i<<16>>16==0){return}d=320-(b&65535)|0;if(b<<16>>16==0){return}b=c<<16>>16<319?c:319;c=((b<<16>>16>0?b:0)-(a<<16>>16>0?a:0)&65535)+1|0;a=0;b=f+(((h<<16>>16)*320|0)+(g<<16>>16))|0;while(1){Lp(b|0,e|0,c|0)|0;g=a+1&65535;if((g&65535)>>>0<(i&65535)>>>0){a=g;b=b+(c+d)|0}else{break}}return}function ye(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;f=i;i=i+96|0;g=f+80|0;h=f|0;a[h]=0;if((b|0)!=0){j=g;w=e;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;w=0;a[j+4|0]=w;w=w>>8;a[j+5|0]=w;w=w>>8;a[j+6|0]=w;w=w>>8;a[j+7|0]=w;cb(h|0,80,b|0,g|0)|0}if((c<<16>>16|0)==(-2|0)){g=a[268304]|0;if(g<<24>>24==0){w=-1;a[268320]=w;w=w>>8;a[268321]=w;a[268448]=0}w=-1;a[268312]=w;w=w>>8;a[268313]=w;a[268368]=0;k=g}else if((c<<16>>16|0)==(-1|0)){w=-1;a[268328]=w;w=w>>8;a[268329]=w;w=-1;a[268320]=w;w=w>>8;a[268321]=w;w=-1;a[268312]=w;w=w>>8;a[268313]=w;a[268528]=0;a[268448]=0;a[268368]=0;a[268304]=0;w=0;a[268360]=w;w=w>>8;a[268361]=w;w=w>>8;a[268362]=w;w=w>>8;a[268363]=w;l=80;m=0;i=f;return}else{k=a[268304]|0}g=(a[h]|0)!=0;if(k<<24>>24==0){do{if(g){if(((Fp(h,268528)|0)!=0?(Fp(h,268448)|0)!=0:0)?(Fp(h,268368)|0)!=0:0){if(!((d[268320]|d[268321]<<8)<<16>>16<<16>>16>c<<16>>16)){Hp(268368,268448)|0;a[268336]=a[268344]|0;w=(d[268320]|d[268321]<<8)<<16>>16;a[268312]=w;w=w>>8;a[268313]=w;Hp(268448,h|0)|0;a[268344]=12;w=c;a[268320]=w;w=w>>8;a[268321]=w;break}if(!((d[268312]|d[268313]<<8)<<16>>16<<16>>16>c<<16>>16)){Hp(268368,h|0)|0;w=c;a[268312]=w;w=w>>8;a[268313]=w;a[268336]=12}}}else{if((a[268448]|a[268528])<<24>>24==0){l=80;m=0;i=f;return}}}while(0);if(!((d[268320]|d[268321]<<8)<<16>>16<<16>>16>(d[268328]|d[268329]<<8)<<16>>16<<16>>16)?!((d[268360]|d[268361]<<8|d[268362]<<16|d[268363]<<24|0)>>>0<(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0):0){l=80;m=0;i=f;return}a[268304]=1;w=10;a[268296]=w;w=w>>8;a[268297]=w;w=0;a[268360]=w;w=w>>8;a[268361]=w;w=w>>8;a[268362]=w;w=w>>8;a[268363]=w;l=80;m=0;i=f;return}if(g?(g=(Fp(h,268448)|0)==0,!(g|(d[268312]|d[268313]<<8)<<16>>16<<16>>16>c<<16>>16)):0){Hp(268368,h|0)|0;w=c;a[268312]=w;w=w>>8;a[268313]=w}if((d[268360]|d[268361]<<8|d[268362]<<16|d[268363]<<24|0)>>>0>(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0){l=80;m=0;i=f;return}c=Wg(7)|0;if((a[219160]|0)!=0){h=de(2)|0;g=a[261392]|0;Lp(_d()|0,g|0,7680)|0;ze(268448,(d[261360]|d[261361]<<8)<<16>>16<<3,2,a[268344]|0,0,18,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;ze(268528,(d[261360]|d[261361]<<8)<<16>>16<<3,13,a[268352]|0,0,18,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;a[219160]=0;de(h)|0}h=(d[268296]|d[268297]<<8)<<16>>16;g=(d[261384]|d[261385]<<8)<<16>>16;k=((g&65535)+(h&65535)|0)>24?24-h&65535:g;g=(d[261360]|d[261361]<<8)<<16>>16;b=(d[261352]|d[261353]<<8)<<16>>16;j=(d[261368]|d[261369]<<8)<<16>>16;e=k<<16>>16>200?200:k;k=g<<16>>16<0;n=k?0:g;o=(j<<16>>16>40?40:j)+(k?g:0)&65535;if(!(n<<16>>16>39)){if(h<<16>>16<0){p=0;q=e+h&65535;r=b-h&65535}else{p=h;q=e;r=b}if(r<<16>>16<0){s=p-r&65535;t=q+r&65535;u=0}else{s=p;t=q;u=r}r=n<<3;ie(r,s,r,u,o<<3,t,2,0)}Wg(c)|0;c=(d[268296]|d[268297]<<8)<<16>>16;if(c<<16>>16==0){Hp(268528,268448)|0;a[268352]=a[268344]|0;t=(d[268320]|d[268321]<<8)<<16>>16;w=t<<16>>16==0?0:t-1&65535;a[268328]=w;w=w>>8;a[268329]=w;Hp(268448,268368)|0;t=(d[268312]|d[268313]<<8)<<16>>16;w=t;a[268320]=w;w=w>>8;a[268321]=w;a[268344]=a[268336]|0;a[268368]=0;w=-1;a[268312]=w;w=w>>8;a[268313]=w;a[219160]=1;w=(t<<16>>16<=(d[268328]|d[268329]<<8)<<16>>16<<16>>16?900:1)+(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)|0;a[268360]=w;w=w>>8;a[268361]=w;w=w>>8;a[268362]=w;w=w>>8;a[268363]=w;a[268304]=0;l=80;m=0;i=f;return}if(!((d[268312]|d[268313]<<8)<<16>>16<<16>>16>(d[268320]|d[268321]<<8)<<16>>16<<16>>16)){w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+1|0;a[268360]=w;w=w>>8;a[268361]=w;w=w>>8;a[268362]=w;w=w>>8;a[268363]=w}w=c-1&65535;a[268296]=w;w=w>>8;a[268297]=w;l=80;m=0;i=f;return}function ze(b,c,e,f,g,h,j){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;var k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;k=i;i=i+288|0;l=k|0;m=k+16|0;n=k+272|0;o=h&65535;p=h&255;h=p&15;q=p&-16;p=h&255;r=(b|0)==0;if(h<<24>>24!=0&(p|0)!=((d[71504]|d[71505]<<8)<<16>>16&65535|0)|r){if((p|0)==1){re(d[258184]|d[258185]<<8|d[258186]<<16|d[258187]<<24|0)}else if((p|0)==2){re(d[258176]|d[258177]<<8|d[258178]<<16|d[258179]<<24|0)}else{re(d[258176]|d[258177]<<8|d[258178]<<16|d[258179]<<24|0)}w=h&255;a[71504]=w;w=w>>8;a[71505]=w}h=q&255;if(q<<24>>24!=0&(h|0)!=((d[71496]|d[71497]<<8)<<16>>16&65535|0)|r){p=l|0;Lp(p|0,0,16)|0;if((h|0)==48){a[l+2|0]=12;a[l+3|0]=12;a[46640]=-1;s=12;t=12}else if((h|0)==16){a[l+2|0]=0;a[l+3|0]=0;a[46640]=-2;s=0;t=0}else if((h|0)==32){a[l+2|0]=12;a[l+3|0]=0;a[46640]=-1;s=12;t=0}else if((h|0)==64){a[l+2|0]=-24;a[l+3|0]=0;a[46640]=-1;s=-24;t=0}else{s=0;t=0}a[p]=g;a[l+1|0]=f;a[l+4|0]=6;a[261424]=g;a[261425]=f;a[261426]=s;a[261427]=t;a[261428]=6;a[261429]=0;a[261430]=0;a[261431]=a[l+7|0]|0;a[261432]=a[l+8|0]|0;a[261433]=a[l+9|0]|0;a[261434]=a[l+10|0]|0;a[261435]=a[l+11|0]|0;a[261436]=a[l+12|0]|0;a[261437]=a[l+13|0]|0;a[261438]=a[l+14|0]|0;a[261439]=a[l+15|0]|0;w=q&255;a[71496]=w;w=w>>8;a[71497]=w}if(r){i=k;return}if((b|0)!=268024){r=m|0;Np(r|0,b|0,256)|0;b=n;w=j;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;w=0;a[b+4|0]=w;w=w>>8;a[b+5|0]=w;w=w>>8;a[b+6|0]=w;w=w>>8;a[b+7|0]=w;cb(268024,240,r|0,n|0)|0}n=o&3840;if((n|0)==512){u=c-(qe(268024)|0)&65535}else if((n|0)==256){u=c-(((qe(268024)|0)&65535)>>>1)&65535}else{u=c}Ce(268024,u,e,f,g);i=k;return}function Ae(a){a=a|0;return}function Be(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;i=e<<16>>16>40?40:e;e=f<<16>>16>200?200:f;if(a<<16>>16<0){j=0;k=i+a&65535;l=c-a&65535}else{j=a;k=i;l=c}if(j<<16>>16>39|l<<16>>16>39){return}if(l<<16>>16<0){m=j-l&65535;n=k+l&65535;o=0}else{m=j;n=k;o=l}if(b<<16>>16<0){p=0;q=e+b&65535;r=d-b&65535}else{p=b;q=e;r=d}if(r<<16>>16<0){s=p-r&65535;t=q+r&65535;u=0}else{s=p;t=q;u=r}ie(m<<3,s,o<<3,u,n<<3,t,g,h);return}function Ce(b,c,e,f,g){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,ba=0,ca=0;if((d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24|0)==0){return}h=c<<16>>16<0?0:c;c=e<<16>>16<0?0:e;if(h<<16>>16>320|c<<16>>16>200){return}a[261424]=g;a[261425]=f;f=b;b=c;c=h;while(1){g=a[f]|0;if((g<<24>>24|0)==10|(g<<24>>24|0)==13){e=d[d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24|0]|0;i=f;j=g;while(1){if(!((j<<24>>24|0)==10|(j<<24>>24|0)==13)){break}k=i+1|0;i=k;j=a[k]|0}l=i;m=e+b&65535;n=h;o=j}else if((g<<24>>24|0)==0){p=39;break}else{l=f;m=b;n=c;o=g}k=pe(o)|0;if(((k&65535)+(n&65535)|0)>320){q=(d[d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24|0]|0)+m&65535;r=h}else{q=m;r=n}if((q&65535)>>>0>200>>>0){p=39;break}s=a[l]|0;t=_d()|0;u=d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24|0;if((((u|0)!=0?(v=s&255,s=u+4|0,w=d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24|0,s=w+(v<<3)+4|0,!((d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24|0)==0|(r&65535)>>>0>319>>>0)):0)?(x=w+(v<<3)|0,y=a[x]|0,z=y&255,!((z+(r&65535)|0)>320|(q&65535)>>>0>199>>>0)):0)?((d[u|0]|0)+(q&65535)|0)<=200:0){u=(q*320&65535)+r&65535;A=320-z|0;z=w+(v<<3)+1|0;B=a[z]|0;if((a[261424]|0)!=0){if(B<<24>>24==0){C=u;D=y}else{E=0;F=u;G=y;H=B;while(1){if(G<<24>>24==0){I=F;J=0;K=H}else{L=1;M=F;while(1){N=M+1&65535;a[t+(M&65535)|0]=a[261424]|0;O=a[x]|0;if(!((L&255)>>>0<(O&255)>>>0)){break}L=L+1&255;M=N}I=N;J=O;K=a[z]|0}M=(I&65535)+A&65535;L=E+1&255;if((L&255)>>>0<(K&255)>>>0){E=L;F=M;G=J;H=K}else{C=M;D=J;break}}}}else{C=((B&255)*320&65535)+u&65535;D=y}H=w+(v<<3)+2|0;G=a[H]|0;if(!(G<<24>>24==0)){F=0;E=C;g=0;j=D;e=G;G=D;while(1){if(j<<24>>24==0){P=E;Q=0;R=e;S=G}else{i=0;M=E;L=j;T=G;while(1){U=(i&255)+(aa(L&255,g)|0)|0;V=a[261424+(a[(d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24)+U|0]&15)|0]|0;if(V<<24>>24==0){W=T}else{a[t+(M&65535)|0]=V;W=a[x]|0}X=M+1&65535;V=i+1&255;if((V&255)>>>0<(W&255)>>>0){i=V;M=X;L=W;T=W}else{break}}P=X;Q=W;R=a[H]|0;S=W}Y=(P&65535)+A&65535;T=F+1&255;if((T&255)>>>0<(R&255)>>>0){F=T;E=Y;g=T&255;j=Q;e=R;G=S}else{break}}if((a[261424]|0)!=0?(G=(a[z]|0)+R&255,e=d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24|0,(G&255)>>>0<(d[e|0]|0)>>>0):0){j=G;G=Y;g=Q;E=e;while(1){if(g<<24>>24==0){Z=G;_=0;$=E}else{e=1;F=G;while(1){ba=F+1&65535;a[t+(F&65535)|0]=a[261424]|0;ca=a[x]|0;if(!((e&255)>>>0<(ca&255)>>>0)){break}e=e+1&255;F=ba}Z=ba;_=ca;$=d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24|0}F=j+1&255;if((F&255)>>>0<(d[$|0]|0)>>>0){j=F;G=(Z&65535)+A&65535;g=_;E=$}else{break}}}}}f=l+1|0;b=q;c=r+k&65535}if((p|0)==39){return}}function De(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=c&15;c=d&15;if((c&255)>>>0<(e&255)>>>0|(b|0)==0){return}d=e&255;f=(c&255)+1|0;if(d>>>0<f>>>0){g=b;h=e;i=d}else{return}while(1){a[261424+i|0]=a[g]|0;d=h+1&255;e=d&255;if(e>>>0<f>>>0){g=g+1|0;h=d;i=e}else{break}}return}function Ee(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;b=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[267888]|d[267889]<<8|d[267890]<<16|d[267891]<<24|0)>>>0<b>>>0){if((d[204288]|d[204289]<<8)<<16>>16<<16>>16==0){c=(a[267896]|0)!=0?18:45}else{c=45}e=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;f=e+717|0;g=e+c|0;a[f]=a[g]|0;a[f+1|0]=a[g+1|0]|0;a[f+2|0]=a[g+2|0]|0;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);a[267896]=(a[267896]|0)==0|0;g=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;w=g+60|0;a[267888]=w;w=w>>8;a[267889]=w;w=w>>8;a[267890]=w;w=w>>8;a[267891]=w;h=g}else{h=b}if((d[267880]|d[267881]<<8|d[267882]<<16|d[267883]<<24|0)>>>0>=h>>>0|(d[231176]|d[231177]<<8)<<16>>16<<16>>16==0){i=h}else{h=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;b=((d[71464]|d[71465]<<8)<<16>>16)*3&65535;g=a[h+(b&65535)|0]|0;f=h+765|0;c=a[f]|0;if(!(g<<24>>24==c<<24>>24)){a[f]=((c&255)>>>0>(g&255)>>>0?-1:1)+c}c=a[h+(b+1&65535)|0]|0;g=h+766|0;f=a[g]|0;if(!(c<<24>>24==f<<24>>24)){a[g]=((f&255)>>>0>(c&255)>>>0?-1:1)+f}f=a[h+(b+2&65535)|0]|0;b=h+767|0;h=a[b]|0;if(!(f<<24>>24==h<<24>>24)){a[b]=((h&255)>>>0>(f&255)>>>0?-1:1)+h}h=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;f=((d[71464]|d[71465]<<8)<<16>>16)*3&65535;b=a[h+(f&65535)|0]|0;c=h+765|0;g=a[c]|0;if(!(b<<24>>24==g<<24>>24)){a[c]=((g&255)>>>0>(b&255)>>>0?-1:1)+g}g=a[h+(f+1&65535)|0]|0;b=h+766|0;c=a[b]|0;if(!(g<<24>>24==c<<24>>24)){a[b]=((c&255)>>>0>(g&255)>>>0?-1:1)+c}c=a[h+(f+2&65535)|0]|0;f=h+767|0;h=a[f]|0;if(!(c<<24>>24==h<<24>>24)){a[f]=((h&255)>>>0>(c&255)>>>0?-1:1)+h}h=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;c=((d[71464]|d[71465]<<8)<<16>>16)*3&65535;f=a[h+(c&65535)|0]|0;g=h+765|0;b=a[g]|0;if(!(f<<24>>24==b<<24>>24)){a[g]=((b&255)>>>0>(f&255)>>>0?-1:1)+b}b=a[h+(c+1&65535)|0]|0;f=h+766|0;g=a[f]|0;if(!(b<<24>>24==g<<24>>24)){a[f]=((g&255)>>>0>(b&255)>>>0?-1:1)+g}g=a[h+(c+2&65535)|0]|0;c=h+767|0;h=a[c]|0;if(!(g<<24>>24==h<<24>>24)){a[c]=((h&255)>>>0>(g&255)>>>0?-1:1)+h}h=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;g=((d[71464]|d[71465]<<8)<<16>>16)*3&65535;c=a[h+(g&65535)|0]|0;b=h+765|0;f=a[b]|0;if(c<<24>>24==f<<24>>24){j=0}else{a[b]=((f&255)>>>0>(c&255)>>>0?-1:1)+f;j=1}f=a[h+(g+1&65535)|0]|0;c=h+766|0;b=a[c]|0;if(f<<24>>24==b<<24>>24){k=j}else{a[c]=((b&255)>>>0>(f&255)>>>0?-1:1)+b;k=1}b=a[h+(g+2&65535)|0]|0;g=h+767|0;h=a[g]|0;do{if(b<<24>>24==h<<24>>24){if(k<<24>>24==0){if(!((d[71464]|d[71465]<<8)<<16>>16<<16>>16==13)){w=13;a[71464]=w;w=w>>8;a[71465]=w;break}w=15;a[71464]=w;w=w>>8;a[71465]=w;if((d[231176]|d[231177]<<8)<<16>>16<<16>>16==2){f=(d[44352]|d[44353]<<8)<<16>>16;if(f<<16>>16==0){w=6;a[71464]=w;w=w>>8;a[71465]=w;break}else{w=(f<<16>>16>>15&-10)+15&65535;a[71464]=w;w=w>>8;a[71465]=w;break}}}}else{a[g]=((h&255)>>>0>(b&255)>>>0?-1:1)+h}}while(0);ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);h=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;w=h+3|0;a[267880]=w;w=w>>8;a[267881]=w;w=w>>8;a[267882]=w;w=w>>8;a[267883]=w;i=h}if(!((d[267872]|d[267873]<<8|d[267874]<<16|d[267875]<<24|0)>>>0<i>>>0)){l=yd()|0;return}i=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;h=((d[71456]|d[71457]<<8)<<16>>16)*3&65535;b=a[i+(h&65535)|0]|0;g=i+669|0;k=a[g]|0;if(!(b<<24>>24==k<<24>>24)){a[g]=((k&255)>>>0>(b&255)>>>0?-1:1)+k}k=a[i+(h+1&65535)|0]|0;b=i+670|0;g=a[b]|0;if(!(k<<24>>24==g<<24>>24)){a[b]=((g&255)>>>0>(k&255)>>>0?-1:1)+g}g=a[i+(h+2&65535)|0]|0;h=i+671|0;i=a[h]|0;if(!(g<<24>>24==i<<24>>24)){a[h]=((i&255)>>>0>(g&255)>>>0?-1:1)+i}i=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;g=((d[71456]|d[71457]<<8)<<16>>16)*3&65535;h=a[i+(g&65535)|0]|0;k=i+669|0;b=a[k]|0;if(h<<24>>24==b<<24>>24){m=0}else{a[k]=((b&255)>>>0>(h&255)>>>0?-1:1)+b;m=1}b=a[i+(g+1&65535)|0]|0;h=i+670|0;k=a[h]|0;if(b<<24>>24==k<<24>>24){n=m}else{a[h]=((k&255)>>>0>(b&255)>>>0?-1:1)+k;n=1}k=a[i+(g+2&65535)|0]|0;g=i+671|0;i=a[g]|0;if(k<<24>>24==i<<24>>24){if(n<<24>>24==0){w=(d[71456]|d[71457]<<8)<<16>>16<<16>>16==12?10:12;a[71456]=w;w=w>>8;a[71457]=w}}else{a[g]=((i&255)>>>0>(k&255)>>>0?-1:1)+i}ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+5|0;a[267872]=w;w=w>>8;a[267873]=w;w=w>>8;a[267874]=w;w=w>>8;a[267875]=w;l=yd()|0;return}function Fe(){var b=0,c=0,e=0,f=0;b=_m((d[231192]|d[231193]<<8)<<16>>16)|0;w=0;a[232056]=w;w=w>>8;a[232057]=w;if((b|0)==0){return}c=a[b+2|0]|0;e=13168+((c&255)*100|0)|0;if(((d[e]|d[e+1|0]<<8)<<16>>16&2)==0){if(!(c<<24>>24==2)){return}e=15530+(d[b+8|0]<<5)|0;w=((d[e]|d[e+1|0]<<8)<<16>>16)+41&65535;a[232056]=w;w=w>>8;a[232057]=w;return}e=b+4|0;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;if((f&131072|0)!=0){w=144;a[232056]=w;w=w>>8;a[232057]=w;return}if((a[b+3|0]|0)==-1){w=41;a[232056]=w;w=w>>8;a[232057]=w;return}if((f&16384|0)!=0){w=40;a[232056]=w;w=w>>8;a[232057]=w;return}f=b+88|0;if(!((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==0)){w=46;a[232056]=w;w=w>>8;a[232057]=w;return}if(c<<24>>24==8){w=38;a[232056]=w;w=w>>8;a[232057]=w;return}else{w=39;a[232056]=w;w=w>>8;a[232057]=w;return}}function Ge(){var b=0,c=0,e=0,f=0,g=0,h=0;b=i;w=de(0)|0;a[266902]=w;w=w>>8;a[266903]=w;ze(0,0,0,0,0,34,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;w=Wg(1)|0;a[266898]=w;w=w>>8;a[266899]=w;e=d[d[258200]|d[258201]<<8|d[258202]<<16|d[258203]<<24|0]|0;if(((He(266130,((((d[261368]|d[261369]<<8)<<16>>16)-((d[266128]|d[266129]<<8)<<16>>16<<16>>16==-1?2:7)&65535)<<3)-6&65535,13)|0)&65535)>>>0>3>>>0){f=He(266130,((((d[261368]|d[261369]<<8)<<16>>16)-((d[266128]|d[266129]<<8)<<16>>16<<16>>16==-1?2:7)&65535)<<3)-6&65535,13)|0}else{f=3}w=(aa(f,e)|0)+18&65535;a[5730]=w;w=w>>8;a[5731]=w;Wg(1)|0;e=yp((me((d[261368]|d[261369]<<8)<<16>>16<<3,(d[261384]|d[261385]<<8)<<16>>16)|0)&65535)|0;w=e;a[266904]=w;w=w>>8;a[266905]=w;w=w>>8;a[266906]=w;w=w>>8;a[266907]=w;if((e|0)!=0){oe((d[261360]|d[261361]<<8)<<16>>16<<3,(d[261352]|d[261353]<<8)<<16>>16,(d[261368]|d[261369]<<8)<<16>>16<<3,(d[261384]|d[261385]<<8)<<16>>16,e)}zh(1,1,1);e=(d[266128]|d[266129]<<8)<<16>>16;if(e<<16>>16==-1){f=((d[261352]|d[261353]<<8)<<16>>16)+8&65535;g=((d[261368]|d[261369]<<8)<<16>>16)-2&65535;h=((d[261384]|d[261385]<<8)<<16>>16)-16&65535;w=((d[261360]|d[261361]<<8)<<16>>16)+1&65535;a[5724]=w;w=w>>8;a[5725]=w;w=f;a[5726]=w;w=w>>8;a[5727]=w;w=g;a[5728]=w;w=w>>8;a[5729]=w;w=h;a[5730]=w;w=w>>8;a[5731]=w;if((d[261376]|d[261377]<<8)<<16>>16<<16>>16==1){Wg(1)|0}}else{h=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((e&65535)<<2)|0;Ie((d[231240]|d[231241]<<8)<<16>>16,d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0,7,8,1,16384,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;c=((d[261352]|d[261353]<<8)<<16>>16)+8&65535;h=((d[261368]|d[261369]<<8)<<16>>16)-7&65535;e=((d[261384]|d[261385]<<8)<<16>>16)-16&65535;w=((d[261360]|d[261361]<<8)<<16>>16)+5&65535;a[5724]=w;w=w>>8;a[5725]=w;w=c;a[5726]=w;w=w>>8;a[5727]=w;w=h;a[5728]=w;w=w>>8;a[5729]=w;w=e;a[5730]=w;w=w>>8;a[5731]=w;if((d[261376]|d[261377]<<8)<<16>>16<<16>>16==1){Wg(1)|0}}a[261392]=0;Ce(266130,(d[261360]|d[261361]<<8)<<16>>16<<3,(d[261352]|d[261353]<<8)<<16>>16,a[261400]|0,0);ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);w=30;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;do{Ee();xp()}while((d[219104]|d[219105]<<8|d[219106]<<16|d[219107]<<24|0)!=0);Xh();i=b;return}function He(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;if((b|0)==0){e=0;return e|0}f=a[b]|0;if(f<<24>>24==0){e=0;return e|0}if(c<<16>>16==0){g=b;h=0;i=f;while(1){j=h+1&65535;a:do{if(i<<24>>24==d<<24>>24){k=g}else{l=g;m=i;while(1){if((m<<24>>24|0)==32|(m<<24>>24|0)==13|(m<<24>>24|0)==0){k=l;break a}n=l-1|0;pe(m)|0;o=a[n]|0;if(o<<24>>24==d<<24>>24){k=n;break}else{l=n;m=o}}}}while(0);if((a[k]|0)==0){e=j;p=18;break}m=k+1|0;a[k]=d;l=a[m]|0;if(l<<24>>24==0){e=j;p=18;break}else{g=m;h=j;i=l}}if((p|0)==18){return e|0}}else{q=b;r=0;s=f}while(1){f=r+1&65535;b=q;i=0;h=s;while(1){if(h<<24>>24==d<<24>>24){t=b;u=d;break}if((h<<24>>24|0)==13|(h<<24>>24|0)==0){t=b;u=h;break}v=b+1|0;g=(pe(h)|0)+i&65535;w=a[v]|0;if((g&65535)>>>0<(c&65535)>>>0){b=v;i=g;h=w}else{p=11;break}}b:do{if((p|0)==11){p=0;if(w<<24>>24==d<<24>>24){t=v;u=d}else{h=v;i=w;while(1){if((i<<24>>24|0)==32|(i<<24>>24|0)==13|(i<<24>>24|0)==0){t=h;u=i;break b}b=h-1|0;pe(i)|0;j=a[b]|0;if(j<<24>>24==d<<24>>24){t=b;u=d;break}else{h=b;i=j}}}}}while(0);if(u<<24>>24==0){e=f;p=18;break}i=t+1|0;a[t]=d;h=a[i]|0;if(h<<24>>24==0){e=f;p=18;break}else{q=i;r=f;s=h}}if((p|0)==18){return e|0}return 0}function Ie(b,c,e,f,g,h,j){b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;var k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0;k=i;i=i+16|0;l=k|0;if((c|0)==0){i=k;return}m=(a[c]&1)<<10|h;h=l|0;n=l;w=j;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;w=0;a[n+4|0]=w;w=w>>8;a[n+5|0]=w;w=w>>8;a[n+6|0]=w;w=w>>8;a[n+7|0]=w;n=m&65535;if((n&8192|0)==0){o=0}else{o=(v=d[h+4|0]|d[h+5|0]<<8|d[h+6|0]<<16|d[h+7|0]<<24|0,w=v+8|0,a[h+4|0]=w,w=w>>8,a[h+5|0]=w,w=w>>8,a[h+6|0]=w,w=w>>8,a[h+7|0]=w,d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+v|0]|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+1)|0]<<8|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+2)|0]<<16|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+3)|0]<<24|0)}if((n&256|0)==0){p=0;q=0;r=m}else{n=(v=d[h+4|0]|d[h+5|0]<<8|d[h+6|0]<<16|d[h+7|0]<<24|0,w=v+8|0,a[h+4|0]=w,w=w>>8,a[h+5|0]=w,w=w>>8,a[h+6|0]=w,w=w>>8,a[h+7|0]=w,d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+v|0]|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+1)|0]<<8|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+2)|0]<<16|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+3)|0]<<24|0);j=(v=d[h+4|0]|d[h+5|0]<<8|d[h+6|0]<<16|d[h+7|0]<<24|0,w=v+8|0,a[h+4|0]=w,w=w>>8,a[h+5|0]=w,w=w>>8,a[h+6|0]=w,w=w>>8,a[h+7|0]=w,d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+v|0]|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+1)|0]<<8|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+2)|0]<<16|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+3)|0]<<24|0)&65535;p=j;q=n;r=j<<16>>16==0?m&-257:m}m=r&65535;if((m&512|0)!=0){r=(((d[268264]|d[268265]<<8)<<16>>16&65535)+1|0)%8|0;w=r&65535;a[268264]=w;w=w>>8;a[268265]=w;j=71536+((r&65535)<<1)|0;w=(d[j]|d[j+1|0]<<8)<<16>>16;a[71528]=w;w=w>>8;a[71529]=w;w=0;a[71512]=w;w=w>>8;a[71513]=w;w=256;a[71520]=w;w=w>>8;a[71521]=w}if((m&4096|0)!=0){w=(v=d[h+4|0]|d[h+5|0]<<8|d[h+6|0]<<16|d[h+7|0]<<24|0,w=v+8|0,a[h+4|0]=w,w=w>>8,a[h+5|0]=w,w=w>>8,a[h+6|0]=w,w=w>>8,a[h+7|0]=w,d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+v|0]|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+1)|0]<<8|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+2)|0]<<16|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+3)|0]<<24|0)&65535;a[71520]=w;w=w>>8;a[71521]=w}j=(m&4|0)!=0;if(j){r=(v=d[h+4|0]|d[h+5|0]<<8|d[h+6|0]<<16|d[h+7|0]<<24|0,w=v+8|0,a[h+4|0]=w,w=w>>8,a[h+5|0]=w,w=w>>8,a[h+6|0]=w,w=w>>8,a[h+7|0]=w,d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+v|0]|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+1)|0]<<8|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+2)|0]<<16|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+3)|0]<<24|0);s=(v=d[h+4|0]|d[h+5|0]<<8|d[h+6|0]<<16|d[h+7|0]<<24|0,w=v+8|0,a[h+4|0]=w,w=w>>8,a[h+5|0]=w,w=w>>8,a[h+6|0]=w,w=w>>8,a[h+7|0]=w,d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+v|0]|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+1)|0]<<8|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+2)|0]<<16|d[(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(v+3)|0]<<24|0)&65535;t=r&65535}else{s=256;t=0}r=$d(b)|0;b=g&65535;g=5712+(b*12|0)|0;h=((d[g]|d[g+1|0]<<8)<<16>>16&65535)<<3;g=r+h|0;r=(m&16384|0)==0;if(r){u=(e&65535)-h&65535}else{u=e}e=5716+(b*12|0)|0;h=(d[e]|d[e+1|0]<<8)<<16>>16<<3;e=5714+(b*12|0)|0;n=(d[e]|d[e+1|0]<<8)<<16>>16;e=(r?0:n)+f&65535;f=5718+(b*12|0)|0;b=((d[f]|d[f+1|0]<<8)<<16>>16)+n&65535;f=c;r=(d[f]|d[f+1|0]<<8)<<16>>16;f=c+3|0;l=a[c+2|0]|0;x=l&255;if(j){y=(aa(s<<16,l&255)|0)>>24&65535;if(y<<16>>16==0){i=k;return}else{z=y}}else{z=x}x=(m&32768|0)!=0;if(x){A=(e&65535)-((z<<16>>16|0)/2|0)&65535}else{A=e}e=f;f=(d[e]|d[e+1|0]<<8)<<16>>16;if(j){e=(f&65535)+t<<16>>24&65535;if(e<<16>>16==0){i=k;return}else{B=e}}else{B=f}if(x){C=(u&65535)-((B<<16>>16|0)/2|0)&65535}else{C=u}u=c+8|0;x=c+10|0;e=r&65535;if((e&1|0)==0){D=o}else{D=(m&8192|0)==0?x:o}o=(m&1024|0)==0?x:c+26|0;if((e&2|0)==0){Cd(d[231136]|d[231137]<<8|d[231138]<<16|d[231139]<<24|0,o,(d[u]|d[u+1|0]<<8)<<16>>16)|0;E=d[231136]|d[231137]<<8|d[231138]<<16|d[231139]<<24|0}else{E=o}o=(m&2|0)==0;if(o){F=A-n&65535}else{F=(b-z&65535)-A&65535}if(F<<16>>16<0){u=F+z&65535;if(u<<16>>16<1){i=k;return}e=m&255;c=e>>>0<4>>>0;x=f<<16>>16>0;r=(e|0)==0;y=(e|0)==2?-1:1;e=E;l=g;G=0;H=0;I=-F&65535;a:while(1){F=I&65535;J=I<<16>>16>0;K=e;L=l;M=G;N=H;while(1){if(!J){break a}if(!c){O=36;break a}b:do{if(x){P=K;Q=f;while(1){if(!(Q<<16>>16==0)){R=Q-1&65535;S=P+1|0;if((a[P]|0)==0){T=S;U=R}else{P=S;Q=R;continue}}else{T=P;U=0}if((a[T-1|0]|0)!=0&U<<16>>16==0){V=T;W=0;break b}R=T+1|0;S=(U+1&65535)-(d[T]|0)&65535;if(S<<16>>16>0){P=R;Q=S}else{V=R;W=S;break}}}else{V=K;W=f}}while(0);X=L+(aa(r?-1:y,W<<16>>16)|0)|0;Y=(N&65535)+s|0;Z=Y&65535;if((Y&65280|0)==0){M=K;K=V;L=X;N=Z}else{break}}e=V;l=X;G=K;H=Z&255;I=F-(Y>>>8&255)&65535}if((O|0)==36){Nb(67728,67320,1064,69536)}if(I<<16>>16<0){_=M;$=N+(I*-256&65535)&65535}else{_=K;$=N}ba=_;ca=L;da=o?n:A;ea=M;fa=$;ga=u}else{ba=E;ca=g;da=A;ea=0;fa=0;ga=z}if(o){ha=b-da&65535}else{ha=(ga-n&65535)+da&65535}if(ha<<16>>16<1){i=k;return}if(ha<<16>>16<ga<<16>>16){ia=o?da:n;ja=ha}else{ia=da;ja=ga}do{if(C<<16>>16<0){ga=-C&65535;if(B<<16>>16>ga<<16>>16){ka=0;la=ga;ma=C+B&65535;break}else{i=k;return}}else{ka=C;la=0;ma=B}}while(0);C=h-ka&65535;if(C<<16>>16<1){i=k;return}if(C<<16>>16<ma<<16>>16){na=(B-la&65535)-C&65535;oa=C}else{na=0;oa=ma}if(o){pa=320;qa=ia}else{pa=-320;qa=(ja-1&65535)+ia&65535}ia=((qa&65535)*320|0)+(ka<<16>>16)|0;if((m&1|0)==0){ra=ia;sa=na;ta=la}else{ra=(oa<<16>>16)-1+ia|0;sa=la;ta=na}na=ca+ra|0;if(j){ua=0;va=(((ta&65535)<<8>>>0)/(t>>>0)|0)&65535}else{ua=sa;va=ta}if((fa&65535)>>>0<256>>>0){wa=ba;xa=na;ya=fa;za=ja;O=65}else{Aa=ba;Ba=na;Ca=na;Da=ea;Ea=fa;Fa=ja}c:while(1){if((O|0)==65){O=0;ja=(ya&65535)+s|0;fa=ja&65535;if((ja&65280|0)!=0){Aa=wa;Ba=xa;Ca=xa;Da=wa;Ea=fa;Fa=za;continue}ja=m&255;ea=f<<16>>16>0;na=(ja|0)==2?-1:1;if(!(ja>>>0<4>>>0)){O=76;break}if((ja|0)==0){ja=xa;ba=wa;ta=fa;while(1){d:do{if(ea){sa=ba;t=f;while(1){if(!(t<<16>>16==0)){j=t-1&65535;ra=sa+1|0;if((a[sa]|0)==0){Ga=ra;Ha=j}else{sa=ra;t=j;continue}}else{Ga=sa;Ha=0}if((a[Ga-1|0]|0)!=0&Ha<<16>>16==0){Ia=Ga;Ja=0;break d}j=Ga+1|0;ra=(Ha+1&65535)-(d[Ga]|0)&65535;if(ra<<16>>16>0){sa=j;t=ra}else{Ia=j;Ja=ra;break}}}else{Ia=ba;Ja=f}}while(0);t=ja+(-(Ja<<16>>16)|0)|0;sa=(ta&65535)+s|0;ra=sa&65535;if((sa&65280|0)==0){ja=t;ba=Ia;ta=ra}else{Aa=Ia;Ba=xa;Ca=t;Da=Ia;Ea=ra;Fa=za;continue c}}}else{ta=xa;ba=wa;ja=fa;while(1){e:do{if(ea){F=ba;ra=f;while(1){if(!(ra<<16>>16==0)){t=ra-1&65535;sa=F+1|0;if((a[F]|0)==0){Ka=sa;La=t}else{F=sa;ra=t;continue}}else{Ka=F;La=0}if((a[Ka-1|0]|0)!=0&La<<16>>16==0){Ma=Ka;Na=0;break e}t=Ka+1|0;sa=(La+1&65535)-(d[Ka]|0)&65535;if(sa<<16>>16>0){F=t;ra=sa}else{Ma=t;Na=sa;break}}}else{Ma=ba;Na=f}}while(0);ra=ta+(aa(na,Na<<16>>16)|0)|0;F=(ja&65535)+s|0;sa=F&65535;if((F&65280|0)==0){ta=ra;ba=Ma;ja=sa}else{Aa=Ma;Ba=xa;Ca=ra;Da=Ma;Ea=sa;Fa=za;continue c}}}}ja=m&255;ba=ja>>>0<4>>>0;ta=va<<16>>16>0;na=(ja|0)==0;ea=f<<16>>16==0;fa=(ja|0)==2;ja=fa?1:-1;sa=m>>>8&15;ra=sa>>>0<8>>>0;F=p<<16>>16>0;t=fa?-1:1;fa=Aa;j=Ba;ca=Ca;la=Ea;ia=Fa;while(1){if(!ba){O=84;break c}f:do{if(ta){ka=fa;qa=va;while(1){if(!(qa<<16>>16==0)){o=qa-1&65535;ma=ka+1|0;if((a[ka]|0)==0){Oa=ma;Pa=o}else{ka=ma;qa=o;continue}}else{Oa=ka;Pa=0}if((a[Oa-1|0]|0)!=0&Pa<<16>>16==0){Qa=Oa;Ra=0;break f}o=Oa+1|0;ma=(Pa+1&65535)-(d[Oa]|0)&65535;if(ma<<16>>16>0){ka=o;qa=ma}else{Qa=o;Ra=ma;break}}}else{Qa=fa;Ra=va}}while(0);g:do{if(!ea){qa=ca+(aa(na?-1:t,Ra<<16>>16)|0)|0;ka=Ra+oa&65535;if(ka<<16>>16>0){ma=qa;qa=ka;o=Qa;while(1){C=o+1|0;B=a[o]|0;h=B&255;if(B<<24>>24==0){ga=a[C]|0;Sa=o+2|0;Ta=qa-(ga&255)&65535;Ua=aa(na?1:ja,ga&255)|0}else{if(!ra){O=95;break c}h:do{switch(sa|0){case 2:{ga=((d[71512]|d[71513]<<8)<<16>>16)+((d[71520]|d[71521]<<8)<<16>>16)&65535;w=ga;a[71512]=w;w=w>>8;a[71513]=w;if((ga&65535)>>>0<256>>>0){a[ma]=B;break h}else{w=ga&255;a[71512]=w;w=w>>8;a[71513]=w;a[ma]=a[ma+((d[71528]|d[71529]<<8)<<16>>16&65535)|0]|0;break h}break};case 4:{a[ma]=a[D+h|0]|0;break};case 5:{ga=a[D+h|0]|0;if(F){da=0;ha=ga;while(1){n=da+1&65535;b=a[q+(ha&255)|0]|0;if(n<<16>>16<p<<16>>16){da=n;ha=b}else{Va=b;break}}}else{Va=ga}a[ma]=Va;break};case 6:{ha=((d[71512]|d[71513]<<8)<<16>>16)+((d[71520]|d[71521]<<8)<<16>>16)&65535;w=ha;a[71512]=w;w=w>>8;a[71513]=w;if((ha&65535)>>>0<256>>>0){a[ma]=a[D+h|0]|0;break h}else{w=ha&255;a[71512]=w;w=w>>8;a[71513]=w;a[ma]=a[ma+((d[71528]|d[71529]<<8)<<16>>16&65535)|0]|0;break h}break};case 1:{if(F){ha=B;da=0;while(1){b=a[q+(ha&255)|0]|0;n=da+1&65535;if(n<<16>>16<p<<16>>16){ha=b;da=n}else{Wa=b;break}}}else{Wa=B}a[ma]=Wa;break};case 3:case 7:{da=a[ma]|0;if(F){ha=0;ga=da;while(1){b=ha+1&65535;n=a[q+(ga&255)|0]|0;if(b<<16>>16<p<<16>>16){ha=b;ga=n}else{Xa=n;break}}}else{Xa=da}a[ma]=Xa;break};case 0:{a[ma]=B;break};default:{}}}while(0);Sa=C;Ta=qa-1&65535;Ua=na?1:ja}if(Ta<<16>>16>0){ma=ma+Ua|0;qa=Ta;o=Sa}else{Ya=Sa;Za=Ta;break}}}else{Ya=Qa;Za=ka}o=Za+ua&65535;if(o<<16>>16>0){qa=Ya;ma=o;while(1){if(!(ma<<16>>16==0)){o=ma-1&65535;B=qa+1|0;if((a[qa]|0)==0){_a=B;$a=o}else{qa=B;ma=o;continue}}else{_a=qa;$a=0}if((a[_a-1|0]|0)!=0&$a<<16>>16==0){ab=_a;break g}o=_a+1|0;B=($a+1&65535)-(d[_a]|0)&65535;if(B<<16>>16>0){qa=o;ma=B}else{ab=o;break}}}else{ab=Ya}}else{ab=Qa}}while(0);ma=j+pa|0;qa=ia-1&65535;if(qa<<16>>16==0){O=122;break c}ka=la-256&65535;if((ka&65535)>>>0<256>>>0){wa=ab;xa=ma;ya=ka;za=qa;O=65;continue c}else{fa=Da;j=ma;ca=ma;la=ka;ia=qa}}}if((O|0)==76){Nb(67728,67320,1159,69536)}else if((O|0)==84){Nb(67728,67320,1180,69536)}else if((O|0)==95){Nb(62720,67320,1207,69536)}else if((O|0)==122){i=k;return}}function Je(b){b=b|0;var c=0,d=0;c=ci()|0;if(c<<16>>16==0){d=1;a[b]=d;return}d=(c&65535)>>>11&1;a[b]=d;return}function Ke(){Ee();xp();return}function Le(){var b=0,c=0,e=0,f=0,g=0,h=0;Uh(2113);b=(d[261360]|d[261361]<<8)<<16>>16;if((d[266128]|d[266129]<<8)<<16>>16<<16>>16==-1){c=((d[261352]|d[261353]<<8)<<16>>16)-8&65535;e=((d[261368]|d[261369]<<8)<<16>>16)+2&65535;f=((d[261384]|d[261385]<<8)<<16>>16)+16&65535;w=b-1&65535;a[5724]=w;w=w>>8;a[5725]=w;w=c;a[5726]=w;w=w>>8;a[5727]=w;w=e;a[5728]=w;w=w>>8;a[5729]=w;w=f;a[5730]=w;w=w>>8;a[5731]=w;if((d[261376]|d[261377]<<8)<<16>>16<<16>>16==1){Wg(1)|0}}else{f=((d[261352]|d[261353]<<8)<<16>>16)-8&65535;e=((d[261368]|d[261369]<<8)<<16>>16)+7&65535;c=((d[261384]|d[261385]<<8)<<16>>16)+16&65535;w=b-5&65535;a[5724]=w;w=w>>8;a[5725]=w;w=f;a[5726]=w;w=w>>8;a[5727]=w;w=e;a[5728]=w;w=w>>8;a[5729]=w;w=c;a[5730]=w;w=w>>8;a[5731]=w;if((d[261376]|d[261377]<<8)<<16>>16<<16>>16==1){Wg(1)|0}}c=d[266904]|d[266905]<<8|d[266906]<<16|d[266907]<<24|0;if((c|0)!=0){ne((d[261360]|d[261361]<<8)<<16>>16<<3,(d[261352]|d[261353]<<8)<<16>>16,(d[261368]|d[261369]<<8)<<16>>16<<3,(d[261384]|d[261385]<<8)<<16>>16,c)}Wg((d[266898]|d[266899]<<8)<<16>>16)|0;c=d[266904]|d[266905]<<8|d[266906]<<16|d[266907]<<24|0;if((c|0)==0){a[203192]=1;g=(d[266902]|d[266903]<<8)<<16>>16;h=de(g)|0;return}else{zp(c);g=(d[266902]|d[266903]<<8)<<16>>16;h=de(g)|0;return}}function Me(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;e=i;i=i+16|0;f=e|0;w=c;a[266128]=w;w=w>>8;a[266129]=w;w=0;a[266904]=w;w=w>>8;a[266905]=w;w=w>>8;a[266906]=w;w=w>>8;a[266907]=w;c=f;w=d;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;w=0;a[c+4|0]=w;w=w>>8;a[c+5|0]=w;w=w>>8;a[c+6|0]=w;w=w>>8;a[c+7|0]=w;cb(266130,768,b|0,f|0)|0;Bc(36,50,84,76);i=e;return 0}function Ne(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0;b=i;i=i+32|0;c=b|0;e=b+8|0;w=((((d[219128]|d[219129]<<8|d[219130]<<16|d[219131]<<24)-(d[219144]|d[219145]<<8|d[219146]<<16|d[219147]<<24)|0)>>>0)/3600|0)+1|0;a[71672]=w;w=w>>8;a[71673]=w;w=w>>8;a[71674]=w;w=w>>8;a[71675]=w;f=(d[267196]|d[267197]<<8)<<16>>16;g=a[267198]|0;h=c|0;j=f<<16>>16<0?0:f;a[h]=g;f=c+2|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;k=c+4|0;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;l=Mj(c)|0;if((l|0)==0){m=j}else{n=j;j=l;while(1){l=13180+((d[j+2|0]|0)*100|0)|0;o=(((d[l]|d[l+1|0]<<8)<<16>>16&65535)/100|0)+n&65535;l=Mj(c)|0;if((l|0)==0){m=o;break}else{n=o;j=l}}}w=((d[204376]|d[204377]<<8)<<16>>16)+1&65535;a[204376]=w;w=w>>8;a[204377]=w;a[h]=-1;w=16;a[f]=w;w=w>>8;a[f+1|0]=w;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;k=Xj(c)|0;a:do{if((k|0)==0){p=0;q=0}else{f=0;h=0;j=k;while(1){n=h;l=j;while(1){o=mo(l)|0;r=(Kh(o,(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255)|0)<<24>>24==0;s=(d[l+96|0]|0)*7|0;o=s+(n&65535)&65535;if(r){break}r=Xj(c)|0;if((r|0)==0){p=o;q=f;break a}else{n=o;l=r}}l=s+(f&65535)&65535;r=Xj(c)|0;if((r|0)==0){p=n;q=l;break}else{f=l;h=n;j=r}}}}while(0);w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;c=((d[267194]|d[267195]<<8)<<16>>16&65535)+(q&65535)|0;w=c>>>0>65e3>>>0?-536:c&65535;a[267194]=w;w=w>>8;a[267195]=w;c=((d[267192]|d[267193]<<8)<<16>>16&65535)+(p&65535)|0;w=c>>>0>65e3>>>0?-536:c&65535;a[267192]=w;w=w>>8;a[267193]=w;c=(Hj(g)|0)+20|0;g=(((d[c]|d[c+1|0]<<8)<<16>>16&65535)/100|0)+m&65535;m=g<<16>>16<0?0:g;g=d[71672]|d[71673]<<8|d[71674]<<16|d[71675]<<24|0;c=((d[262360]|d[262361]<<8)<<16>>16)*45&65535;if(g>>>0<c>>>0){t=c-g+(m&65535)&65535}else{t=m}w=t;a[267196]=w;w=w>>8;a[267197]=w;t=(d[45152]|d[45153]<<8)<<16>>16<<16>>16==1;Oe(0);w=de(2)|0;a[267200]=w;w=w>>8;a[267201]=w;Pe((d[267196]|d[267197]<<8)<<16>>16,0);m=Dm(26)|0;ze(0,0,0,0,0,289,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;c=((qe(m)|0)&65535)>>>1;p=156-c&65535;q=c+164&65535;c=_d()|0;if((!(p<<16>>16>319)?(s=p<<16>>16<0?0:p,k=q<<16>>16>319?319:q,j=k<<16>>16<0?0:k,!(s<<16>>16>j<<16>>16)):0)?(k=(j-s&65535)+1&65535,!(k<<16>>16==0)):0){j=(s<<16>>16)+26560|0;s=q<<16>>16<319?q:319;q=((s<<16>>16>0?s:0)-(p<<16>>16>0?p:0)&65535)+1|0;p=320-(k&65535)+q|0;Lp(c+j|0,116,q|0)|0;k=j+p|0;Lp(c+k|0,116,q|0)|0;j=k+p|0;Lp(c+j|0,116,q|0)|0;k=j+p|0;Lp(c+k|0,116,q|0)|0;j=k+p|0;Lp(c+j|0,116,q|0)|0;k=j+p|0;Lp(c+k|0,116,q|0)|0;Lp(c+(k+p)|0,116,q|0)|0}ze(m,160,83,15,0,289,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;m=Dm(24)|0;ze(0,0,0,0,0,289,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;q=((qe(m)|0)&65535)>>>1;p=156-q&65535;k=q+164&65535;q=_d()|0;if((!(p<<16>>16>319)?(c=p<<16>>16<0?0:p,j=k<<16>>16>319?319:k,s=j<<16>>16<0?0:j,!(c<<16>>16>s<<16>>16)):0)?(j=(s-c&65535)+1&65535,!(j<<16>>16==0)):0){s=(c<<16>>16)+38080|0;c=k<<16>>16<319?k:319;k=((c<<16>>16>0?c:0)-(p<<16>>16>0?p:0)&65535)+1|0;p=320-(j&65535)+k|0;Lp(q+s|0,116,k|0)|0;j=s+p|0;Lp(q+j|0,116,k|0)|0;s=j+p|0;Lp(q+s|0,116,k|0)|0;j=s+p|0;Lp(q+j|0,116,k|0)|0;s=j+p|0;Lp(q+s|0,116,k|0)|0;j=s+p|0;Lp(q+j|0,116,k|0)|0;Lp(q+(j+p)|0,116,k|0)|0}ze(m,160,119,15,0,289,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;if(!((d[45152]|d[45153]<<8)<<16>>16<<16>>16==1)){m=Dm(25)|0;ze(0,0,0,0,0,289,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;k=((qe(m)|0)&65535)>>>1;p=156-k&65535;j=k+164&65535;k=_d()|0;if((!(p<<16>>16>319)?(q=p<<16>>16<0?0:p,s=j<<16>>16>319?319:j,c=s<<16>>16<0?0:s,!(q<<16>>16>c<<16>>16)):0)?(s=(c-q&65535)+1&65535,!(s<<16>>16==0)):0){c=(q<<16>>16)+49600|0;q=j<<16>>16<319?j:319;j=((q<<16>>16>0?q:0)-(p<<16>>16>0?p:0)&65535)+1|0;p=320-(s&65535)+j|0;Lp(k+c|0,116,j|0)|0;s=c+p|0;Lp(k+s|0,116,j|0)|0;c=s+p|0;Lp(k+c|0,116,j|0)|0;s=c+p|0;Lp(k+s|0,116,j|0)|0;c=s+p|0;Lp(k+c|0,116,j|0)|0;s=c+p|0;Lp(k+s|0,116,j|0)|0;Lp(k+(s+p)|0,116,j|0)|0}ze(m,160,155,15,0,289,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g}m=qe(Dm(329)|0)|0;if((m&65535)>>>0>((qe(Dm(330)|0)|0)&65535)>>>0){u=qe(Dm(329)|0)|0}else{u=qe(Dm(330)|0)|0}m=u+19&65535;j=t?2:3;t=u+15&65535;p=0;s=0;do{k=s*36|0;ze(Dm(329)|0,t,k+92&65535,15,0,545,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;ze(Dm(330)|0,t,k+101&65535,15,0,545,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;p=p+1&65535;s=p&65535}while(s>>>0<j>>>0);s=242-u&65535;rd(($n(0,5)|0)+17&65535);ie(0,0,0,0,320,200,2,0);Xh();u=(d[267192]|d[267193]<<8)<<16>>16;p=e|0;w=u;a[p]=w;w=w>>8;a[p+1|0]=w;p=(d[267194]|d[267195]<<8)<<16>>16;t=e+4|0;w=p;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+8|0;w=(d[267186]|d[267187]<<8)<<16>>16;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+12|0;w=(d[267184]|d[267185]<<8)<<16>>16;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+16|0;w=(d[267190]|d[267191]<<8)<<16>>16;a[t]=w;w=w>>8;a[t+1|0]=w;t=e+20|0;w=(d[267188]|d[267189]<<8)<<16>>16;a[t]=w;w=w>>8;a[t+1|0]=w;t=1;k=0;c=u;u=p;while(1){p=e+(k<<3)|0;q=e+(k<<3)+4|0;h=(c&65535)>>>0<65e3>>>0?c:-536;f=(u&65535)>>>0<65e3>>>0?u:-536;w=h;a[p]=w;w=w>>8;a[p+1|0]=w;w=f;a[q]=w;w=w>>8;a[q+1|0]=w;q=(h&65535)>>>0>(f&65535)>>>0?h:f;if((q&65535)>>>0>(s&65535)>>>0){f=((q&65535)/(s&65535)|0)+1&65535;q=e+(k<<3)+2|0;w=f;a[q]=w;w=w>>8;a[q+1|0]=w;v=f}else{f=e+(k<<3)+2|0;w=1;a[f]=w;w=w>>8;a[f+1|0]=w;v=1}f=e+(k<<3)+6|0;w=v;a[f]=w;w=w>>8;a[f+1|0]=w;f=t&65535;if(!(f>>>0<j>>>0)){break}q=e+(f<<3)|0;h=e+(f<<3)+4|0;t=t+1&65535;k=f;c=(d[q]|d[q+1|0]<<8)<<16>>16;u=(d[h]|d[h+1|0]<<8)<<16>>16}u=(d[267196]|d[267197]<<8)<<16>>16;c=0;while(1){k=68538+((c&255)<<2)|0;t=c+1&255;if(((d[k]|d[k+1|0]<<8)<<16>>16&65535)>>>0>(u&65535)>>>0){x=c;break}if((t&255)>>>0<12>>>0){c=t}else{x=t;break}}c=68536+(((x&255)>>>0<11>>>0?x&255:11)<<2)|0;ze(Dm((d[c]|d[c+1|0]<<8)<<16>>16)|0,160,49,6,0,290,(g=i,i=i+1|0,i=i+7&-8,w=0,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;If(10,49,10,49,20,12,2,0);c=0;x=0;do{u=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[267992]|d[267993]<<8|d[267994]<<16|d[267995]<<24|0)>>>0<u>>>0){w=u+2|0;a[267992]=w;w=w>>8;a[267993]=w;w=w>>8;a[267994]=w;w=w>>8;a[267995]=w;u=d[72208]|d[72209]<<8|d[72210]<<16|d[72211]<<24|0;t=a[u]|0;do{if(!((t&255)>>>0>62>>>0)){if((t&255)>>>0<36>>>0){w=1;a[71472]=w;w=w>>8;a[71473]=w;y=1;break}else{y=(d[71472]|d[71473]<<8)<<16>>16&255;break}}else{w=-1;a[71472]=w;w=w>>8;a[71473]=w;y=-1}}while(0);a[u]=(a[u]|0)+y;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0)}t=(c*36&65535)+93&65535;k=0;do{v=k&65535;s=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[267992]|d[267993]<<8|d[267994]<<16|d[267995]<<24|0)>>>0<s>>>0){w=s+2|0;a[267992]=w;w=w>>8;a[267993]=w;w=w>>8;a[267994]=w;w=w>>8;a[267995]=w;s=d[72208]|d[72209]<<8|d[72210]<<16|d[72211]<<24|0;h=a[s]|0;do{if(!((h&255)>>>0>62>>>0)){if((h&255)>>>0<36>>>0){w=1;a[71472]=w;w=w>>8;a[71473]=w;z=1;break}else{z=(d[71472]|d[71473]<<8)<<16>>16&255;break}}else{w=-1;a[71472]=w;w=w>>8;a[71473]=w;z=-1}}while(0);a[s]=(a[s]|0)+z;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0)}h=k<<16>>16==0?-1:-47;n=t+(k*9&65535)&65535;q=e+(x<<3)+(v<<2)|0;f=e+(x<<3)+(v<<2)+2|0;p=(d[q]|d[q+1|0]<<8)<<16>>16&65535;q=n+5&65535;r=n<<16>>16>199;l=n-1&65535;o=n+1&65535;A=n+6&65535;B=(d[f]|d[f+1|0]<<8)<<16>>16&65535;f=n<<16>>16<0?0:n;C=q<<16>>16>199?199:q;D=C<<16>>16<0?0:C;C=f<<16>>16>D<<16>>16;E=((f<<16>>16)*320|0)+271|0;F=D+(1-f&65535)&65535;f=F<<16>>16==0;D=0;G=m;while(1){H=D>>>0<p>>>0;I=_d()|0;if(!(r|C|f)){J=0;K=I+E|0;while(1){Lp(K|0,-30|0,33)|0;I=J+1&65535;if((I&65535)>>>0<(F&65535)>>>0){J=I;K=K+320|0}else{break}}}if(!H){break}ze(59272,287,l,20,0,289,(g=i,i=i+8|0,w=D,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;K=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if((d[267992]|d[267993]<<8|d[267994]<<16|d[267995]<<24|0)>>>0<K>>>0){w=K+2|0;a[267992]=w;w=w>>8;a[267993]=w;w=w>>8;a[267994]=w;w=w>>8;a[267995]=w;K=d[72208]|d[72209]<<8|d[72210]<<16|d[72211]<<24|0;J=a[K]|0;do{if(!((J&255)>>>0>62>>>0)){if((J&255)>>>0<36>>>0){w=1;a[71472]=w;w=w>>8;a[71473]=w;L=1;break}else{L=(d[71472]|d[71473]<<8)<<16>>16&255;break}}else{w=-1;a[71472]=w;w=w>>8;a[71473]=w;L=-1}}while(0);a[K]=(a[K]|0)+L;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0)}w=1;a[219104]=w;w=w>>8;a[219105]=w;w=w>>8;a[219106]=w;w=w>>8;a[219107]=w;we(G,n,G,q,h);J=G+1&65535;we(J,o,J,A,12);he(m,n,m,n,304,7,2,0,0);Sc(52,255);D=D+B&65535;G=J}ze(59272,287,l,15,0,289,(g=i,i=i+8|0,w=p,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,g)|0);i=g;he(m,n,m,n,304,7,2,0,0);Sc(38,255);k=k+1&65535}while((k&65535)>>>0<2>>>0);c=c+1&65535;x=c&65535}while(x>>>0<j>>>0);Xh();i=b;return}function Oe(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;c=i;e=d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0;f=b<<16>>16==3&(e|0)==0?4:b;b=f&65535;if(f<<16>>16==4&(e|0)!=0){w=0;a[204384]=w;w=w>>8;a[204385]=w;w=w>>8;a[204386]=w;w=w>>8;a[204387]=w}e=de(2)|0;g=(d[231176]|d[231177]<<8)<<16>>16;h=g&65535;if(g<<16>>16==f<<16>>16){j=de(e)|0;i=c;return}vp(2,0)|0;w=f;a[231176]=w;w=w>>8;a[231177]=w;w=f;a[231168]=w;w=w>>8;a[231169]=w;a[260272]=1;if((h|0)==3){k=d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0;if(!((k|0)==0|f<<16>>16==1|f<<16>>16==3)){jo(2,k);w=0;a[204384]=w;w=w>>8;a[204385]=w;w=w>>8;a[204386]=w;w=w>>8;a[204387]=w}}else if((h|0)==4){l=6}else if((h|0)==1|(h|0)==2){qi((d[231040]|d[231041]<<8)<<16>>16);l=6}if((l|0)==6){w=0;a[261344]=w;w=w>>8;a[261345]=w;ye(0,-1,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l}if((a[15076+(h*24|0)|0]|0)!=0?(a[15077+(b*24|0)|0]|0)!=0:0){a[203192]=1;a[204344]=1;$e(0)}h=15078+(b*24|0)|0;l=(d[h]|d[h+1|0]<<8)<<16>>16;Wg(l)|0;h=(d[261376]|d[261377]<<8)<<16>>16;if(!(h<<16>>16==0)){zh(h,0,0)}if(!(f<<16>>16==0)){f=d[203168]|d[203169]<<8|d[203170]<<16|d[203171]<<24|0;if((f|0)==0){m=0}else{h=15056+(b*24|0)|0;b=a[h]|0;k=b<<24>>24==-1;n=f;do{f=n+48|0;w=(d[f]|d[f+1|0]<<8)<<16>>16&-2;a[f]=w;w=w>>8;a[f+1|0]=w;f=n+16|0;o=(d[f]|d[f+1|0]<<8)<<16>>16;w=o|8;a[f]=w;w=w>>8;a[f+1|0]=w;a:do{if(!k){p=n+4|0;q=(d[p]|d[p+1|0]<<8)<<16>>16&65535;p=h;r=b;while(1){p=p+1|0;if((r<<24>>24|0)==(q|0)){break}r=a[p]|0;if(r<<24>>24==-1){break a}}w=o&-9;a[f]=w;w=w>>8;a[f+1|0]=w}}while(0);Gg(n);n=Dg(n)|0}while((n|0)!=0);m=d[203168]|d[203169]<<8|d[203170]<<16|d[203171]<<24|0}Fh(m);a[219160]=1}switch((d[231176]|d[231177]<<8)<<16>>16&65535|0){case 0:{if(!(g<<16>>16==7)){w=0;a[261336]=w;w=w>>8;a[261337]=w;g=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;vm(0,0,d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0)}Wg(l)|0;j=de(e)|0;i=c;return};case 1:{w=(d[231192]|d[231193]<<8)<<16>>16;a[231040]=w;w=w>>8;a[231041]=w;Eh(1);w=5;a[261344]=w;w=w>>8;a[261345]=w;vp(2,1)|0;j=de(e)|0;i=c;return};case 2:{Ho(0);Eh(1);l=13220+(((d[231032]|d[231033]<<8)<<16>>16&65535)*100|0)|0;ri((d[l]|d[l+1|0]<<8)<<16>>16)|0;vp(2,1)|0;j=de(e)|0;i=c;return};case 3:{Eh(1);vp(2,1)|0;j=de(e)|0;i=c;return};case 4:{Eh(1);vp(2,1)|0;j=de(e)|0;i=c;return};default:{j=de(e)|0;i=c;return}}}function Pe(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0;e=i;i=i+64|0;f=e|0;g=de(2)|0;tm(59960,3,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0)|0;h=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if(h>>>0<3>>>0){j=((h*56|0)+8|0)>>>3&65535;if(j<<16>>16<0){k=0;l=j+7&65535;m=-j&65535;n=j}else{k=j;l=7;m=0;n=j}}else{k=1;l=7;m=0;n=1}if(k<<16>>16>39|m<<16>>16>39){o=h}else{if(m<<16>>16<0){p=k-m&65535;q=l+m&65535;r=0}else{p=k;q=l;r=m}ie(p<<3,136,r<<3,8,q<<3,56,2,2);o=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0}q=o>>>0>2>>>0?n+7&65535:n;if(q<<16>>16<0){s=0;t=q+7&65535;u=33-q&65535}else{s=q;t=7;u=33}if(!(s<<16>>16>39|u<<16>>16>39)){if(u<<16>>16<0){v=s-u&65535;x=t+u&65535;y=0}else{v=s;x=t;y=u}ie(v<<3,136,y<<3,8,x<<3,56,2,2)}x=0;y=(_d()|0)+43528|0;while(1){Lp(y|0,116,168)|0;v=x+1&65535;if((v&65535)>>>0<56>>>0){x=v;y=y+320|0}else{break}}y=c<<24>>24!=0;if(y){c=0;x=(_d()|0)+25608|0;while(1){Lp(x|0,116,304)|0;v=c+1&65535;if((v&65535)>>>0<112>>>0){c=v;x=x+320|0}else{break}}if(b<<16>>16==-1){z=31}else{x=0;while(1){c=68538+((x&255)<<2)|0;v=x+1&255;if(((d[c]|d[c+1|0]<<8)<<16>>16&65535)>>>0>(b&65535)>>>0){A=x;break}if((v&255)>>>0<12>>>0){x=v}else{A=v;break}}x=68536+(((A&255)>>>0<11>>>0?A&255:11)<<2)|0;ze(Dm((d[x]|d[x+1|0]<<8)<<16>>16)|0,160,49,6,0,290,(B=i,i=i+1|0,i=i+7&-8,w=0,a[B]=w,w=w>>8,a[B+1|0]=w,w=w>>8,a[B+2|0]=w,w=w>>8,a[B+3|0]=w,B)|0);i=B;z=25}}else{he(8,80,8,116,304,36,2,2,0);if((d[45152]|d[45153]<<8)<<16>>16<<16>>16==1){z=25}else{he(8,80,8,152,304,36,2,2,0);z=25}}if((z|0)==25){x=b&65535;if(b<<16>>16==-1){z=31}else{b=f|0;f=Dm(22)|0;A=d[71672]|d[71673]<<8|d[71674]<<16|d[71675]<<24|0;Ka(b|0,64,f|0,(B=i,i=i+16|0,w=(A>>>0)/60|0,a[B]=w,w=w>>8,a[B+1|0]=w,w=w>>8,a[B+2|0]=w,w=w>>8,a[B+3|0]=w,w=(A>>>0)%60|0,a[B+8|0]=w,w=w>>8,a[B+9|0]=w,w=w>>8,a[B+10|0]=w,w=w>>8,a[B+11|0]=w,B)|0)|0;i=B;if((d[71672]|d[71673]<<8|d[71674]<<16|d[71675]<<24|0)>>>0<60>>>0?(A=Oa(b|0,48)|0,(a[A]|0)!=32):0){f=A+1|0;do{Mp(A|0,f|0,Ip(A|0)|0)|0}while((a[A]|0)!=32)}ze(Dm(21)|0,72,15,15,0,34,(B=i,i=i+8|0,w=x,a[B]=w,w=w>>8,a[B+1|0]=w,w=w>>8,a[B+2|0]=w,w=w>>8,a[B+3|0]=w,B)|0);i=B;ze(b,248,15,15,0,546,(B=i,i=i+1|0,i=i+7&-8,w=0,a[B]=w,w=w>>8,a[B+1|0]=w,w=w>>8,a[B+2|0]=w,w=w>>8,a[B+3|0]=w,B)|0);i=B;ze(Dm(23)|0,160,38,15,0,290,(B=i,i=i+1|0,i=i+7&-8,w=0,a[B]=w,w=w>>8,a[B+1|0]=w,w=w>>8,a[B+2|0]=w,w=w>>8,a[B+3|0]=w,B)|0);i=B}}if((z|0)==31){ze(Dm(336)|0,160,15,15,0,290,(B=i,i=i+1|0,i=i+7&-8,w=0,a[B]=w,w=w>>8,a[B+1|0]=w,w=w>>8,a[B+2|0]=w,w=w>>8,a[B+3|0]=w,B)|0);i=B}B=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((B|0)==2){C=1;D=543}else if((B|0)==0){C=0;D=447}else{C=2;D=495}B=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;z=B+765|0;w=z;a[72208]=w;w=w>>8;a[72209]=w;w=w>>8;a[72210]=w;w=w>>8;a[72211]=w;b=B+D|0;a[z]=a[b]|0;a[z+1|0]=a[b+1|0]|0;a[z+2|0]=a[b+2|0]|0;b=(d[72208]|d[72209]<<8|d[72210]<<16|d[72211]<<24)+C|0;w=b;a[72208]=w;w=w>>8;a[72209]=w;w=w>>8;a[72210]=w;w=w>>8;a[72211]=w;if(y){E=de(g)|0;i=e;return}y=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if(!((d[267992]|d[267993]<<8|d[267994]<<16|d[267995]<<24|0)>>>0<y>>>0)){E=de(g)|0;i=e;return}w=y+2|0;a[267992]=w;w=w>>8;a[267993]=w;w=w>>8;a[267994]=w;w=w>>8;a[267995]=w;y=a[b]|0;do{if(!((y&255)>>>0>62>>>0)){if((y&255)>>>0<36>>>0){w=1;a[71472]=w;w=w>>8;a[71473]=w;F=1;break}else{F=(d[71472]|d[71473]<<8)<<16>>16&255;break}}else{w=-1;a[71472]=w;w=w>>8;a[71473]=w;F=-1}}while(0);a[b]=(a[b]|0)+F;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);E=de(g)|0;i=e;return}function Qe(b){b=b|0;a[b]=(di()|0)<<16>>16==0|0;return}function Re(){var b=0,c=0,e=0;b=d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0;if(!((d[267992]|d[267993]<<8|d[267994]<<16|d[267995]<<24|0)>>>0<b>>>0)){xp();return}w=b+2|0;a[267992]=w;w=w>>8;a[267993]=w;w=w>>8;a[267994]=w;w=w>>8;a[267995]=w;b=d[72208]|d[72209]<<8|d[72210]<<16|d[72211]<<24|0;c=a[b]|0;do{if(!((c&255)>>>0>62>>>0)){if((c&255)>>>0<36>>>0){w=1;a[71472]=w;w=w>>8;a[71473]=w;e=1;break}else{e=(d[71472]|d[71473]<<8)<<16>>16&255;break}}else{w=-1;a[71472]=w;w=w>>8;a[71473]=w;e=-1}}while(0);a[b]=(a[b]|0)+e;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);xp();return}function Se(){Xh();Lp((d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24)+765|0,0,3)|0;de((d[267200]|d[267201]<<8)<<16>>16)|0;Xc();return}function Te(b,c,d,e,f,g,h,i){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;w=b;a[267184]=w;w=w>>8;a[267185]=w;w=c;a[267186]=w;w=w>>8;a[267187]=w;w=d;a[267188]=w;w=w>>8;a[267189]=w;w=e;a[267190]=w;w=w>>8;a[267191]=w;w=f;a[267192]=w;w=w>>8;a[267193]=w;w=g;a[267194]=w;w=w>>8;a[267195]=w;w=h;a[267196]=w;w=w>>8;a[267197]=w;a[267198]=i;Bc(10,18,72,32);return}function Ue(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;i=i+768|0;c=b|0;Lp(c|0,0,768)|0;Uc(0,255);ud(5);e=Kg(1,31,16,56,-1,0)|0;f=e+16|0;w=4416;a[f]=w;w=w>>8;a[f+1|0]=w;f=e+38|0;w=96;a[f]=w;w=w>>8;a[f+1|0]=w;f=e+40|0;w=104;a[f]=w;w=w>>8;a[f+1|0]=w;f=Qg(0,e)|0;e=Kg(2,25,112,56,-1,0)|0;g=e+16|0;w=4416;a[g]=w;w=w>>8;a[g+1|0]=w;g=e+38|0;w=96;a[g]=w;w=w>>8;a[g+1|0]=w;g=e+40|0;w=104;a[g]=w;w=w>>8;a[g+1|0]=w;g=Qg(f,e)|0;e=Kg(3,36,208,56,-1,0)|0;f=e+16|0;w=4416;a[f]=w;w=w>>8;a[f+1|0]=w;f=e+38|0;w=96;a[f]=w;w=w>>8;a[f+1|0]=w;f=e+40|0;w=104;a[f]=w;w=w>>8;a[f+1|0]=w;f=Qg(g,e)|0;tm(Cm(56248)|0,3,0)|0;ie(0,0,0,0,320,200,2,0);Ve(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,15);while(1){e=Ig(f)|0;Ee();g=(e&2048)==0?e&65535:0;if((g|0)==32771){h=6;break}else if((g|0)==32770){h=5;break}else if((g|0)==32769){j=1;break}xp()}if((h|0)==5){j=2}else if((h|0)==6){j=0}xp();if((f|0)!=0){h=f;while(1){f=h|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;zp(h);if((g|0)==0){break}else{h=g}}}Ve(c,15);if((a[261320]|a[261312])<<24>>24==0){h=Qg(0,Kg(1,(Jg(a[Dm(107)|0]|0)|0)&255,168,168,373,0)|0)|0;g=Qg(h,Kg(2,(Jg(a[Dm(108)|0]|0)|0)&255,240,168,375,0)|0)|0;w=5;a[46448]=w;w=w>>8;a[46449]=w;w=w>>8;a[46450]=w;w=w>>8;a[46451]=w;de(0)|0;h=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;f=Dm((j*40|0)+405&65535)|0;Np(h|0,f|0,d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24|0)|0;f=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;Zf(f,Nh(j&255)|0,0,0);f=Cm(53872)|0;tm(f,3,d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0)|0;ie(0,0,0,0,208,24,2,0);ie(0,(j*24|0)+24&65535,208,0,104,24,2,0);Fh(g);Qb();return 0}rd(0);g=(j<<4)+144|0;f=0;h=231736;e=0;while(1){a[h]=f;if((((e|0)/16|0)&65535|0)==9?(k=(e|0)%16|0,(k&65535)<<16>>16<7):0){a[h]=g+k}k=f+1&65535;if(k<<16>>16<256){f=k;h=h+1|0;e=k<<16>>16}else{break}}Xh();Ve(c,15);i=b;return j&255|0}function Ve(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;e=i;i=i+768|0;f=e|0;g=f|0;if((b|0)==0){h=768;j=0;i=e;return}Kp(g|0,232120,768)|0;k=0;l=0;do{m=(d[b+l|0]|0)-(d[f+l|0]|0)&65535;n=m<<16>>16;o=m<<16>>16>-1?n:-n|0;k=(k|0)>(o|0)?k:o;l=l+1|0}while((l|0)<768);l=c<<8;if((k|0)!=0){c=((l<<16>>16|0)/(k|0)|0)&65535;if((k|0)>0&c<<16>>16<512){o=c;n=1;while(1){m=o+c&65535;p=n+1&65535;q=p<<16>>16;if((q|0)<=(k|0)&m<<16>>16<512){o=m;n=p}else{r=m;s=q;break}}}else{r=c;s=1}}else{r=l;s=1}l=0;c=d[219112]|d[219113]<<8|d[219114]<<16|d[219115]<<24|0;a:while(1){n=l+r&65535;o=((n&65535)>>>8)+c|0;k=0;q=0;while(1){m=a[b+k|0]|0;p=f+k|0;t=a[p]|0;u=t&255;v=m&255;if(t<<24>>24==m<<24>>24){w=q}else{if((t&255)>>>0<(m&255)>>>0){x=u+s|0;y=(x|0)<(v|0)?x&65535:m&255;z=1}else{y=t&255;z=q}t=y<<16>>16;if((t|0)>(v|0)){x=t-s|0;A=(x|0)>(v|0)?x&255:m;B=1}else{A=y&255;B=z}a[p]=A;w=B}p=k+1|0;if((p|0)<768){k=p;q=w}else{break}}q=n&255;if(w<<24>>24==0){break}ke(g);if(!((d[219112]|d[219113]<<8|d[219114]<<16|d[219115]<<24|0)>>>0<o>>>0)){l=q;c=o;continue}while(1){xp();if(!((d[219112]|d[219113]<<8|d[219114]<<16|d[219115]<<24|0)>>>0<o>>>0)){l=q;c=o;continue a}}}h=768;j=0;i=e;return}function We(b){b=b|0;var c=0,d=0,e=0,f=0;c=((b&255)<<4)+144|0;b=0;d=231736;e=0;while(1){a[d]=b;if((((e|0)/16|0)&65535|0)==9?(f=(e|0)%16|0,(f&65535)<<16>>16<7):0){a[d]=c+f}f=b+1&65535;if(f<<16>>16<256){b=f;d=d+1|0;e=f<<16>>16}else{break}}return}function Xe(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0;if((b|0)==0|(c|0)==0){return}a[c]=0;g=e&255;h=g*3|0;i=b+h|0;j=(f&255)>>>1;f=b+(h+1)|0;k=b+(h+2)|0;h=1;l=1;while(1){m=l*3|0;n=d[b+m|0]|0;o=n-((aa(n-(d[i]|0)|0,j)|0)>>>7)|0;n=d[b+(m+1)|0]|0;p=n-((aa(n-(d[f]|0)|0,j)|0)>>>7)|0;n=d[b+(m+2)|0]|0;m=o&255;o=p&255;p=n-((aa(n-(d[k]|0)|0,j)|0)>>>7)&255;n=1;q=e;r=-1;s=1;while(1){t=s*3|0;u=(d[b+t|0]|0)-m|0;v=aa(u,u)|0;u=(d[b+(t+1)|0]|0)-o|0;w=(aa(u,u)|0)+v|0;v=(d[b+(t+2)|0]|0)-p|0;t=w+(aa(v,v)|0)|0;if((t&65535)>>>0>(r&65535)>>>0){x=r;y=q}else{v=(s|0)!=(g|0)&n<<16>>16==h<<16>>16;x=v?r:t&65535;y=v?q:n&255}v=n+1&65535;if((v&65535)>>>0<256>>>0){n=v;q=y;r=x;s=v&65535}else{break}}a[c+l|0]=y;s=h+1&65535;if((s&65535)>>>0<256>>>0){h=s;l=s&65535}else{break}}return}



function sj(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0;b=i;i=i+24|0;c=b|0;e=b+8|0;f=b+16|0;Lb();if(!((Ec()|0)<<24>>24==0)){Fc();i=b;return}if((d[258168]|d[258169]<<8|d[258170]<<16|d[258171]<<24|0)==2){rd(28);w=5;a[46448]=w;w=w>>8;a[46449]=w;w=w>>8;a[46450]=w;w=w>>8;a[46451]=w;w=(Ue()|0)&255;a[46448]=w;w=w>>8;a[46449]=w;w=w>>8;a[46450]=w;w=w>>8;a[46451]=w;Nf();g=$d(1)|0;Lp(g|0,0,(ae(1)|0)&65535|0)|0;rm();We((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255);ud((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&65535);Of();w=1;a[258168]=w;w=w>>8;a[258169]=w;w=w>>8;a[258170]=w;w=w>>8;a[258171]=w;w=1;a[45152]=w;w=w>>8;a[45153]=w;w=0;a[262360]=w;w=w>>8;a[262361]=w;w=0;a[231056]=w;w=w>>8;a[231057]=w;w=w>>8;a[231058]=w;w=w>>8;a[231059]=w}g=(d[231168]|d[231169]<<8)<<16>>16;if(!(g<<16>>16==(d[231176]|d[231177]<<8)<<16>>16<<16>>16)){Oe(g)}Ee();do{if((d[258168]|d[258169]<<8|d[258170]<<16|d[258171]<<24|0)==1){w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+300|0;a[267808]=w;w=w>>8;a[267809]=w;w=w>>8;a[267810]=w;w=w>>8;a[267811]=w;Oe(0);pj((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255,(d[45152]|d[45153]<<8)<<16>>16);if(!((a[261312]|a[261320])<<24>>24==0)){w=0;a[258168]=w;w=w>>8;a[258169]=w;w=w>>8;a[258170]=w;w=w>>8;a[258171]=w;Oe(4);rd(($n(0,8)|0)+8&65535);break}mg();Cc(124);i=b;return}}while(0);if(!((d[70688]|d[70689]<<8)<<16>>16<<16>>16==(d[44352]|d[44353]<<8)<<16>>16<<16>>16)){si(-1)|0;si((d[231184]|d[231185]<<8)<<16>>16)|0;w=(d[44352]|d[44353]<<8)<<16>>16;a[70688]=w;w=w>>8;a[70689]=w}do{if((Rc()|0)<<24>>24==0?(yd()|0)<<24>>24==0:0){if((d[46608]|d[46609]<<8)<<16>>16<<16>>16==0){rd(2);w=0;a[232904]=w;w=w>>8;a[232905]=w;break}if((d[232904]|d[232905]<<8)<<16>>16<<16>>16>0){rd(($n(0,5)|0)+17&65535);w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+300|0;a[267808]=w;w=w>>8;a[267809]=w;w=w>>8;a[267810]=w;w=w>>8;a[267811]=w;w=-1;a[232904]=w;w=w>>8;a[232905]=w;break}w=0;a[232904]=w;w=w>>8;a[232905]=w;if((d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24|0)>>>0>(d[267808]|d[267809]<<8|d[267810]<<16|d[267811]<<24|0)>>>0?(g=(db()|0)<<24>>24==0|0,a[47976]=g,a[47968]=g,(Qc()|0)<<24>>24==0):0){rd(($n(0,8)|0)+8&65535);w=(d[219136]|d[219137]<<8|d[219138]<<16|d[219139]<<24)+300|0;a[267808]=w;w=w>>8;a[267809]=w;w=w>>8;a[267810]=w;w=w>>8;a[267811]=w}}}while(0);de(0)|0;Ig(d[203168]|d[203169]<<8|d[203170]<<16|d[203171]<<24|0)|0;if(!((Ec()|0)<<24>>24==0)){i=b;return}g=(d[231176]|d[231177]<<8)<<16>>16;if((g-1&65535)>>>0<4>>>0){h=d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0;if((h|0)!=0){if((d[267800]|d[267801]<<8|d[267802]<<16|d[267803]<<24|0)>>>0<(d[219128]|d[219129]<<8|d[219130]<<16|d[219131]<<24|0)>>>0){Uo(h);w=(d[219128]|d[219129]<<8|d[219130]<<16|d[219131]<<24)+300|0;a[267800]=w;w=w>>8;a[267801]=w;w=w>>8;a[267802]=w;w=w>>8;a[267803]=w;j=(d[231176]|d[231177]<<8)<<16>>16}else{j=g}if(!(j<<16>>16==1)){Dn(f,(d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24)+12|0);w=vn(f)|0;a[231192]=w;w=w>>8;a[231193]=w}}Eh(0);lj();cf((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255,0);mn();go();Km();Gh();bf(0)}ye(0,0,(f=i,i=i+1|0,i=i+7&-8,w=0,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0);i=f;j=a[5976]|0;if(!(j<<24>>24==0|(a[261320]|0)!=0)?(g=d[219128]|d[219129]<<8|d[219130]<<16|d[219131]<<24|0,(d[267816]|d[267817]<<8|d[267818]<<16|d[267819]<<24|0)>>>0<g>>>0):0){h=e|0;a:do{if(!((g-(d[219144]|d[219145]<<8|d[219146]<<16|d[219147]<<24)|0)>>>0<7200>>>0)){k=(d[231250]|d[231251]<<8)<<16>>16;if((k&3)==0){l=0;m=k}else{a[h]=-1;k=e+2|0;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;k=e+4|0;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;k=0;n=0;b:while(1){o=k;while(1){do{p=Mj(e)|0;if((p|0)==0){break b}}while(((a[p+2|0]|0)-15&255)>>>0<2>>>0);if((d[p+8|0]|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){o=o+1&65535}else{break}}k=o;n=n+1&65535}k=(d[231250]|d[231251]<<8)<<16>>16;l=(k&2)!=0&o<<16>>16==0?1:(k&1)!=0&n<<16>>16==0&1;m=k}if(!((m&4)==0)?(k=(d[232088]|d[232089]<<8)<<16>>16,!(k<<16>>16==-1)):0){q=(d[232072]|d[232073]<<8|d[232074]<<16|d[232075]<<24)+30|0;r=(k&65535)>>>0<((d[q]|d[q+1|0]<<8)<<16>>16&65535)>>>0?l:1}else{r=l}if(!((m&8)==0&r<<24>>24==0)){rd(0);w=0;a[261336]=w;w=w>>8;a[261337]=w;q=d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0;vm(0,0,d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0);xd(-2);Oe(0);q=(d[231252]|d[231253]<<8)<<16>>16;do{if(!((q&3)==0)){a[c|0]=-1;k=c+2|0;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;k=c+4|0;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;k=0;s=0;c:while(1){t=k;while(1){do{u=Mj(c)|0;if((u|0)==0){break c}}while(((a[u+2|0]|0)-14&255)>>>0<3>>>0);if((d[u+8|0]|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){t=t+1&65535}else{break}}k=t;s=s+1&65535}k=(d[231252]|d[231253]<<8)<<16>>16;if((k&1)==0){v=1}else{v=s<<16>>16==0|0}if((k&2)==0){x=v}else{if(v<<24>>24==0){y=k;z=60;break}x=t<<16>>16!=0|0}if(x<<24>>24==0){y=k;z=60}}else{y=q;z=60}}while(0);do{if((z|0)==60){if((!((y&4)==0)?(q=(d[232088]|d[232089]<<8)<<16>>16,!(q<<16>>16==-1)):0)?(n=(d[232072]|d[232073]<<8|d[232074]<<16|d[232075]<<24)+30|0,!((q&65535)>>>0<((d[n]|d[n+1|0]<<8)<<16>>16&65535)>>>0)):0){break}xd(41);Me(Dm(83)|0,-1,(f=i,i=i+1|0,i=i+7&-8,w=0,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0)|0;i=f;Cc(120);break a}}while(0);Me(Dm(82)|0,-1,(f=i,i=i+1|0,i=i+7&-8,w=0,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,f)|0)|0;i=f;Cc(70)}}}while(0);w=(d[219128]|d[219129]<<8|d[219130]<<16|d[219131]<<24)+300|0;a[267816]=w;w=w>>8;a[267817]=w;w=w>>8;a[267818]=w;w=w>>8;a[267819]=w;A=a[5976]|0}else{A=j}if(A<<24>>24==0){Qb()}xp();i=b;return}function tj(){og();Cc(2);return}function uj(){var b=0;sm();b=(d[232072]|d[232073]<<8|d[232074]<<16|d[232075]<<24)+4|0;a[b]=a[b]&-5;rm();w=1;a[258168]=w;w=w>>8;a[258169]=w;w=w>>8;a[258170]=w;w=w>>8;a[258171]=w;return}function vj(){ng();Cc(102);return}function wj(){xd(40);sm();w=((d[262360]|d[262361]<<8)<<16>>16)+1&65535;a[262360]=w;w=w>>8;a[262361]=w;Te((d[231306]|d[231307]<<8)<<16>>16,(d[231308]|d[231309]<<8)<<16>>16,(d[231310]|d[231311]<<8)<<16>>16,(d[231312]|d[231313]<<8)<<16>>16,(d[231314]|d[231315]<<8)<<16>>16,(d[231316]|d[231317]<<8)<<16>>16,(d[231248]|d[231249]<<8)<<16>>16,(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255);Cc(126);return}function xj(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;b=i;i=i+16|0;c=b|0;e=(d[262360]|d[262361]<<8)<<16>>16<<16>>16==9;Nf();if(e){Ve(d[232888]|d[232889]<<8|d[232890]<<16|d[232891]<<24|0,15);Bf(0);ud(-2);e=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((e|0)==2){f=32;g=21334;h=18584;j=23912}else if((e|0)==0){f=30;g=20794;h=17944;j=23400}else{f=31;g=21064;h=18264;j=23656}e=c|0;w=j;a[73024]=w;w=w>>8;a[73025]=w;w=w>>8;a[73026]=w;w=w>>8;a[73027]=w;w=h;a[72992]=w;w=w>>8;a[72993]=w;w=w>>8;a[72994]=w;w=w>>8;a[72995]=w;w=g;a[73e3]=w;w=w>>8;a[73001]=w;w=w>>8;a[73002]=w;w=w>>8;a[73003]=w;w=0;a[73008]=w;w=w>>8;a[73009]=w;w=0;a[73016]=w;w=w>>8;a[73017]=w;a[46640]=0;w=0;a[24]=w;w=w>>8;a[25]=w;w=-1;a[128]=w;w=w>>8;a[129]=w;a[71824]=0;w=0;a[72120]=w;w=w>>8;a[72121]=w;w=w>>8;a[72122]=w;w=w>>8;a[72123]=w;w=0;a[72152]=w;w=w>>8;a[72153]=w;w=0;a[72200]=w;w=w>>8;a[72201]=w;w=w>>8;a[72202]=w;w=w>>8;a[72203]=w;je();Td(66960,d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,768)|0;Kp(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0,d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,768)|0;re(d[258192]|d[258193]<<8|d[258194]<<16|d[258195]<<24|0);de(0)|0;g=(d[72992]|d[72993]<<8|d[72994]<<16|d[72995]<<24)+2|0;h=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;Kp(72096,h+((((d[g]|d[g+1|0]<<8)<<16>>16&65535)*48|0)+432)|0,18)|0;Lp(h+645|0,0,18)|0;Kp(72128,72096,18)|0;Lp(72160,0,18)|0;a[e]=0;a[c+1|0]=-41;a[c+2|0]=-40;a[c+3|0]=-39;a[c+4|0]=-38;a[c+5|0]=-37;a[c+6|0]=-36;De(e,0,15);rd(f);w=d[73024]|d[73025]<<8|d[73026]<<16|d[73027]<<24|0;a[267136]=w;w=w>>8;a[267137]=w;w=w>>8;a[267138]=w;w=w>>8;a[267139]=w;a[267128]=0;Bc(16,14,58,16);Cc(110);i=b;return}Xh();f=(d[262360]|d[262361]<<8)<<16>>16&65535;do{if((f|0)==8){e=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((e|0)==1){k=20254;l=17304;m=22888;n=13;break}else if((e|0)==2){k=20524;l=17624;m=23144;n=13;break}else if((e|0)==0){k=19984;l=16984;m=22632;n=13;break}else{break}}else if((f|0)==4){e=d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0;if((e|0)==1){k=19444;l=16344;m=22120;n=13;break}else if((e|0)==2){k=19714;l=16664;m=22376;n=13;break}else if((e|0)==0){k=19174;l=16024;m=21864;n=13;break}else{break}}}while(0);if((n|0)==13){n=c|0;w=m;a[73024]=w;w=w>>8;a[73025]=w;w=w>>8;a[73026]=w;w=w>>8;a[73027]=w;w=l;a[72992]=w;w=w>>8;a[72993]=w;w=w>>8;a[72994]=w;w=w>>8;a[72995]=w;w=k;a[73e3]=w;w=w>>8;a[73001]=w;w=w>>8;a[73002]=w;w=w>>8;a[73003]=w;w=0;a[73008]=w;w=w>>8;a[73009]=w;w=0;a[73016]=w;w=w>>8;a[73017]=w;a[46640]=0;w=0;a[24]=w;w=w>>8;a[25]=w;w=-1;a[128]=w;w=w>>8;a[129]=w;a[71824]=0;w=0;a[72120]=w;w=w>>8;a[72121]=w;w=w>>8;a[72122]=w;w=w>>8;a[72123]=w;w=0;a[72152]=w;w=w>>8;a[72153]=w;w=0;a[72200]=w;w=w>>8;a[72201]=w;w=w>>8;a[72202]=w;w=w>>8;a[72203]=w;je();Td(66960,d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,768)|0;Kp(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0,d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,768)|0;re(d[258192]|d[258193]<<8|d[258194]<<16|d[258195]<<24|0);de(0)|0;k=(d[72992]|d[72993]<<8|d[72994]<<16|d[72995]<<24)+2|0;l=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;Kp(72096,l+((((d[k]|d[k+1|0]<<8)<<16>>16&65535)*48|0)+432)|0,18)|0;Lp(l+645|0,0,18)|0;Kp(72128,72096,18)|0;Lp(72160,0,18)|0;a[n]=0;a[c+1|0]=-41;a[c+2|0]=-40;a[c+3|0]=-39;a[c+4|0]=-38;a[c+5|0]=-37;a[c+6|0]=-36;De(n,0,15);rd(34);w=d[73024]|d[73025]<<8|d[73026]<<16|d[73027]<<24|0;a[267136]=w;w=w>>8;a[267137]=w;w=w>>8;a[267138]=w;w=w>>8;a[267139]=w;a[267128]=0;Bc(16,14,58,16);Cc(54)}Dc(78);i=b;return}function yj(){Of();Td(67656,d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0,768)|0;Cf((d[262360]|d[262361]<<8)<<16>>16,1);Jc(45152);Cc(118);return}function zj(){var b=0;Ve(d[232888]|d[232889]<<8|d[232890]<<16|d[232891]<<24|0,15);b=(d[232072]|d[232073]<<8|d[232074]<<16|d[232075]<<24)+4|0;a[b]=a[b]&-5;rm();w=1;a[258168]=w;w=w>>8;a[258169]=w;w=w>>8;a[258170]=w;w=w>>8;a[258171]=w;return}function Aj(){var b=0,c=0;b=i;Xc();ze(0,0,0,0,0,1,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;ze(0,0,0,0,0,2,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;Ve(d[232888]|d[232889]<<8|d[232890]<<16|d[232891]<<24|0,60);Bf(0);Xh();c=$d(7)|0;Lp(c|0,0,(ae(7)|0)&65535|0)|0;i=b;return}function Bj(){var b=0,c=0;b=i;Xc();ze(0,0,0,0,0,1,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;ze(0,0,0,0,0,2,(c=i,i=i+1|0,i=i+7&-8,w=0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,c)|0);i=c;Ve(d[232888]|d[232889]<<8|d[232890]<<16|d[232891]<<24|0,60);Bf(0);Xh();c=$d(7)|0;Lp(c|0,0,(ae(7)|0)&65535|0)|0;Bc(26,44,44,48);i=b;return}function Cj(){Ve(d[232888]|d[232889]<<8|d[232890]<<16|d[232891]<<24|0,60);Xc();je();return}function Dj(){var b=0,c=0;b=Cm(66312)|0;c=d[202896]|d[202897]<<8|d[202898]<<16|d[202899]<<24|0;Td(b,c,(ae(6)|0)&65535)|0;w=d[202896]|d[202897]<<8|d[202898]<<16|d[202899]<<24|0;a[264688]=w;w=w>>8;a[264689]=w;w=w>>8;a[264690]=w;w=w>>8;a[264691]=w;w=20;a[264692]=w;w=w>>8;a[264693]=w;w=2;a[264694]=w;w=w>>8;a[264695]=w;w=4;a[264696]=w;w=w>>8;a[264697]=w;w=6;a[264700]=w;w=w>>8;a[264701]=w;Bc(50,30,80,52);rd(33);xp();return}function Ej(){var b=0,c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;Nf();Wg(20)|0;tm(65824,3,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0)|0;Bf(0);b=(d[261360]|d[261361]<<8)<<16>>16;c=(d[261352]|d[261353]<<8)<<16>>16;Be(b,c,b,c,(d[261368]|d[261369]<<8)<<16>>16,(d[261384]|d[261385]<<8)<<16>>16,2,0);Ve(d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0,60);rd(0);rj();rd(33);c=$d(5)|0;b=0;do{e=b&255;f=c+(b&65535)|0;a[f]=e;if((b&4080)==144?(g=e&15,(g&255)>>>0<7>>>0):0){a[f]=((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)<<4|g&255)+144}b=b+1&65535}while((b&65535)>>>0<256>>>0);tm(65464,3,d[232096]|d[232097]<<8|d[232098]<<16|d[232099]<<24|0)|0;af((d[261360]|d[261361]<<8)<<16>>16<<3,(d[261352]|d[261353]<<8)<<16>>16,(d[261368]|d[261369]<<8)<<16>>16<<3,(d[261384]|d[261385]<<8)<<16>>16,2,c);tf((d[261360]|d[261361]<<8)<<16>>16<<3,(d[261352]|d[261353]<<8)<<16>>16,(d[261368]|d[261369]<<8)<<16>>16<<3,(d[261384]|d[261385]<<8)<<16>>16,2,0,1,0);c=$d(7)|0;w=c;a[202904]=w;w=w>>8;a[202905]=w;w=w>>8;a[202906]=w;w=w>>8;a[202907]=w;w=c+(((d[261384]|d[261385]<<8)<<16>>16&65535)*320|0)|0;a[202896]=w;w=w>>8;a[202897]=w;w=w>>8;a[202898]=w;w=w>>8;a[202899]=w;c=yp(7680)|0;w=c;a[232896]=w;w=w>>8;a[232897]=w;w=w>>8;a[232898]=w;w=w>>8;a[232899]=w;w=Ap(1,768)|0;a[232888]=w;w=w>>8;a[232889]=w;w=w>>8;a[232890]=w;w=w>>8;a[232891]=w;Td(67656,c,768)|0;c=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0;b=1;g=c;f=0;e=c;while(1){c=9-f|0;h=g;i=0;j=e;while(1){a[h]=(aa(d[j]|0,c)|0)/9|0;k=i+1&65535;if((k&65535)>>>0<765>>>0){h=h+1|0;i=k;j=j+1|0}else{break}}a[g+765|0]=63;a[g+766|0]=63;a[g+767|0]=63;if(!((b&65535)>>>0<10>>>0)){break}j=b&65535;b=b+1&65535;g=g+768|0;f=j;e=d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0}Nf();De(48056,0,11);a[46640]=-1;ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);return}function Fj(){Oe((a[261320]|0)!=0?5:4);ke(d[232896]|d[232897]<<8|d[232898]<<16|d[232899]<<24|0);return}function Gj(b,c){b=b|0;c=c|0;var e=0,f=0,g=0;e=i;i=i+16|0;f=e|0;g=f;w=c;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;w=0;a[g+4|0]=w;w=w>>8;a[g+5|0]=w;w=w>>8;a[g+6|0]=w;w=w>>8;a[g+7|0]=w;vb(d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0,b|0,f|0)|0;i=e;return}function Hj(a){a=a|0;if((a&255)>>>0<6>>>0){return 257744+((a&255)*68|0)|0}else{Nb(54736,65344,27,69424);return 0}return 0}function Ij(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;c=b+4|0;b=(d[c]|d[c+1|0]<<8)<<16>>16;if((b&65535)>>>0<((d[257712]|d[257713]<<8)<<16>>16&65535)>>>0|b<<16>>16==-1){e=b}else{f=0;return f|0}while(1){b=e+1&65535;w=b;a[c]=w;w=w>>8;a[c+1|0]=w;if(!((b&65535)>>>0<((d[257712]|d[257713]<<8)<<16>>16&65535)>>>0)){f=0;g=4;break}h=257720+((b&65535)<<2)|0;i=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;if((i|0)==0){e=b}else{f=i;g=4;break}}if((g|0)==4){return f|0}return 0}function Jj(){Lp(257744|0,0|0,408|0)|0;Lp(257720|0,0|0,24|0)|0;w=0;a[257712]=w;w=w>>8;a[257713]=w;return}function Kj(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;if((b&255)>>>0>5>>>0){c=0;return c|0}e=b&255;f=257744+(e*68|0)|0;g=257748+(e*68|0)|0;if(!((a[g]&1)==0)){c=0;return c|0}h=f|0;Lp(h|0,0,68)|0;a[h]=b;a[g]=a[g]|1;g=257788+(e*68|0)|0;w=-1;a[g]=w;w=w>>8;a[g+1|0]=w;g=(d[257712]|d[257713]<<8)<<16>>16;w=g+1&65535;a[257712]=w;w=w>>8;a[257713]=w;e=257720+((g&65535)<<2)|0;w=f;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;c=f;return c|0}function Lj(a){a=a|0;if((a&65535)>>>0<103>>>0){return 221144+((a&65535)*96|0)|0}else{Nb(54496,65256,30,69280);return 0}return 0}function Mj(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;c=b+4|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;if(!((e&65535)>>>0<((d[220720]|d[220721]<<8)<<16>>16&65535)>>>0|e<<16>>16==-1)){f=0;return f|0}g=e+1&65535;w=g;a[c]=w;w=w>>8;a[c+1|0]=w;if(!((g&65535)>>>0<((d[220720]|d[220721]<<8)<<16>>16&65535)>>>0)){f=0;return f|0}e=b|0;h=b+2|0;b=g;a:while(1){g=220728+((b&65535)<<2)|0;i=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;do{if((i|0)!=0?(g=i+4|0,!(((d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24)&4|0)!=0&(d[204376]|d[204377]<<8)<<16>>16<<16>>16==0)):0){g=a[e]|0;if(!(g<<24>>24==-1)?!(g<<24>>24==(a[i+8|0]|0)):0){break}g=(d[h]|d[h+1|0]<<8)<<16>>16;if(g<<16>>16==-1){f=i;j=11;break a}if((g&65535|0)==(d[i+2|0]|0)){f=i;j=11;break a}}}while(0);i=b+1&65535;w=i;a[c]=w;w=w>>8;a[c+1|0]=w;if((i&65535)>>>0<((d[220720]|d[220721]<<8)<<16>>16&65535)>>>0){b=i}else{f=0;j=11;break}}if((j|0)==11){return f|0}return 0}function Nj(){Lp(221144|0,0|0,9888|0)|0;Lp(220728|0,0|0,412|0)|0;w=0;a[220720]=w;w=w>>8;a[220721]=w;return}function Oj(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0;b=i;i=i+8|0;c=b|0;e=c|0;w=(d[70120]|d[70121]<<8)<<16>>16;a[e]=w;w=w>>8;a[e+1|0]=w;w=(d[70122]|d[70123]<<8)<<16>>16;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;w=(d[70124]|d[70125]<<8)<<16>>16;a[e+4|0]=w;w=w>>8;a[e+5|0]=w;e=Ij(c)|0;if((e|0)!=0){f=e;do{e=f+8|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;f=Ij(c)|0}while((f|0)!=0)}w=0;a[220720]=w;w=w>>8;a[220721]=w;f=0;c=0;while(1){e=f&65535;g=221148+(e*96|0)|0;if(((d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24)&1|0)==0){h=c}else{g=c+1&65535;w=g;a[220720]=w;w=w>>8;a[220721]=w;j=220728+((c&65535)<<2)|0;w=221144+(e*96|0)|0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;h=g}g=f+1&65535;if((g&65535)>>>0<103>>>0){f=g;c=h}else{break}}i=b;return}function Pj(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;e=c&255;if((e|0)==1){f=101;g=230840}else if((e|0)==0){f=102;g=230936}else if((e|0)!=14){if(b<<16>>16==-1){e=0;while(1){h=e&65535;i=221148+(h*96|0)|0;j=e+1&65535;if(((d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24)&1|0)==0){k=e;break}if((j&65535)>>>0<100>>>0){e=j}else{k=j;break}}if(k<<16>>16==100){l=0;return l|0}else{m=h;n=k}}else{if(!((b&65535)>>>0<103>>>0)){Nb(54496,65256,30,69280);return 0}k=b&65535;h=221148+(k*96|0)|0;if(((d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)&1|0)==0){m=k;n=b}else{l=0;return l|0}}b=221144+(m*96|0)|0;if((b|0)==0){Nb(61312,65256,139,69320);return 0}else{f=n;g=b}}else{f=100;g=230744}Lp(g|0,0,96)|0;b=g|0;w=f;a[b]=w;w=w>>8;a[b+1|0]=w;a[g+2|0]=c;a[g+3|0]=-1;c=g+4|0;w=3;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;c=g+20|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;c=(d[220720]|d[220721]<<8)<<16>>16;w=c+1&65535;a[220720]=w;w=w>>8;a[220721]=w;b=220728+((c&65535)<<2)|0;w=g;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;l=g;return l|0}function Qj(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;c=b+4|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;Uk(b+20|0,d[44376]|d[44377]<<8|d[44378]<<16|d[44379]<<24|0);c=(d[220720]|d[220721]<<8)<<16>>16;a:do{if(c<<16>>16==0){e=0;f=0}else{g=c&65535;h=0;while(1){i=220728+(h<<2)|0;j=h+1|0;if((d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24|0)==(b|0)){e=h;f=c;break a}if((j|0)<(g|0)){h=j}else{e=j;f=c;break}}}}while(0);if((e|0)>=(f&65535|0)){Nb(58024,65256,173,69304)}c=f-1&65535;w=c;a[220720]=w;w=w>>8;a[220721]=w;f=c&65535;if((e|0)==(f|0)){return}Mp(220728+(e<<2)|0,220728+(e+1<<2)|0,f-e<<2|0)|0;return}function Rj(a){a=a|0;if((a&65535)>>>0<16>>>0){return 219240+((a&65535)*92|0)|0}else{Nb(54192,65168,28,69216);return 0}return 0}function Sj(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;c=b+4|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;if(!((e&65535)>>>0<((d[219168]|d[219169]<<8)<<16>>16&65535)>>>0|e<<16>>16==-1)){f=0;return f|0}g=b|0;b=e+1&65535;w=b;a[c]=w;w=w>>8;a[c+1|0]=w;if((b&65535)>>>0<((d[219168]|d[219169]<<8)<<16>>16&65535)>>>0){h=b}else{f=0;return f|0}while(1){b=219176+((h&65535)<<2)|0;e=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;if((e|0)!=0){b=a[g]|0;if(b<<24>>24==-1){f=e;i=7;break}if(b<<24>>24==(a[e+20|0]|0)){f=e;i=7;break}}e=h+1&65535;w=e;a[c]=w;w=w>>8;a[c+1|0]=w;if((e&65535)>>>0<((d[219168]|d[219169]<<8)<<16>>16&65535)>>>0){h=e}else{f=0;i=7;break}}if((i|0)==7){return f|0}return 0}function Tj(){Lp(219240|0,0|0,1472|0)|0;Lp(219176|0,0|0,64|0)|0;w=0;a[219168]=w;w=w>>8;a[219169]=w;return}function Uj(){var b=0,c=0,d=0,e=0,f=0,g=0;w=0;a[219168]=w;w=w>>8;a[219169]=w;b=0;c=0;while(1){d=b&65535;if((a[219244+(d*92|0)|0]&1)==0){e=c}else{f=c+1&65535;w=f;a[219168]=w;w=w>>8;a[219169]=w;g=219176+((c&65535)<<2)|0;w=219240+(d*92|0)|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;e=f}f=b+1&65535;if((f&65535)>>>0<16>>>0){b=f;c=e}else{break}}return}function Vj(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;if(b<<16>>16==-1){c=0;while(1){e=c&65535;f=c+1&65535;if((a[219244+(e*92|0)|0]&1)==0){g=c;break}if((f&65535)>>>0<16>>>0){c=f}else{g=f;break}}if(g<<16>>16==16){h=0;return h|0}else{i=e;j=g}}else{if(!((b&65535)>>>0<16>>>0)){Nb(54192,65168,28,69216);return 0}g=b&65535;if((a[219244+(g*92|0)|0]&1)==0){i=g;j=b}else{h=0;return h|0}}b=219240+(i*92|0)|0;if((b|0)==0){Nb(61256,65168,107,69240);return 0}Lp(b|0,0,92)|0;g=b|0;w=j;a[g]=w;w=w>>8;a[g+1|0]=w;g=219244+(i*92|0)|0;a[g]=a[g]|1;g=(d[219168]|d[219169]<<8)<<16>>16;w=g+1&65535;a[219168]=w;w=w>>8;a[219169]=w;i=219176+((g&65535)<<2)|0;w=b;a[i]=w;w=w>>8;a[i+1|0]=w;w=w>>8;a[i+2|0]=w;w=w>>8;a[i+3|0]=w;h=b;return h|0}function Wj(a){a=a|0;if((a&65535)>>>0<102>>>0){return 204816+((a&65535)*140|0)|0}else{Nb(53984,65072,31,69160);return 0}return 0}function Xj(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;c=b+4|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;if(!((e&65535)>>>0<((d[204400]|d[204401]<<8)<<16>>16&65535)>>>0|e<<16>>16==-1)){f=0;return f|0}g=e+1&65535;w=g;a[c]=w;w=w>>8;a[c+1|0]=w;if(!((g&65535)>>>0<((d[204400]|d[204401]<<8)<<16>>16&65535)>>>0)){f=0;return f|0}e=b|0;h=b+2|0;b=g;a:while(1){g=204408+((b&65535)<<2)|0;i=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;do{if((i|0)!=0?(g=i+4|0,!(((d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24)&4|0)!=0&(d[204376]|d[204377]<<8)<<16>>16<<16>>16==0)):0){g=a[e]|0;if(!(g<<24>>24==-1)?!(g<<24>>24==(mo(i)|0)<<24>>24):0){break}g=(d[h]|d[h+1|0]<<8)<<16>>16;if(g<<16>>16==-1){f=i;j=11;break a}if((g&65535|0)==(d[i+2|0]|0|0)){f=i;j=11;break a}}}while(0);i=((d[c]|d[c+1|0]<<8)<<16>>16)+1&65535;w=i;a[c]=w;w=w>>8;a[c+1|0]=w;if((i&65535)>>>0<((d[204400]|d[204401]<<8)<<16>>16&65535)>>>0){b=i}else{f=0;j=11;break}}if((j|0)==11){return f|0}return 0}function Yj(){Lp(204816|0,0|0,14280|0)|0;Lp(204408|0,0|0,408|0)|0;w=0;a[204400]=w;w=w>>8;a[204401]=w;return}function Zj(){var b=0,c=0,e=0,f=0,g=0;b=i;i=i+8|0;c=b|0;e=c|0;w=(d[69824]|d[69825]<<8)<<16>>16;a[e]=w;w=w>>8;a[e+1|0]=w;w=(d[69826]|d[69827]<<8)<<16>>16;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;w=(d[69828]|d[69829]<<8)<<16>>16;a[e+4|0]=w;w=w>>8;a[e+5|0]=w;e=Ij(c)|0;if((e|0)!=0){f=e;do{e=f+8|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;f=Ij(c)|0}while((f|0)!=0)}w=0;a[204400]=w;w=w>>8;a[204401]=w;f=0;do{c=f&65535;e=204820+(c*140|0)|0;if(((d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)&1|0)!=0){e=(Hj(a[204824+(c*140|0)|0]|0)|0)+8|0;w=((d[e]|d[e+1|0]<<8)<<16>>16)+1&65535;a[e]=w;w=w>>8;a[e+1|0]=w;e=(d[204400]|d[204401]<<8)<<16>>16;w=e+1&65535;a[204400]=w;w=w>>8;a[204401]=w;g=204408+((e&65535)<<2)|0;w=204816+(c*140|0)|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w}f=f+1&65535}while((f&65535)>>>0<102>>>0);i=b;return}function _j(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;f=c&255;if(c<<24>>24==-1|e<<24>>24==-1){g=0;return g|0}h=Hj(e)|0;i=h+8|0;j=(d[i]|d[i+1|0]<<8)<<16>>16;k=h+10|0;if(!((j&65535)>>>0<((d[k]|d[k+1|0]<<8)<<16>>16&65535)>>>0)?(k=8862+(f*100|0)|0,(((d[k]|d[k+1|0]<<8)<<16>>16)-4&65535)>>>0>1>>>0&(d[204376]|d[204377]<<8)<<16>>16<<16>>16==0):0){g=0;return g|0}a:do{if((b<<16>>16|0)==0|(b<<16>>16|0)==(-1|0)){k=8852+(f*100|0)|0;h=(d[k]|d[k+1|0]<<8)<<16>>16;k=8854+(f*100|0)|0;l=(d[k]|d[k+1|0]<<8)<<16>>16;if((h&65535)>>>0>(l&65535)>>>0){g=0;return g|0}else{m=h}while(1){if(!((m&65535)>>>0<102>>>0)){n=8;break}h=m&65535;k=204820+(h*140|0)|0;o=m+1&65535;if(((d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&1|0)==0){p=m;q=h;break a}if((o&65535)>>>0>(l&65535)>>>0){g=0;n=18;break}else{m=o}}if((n|0)==8){Nb(53984,65072,31,69160);return 0}else if((n|0)==18){return g|0}}else{if(!((b&65535)>>>0<102>>>0)){Nb(53984,65072,31,69160);return 0}l=b&65535;o=204820+(l*140|0)|0;if(((d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24)&1|0)==0){p=b;q=l}else{g=0;return g|0}}}while(0);b=204816+(q*140|0)|0;if((b|0)==0){Nb(61240,65072,135,69200);return 0}w=j+1&65535;a[i]=w;w=w>>8;a[i+1|0]=w;Lp(b|0,0,140)|0;i=b|0;w=p;a[i]=w;w=w>>8;a[i+1|0]=w;a[204818+(q*140|0)|0]=c;a[204824+(q*140|0)|0]=e;a[204819+(q*140|0)|0]=-1;e=204820+(q*140|0)|0;w=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|65539;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=204836+(q*140|0)|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;a[204940+(q*140|0)|0]=-1;if(c<<24>>24==25){a[204912+(q*140|0)|0]=3}q=(d[204400]|d[204401]<<8)<<16>>16;w=q+1&65535;a[204400]=w;w=w>>8;a[204401]=w;c=204408+((q&65535)<<2)|0;w=b;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;g=b;return g|0}function $j(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;c=b+4|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;Uk(b+20|0,d[44360]|d[44361]<<8|d[44362]<<16|d[44363]<<24|0);c=(d[204400]|d[204401]<<8)<<16>>16;a:do{if(c<<16>>16==0){e=0;f=0}else{g=c&65535;h=0;while(1){i=204408+(h<<2)|0;j=h+1|0;if((d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24|0)==(b|0)){e=h;f=c;break a}if((j|0)<(g|0)){h=j}else{e=j;f=c;break}}}}while(0);if((e|0)>=(f&65535|0)){Nb(57840,65072,175,69184)}w=f-1&65535;a[204400]=w;w=w>>8;a[204401]=w;f=(Hj(a[b+8|0]|0)|0)+8|0;w=((d[f]|d[f+1|0]<<8)<<16>>16)-1&65535;a[f]=w;w=w>>8;a[f+1|0]=w;f=(d[204400]|d[204401]<<8)<<16>>16&65535;if((e|0)==(f|0)){return}Mp(204408+(e<<2)|0,204408+(e+1<<2)|0,f-e<<2|0)|0;return}function ak(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;e=i;i=i+1056|0;f=e|0;g=e+8|0;h=e+16|0;j=e+1048|0;k=e+24|0;if((a[261320]|0)!=0){l=((d[203224]|d[203225]<<8)<<16>>16&65535)<<9&65024;m=0;do{n=241272+((m&65535)<<2)|0;w=l|(d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24)&-589313;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;m=m+1&65535}while((m&65535)>>>0<4096>>>0);m=j|0;a[m]=-1;l=j+2|0;w=-1;a[l]=w;w=w>>8;a[l+1|0]=w;n=j+4|0;w=-1;a[n]=w;w=w>>8;a[n+1|0]=w;o=Xj(j)|0;if((o|0)!=0){p=o;do{Po(p);p=Xj(j)|0}while((p|0)!=0)}a[m]=-1;w=-1;a[l]=w;w=w>>8;a[l+1|0]=w;w=-1;a[n]=w;w=w>>8;a[n+1|0]=w;n=Mj(j)|0;if((n|0)!=0){l=n;do{an(l);l=Mj(j)|0}while((l|0)!=0)}}Ka(k|0,1024,53640,(l=i,i=i+8|0,w=b,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0)|0;i=l;b=ib(k|0,65e3)|0;if((b|0)==0){Gj(61096,(l=i,i=i+8|0,w=k,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;q=0;r=1024;s=0;i=e;return q|0}w=((d[204376]|d[204377]<<8)<<16>>16)+1&65535;a[204376]=w;w=w>>8;a[204377]=w;k=g;do{if((wa(55248,4,1,b|0)|0)==1){w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;if((wa(f|0,4,1,b|0)|0)!=1){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((wa(52840,4,1,b|0)|0)!=1){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((wa(50488,4,1,b|0)|0)!=1){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}j=(Ip(c|0)|0)+1|0;n=j>>>0>255>>>0?255:j;w=n;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;w=Fb(n|0)|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;if((wa(k|0,4,1,b|0)|0)!=1){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((wa(c|0,n|0,1,b|0)|0)!=1){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((n&1|0)!=0?(a[h]=0,(wa(h|0,1,1,b|0)|0)!=1):0){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((bk(b,49400,186)|0)<<24>>24==0){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((bk(b,48840,182)|0)<<24>>24==0){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((bk(b,48304,98)|0)<<24>>24==0){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((bk(b,67616,222)|0)<<24>>24==0){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((bk(b,66872,56)|0)<<24>>24==0){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}if((bk(b,66272,154)|0)<<24>>24==0){w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;break}n=(Ra(b|0)|0)-8|0;Tb(b|0,4,0)|0;w=Fb(n|0)|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;n=(wa(k|0,4,1,b|0)|0)==1;w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0;if(n){q=1;r=1024;s=0;i=e;return q|0}}else{w=((d[204376]|d[204377]<<8)<<16>>16)-1&65535;a[204376]=w;w=w>>8;a[204377]=w;qa(b|0)|0}}while(0);Gj(57712,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l;q=0;r=1024;s=0;i=e;return q|0}function bk(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;i=i+24|0;f=e|0;g=e+8|0;h=e+16|0;if((wa(c|0,4,1,b|0)|0)!=1){j=0;i=e;return j|0}w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;if((wa(f|0,4,1,b|0)|0)!=1){j=0;i=e;return j|0}c=Ra(b|0)|0;if((gc[d&255](b)|0)<<24>>24==0){j=0;i=e;return j|0}d=(Ra(b|0)|0)-c|0;w=d;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;if((d&1|0)!=0?(a[h]=0,(wa(h|0,1,1,b|0)|0)!=1):0){j=0;i=e;return j|0}Tb(b|0,c-4|0,0)|0;w=Fb(d|0)|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;if((wa(g|0,4,1,b|0)|0)!=1){j=0;i=e;return j|0}Tb(b|0,0,2)|0;j=1;i=e;return j|0}function ck(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;i=i+72|0;f=e|0;if((c|0)==0){g=1;i=e;return g|0}else{h=c}while(1){if((pk(3032,b,f)|0)<<24>>24==0){g=0;j=9;break}c=ok(3032)|0;k=h-c|0;l=Kj(a[f]|0)|0;if((l|0)==0){g=0;j=9;break}m=l|0;Kp(m|0,f|0,68)|0;if((!((a[l+4|0]&2)==0)?(w=d[m]|0,a[46448]=w,w=w>>8,a[46449]=w,w=w>>8,a[46450]=w,w=w>>8,a[46451]=w,w=l,a[232072]=w,w=w>>8,a[232073]=w,w=w>>8,a[232074]=w,w=w>>8,a[232075]=w,m=l+44|0,!((d[m]|d[m+1|0]<<8)<<16>>16<<16>>16==-1)):0)?(m=l+42|0,(d[m]|d[m+1|0]<<8)<<16>>16<<16>>16==0):0){w=1;a[m]=w;w=w>>8;a[m+1|0]=w}if((h|0)==(c|0)){g=1;j=9;break}else{h=k}}if((j|0)==9){i=e;return g|0}return 0}function dk(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;e=i;i=i+72|0;f=e|0;a:do{if((c|0)!=0){g=f|0;h=f+4|0;j=c;while(1){if((pk(3032,b,g)|0)<<24>>24==0){k=0;l=8;break}if(!((a[h]&2)==0)){l=5;break}m=ok(3032)|0;n=j-m|0;if((j|0)==(m|0)){o=n;break a}else{j=n}}if((l|0)==5){w=d[g]|0;a[46448]=w;w=w>>8;a[46449]=w;w=w>>8;a[46450]=w;w=w>>8;a[46451]=w;o=j;break}else if((l|0)==8){i=e;return k|0}}else{o=0}}while(0);k=(o|0)!=0|0;i=e;return k|0}function ek(b){b=b|0;var c=0,d=0,e=0,f=0,g=0;c=i;i=i+8|0;d=c|0;a[d|0]=-1;e=d+2|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;e=d+4|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;while(1){e=Ij(d)|0;if((e|0)==0){f=1;g=4;break}if((qk(3032,b,e|0)|0)<<24>>24==0){f=0;g=4;break}}if((g|0)==4){i=c;return f|0}return 0}function fk(b,c){b=b|0;c=c|0;var e=0;if((ok(2296)|0)!=(c|0)){e=0;return e|0}if((pk(2296,b,0)|0)<<24>>24==0){e=0;return e|0}w=(d[233072]|d[233073]<<8)<<16>>16;a[203200]=w;w=w>>8;a[203201]=w;w=(d[231184]|d[231185]<<8)<<16>>16;a[231192]=w;w=w>>8;a[231193]=w;rm();Qi(d[231256]|d[231257]<<8|d[231258]<<16|d[231259]<<24|0);e=1;return e|0}function gk(a,b){a=a|0;b=b|0;return(pk(2168,a,0)|0)<<24>>24!=0|0}function hk(a){a=a|0;var b=0;if((wa(70816,2,1,a|0)|0)!=1){b=0;return b|0}b=(qk(2296,a,0)|0)<<24>>24!=0|0;return b|0}function ik(b,c,e){b=b|0;c=c|0;e=e|0;var f=0;if(e<<24>>24==0){f=(d[231176]|d[231177]<<8)<<16>>16&65535;return f|0}else{w=c&65535;a[231168]=w;w=w>>8;a[231169]=w;f=0;return f|0}return 0}function jk(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0;if(e<<24>>24==0){if((d[231032]|d[231033]<<8)<<16>>16<<16>>16==-1){f=65535;return f|0}e=d[231048]|d[231049]<<8|d[231050]<<16|d[231051]<<24|0;f=(d[e]|d[e+1|0]<<8)<<16>>16&65535;return f|0}else{if((c&65535|0)==65535){g=0}else{g=Lj(c&65535)|0}w=g;a[231048]=w;w=w>>8;a[231049]=w;w=w>>8;a[231050]=w;w=w>>8;a[231051]=w;f=0;return f|0}return 0}function kk(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0;if(e<<24>>24==0){e=d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0;if((e|0)==0){f=65535;return f|0}b=e|0;f=(d[b]|d[b+1|0]<<8)<<16>>16&65535;return f|0}else{if((c&65535|0)!=65535&c>>>0<102>>>0){g=Wj(c&65535)|0}else{g=0}w=g;a[204384]=w;w=w>>8;a[204385]=w;w=w>>8;a[204386]=w;w=w>>8;a[204387]=w;f=0;return f|0}return 0}function lk(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0;if(e<<24>>24==0){e=d[219096]|d[219097]<<8|d[219098]<<16|d[219099]<<24|0;if((e|0)==0){f=65535;return f|0}b=e|0;f=(d[b]|d[b+1|0]<<8)<<16>>16&65535;return f|0}else{if((c&65535|0)!=65535&c>>>0<102>>>0){g=Wj(c&65535)|0}else{g=0}w=g;a[219096]=w;w=w>>8;a[219097]=w;w=w>>8;a[219098]=w;w=w>>8;a[219099]=w;f=0;return f|0}return 0}function mk(b,c,e){b=b|0;c=c|0;e=e|0;var f=0;b=d[219128]|d[219129]<<8|d[219130]<<16|d[219131]<<24|0;if(e<<24>>24==0){f=b-(d[219144]|d[219145]<<8|d[219146]<<16|d[219147]<<24)|0;return f|0}else{w=b-c|0;a[219144]=w;w=w>>8;a[219145]=w;w=w>>8;a[219146]=w;w=w>>8;a[219147]=w;f=0;return f|0}return 0}function nk(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0;if(e<<24>>24==0){e=d[204392]|d[204393]<<8|d[204394]<<16|d[204395]<<24|0;if((e|0)==0){f=65535;return f|0}b=e|0;f=(d[b]|d[b+1|0]<<8)<<16>>16&65535;return f|0}else{if((c&65535|0)!=65535&c>>>0<102>>>0){g=Wj(c&65535)|0}else{g=0}w=g;a[204392]=w;w=w>>8;a[204393]=w;w=w>>8;a[204394]=w;w=w>>8;a[204395]=w;f=0;return f|0}return 0}function ok(a){a=a|0;var b=0,c=0,e=0,f=0;b=0;c=a;a:while(1){a=c+4|0;switch(d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0){case 4:{a=c+12|0;e=(((d[a]|d[a+1|0]<<8)<<16>>16&65535)<<1)+b|0;break};case 3:{a=c+12|0;e=((d[a]|d[a+1|0]<<8)<<16>>16&65535)+b|0;break};case 1:{a=c+12|0;e=(((d[a]|d[a+1|0]<<8)<<16>>16&65535)<<1)+b|0;break};case 8:{break a;break};case 0:{a=c+12|0;e=((d[a]|d[a+1|0]<<8)<<16>>16&65535)+b|0;break};case 7:{a=c+16|0;f=ok(d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0)|0;a=c+12|0;e=(aa((d[a]|d[a+1|0]<<8)<<16>>16&65535,f)|0)+b|0;break};case 5:{f=c+12|0;e=(((d[f]|d[f+1|0]<<8)<<16>>16&65535)<<2)+b|0;break};case 2:{f=c+12|0;e=(((d[f]|d[f+1|0]<<8)<<16>>16&65535)<<2)+b|0;break};default:{e=b}}b=e;c=c+32|0}return b|0}function pk(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;f=i;i=i+48|0;g=f|0;h=f+8|0;j=f+16|0;k=f+24|0;l=f+32|0;m=f+40|0;n=b+4|0;if((d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0)==8){o=1;i=f;return o|0}p=h;q=j;r=l;s=m;t=b;b=n;a:while(1){n=t+12|0;b:do{if(!((d[n]|d[n+1|0]<<8)<<16>>16<<16>>16==0)){u=t+28|0;v=t|0;x=t+20|0;y=t+8|0;z=t+24|0;A=t+16|0;B=0;C=1;D=0;while(1){E=d[u]|d[u+1|0]<<8|d[u+2|0]<<16|d[u+3|0]<<24|0;if((E|0)==0){F=e+(d[v]|d[v+1|0]<<8|d[v+2|0]<<16|d[v+3|0]<<24)|0}else{F=E}E=F+(aa(d[x]|d[x+1|0]<<8|d[x+2|0]<<16|d[x+3|0]<<24|0,D)|0)|0;switch(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0){case 2:{if((rb(q|0,4,1,c|0)|0)!=1){o=0;G=33;break a}H=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;break};case 3:{if((rb(k|0,1,1,c|0)|0)!=1){o=0;G=33;break a}H=a[k]|0;break};case 5:{if((rb(s|0,4,1,c|0)|0)!=1){o=0;G=33;break a}H=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0;break};case 4:{if((rb(r|0,2,1,c|0)|0)!=1){o=0;G=33;break a}H=(d[l]|d[l+1|0]<<8)<<16>>16<<16>>16;break};case 1:{if((rb(p|0,2,1,c|0)|0)!=1){o=0;G=33;break a}H=(d[h]|d[h+1|0]<<8)<<16>>16&65535;break};case 6:case 7:case 8:{H=0;break};case 0:{if((rb(g|0,1,1,c|0)|0)!=1){o=0;G=33;break a}H=d[g]|0;break};default:{H=B}}switch(d[y]|d[y+1|0]<<8|d[y+2|0]<<16|d[y+3|0]<<24|0){case 5:{I=E;w=H;a[I]=w;w=w>>8;a[I+1|0]=w;w=w>>8;a[I+2|0]=w;w=w>>8;a[I+3|0]=w;break};case 7:{if((pk(d[A]|d[A+1|0]<<8|d[A+2|0]<<16|d[A+3|0]<<24|0,c,E)|0)<<24>>24==0){o=0;G=33;break a}break};case 6:{ec[(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24)&15](e,H,1)|0;break};case 0:{a[E]=H;break};case 1:{I=E;w=H&65535;a[I]=w;w=w>>8;a[I+1|0]=w;break};case 2:{I=E;w=H;a[I]=w;w=w>>8;a[I+1|0]=w;w=w>>8;a[I+2|0]=w;w=w>>8;a[I+3|0]=w;break};case 4:{I=E;w=H&65535;a[I]=w;w=w>>8;a[I+1|0]=w;break};case 3:{a[E]=H;break};default:{}}if(!((C&65535)>>>0<((d[n]|d[n+1|0]<<8)<<16>>16&65535)>>>0)){break b}E=C&65535;B=H;C=C+1&65535;D=E}}}while(0);n=t+36|0;if((d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0)==8){o=1;G=33;break}else{t=t+32|0;b=n}}if((G|0)==33){i=f;return o|0}return 0}function qk(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;f=i;i=i+48|0;g=f|0;h=f+8|0;j=f+16|0;k=f+24|0;l=f+32|0;m=f+40|0;n=b+4|0;if((d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0)==8){o=1;i=f;return o|0}p=m;q=l;r=h;s=j;t=b;b=n;a:while(1){n=t+12|0;b:do{if(!((d[n]|d[n+1|0]<<8)<<16>>16<<16>>16==0)){u=t+28|0;v=t|0;x=t+20|0;y=t+8|0;z=t+16|0;A=t+24|0;B=0;C=1;D=0;while(1){E=d[u]|d[u+1|0]<<8|d[u+2|0]<<16|d[u+3|0]<<24|0;if((E|0)==0){F=e+(d[v]|d[v+1|0]<<8|d[v+2|0]<<16|d[v+3|0]<<24)|0}else{F=E}E=F+(aa(d[x]|d[x+1|0]<<8|d[x+2|0]<<16|d[x+3|0]<<24|0,D)|0)|0;switch(d[y]|d[y+1|0]<<8|d[y+2|0]<<16|d[y+3|0]<<24|0){case 8:{G=0;break};case 1:{H=E;G=(d[H]|d[H+1|0]<<8)<<16>>16&65535;break};case 2:{H=E;G=d[H]|d[H+1|0]<<8|d[H+2|0]<<16|d[H+3|0]<<24|0;break};case 3:{G=a[E]|0;break};case 4:{H=E;G=(d[H]|d[H+1|0]<<8)<<16>>16<<16>>16;break};case 5:{H=E;G=d[H]|d[H+1|0]<<8|d[H+2|0]<<16|d[H+3|0]<<24|0;break};case 7:{if((qk(d[z]|d[z+1|0]<<8|d[z+2|0]<<16|d[z+3|0]<<24|0,c,E)|0)<<24>>24==0){o=0;I=27;break a}else{G=B}break};case 0:{G=d[E]|0;break};case 6:{G=ec[(d[A]|d[A+1|0]<<8|d[A+2|0]<<16|d[A+3|0]<<24)&15](e,0,0)|0;break};default:{G=B}}switch(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0){case 0:{a[g]=G;if((wa(g|0,1,1,c|0)|0)!=1){o=0;I=27;break a}break};case 4:{w=G&65535;a[l]=w;w=w>>8;a[l+1|0]=w;if((wa(q|0,2,1,c|0)|0)!=1){o=0;I=27;break a}break};case 5:{w=G;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w;if((wa(p|0,4,1,c|0)|0)!=1){o=0;I=27;break a}break};case 1:{w=G&65535;a[h]=w;w=w>>8;a[h+1|0]=w;if((wa(r|0,2,1,c|0)|0)!=1){o=0;I=27;break a}break};case 3:{a[k]=G;if((wa(k|0,1,1,c|0)|0)!=1){o=0;I=27;break a}break};case 2:{w=G;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;if((wa(s|0,4,1,c|0)|0)!=1){o=0;I=27;break a}break};default:{}}if(!((C&65535)>>>0<((d[n]|d[n+1|0]<<8)<<16>>16&65535)>>>0)){break b}E=C&65535;B=G;C=C+1&65535;D=E}}}while(0);n=t+36|0;if((d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0)==8){o=1;I=27;break}else{t=t+32|0;b=n}}if((I|0)==27){i=f;return o|0}return 0}function rk(b,c,e){b=b|0;c=c|0;e=e|0;var f=0;if(!(e<<24>>24==0)){e=b+4|0;w=c;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;f=0;return f|0}e=b+4|0;c=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;if((c|0)==0){f=0;return f|0}e=b+8|0;b=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+4|0;f=c-(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)>>1;return f|0}function sk(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;e=i;i=i+96|0;f=e|0;a:do{if((c|0)!=0){g=f;h=f+28|0;j=f+24|0;k=f+87|0;l=f|0;m=c;while(1){if((pk(1592,b,g)|0)<<24>>24==0){n=0;o=9;break}p=ok(1592)|0;q=d[44376]|d[44377]<<8|d[44378]<<16|d[44379]<<24|0;w=q;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;r=q+4|0;w=(d[r]|d[r+1|0]<<8|d[r+2|0]<<16|d[r+3|0]<<24)+((d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24)<<1)|0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;if((a[k]|0)==0){r=(Nm(f)|0)<<24>>24!=0;a[k]=r?100:0}r=Lj((d[l]|d[l+1|0]<<8)<<16>>16)|0;if((r|0)==0){n=0;o=9;break}Kp(r|0,g|0,96)|0;if((m|0)==(p|0)){break a}else{m=m-p|0}}if((o|0)==9){i=e;return n|0}}}while(0);Oj();n=1;i=e;return n|0}function tk(b){b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0;c=i;i=i+104|0;d=c|0;a[d|0]=-1;e=d+2|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;e=d+4|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;e=c+8|0;while(1){f=Mj(d)|0;if((f|0)==0){g=1;h=4;break}Kp(e|0,f|0,96)|0;if((qk(1592,b,e)|0)<<24>>24==0){g=0;h=4;break}}if((h|0)==4){i=c;return g|0}return 0}function uk(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;e=i;i=i+96|0;f=e|0;a:do{if((c|0)!=0){g=f;h=f+40|0;j=f+36|0;k=f|0;l=c;while(1){if((pk(1112,b,g)|0)<<24>>24==0){m=0;n=7;break}o=ok(1112)|0;p=d[44368]|d[44369]<<8|d[44370]<<16|d[44371]<<24|0;w=p;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;q=p+4|0;w=(d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24)+((d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24)<<1)|0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;q=Rj((d[k]|d[k+1|0]<<8)<<16>>16)|0;if((q|0)==0){m=0;n=7;break}Kp(q|0,g|0,92)|0;if((l|0)==(o|0)){break a}else{l=l-o|0}}if((n|0)==7){i=e;return m|0}}}while(0);Uj();m=1;i=e;return m|0}function vk(b){b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0;c=i;i=i+104|0;d=c|0;a[d|0]=-1;e=d+2|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;e=d+4|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;e=c+8|0;while(1){f=Sj(d)|0;if((f|0)==0){g=1;h=4;break}Kp(e|0,f|0,92)|0;if((qk(1112,b,e)|0)<<24>>24==0){g=0;h=4;break}}if((h|0)==4){i=c;return g|0}return 0}function wk(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;e=i;i=i+144|0;f=e|0;a:do{if((c|0)!=0){g=f;h=f+28|0;j=f+24|0;k=f+20|0;l=f+122|0;m=f+8|0;n=f+9|0;o=f|0;p=c;while(1){if((pk(280,b,g)|0)<<24>>24==0){q=0;r=9;break}s=ok(280)|0;t=p-s|0;u=d[44360]|d[44361]<<8|d[44362]<<16|d[44363]<<24|0;w=u;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;v=u+4|0;w=(d[v]|d[v+1|0]<<8|d[v+2|0]<<16|d[v+3|0]<<24)+((d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24)<<1)|0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;w=0;a[k]=w;w=w>>8;a[k+1|0]=w;w=0;a[l]=w;w=w>>8;a[l+1|0]=w;v=a[m]|0;a[n]=d[n]|0|1<<(v&255);if(!(v<<24>>24==13)){v=Wj((d[o]|d[o+1|0]<<8)<<16>>16)|0;if((v|0)==0){q=0;r=9;break}Kp(v|0,g|0,140)|0}if((p|0)==(s|0)){break a}else{p=t}}if((r|0)==9){i=e;return q|0}}}while(0);Zj();q=1;i=e;return q|0}function xk(b){b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0;c=i;i=i+152|0;d=c|0;a[d|0]=-1;e=d+2|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;e=d+4|0;w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;e=c+8|0;while(1){f=Xj(d)|0;if((f|0)==0){g=1;h=4;break}Kp(e|0,f|0,140)|0;if((qk(280,b,e)|0)<<24>>24==0){g=0;h=4;break}}if((h|0)==4){i=c;return g|0}return 0}function yk(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;e=i;i=i+304|0;f=e|0;g=e+8|0;h=e+16|0;j=e+24|0;k=e+280|0;if((c&255)>>>0>5>>>0){l=0;i=e;return l|0}w=b;a[45152]=w;w=w>>8;a[45153]=w;m=e+288|0;n=15512+((c&255)<<5)|0;Ta(m|0,52536,(c=i,i=i+16|0,w=a[d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0]|0,a[c]=w,w=w>>8,a[c+1|0]=w,w=w>>8,a[c+2|0]=w,w=w>>8,a[c+3|0]=w,w=b&65535,a[c+8|0]=w,w=w>>8,a[c+9|0]=w,w=w>>8,a[c+10|0]=w,w=w>>8,a[c+11|0]=w,c)|0)|0;i=c;if((Jd(m)|0)<<24>>24==0){l=0;i=e;return l|0}c=Ud(m)|0;w=c;a[72072]=w;w=w>>8;a[72073]=w;w=w>>8;a[72074]=w;w=w>>8;a[72075]=w;Lp(231248,0,232)|0;w=(Qh(60680,60376,0,c)|0)&65535;a[231250]=w;w=w>>8;a[231251]=w;w=(Qh(60680,60064,0,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0)&65535;a[231252]=w;w=w>>8;a[231253]=w;w=Qh(57600,59720,0,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;a[231256]=w;w=w>>8;a[231257]=w;w=w>>8;a[231258]=w;w=w>>8;a[231259]=w;w=(Qh(60680,59384,0,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0)&65535;a[231262]=w;w=w>>8;a[231263]=w;w=(Qh(60680,58936,(d[233072]|d[233073]<<8)<<16>>16&65535,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0)&65535;a[233072]=w;w=w>>8;a[233073]=w;w=(Qh(60680,58672,(d[231184]|d[231185]<<8)<<16>>16&65535,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0)&65535;a[231184]=w;w=w>>8;a[231185]=w;w=(Qh(60680,58376,0,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0)&65535;a[231260]=w;w=w>>8;a[231261]=w;Ph(60680,58088,57624,231264,14,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;Ph(60680,57304,57080,231278,14,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;Ph(60680,57008,56768,231292,14,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;w=(d[233072]|d[233073]<<8)<<16>>16;a[203200]=w;w=w>>8;a[203201]=w;w=(d[231184]|d[231185]<<8)<<16>>16;a[231192]=w;w=w>>8;a[231193]=w;rm();Qi(d[231256]|d[231257]<<8|d[231258]<<16|d[231259]<<24|0);w=-1;a[231318]=w;w=w>>8;a[231319]=w;w=-1;a[231328]=w;w=w>>8;a[231329]=w;w=-1;a[231338]=w;w=w>>8;a[231339]=w;w=-1;a[231348]=w;w=w>>8;a[231349]=w;w=-1;a[231358]=w;w=w>>8;a[231359]=w;w=-1;a[231368]=w;w=w>>8;a[231369]=w;w=-1;a[231378]=w;w=w>>8;a[231379]=w;w=-1;a[231388]=w;w=w>>8;a[231389]=w;w=-1;a[231398]=w;w=w>>8;a[231399]=w;w=-1;a[231408]=w;w=w>>8;a[231409]=w;w=-1;a[231418]=w;w=w>>8;a[231419]=w;w=-1;a[231428]=w;w=w>>8;a[231429]=w;w=-1;a[231438]=w;w=w>>8;a[231439]=w;w=-1;a[231448]=w;w=w>>8;a[231449]=w;w=-1;a[231458]=w;w=w>>8;a[231459]=w;w=-1;a[231468]=w;w=w>>8;a[231469]=w;c=k|0;m=e+152|0;b=0;do{n=b&255;o=15512+(n<<5)|0;p=d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0;Ph(p,62864,62408,m,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;o=a[m]|0;if(!(o<<24>>24==0)){q=m;r=o;do{if((r-97&255)>>>0<26>>>0){a[q]=r-32}q=q+1|0;r=a[q]|0}while(!(r<<24>>24==0))}r=Da(62016,m|0)|0;if((r|0)!=0?(q=Kj(b)|0,o=q+20|0,w=(Qh(p,61680,0,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0)&65535,a[o]=w,w=w>>8,a[o+1|0]=w,s=q+30|0,w=(Qh(p,61384,0,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0)&65535,a[s]=w,w=w>>8,a[s+1|0]=w,s=q+10|0,w=(Qh(p,61032,39,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0)&65535,a[s]=w,w=w>>8,a[s+1|0]=w,(a[r]|0)==72):0){r=q+4|0;a[r]=a[r]|2;w=n;a[46448]=w;w=w>>8;a[46449]=w;w=w>>8;a[46450]=w;w=w>>8;a[46451]=w;w=q;a[232072]=w;w=w>>8;a[232073]=w;w=w>>8;a[232074]=w;w=w>>8;a[232075]=w;w=(d[o]|d[o+1|0]<<8)<<16>>16;a[232080]=w;w=w>>8;a[232081]=w}b=b+1&255}while((b&255)>>>0<6>>>0);b=(d[232072]|d[232073]<<8|d[232074]<<16|d[232075]<<24)+10|0;if((d[b]|d[b+1|0]<<8)<<16>>16<<16>>16==0){a[c]=-1;c=k+4|0;w=-1;a[c]=w;w=w>>8;a[c+1|0]=w;c=k+2|0;w=-1;a[c]=w;w=w>>8;a[c+1|0]=w;c=80;a:while(1){do{t=Ij(k)|0;if((t|0)==0){break a}}while(!((a[t+4|0]&2)==0));n=t+10|0;c=c-((d[n]|d[n+1|0]<<8)<<16>>16&255)&255}w=c&255;a[10]=w;w=w>>8;a[11]=w}c=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;Ph(64824,0,0,c,(d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24)&65535,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;t=j|0;if((a[c]|0)!=0){j=h|0;k=c;do{Ph(64824,k,0,t,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;c=Oa(t|0,44)|0;do{if(((((((((c|0)!=0?(a[c]=0,n=Jh(t)|0,!(n<<24>>24==-1)):0)?(p=c+1|0,b=Oa(p|0,44)|0,(b|0)!=0):0)?(a[b]=0,o=no(p)|0,p=o&255,!(o<<24>>24==-1)):0)?(q=b+1|0,b=Oa(q|0,44)|0,(b|0)!=0):0)?(a[b]=0,r=ub(q|0)|0,q=b+1|0,b=Oa(q|0,44)|0,(b|0)!=0):0)?(a[b]=0,xn(h,(ub(q|0)|0)&65535),q=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0,s=b+1|0,b=Oa(s|0,44)|0,(b|0)!=0):0)?(a[b]=0,u=(ub(s|0)|0)&255,s=oo(b+1|0)|0,!(s<<24>>24==-1)):0)?(b=_j(-1,o,n)|0,(b|0)!=0):0){n=b+4|0;w=d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|512;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;o=8814+(p*100|0)|0;p=b+16|0;w=((aa((d[o]|d[o+1|0]<<8)<<16>>16&65535,r&65535)|0)/256|0)&65535;a[p]=w;w=w>>8;a[p+1|0]=w;p=b+12|0;w=q;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;p=b+110|0;a[p]=u;u=b+86|0;a[u]=s;a[b+87|0]=-1;s=(ui(vn(b+12|0)|0)|0)<<24>>24==0;if(s&((d[262360]|d[262361]<<8)<<16>>16&65535)>>>0>2>>>0){$j(b);break}if(((d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24)&4|0)==0){lo(b,d[u]|0)}a[b+9|0]=0;Eo(b,a[b+8|0]|0);ho(b,a[p]|0,1,0);ho(b,a[p]|0,1,1);ro(b,0)}}while(0);k=k+((Ip(k|0)|0)+1)|0}while((a[k]|0)!=0)}k=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;Ph(60984,0,0,k,(d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24)&65535,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;if((a[k]|0)!=0){j=k;do{Ph(60984,j,0,t,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;if((Gp(j,63224,3)|0)==0){k=(ub(j+3|0)|0)&65535;h=Oa(t|0,44)|0;if(((h|0)!=0?(a[h]=0,c=Jh(t)|0,!(c<<24>>24==-1)):0)?(b=Tm(h+1|0)|0,!(b<<24>>24==-1)):0){Um(-1,b,c,k)|0}}else{k=ub(j+2|0)|0;c=Oa(t|0,44)|0;if(((((((c|0)!=0?(a[c]=0,b=Jh(t)|0,!(b<<24>>24==-1)):0)?(h=c+1|0,c=Oa(h|0,44)|0,(c|0)!=0):0)?(a[c]=0,p=Tm(h)|0,!(p<<24>>24==-1)):0)?(h=c+1|0,c=Oa(h|0,44)|0,(c|0)!=0):0)?(a[c]=0,u=(ub(h|0)|0)%257|0,h=(a[47984]|0)!=0,n=(ub(c+1|0)|0)&65535,(_m(n)|0)==0):0)?(c=Um(k&255,p,b,n)|0,(c|0)!=0):0){n=13174+((d[c+2|0]|0)*100|0)|0;b=c+16|0;w=((aa((d[n]|d[n+1|0]<<8)<<16>>16&65535,h?u&65535:256)|0)/256|0)&65535;a[b]=w;w=w>>8;a[b+1|0]=w;b=c+4|0;w=(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)&-1025;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;b=c+92|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w}}j=j+((Ip(j|0)|0)+1)|0}while((a[j]|0)!=0)}j=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;Ph(57600,0,0,j,(d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24)&65535,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;if((a[j]|0)!=0){b=g|0;c=g;u=g+2|0;g=j;do{Ph(57600,g,0,t,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;if((a[g]|0)==67){j=g+4|0;w=(d[j]|d[j+1|0]<<8)<<16>>16;a[c]=w;w=w>>8;a[c+1|0]=w;a[u]=0;j=(ub(b|0)|0)&65535;h=(wn(j,(ub(g+6|0)|0)&65535)|0)&4095;j=ub(va(t|0,67608)|0)|0;n=241272+(h<<2)|0;p=j<<16;w=(d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24)&-16711681|p&458752|p&524288|p&1048576|p&2097152|p&4194304|p&8388608;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;p=(ub(va(0,67608)|0)|0)&511;j=d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0;k=j&-512|p;w=k;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;s=233080+(h<<1)|0;h=(d[s]|d[s+1|0]<<8)<<16>>16;if((h&65535|0)!=(p|0)){w=h|-32768;a[s]=w;w=w>>8;a[s+1|0]=w}if((j&524288|0)==0){w=((d[203224]|d[203225]<<8)<<16>>16&65535)<<9&65024|k&-65025;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w}}g=g+((Ip(g|0)|0)+1)|0}while((a[g]|0)!=0)}g=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;Ph(55136,0,0,g,(d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24)&65535,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;if((a[g]|0)!=0){b=f|0;u=g;do{Ph(55136,u,0,t,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;g=ub(u|0)|0;c=Oa(t|0,44)|0;do{if(((((c|0)!=0?(a[c]=0,n=Jh(t)|0,!(n<<24>>24==-1)):0)?(k=c+1|0,j=Oa(k|0,44)|0,(j|0)!=0):0)?(a[j]=0,s=no(k)|0,!(s<<24>>24==-1)):0)?(k=j+1|0,j=Oa(k|0,44)|0,(j|0)!=0):0){a[j]=0;if((Fp(k,66864)|0)!=0){if((Fp(k,66264)|0)!=0){if((Fp(k,65800)|0)!=0){if((Fp(k,65432)|0)!=0){if((Fp(k,64864)|0)!=0){if((Fp(k,64248)|0)!=0){if((Fp(k,63872)|0)!=0){if((Fp(k,63568)|0)==0){v=7}else{break}}else{v=6}}else{v=5}}else{v=4}}else{v=3}}else{v=2}}else{v=1}}else{v=0}k=j+1|0;h=((ub(k|0)|0)*6|0|1)&65535;p=a[j+(Ip(k|0)|0)|0]|0;k=a[47984]|0;w=-1;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;j=qo(-1,s,n,f,0)|0;if((j|0)!=0){n=j|0;j=g&255;s=231318+(j*10|0)|0;w=(d[n]|d[n+1|0]<<8)<<16>>16;a[s]=w;w=w>>8;a[s+1|0]=w;s=231320+(j*10|0)|0;w=v;a[s]=w;w=w>>8;a[s+1|0]=w;s=231322+(j*10|0)|0;w=h;a[s]=w;w=w>>8;a[s+1|0]=w;s=231324+(j*10|0)|0;w=h;a[s]=w;w=w>>8;a[s+1|0]=w;s=231326+(j*10|0)|0;w=k<<24>>24!=0&p<<24>>24==43&1;a[s]=w;w=w>>8;a[s+1|0]=w}}}while(0);u=u+((Ip(u|0)|0)+1)|0}while((a[u]|0)!=0)}u=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;Ph(52760,0,0,u,(d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24)&65535,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;if((a[u]|0)!=0){v=u;do{Ph(52760,v,0,t,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;u=Oa(t|0,44)|0;if((((((((u|0)!=0?(a[u]=0,f=Jh(t)|0,!(f<<24>>24==-1)):0)?(b=u+1|0,u=Oa(b|0,44)|0,(u|0)!=0):0)?(a[u]=0,g=on(b)|0,!(g<<24>>24==-1)):0)?(b=u+1|0,u=Oa(b|0,44)|0,(u|0)!=0):0)?(a[u]=0,c=po(b)|0,!(c<<24>>24==-1)):0)?(b=u+1|0,u=Oa(b|0,44)|0,(u|0)!=0):0)?(a[u]=0,s=ub(b|0)|0,b=u+1|0,u=Oa(b|0,44)|0,(u|0)!=0):0){a[u]=0;nn(f,g,c,s&65535,(ub(b|0)|0)&65535)|0}v=v+((Ip(v|0)|0)+1)|0}while((a[v]|0)!=0)}v=d[232048]|d[232049]<<8|d[232050]<<16|d[232051]<<24|0;Ph(50400,0,0,v,(d[232040]|d[232041]<<8|d[232042]<<16|d[232043]<<24)&65535,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;if((a[v]|0)!=0){b=v;do{Ph(50400,b,0,t,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;v=no(b)|0;if(!(v<<24>>24==-1)){s=231064+((v&255)<<1)|0;w=(ub(t|0)|0)&65535;a[s]=w;w=w>>8;a[s+1|0]=w}b=b+((Ip(b|0)|0)+1)|0}while((a[b]|0)!=0)}Ph(57600,49392,0,m,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;b=va(m|0,67608)|0;if((b|0)!=0){t=b;do{b=(ub(t|0)|0)&65535;s=241272+(b<<2)|0;w=(d[s]|d[s+1|0]<<8|d[s+2|0]<<16|d[s+3|0]<<24)&-512|(d[262376]|d[262377]<<8)<<16>>16&511;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;s=233080+(b<<1)|0;w=(d[s]|d[s+1|0]<<8)<<16>>16|-32768;a[s]=w;w=w>>8;a[s+1|0]=w;t=va(0,67608)|0}while((t|0)!=0)}Ph(57600,48832,0,m,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;t=va(m|0,67608)|0;if((t|0)!=0){s=t;do{t=ub(s|0)|0;Di(t&65535,-1);if((a[261320]|0)!=0){b=241272+((t&65535)<<2)|0;w=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|511;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w}s=va(0,67608)|0}while((s|0)!=0)}Ph(57600,48296,0,m,127,d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0)|0;s=va(m|0,67608)|0;if((s|0)!=0){m=s;do{s=(ub(m|0)|0)&65535;b=241272+(s<<2)|0;w=((d[262376]|d[262377]<<8)<<16>>16&65535)+1&511|(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)&-512;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;b=233080+(s<<1)|0;w=(d[b]|d[b+1|0]<<8)<<16>>16|-32768;a[b]=w;w=w>>8;a[b+1|0]=w;m=va(0,67608)|0}while((m|0)!=0)}w=d[219128]|d[219129]<<8|d[219130]<<16|d[219131]<<24|0;a[219144]=w;w=w>>8;a[219145]=w;w=w>>8;a[219146]=w;w=w>>8;a[219147]=w;zp(d[72072]|d[72073]<<8|d[72074]<<16|d[72075]<<24|0);w=0;a[72072]=w;w=w>>8;a[72073]=w;w=w>>8;a[72074]=w;w=w>>8;a[72075]=w;l=1;i=e;return l|0}function zk(b){b=b|0;var c=0,d=0;c=((Tk(b,1,51584,37)|0)&65535)/5|0;d=b|0;w=c;a[d]=w;w=w>>8;a[d+1|0]=w;return c|0}function Ak(b){b=b|0;var c=0,d=0;c=(Zn()|0)&255;d=(((aa((Tk(b,1,51584,57)|0)&65535,c)|0)>>>0)/1280|0)&65535;c=b|0;w=d;a[c]=w;w=w>>8;a[c+1|0]=w;return d|0}function Bk(a){a=a|0;var b=0,c=0,e=0,f=0;b=i;i=i+8|0;c=b|0;e=Tk(a,1,51584,78)|0;a=d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24|0;if((Tn(e)|0)<<24>>24==0){f=-1;i=b;return f|0}Vn(c,e);f=Bn(a+12|0,c)|0;i=b;return f|0}function Ck(a){a=a|0;return 0}function Dk(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=i;e=b+8|0;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=g+(((Tk(b,1,51584,115)|0)&65535)<<1)|0;g=(Fb((d[f]|d[f+1|0]<<8)<<16>>16&65535|0)|0)>>>16;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;e=(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)+g|0;g=(Tk(b,2,51584,118)|0)&65535;f=(Tk(b,3,51584,118)|0)&65535;h=(Tk(b,4,51584,118)|0)&65535;ye(e,0,(e=i,i=i+24|0,w=g,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,w=f,a[e+8|0]=w,w=w>>8,a[e+9|0]=w,w=w>>8,a[e+10|0]=w,w=w>>8,a[e+11|0]=w,w=h,a[e+16|0]=w,w=w>>8,a[e+17|0]=w,w=w>>8,a[e+18|0]=w,w=w>>8,a[e+19|0]=w,e)|0);i=e;i=c;return 0}function Ek(a){a=a|0;var b=0;b=Tk(a,1,51584,134)|0;return $n(b,Tk(a,2,51584,134)|0)|0}function Fk(b){b=b|0;var c=0,e=0,f=0,g=0;c=i;e=b+8|0;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=g+(((Tk(b,1,51584,150)|0)&65535)<<1)|0;b=(Fb((d[f]|d[f+1|0]<<8)<<16>>16&65535|0)|0)>>>16;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;e=Me((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)+b|0,-1,(b=i,i=i+1|0,i=i+7&-8,w=0,a[b]=w,w=w>>8,a[b+1|0]=w,w=w>>8,a[b+2|0]=w,w=w>>8,a[b+3|0]=w,b)|0)|0;i=b;i=c;return e|0}function Gk(a){a=a|0;var b=0,c=0;b=Tk(a,1,51584,168)|0;if((Tn(b)|0)<<24>>24==0){c=-1;return c|0}c=Vi(d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24|0,b)|0;return c|0}function Hk(a){a=a|0;var b=0,c=0,e=0;b=Tk(a,1,51584,188)|0;a=Xn(b)|0;if((a|0)!=0?(c=a|0,!((Sn((d[c]|d[c+1|0]<<8)<<16>>16,3)|0)<<16>>16==b<<16>>16)):0){e=1;return e|0}e=(Yn(b)|0)==0|0;return e|0}function Ik(b){b=b|0;var c=0,d=0;c=Wn(Tk(b,1,51584,208)|0)|0;if((c|0)==0){d=128;return d|0}d=a[c+110|0]|0;return d|0}function Jk(b){b=b|0;var c=0,e=0,f=0;c=i;i=i+8|0;e=c|0;a[e|0]=a[(d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24)+8|0]|0;f=e+2|0;w=Tk(b,1,51584,229)|0;a[f]=w;w=w>>8;a[f+1|0]=w;f=e+4|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;f=0;while(1){if((Xj(e)|0)==0){break}else{f=f+1&65535}}i=c;return f|0}function Kk(a){a=a|0;var b=0,c=0;b=Tk(a,1,51584,253)|0;if((Tn(b)|0)<<24>>24==0){c=-1;return c|0}c=Rn(b)|0;return c|0}function Lk(a){a=a|0;var b=0,c=0;b=Tk(a,1,51584,272)|0;if((Tn(b)|0)<<24>>24==0){c=-1;return c|0}c=(Qn(b)|0)&65535;return c|0}function Mk(b){b=b|0;var c=0;b=a[(d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24)+3|0]|0;if(b<<24>>24==-1){c=-1;return c|0}c=d[(Wj(b&255)|0)+2|0]|0;return c|0}function Nk(b){b=b|0;var c=0,e=0,f=0,g=0;c=i;i=i+8|0;e=c|0;f=(d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24)+12|0;g=e|0;w=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;sd(Tk(b,1,51584,314)|0,e);i=c;return 0}function Ok(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=i;i=i+8|0;e=c|0;f=(d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24)+12|0;g=e|0;w=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;g=vn(e)|0;e=Mi(g,Tk(b,1,51584,334)|0)|0;if(e<<16>>16==0){h=0;i=c;return h|0}h=Sn(e,1)|0;i=c;return h|0}function Pk(b){b=b|0;var c=0,e=0,f=0,g=0;c=Yn(Tk(b,1,51584,354)|0)|0;if((c|0)==0){e=0;return e|0}f=c+4|0;if(((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)&5|0)!=1){e=0;return e|0}f=Tk(b,1,51584,378)|0;do{if(!((Tn(f)|0)<<24>>24==0)){b=a[(d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24)+8|0]|0;c=Qn(f)|0;if((c|0)==2){g=(mo(Wn(f)|0)|0)<<24>>24!=b<<24>>24|0;break}else if((c|0)==3){g=(a[(Xn(f)|0)+8|0]|0)!=b<<24>>24|0;break}else{g=0;break}}else{g=0}}while(0);e=g<<16>>16==0?1:-1;return e|0}function Qk(b){b=b|0;var c=0,e=0,f=0;c=Tk(b,1,51584,378)|0;if((Tn(c)|0)<<24>>24==0){e=0;return e|0}b=a[(d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24)+8|0]|0;f=Qn(c)|0;if((f|0)==3){e=(a[(Xn(c)|0)+8|0]|0)!=b<<24>>24|0;return e|0}else if((f|0)==2){e=(mo(Wn(c)|0)|0)<<24>>24!=b<<24>>24|0;return e|0}else{e=0;return e|0}return 0}function Rk(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;c=i;i=i+8|0;e=c|0;f=Tk(b,1,51584,409)|0;b=a[(d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24)+8|0]|0;if((Qn(f)|0)==2){g=0;i=c;return g|0}if((Qn(f)|0)==1){g=0;i=c;return g|0}if((Qn(f)|0)==3){h=Xn(f)|0;if(!((a[h+8|0]|0)==b<<24>>24)){g=0;i=c;return g|0}j=h+92|0;g=(d[j]|d[j+1|0]<<8)<<16>>16<<16>>16==0|0;i=c;return g|0}a[e|0]=b;b=e+4|0;w=-1;a[b]=w;w=w>>8;a[b+1|0]=w;b=e+2|0;w=f;a[b]=w;w=w>>8;a[b+1|0]=w;do{k=Mj(e)|0;if((k|0)==0){g=0;l=10;break}b=k+92|0}while(!((d[b]|d[b+1|0]<<8)<<16>>16<<16>>16==0));if((l|0)==10){i=c;return g|0}l=k|0;g=Sn((d[l]|d[l+1|0]<<8)<<16>>16,3)|0;i=c;return g|0}function Sk(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0;e=i;i=i+272|0;f=e+256|0;g=e|0;h=(d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24|0)==0?(d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0)==0?(d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0)==0?66208:48248:67560:66776;j=f;w=c;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;w=0;a[j+4|0]=w;w=w>>8;a[j+5|0]=w;w=w>>8;a[j+6|0]=w;w=w>>8;a[j+7|0]=w;cb(g|0,256,b|0,f|0)|0;f=d[231232]|d[231233]<<8|d[231234]<<16|d[231235]<<24|0;b=f|0;j=(d[b]|d[b+1|0]<<8)<<16>>16&65535;b=d[f+2|0]|0;Gj(65728,(f=i,i=i+32|0,w=g,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,w=h,a[f+8|0]=w,w=w>>8,a[f+9|0]=w,w=w>>8,a[f+10|0]=w,w=w>>8,a[f+11|0]=w,w=j,a[f+16|0]=w,w=w>>8,a[f+17|0]=w,w=w>>8,a[f+18|0]=w,w=w>>8,a[f+19|0]=w,w=b,a[f+24|0]=w,w=w>>8,a[f+25|0]=w,w=w>>8,a[f+26|0]=w,w=w>>8,a[f+27|0]=w,f)|0);i=f;i=e;return}function Tk(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0;g=i;if((c|0)<=0){Nb(64336,60736,215,69368);return 0}h=d[b+15|0]|0;if((h|0)<(16-c|0)){j=b+26+(c-1+h<<1)|0;k=(d[j]|d[j+1|0]<<8)<<16>>16;i=g;return k|0}else{Sk(51264,(j=i,i=i+16|0,w=e,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,w=f,a[j+8|0]=w,w=w>>8,a[j+9|0]=w,w=w>>8,a[j+10|0]=w,w=w>>8,a[j+11|0]=w,j)|0);i=j;j=b+4|0;w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;k=0;i=g;return k|0}return 0}function Uk(b,c){b=b|0;c=c|0;var d=0;if((b|0)==0|(c|0)==0){return}d=b+4|0;w=0;a[d]=w;w=w>>8;a[d+1|0]=w;w=w>>8;a[d+2|0]=w;w=w>>8;a[d+3|0]=w;d=b+8|0;w=c;a[d]=w;w=w>>8;a[d+1|0]=w;w=w>>8;a[d+2|0]=w;w=w>>8;a[d+3|0]=w;a[b+56|0]=0;a[b+14|0]=17;a[b+15|0]=15;return}function Vk(b,c){b=b|0;c=c|0;var e=0,f=0,g=0;if((b|0)==0){return}e=b+8|0;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;if((f|0)==0){return}g=b+4|0;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;w=f;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;a[b+56|0]=0;a[b+14|0]=17;a[b+15|0]=15;b=f+4|0;e=f+8|0;f=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+((c&255)<<1)|0;w=(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)+(((d[f]|d[f+1|0]<<8)<<16>>16&65535)<<1)|0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;return}function Wk(a){a=a|0;var b=0,c=0;if((a|0)==0){b=0;return b|0}c=a+4|0;if((d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0)==0){b=0;return b|0}c=a+8|0;b=(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0)!=0|0;return b|0}function Xk(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0;c=i;if((b|0)==0){e=0;i=c;return e|0}f=b+4|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;if((g|0)==0){e=0;i=c;return e|0}h=b+8|0;j=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;if((j|0)==0){e=0;i=c;return e|0}h=g+2|0;w=h;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;k=Fb((d[g]|d[g+1|0]<<8)<<16>>16&65535|0)|0;l=k>>>16;m=k>>>24&31;do{if((l&32768|0)==0){if((l&16384|0)!=0){n=(l&255)<<24>>24;o=m;p=h;break}if((l&8192|0)==0){n=0;o=m;p=h}else{k=g+4|0;w=k;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;n=(Fb((d[h]|d[h+1|0]<<8)<<16>>16&65535|0)|0)>>>16&65535;o=m;p=k}}else{n=l&32767;o=0;p=h}}while(0);h=o&255;switch(h|0){case 7:{o=(n&65535)-1+(d[b+14|0]|0)|0;if((o|0)>14){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=373,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}l=b+15|0;m=a[l]|0;if(m<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=378,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{g=b+26+(o<<1)|0;o=(d[g]|d[g+1|0]<<8)<<16>>16;g=m-1&255;a[l]=g;l=b+26+((g&255)<<1)|0;w=o;a[l]=w;w=w>>8;a[l+1|0]=w;e=1;i=c;return e|0}break};case 12:{l=b+15|0;a[l]=(a[l]|0)+(n&255);e=1;i=c;return e|0};case 13:{l=b+15|0;a[l]=(a[l]|0)-(n&255);e=1;i=c;return e|0};case 14:{l=n&255;o=l&65535;if(!((l&65535)>>>0>63>>>0)?(l=j+16|0,g=(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24)+(o<<2)|0,l=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0,(l|0)!=0):0){g=b+12|0;w=gc[l&255](b)|0;a[g]=w;w=w>>8;a[g+1|0]=w;e=1;i=c;return e|0}Sk(52616,(q=i,i=i+8|0,w=o,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;e=0;i=c;return e|0};case 15:{o=b+15|0;g=a[o]|0;if(!((g&255)>>>0<15>>>0)){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=450,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}if((p|0)==0){e=0;i=c;return e|0}a[o]=g+1;o=b+26+((g&255)<<1)|0;if(!((d[o]|d[o+1|0]<<8)<<16>>16<<16>>16==0)){e=1;i=c;return e|0}o=j+4|0;w=(d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24)+((n&32767)<<1)|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0};case 2:{if((n<<16>>16|0)==0){o=b+15|0;g=a[o]|0;if(g<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=330,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{l=b+12|0;m=(d[l]|d[l+1|0]<<8)<<16>>16;l=g-1&255;a[o]=l;o=b+26+((l&255)<<1)|0;w=m;a[o]=w;w=w>>8;a[o+1|0]=w;e=1;i=c;return e|0}}else if((n<<16>>16|0)==1){o=b+15|0;m=a[o]|0;if(m<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=338,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w}else{l=j+4|0;g=((p-(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24)|0)>>>1)+1&65535;l=m-1&255;a[o]=l;m=b+26+((l&255)<<1)|0;w=g;a[m]=w;w=w>>8;a[m+1|0]=w}m=b+14|0;g=a[o]|0;if(g<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=339,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w}else{l=d[m]|0;k=g-1&255;a[o]=k;g=b+26+((k&255)<<1)|0;w=l;a[g]=w;w=w>>8;a[g+1|0]=w}a[m]=(a[o]|0)+2;e=1;i=c;return e|0}else{Sk(57384,(q=i,i=i+8|0,w=n&65535,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}break};case 17:{o=b+15|0;m=a[o]|0;if((m&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=478,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;r=0;s=a[o]|0}else{g=m+1&255;a[o]=g;l=b+26+((m&255)<<1)|0;r=(d[l]|d[l+1|0]<<8)<<16>>16;s=g}if((s&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=479,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;t=0}else{a[o]=s+1;g=b+26+((s&255)<<1)|0;t=(d[g]|d[g+1|0]<<8)<<16>>16}g=n&65535;switch(g|0){case 2:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=484,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{l=s-1&255;a[o]=l;s=b+26+((l&255)<<1)|0;w=t<<16>>16==r<<16>>16|0;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 3:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=485,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{l=s-1&255;a[o]=l;s=b+26+((l&255)<<1)|0;w=t<<16>>16!=r<<16>>16|0;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 1:{if(t<<16>>16==0){u=r<<16>>16!=0|0}else{u=1}s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=483,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{l=s-1&255;a[o]=l;s=b+26+((l&255)<<1)|0;w=u;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 0:{if(t<<16>>16==0){v=0}else{v=r<<16>>16!=0|0}s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=482,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{u=s-1&255;a[o]=u;s=b+26+((u&255)<<1)|0;w=v;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 9:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=491,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t-r&65535;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 10:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=492,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=aa(t,r)|0;u=s-1&255;a[o]=u;s=b+26+((u&255)<<1)|0;w=v;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 4:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=486,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t<<16>>16<r<<16>>16|0;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 5:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=487,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t<<16>>16<=r<<16>>16|0;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 7:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=489,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t<<16>>16>=r<<16>>16|0;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 8:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=490,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t+r&65535;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 6:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=488,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t<<16>>16>r<<16>>16|0;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 11:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=493,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=((t<<16>>16|0)/(r<<16>>16|0)|0)&65535;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 12:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=494,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t<<16>>16>>(r<<16>>16)&65535;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 13:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=495,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t<<16>>16<<(r<<16>>16)&65535;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 14:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=496,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t&r;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 15:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=497,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=t|r;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 16:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=498,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;s=b+26+((v&255)<<1)|0;w=((t<<16>>16|0)%(r<<16>>16|0)|0)&65535;a[s]=w;w=w>>8;a[s+1|0]=w;e=1;i=c;return e|0}break};case 17:{s=a[o]|0;if(s<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=499,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{v=s-1&255;a[o]=v;o=b+26+((v&255)<<1)|0;w=t^r;a[o]=w;w=w>>8;a[o+1|0]=w;e=1;i=c;return e|0}break};default:{Sk(49320,(q=i,i=i+8|0,w=g,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}}break};case 10:{g=b+14|0;o=a[g]|0;r=-2-(n&65535)|0;if((r+(o&255)|0)>14){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=407,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}t=b+15|0;v=a[t]|0;if((v&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=412,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;x=0;y=a[g]|0}else{a[t]=v+1;t=b+26+((v&255)<<1)|0;x=(d[t]|d[t+1|0]<<8)<<16>>16;y=o}o=b+26+(r+(y&255)<<1)|0;w=x;a[o]=w;w=w>>8;a[o+1|0]=w;e=1;i=c;return e|0};case 5:{o=b+15|0;x=a[o]|0;if(x<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=356,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{y=b+16+((n&65535)<<1)|0;r=(d[y]|d[y+1|0]<<8)<<16>>16;y=x-1&255;a[o]=y;o=b+26+((y&255)<<1)|0;w=r;a[o]=w;w=w>>8;a[o+1|0]=w;e=1;i=c;return e|0}break};case 9:{o=b+15|0;r=a[o]|0;if((r&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=401,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;z=0}else{a[o]=r+1;o=b+26+((r&255)<<1)|0;z=(d[o]|d[o+1|0]<<8)<<16>>16}o=b+16+((n&65535)<<1)|0;w=z;a[o]=w;w=w>>8;a[o+1|0]=w;e=1;i=c;return e|0};case 6:{o=(d[b+14|0]|0)-(n&65535)-2|0;if((o|0)>14){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=362,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}z=b+15|0;r=a[z]|0;if(r<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=367,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{y=b+26+(o<<1)|0;o=(d[y]|d[y+1|0]<<8)<<16>>16;y=r-1&255;a[z]=y;z=b+26+((y&255)<<1)|0;w=o;a[z]=w;w=w>>8;a[z+1|0]=w;e=1;i=c;return e|0}break};case 8:{if((n<<16>>16|0)==1){z=b+15|0;o=a[z]|0;if(!((o&255)>>>0<14>>>0)){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=388,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}if((p|0)==0){e=0;i=c;return e|0}y=o+1&255;a[z]=y;r=b+26+((o&255)<<1)|0;a[b+14|0]=(d[r]|d[r+1|0]<<8)<<16>>16;r=j+4|0;x=d[r]|d[r+1|0]<<8|d[r+2|0]<<16|d[r+3|0]<<24|0;if((y&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=391,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;A=0}else{a[z]=o+2;o=b+26+((y&255)<<1)|0;A=(d[o]|d[o+1|0]<<8)<<16>>16&65535}w=x+(A<<1)|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else if((n<<16>>16|0)==0){A=b+15|0;x=a[A]|0;if((x&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=384,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;B=0}else{a[A]=x+1;A=b+26+((x&255)<<1)|0;B=(d[A]|d[A+1|0]<<8)<<16>>16}A=b+12|0;w=B;a[A]=w;w=w>>8;a[A+1|0]=w;e=1;i=c;return e|0}else{Sk(54984,(q=i,i=i+8|0,w=n&65535,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}break};case 1:{A=b+12|0;w=n;a[A]=w;w=w>>8;a[A+1|0]=w;e=1;i=c;return e|0};case 16:{if((n<<16>>16|0)==2){A=b+15|0;B=a[A]|0;if((B&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=468,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;C=-1;D=a[A]|0}else{x=B+1&255;a[A]=x;o=b+26+((B&255)<<1)|0;C=~((d[o]|d[o+1|0]<<8)<<16>>16);D=x}if(D<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=468,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{x=D-1&255;a[A]=x;A=b+26+((x&255)<<1)|0;w=C;a[A]=w;w=w>>8;a[A+1|0]=w;e=1;i=c;return e|0}}else if((n<<16>>16|0)==1){A=b+15|0;C=a[A]|0;if((C&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=464,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;E=0;F=a[A]|0}else{x=C+1&255;a[A]=x;D=b+26+((C&255)<<1)|0;E=(d[D]|d[D+1|0]<<8)<<16>>16;F=x}if(F<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=464,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{x=F-1&255;a[A]=x;A=b+26+((x&255)<<1)|0;w=-E&65535;a[A]=w;w=w>>8;a[A+1|0]=w;e=1;i=c;return e|0}}else if((n<<16>>16|0)==0){A=b+15|0;E=a[A]|0;if((E&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=460,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;G=1;H=a[A]|0}else{x=E+1&255;a[A]=x;F=b+26+((E&255)<<1)|0;G=(d[F]|d[F+1|0]<<8)<<16>>16<<16>>16==0|0;H=x}if(H<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=460,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{x=H-1&255;a[A]=x;A=b+26+((x&255)<<1)|0;w=G;a[A]=w;w=w>>8;a[A+1|0]=w;e=1;i=c;return e|0}}else{Sk(50248,(q=i,i=i+8|0,w=n&65535,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}break};case 0:{A=j+4|0;w=(d[A]|d[A+1|0]<<8|d[A+2|0]<<16|d[A+3|0]<<24)+((n&65535)<<1)|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0};case 11:{A=b+14|0;G=a[A]|0;x=(n&65535)-1|0;if((x+(G&255)|0)>14){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=418,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}H=b+15|0;F=a[H]|0;if((F&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=423,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;I=0;J=a[A]|0}else{a[H]=F+1;H=b+26+((F&255)<<1)|0;I=(d[H]|d[H+1|0]<<8)<<16>>16;J=G}G=b+26+(x+(J&255)<<1)|0;w=I;a[G]=w;w=w>>8;a[G+1|0]=w;e=1;i=c;return e|0};case 3:case 4:{G=b+15|0;I=a[G]|0;if(I<<24>>24==0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=351,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=1;i=c;return e|0}else{J=I-1&255;a[G]=J;G=b+26+((J&255)<<1)|0;w=n;a[G]=w;w=w>>8;a[G+1|0]=w;e=1;i=c;return e|0}break};case 18:{G=b+15|0;n=a[G]|0;if(!((n&255)>>>0<14>>>0)){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=510,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}if((p|0)==0){e=0;i=c;return e|0}p=n+1&255;a[G]=p;J=b+26+((n&255)<<1)|0;I=b+12|0;w=(d[J]|d[J+1|0]<<8)<<16>>16;a[I]=w;w=w>>8;a[I+1|0]=w;I=j+4|0;j=d[I]|d[I+1|0]<<8|d[I+2|0]<<16|d[I+3|0]<<24|0;if((p&255)>>>0>14>>>0){Sk(51264,(q=i,i=i+16|0,w=60736,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,w=513,a[q+8|0]=w,w=w>>8,a[q+9|0]=w,w=w>>8,a[q+10|0]=w,w=w>>8,a[q+11|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;K=0}else{a[G]=n+2;n=b+26+((p&255)<<1)|0;K=(d[n]|d[n+1|0]<<8)<<16>>16&65535}w=j+(K<<1)|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;a[b+56|0]=0;e=1;i=c;return e|0};default:{Sk(48776,(q=i,i=i+8|0,w=h,a[q]=w,w=w>>8,a[q+1|0]=w,w=w>>8,a[q+2|0]=w,w=w>>8,a[q+3|0]=w,q)|0);i=q;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;e=0;i=c;return e|0}}return 0}function Yk(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;e=i;if((b|0)==0){i=e;return}f=b+4|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;if((g|0)==0){i=e;return}h=b+8|0;j=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;if((j|0)==0){i=e;return}h=b+56|0;if((a[h]|0)!=0){i=e;return}a[h]=1;h=j+4|0;k=b+15|0;l=a[k]|0;if(l<<24>>24==0){Sk(51264,(m=i,i=i+16|0,w=60736,a[m]=w,w=w>>8,a[m+1|0]=w,w=w>>8,a[m+2|0]=w,w=w>>8,a[m+3|0]=w,w=542,a[m+8|0]=w,w=w>>8,a[m+9|0]=w,w=w>>8,a[m+10|0]=w,w=w>>8,a[m+11|0]=w,m)|0);i=m;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w}else{n=(g-(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)|0)>>>1&65535;g=l-1&255;a[k]=g;l=b+26+((g&255)<<1)|0;w=n;a[l]=w;w=w>>8;a[l+1|0]=w}l=a[k]|0;if(l<<24>>24==0){Sk(51264,(m=i,i=i+16|0,w=60736,a[m]=w,w=w>>8,a[m+1|0]=w,w=w>>8,a[m+2|0]=w,w=w>>8,a[m+3|0]=w,w=543,a[m+8|0]=w,w=w>>8,a[m+9|0]=w,w=w>>8,a[m+10|0]=w,w=w>>8,a[m+11|0]=w,m)|0);i=m;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w}else{m=b+12|0;n=(d[m]|d[m+1|0]<<8)<<16>>16;m=l-1&255;a[k]=m;k=b+26+((m&255)<<1)|0;w=n;a[k]=w;w=w>>8;a[k+1|0]=w}k=j+8|0;j=(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)+((c&255)<<1)|0;w=(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)+(((d[j]|d[j+1|0]<<8)<<16>>16&65535)<<1)|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;i=e;return}function Zk(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;if((b|0)==0){return}c=b+20|0;e=b|0;if((d[c]|d[c+1|0]<<8)<<16>>16<<16>>16==0){f=b+8|0;g=b+4|0}else{zp(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0);c=b+8|0;zp(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);h=b+4|0;zp(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0);f=c;g=h}w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;w=0;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;return}function _k(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;if((c|0)==0|(b|0)==0){g=0;return g|0}h=c+20|0;i=c|0;if((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==0){j=c+8|0;k=c+4|0}else{zp(d[i]|d[i+1|0]<<8|d[i+2|0]<<16|d[i+3|0]<<24|0);l=c+8|0;zp(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0);m=c+4|0;zp(d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0);j=l;k=m}w=0;a[i]=w;w=w>>8;a[i+1|0]=w;w=w>>8;a[i+2|0]=w;w=w>>8;a[i+3|0]=w;w=0;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;w=0;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=(f|0)==0;w=k&1;a[h]=w;w=w>>8;a[h+1|0]=w;j=c+16|0;w=e;a[j]=w;w=w>>8;a[j+1|0]=w;w=w>>8;a[j+2|0]=w;w=w>>8;a[j+3|0]=w;if((Jd(b)|0)<<24>>24==0){g=0;return g|0}j=Wd(b)|0;b=Yd(j,1415071060)|0;if((b|0)==0){n=f}else{if(k){k=Ap(1,b)|0;e=c|0;w=k;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;o=0;p=k}else{k=f;e=c|0;w=k;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;o=f+b|0;p=k}Zd(j,1415071060,p,b)|0;n=o}o=Yd(j,1380209231)|0;p=o+b|0;if((o|0)==0){b=c|0;if((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==0){q=c+8|0;r=c+4|0}else{zp(d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0);k=c+8|0;zp(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0);f=c+4|0;zp(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0);q=k;r=f}w=0;a[b]=w;w=w>>8;a[b+1|0]=w;w=w>>8;a[b+2|0]=w;w=w>>8;a[b+3|0]=w;w=0;a[q]=w;w=w>>8;a[q+1|0]=w;w=w>>8;a[q+2|0]=w;w=w>>8;a[q+3|0]=w;w=0;a[r]=w;w=w>>8;a[r+1|0]=w;w=w>>8;a[r+2|0]=w;w=w>>8;a[r+3|0]=w;Xd(j);g=0;return g|0}if((n|0)==0){r=Ap(1,o)|0;q=c+8|0;w=r;a[q]=w;w=w>>8;a[q+1|0]=w;w=w>>8;a[q+2|0]=w;w=w>>8;a[q+3|0]=w;s=0;t=r}else{r=n;q=c+8|0;w=r;a[q]=w;w=w>>8;a[q+1|0]=w;w=w>>8;a[q+2|0]=w;w=w>>8;a[q+3|0]=w;s=n+o|0;t=r}r=o>>>1&65535;n=c+12|0;w=r;a[n]=w;w=w>>8;a[n+1|0]=w;n=c+8|0;Zd(j,1380209231,t,o)|0;if(r<<16>>16>0){o=d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0;t=0;do{q=o+(t<<16>>16<<1)|0;w=(Fb((d[q]|d[q+1|0]<<8)<<16>>16&65535|0)|0)>>>16&65535;a[q]=w;w=w>>8;a[q+1|0]=w;t=t+1&65535}while(t<<16>>16<r<<16>>16)}r=Yd(j,1096040772)|0;t=p+r|0;if((r|0)==0){p=c|0;if((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==0){u=c+4|0}else{zp(d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24|0);zp(d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0);h=c+4|0;zp(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0);u=h}w=0;a[p]=w;w=w>>8;a[p+1|0]=w;w=w>>8;a[p+2|0]=w;w=w>>8;a[p+3|0]=w;w=0;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;w=0;a[u]=w;w=w>>8;a[u+1|0]=w;w=w>>8;a[u+2|0]=w;w=w>>8;a[u+3|0]=w;Xd(j);g=0;return g|0}else{if((s|0)==0){u=Ap(1,r)|0;n=c+4|0;w=u;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;v=u}else{u=s;s=c+4|0;w=u;a[s]=w;w=w>>8;a[s+1|0]=w;w=w>>8;a[s+2|0]=w;w=w>>8;a[s+3|0]=w;v=u}u=c+14|0;w=r>>>1&65535;a[u]=w;w=w>>8;a[u+1|0]=w;Zd(j,1096040772,v,r)|0;Xd(j);g=t&65535;return g|0}return 0}function $k(a){a=a|0;a=(d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24)+92|0;return(d[a]|d[a+1|0]<<8)<<16>>16|0}function al(b){b=b|0;var c=0,e=0,f=0;c=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;e=Tk(b,1,50632,61)|0;if(e<<16>>16==-2){if((a[c+3|0]|0)==-1){f=0}else{b=c+88|0;f=(d[b]|d[b+1|0]<<8)<<16>>16<<16>>16==0?2:1}}else{f=e}Om(c,f);return 0}function bl(a){a=a|0;var b=0;a=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;if((d[a+8|0]|0|0)!=(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){return 0}b=13176+((d[a+2|0]|0)*100|0)|0;Gn(a+12|0,(d[b]|d[b+1|0]<<8)<<16>>16);return 0}function cl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;c=a[b+3|0]|0;if(c<<24>>24==-1){Om(b,0);e=0;return e|0}f=Wj(c&255)|0;c=b+16|0;g=13174+((d[b+2|0]|0)*100|0)|0;h=(((((d[c]|d[c+1|0]<<8)<<16>>16&65535)<<8>>>0)/(((d[g]|d[g+1|0]<<8)<<16>>16&65535)>>>0)|0)*3|0)>>>8;g=f+96|0;c=a[g]|0;i=(c&255)>>>0<(h&65535)>>>0?c&255:h&65535;h=c<<24>>24!=0&i<<16>>16==0?1:i;i=h&65535;if(h<<16>>16==0){e=0;return e|0}h=a[f+8|0]|0;if((h&255|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){j=7;k=h}else{h=((Zn()|0)&3)+6|0;j=h;k=(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&255}h=aa(j,i)|0;j=b+8|0;if((Kh(k,a[j]|0)|0)<<24>>24==0){k=((d[231316]|d[231317]<<8)<<16>>16&65535)+h|0;w=(k&65535)>>>0>65e3>>>0?-536:k&65535;a[231316]=w;w=w>>8;a[231317]=w}else{k=((d[231314]|d[231315]<<8)<<16>>16&65535)+h|0;w=(k&65535)>>>0>65e3>>>0?-536:k&65535;a[231314]=w;w=w>>8;a[231315]=w}k=(Hj(a[j]|0)|0)+20|0;w=((d[k]|d[k+1|0]<<8)<<16>>16&65535)+h&65535;a[k]=w;w=w>>8;a[k+1|0]=w;k=(d[g]|0)-i|0;a[g]=k;if((k&255|0)==0){k=f+4|0;w=(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&-257;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w}k=b+20|0;w=6;a[k]=w;w=w>>8;a[k+1|0]=w;e=1;return e|0}function dl(a){a=a|0;var b=0,c=0,e=0,f=0,g=0;a=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;b=a|0;c=a|0;e=Sn((d[c]|d[c+1|0]<<8)<<16>>16,3)|0;c=a+44|0;a=Wn((d[c]|d[c+1|0]<<8)<<16>>16)|0;do{if((a|0)!=0){f=a+44|0;if(!(e<<16>>16==(d[f]|d[f+1|0]<<8)<<16>>16<<16>>16)){Ti(a|0);break}g=(d[c]|d[c+1|0]<<8)<<16>>16;return g|0}}while(0);Ti(b);g=0;return g|0}function el(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;c=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;e=c+92|0;if(!((d[e]|d[e+1|0]<<8)<<16>>16<<16>>16==2)){f=0;return f|0}e=c|0;g=c+3|0;if((a[g]|0)==-1){f=0;return f|0}h=Tk(b,1,50632,218)|0;b=$m(c,0)|0;i=Wj(d[g]|0)|0;g=a[c+8|0]|0;if(((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)==(g&255|0)?(a[i+2|0]|0)==16:0)?(j=i+100|0,!((d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0)!=0|b<<16>>16==0)):0){f=0;return f|0}j=c|0;c=Zo(h&65535,g,Sn((d[j]|d[j+1|0]<<8)<<16>>16,3)|0,b<<16>>16==0|0)|0;if((c|0)==0){f=0;return f|0}b=c|0;c=Sn((d[b]|d[b+1|0]<<8)<<16>>16,2)|0;Si(e,c);f=c;return f|0}function fl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;b=i;i=i+24|0;c=b|0;e=b+8|0;f=b+16|0;g=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;h=g|0;j=g+3|0;k=a[j]|0;if(k<<24>>24==-1){l=0;i=b;return l|0}m=Wj(k&255)|0;k=m+2|0;n=a[k]|0;o=8862+((n&255)*100|0)|0;do{if((d[o]|d[o+1|0]<<8)<<16>>16<<16>>16==4){if((Do(m,g+12|0)|0)<<24>>24==0){p=a[k]|0;break}q=m+3|0;a[j]=a[q]|0;a[q]=-1;if((a[j]|0)==-1){Om(g,0)}Ti(h);q=d[g+8|0]|0;if((q|0)!=(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){l=1;i=b;return l|0}xd(q+49&65535);l=1;i=b;return l|0}else{p=n}}while(0);n=$m(g,p<<24>>24==16|0)|0;if(n<<16>>16==0){l=0;i=b;return l|0}p=m+9|0;a[p]=a[p]|a[g+9|0];xn(e,n);Dn(f,e);e=f|0;f=c|0;w=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;if((Do(m,c)|0)<<24>>24==0){l=0;i=b;return l|0}c=m+3|0;a[j]=a[c]|0;a[c]=-1;ho(m,(Ln(g+12|0,m+12|0)|0)&-32,1,0);ho(m,a[m+110|0]|0,1,1);if((d[m+8|0]|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){Ze(366,106)|0}if((a[j]|0)==-1){Om(g,0)}Ti(h);h=d[g+8|0]|0;if((h|0)!=(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){l=1;i=b;return l|0}if((a[g+2|0]|0)==13){l=1;i=b;return l|0}xd(((a[k]|0)==16?68:30)+h&65535);l=1;i=b;return l|0}function gl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;c=i;i=i+8|0;e=c|0;f=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;g=Tk(b,1,50632,321)|0;a[e|0]=-1;b=e+4|0;w=-1;a[b]=w;w=w>>8;a[b+1|0]=w;b=e+2|0;w=-1;a[b]=w;w=w>>8;a[b+1|0]=w;b=Xj(e)|0;if((b|0)==0){h=0;i=c;return h|0}j=f+8|0;k=f+12|0;f=(g&65535)*3|0;l=32e3;m=0;n=b;a:while(1){b=n;b:while(1){do{if((Kh(a[j]|0,a[b+8|0]|0)|0)<<24>>24==0){o=b+2|0;if((a[o]|0)!=1?(1<<d[j]&d[b+9|0]|0)==0:0){break}p=Bn(b+12|0,k)|0;q=p&65535;if(q>>>0<l>>>0){if((a[o]|0)==1){if(q>>>0<f>>>0){break b}else{break}}else{if((p&65535)>>>0<(g&65535)>>>0){break b}else{break}}}}}while(0);p=Xj(e)|0;if((p|0)==0){r=m;break a}else{b=p}}p=(a[47984]|0)==0?l:q;o=Xj(e)|0;if((o|0)==0){r=b;break}else{l=p;m=b;n=o}}if((r|0)==0){h=0;i=c;return h|0}n=r|0;h=Sn((d[n]|d[n+1|0]<<8)<<16>>16,2)|0;i=c;return h|0}function hl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;c=i;i=i+16|0;e=c|0;f=c+8|0;g=Tk(b,1,50632,379)|0;if(g<<16>>16==0){h=0;i=c;return h|0}b=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;Vn(f,g);g=f|0;f=e|0;w=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=b+12|0;g=241272+(((vn(f)|0)&65535)<<2)|0;j=d[257696]|d[257697]<<8|d[257698]<<16|d[257699]<<24|0;k=(a[b+2|0]|0)==16?j+48|0:j+46|0;l=j+(((d[k]|d[k+1|0]<<8)<<16>>16&65535)+2<<1)|0;k=g;g=(d[l]|d[l+1|0]<<8)<<16>>16&65535;l=((d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&511)-g&65535;j=l<<16>>16;if((l&65535)>>>0>7>>>0){h=1;i=c;return h|0}m=(Nn(Ln(f,e)|0)|0)&255;if((m|0)==(j|0)){h=0;i=c;return h|0}e=m-j&65535;j=((e<<16>>16<0?e+8&65535:e)<<16>>16<4?1:7)+l&7;w=(d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)&-512|(j&65535)+g&511;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;k=b+82|0;w=j;a[k]=w;w=w>>8;a[k+1|0]=w;Bi(vn(f)|0,0,0);h=1;i=c;return h|0}function il(a){a=a|0;var b=0,c=0,e=0,f=0,g=0,h=0;b=i;i=i+8|0;c=b|0;e=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;f=Tk(a,1,50632,440)|0;if((Tn(f)|0)<<24>>24==0){a=e+82|0;g=(d[a]|d[a+1|0]<<8)<<16>>16;h=g<<5;i=b;return h|0}else{Vn(c,f);g=(Nn(Ln(e+12|0,c)|0)|0)&255;h=g<<5;i=b;return h|0}return 0}function jl(b){b=b|0;var c=0;c=Tk(b,1,50632,462)|0;if((Tn(c)|0)<<24>>24==0){return 0}if((Qn(c)|0)!=2){return 0}b=Wn(c)|0;if((b|0)==0){return 0}Ti(b|0);c=b+94|0;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;return 0}function kl(a){a=a|0;var b=0;b=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;if((d[b+8|0]|0|0)!=(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){return 0}sd(Tk(a,1,50632,492)|0,b+12|0);return 0}function ll(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;c=i;i=i+16|0;e=c|0;f=c+8|0;g=b+20|0;b=(d[g]|d[g+1|0]<<8)<<16>>16;if(b<<16>>16==0){h=0;i=c;return h|0}g=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;if((a[g+2|0]|0)==16?(Vn(f,b),((Bn(f,g+12|0)|0)&65535)>>>0>767>>>0):0){j=20;k=Pn((d[9580]|d[9581]<<8)<<16>>16,1,255,1)|0;l=30}else{j=23;k=Pn((d[9780]|d[9781]<<8)<<16>>16,1,255,1)|0;l=20}f=g+12|0;m=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=e|0;w=m+128&65535|m+8388608&-65536;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=Xo(e,j,a[g+8|0]|0,l,b)|0;if((f|0)==0){h=0;i=c;return h|0}b=g|0;g=f+84|0;w=Sn((d[b]|d[b+1|0]<<8)<<16>>16,3)|0;a[g]=w;w=w>>8;a[g+1|0]=w;h=k;i=c;return h|0}function ml(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+16|0;c=b|0;e=b+8|0;f=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;g=13220+((d[f+2|0]|0)*100|0)|0;h=(d[g]|d[g+1|0]<<8)<<16>>16;g=vn(f+12|0)|0;f=h&65535;h=12992+(f<<1)|0;j=(d[h]|d[h+1|0]<<8)<<16>>16;if(j<<16>>16==0){i=b;return 0}h=e|0;k=c|0;l=0;do{m=12832+(f*18|0)+((l&65535)<<1)|0;xn(e,((d[m]|d[m+1|0]<<8)<<16>>16)+g&65535);w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;a[k]=w;w=w>>8;a[k+1|0]=w;w=w>>8;a[k+2|0]=w;w=w>>8;a[k+3|0]=w;zi(14,c,0,0);l=l+1&65535}while((l&65535)>>>0<(j&65535)>>>0);i=b;return 0}function nl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;b=i;i=i+24|0;c=b|0;e=b+8|0;f=b+16|0;g=d[231224]|d[231225]<<8|d[231226]<<16|d[231227]<<24|0;h=g+2|0;j=13220+((d[h]|0)*100|0)|0;k=(d[j]|d[j+1|0]<<8)<<16>>16;j=vn(g+12|0)|0;en(g);l=k&65535;k=12992+(l<<1)|0;m=(d[k]|d[k+1|0]<<8)<<16>>16;if(!(m<<16>>16==0)){k=e|0;n=c|0;o=g+8|0;p=f|0;q=0;do{r=12832+(l*18|0)+((q&65535)<<1)|0;xn(e,((d[r]|d[r+1|0]<<8)<<16>>16)+j&65535);w=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;r=13172+((d[h]|0)*100|0)|0;s=(d[r]|d[r+1|0]<<8)<<16>>16&65535;do{if(!(s>>>0<((Zn()|0)&255)>>>0)?(r=a[o]|0,t=qo(-1,4,r,c,Zn()|0)|0,(t|0)!=0):0){r=(d[9214]|d[9215]<<8)<<16>>16&65535;u=t+16|0;w=(aa((Zn()|0)&3,r)|0)>>>8&65535;a[u]=w;w=w>>8;a[u+1|0]=w;if((d[o]|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){lo(t,1);Kn(f,t+12|0,32,1);w=d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24|0;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;u=t+94|0;w=Sn(vn(c)|0,1)|0;a[u]=w;w=w>>8;a[u+1|0]=w;break}else{lo(t,0);break}}}while(0);q=q+1&65535}while((q&65535)>>>0<(m&65535)>>>0)}if((a[261320]|0)!=0){i=b;return 0}m=g+8|0;g=d[m]|0;if((g|0)!=(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){i=b;return 0}if((a[261416]|0)==1){q=13160+((d[h]|0)*100|0)|0;c=Dm((d[q]|d[q+1|0]<<8)<<16>>16)|0;q=15512+(d[m]<<5)|0;m=d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0;q=Dm(133)|0;ye(64272,0,(v=i,i=i+24|0,w=c,a[v]=w,w=w>>8,a[v+1|0]=w,w=w>>8,a[v+2|0]=w,w=w>>8,a[v+3|0]=w,w=m,a[v+8|0]=w,w=w>>8,a[v+9|0]=w,w=w>>8,a[v+10|0]=w,w=w>>8,a[v+11|0]=w,w=q,a[v+16|0]=w,w=w>>8,a[v+17|0]=w,w=w>>8,a[v+18|0]=w,w=w>>8,a[v+19|0]=w,v)|0);i=v;i=b;return 0}else{q=15512+(g<<5)|0;g=d[q]|d[q+1|0]<<8|d[q+2|0]<<16|d[q+3|0]<<24|0;q=13160+((d[h]|0)*100|0)|0;h=Dm((d[q]|d[q+1|0]<<8)<<16>>16)|0;q=Dm(133)|0;ye(64272,0,(v=i,i=i+24|0,w=g,a[v]=w,w=w>>8,a[v+1|0]=w,w=w>>8,a[v+2|0]=w,w=w>>8,a[v+3|0]=w,w=h,a[v+8|0]=w,w=w>>8,a[v+9|0]=w,w=w>>8,a[v+10|0]=w,w=w>>8,a[v+11|0]=w,w=q,a[v+16|0]=w,w=w>>8,a[v+17|0]=w,w=w>>8,a[v+18|0]=w,w=w>>8,a[v+19|0]=w,v)|0);i=v;i=b;return 0}return 0}function ol(a){a=a|0;a=(d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24)+8|0;return(d[a]|d[a+1|0]<<8)<<16>>16|0}function pl(a){a=a|0;a=(d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24)+10|0;return(d[a]|d[a+1|0]<<8)<<16>>16|0}function ql(a){a=a|0;a=(d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24)+30|0;return(d[a]|d[a+1|0]<<8)<<16>>16|0}function rl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0;b=i;i=i+8|0;c=b|0;e=d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24|0;f=e+8|0;g=e+12|0;if(!(((d[f]|d[f+1|0]<<8)<<16>>16&65535)>>>0<((d[g]|d[g+1|0]<<8)<<16>>16&65535)>>>0)){h=0;i=b;return h|0}a[c|0]=a[e+20|0]|0;g=c+4|0;w=-1;a[g]=w;w=w>>8;a[g+1|0]=w;g=c+2|0;w=-1;a[g]=w;w=w>>8;a[g+1|0]=w;g=Xj(c)|0;a:do{if((g|0)==0){j=0;k=0}else{f=e+14|0;l=e+24|0;m=0;n=0;o=0;p=0;q=g;while(1){r=n;s=p;t=q;b:while(1){u=t;while(1){v=u+4|0;if((((d[v]|d[v+1|0]<<8|d[v+2|0]<<16|d[v+3|0]<<24)&512|0)!=0?(v=a[u+2|0]|0,!(v<<24>>24==6)):0)?(x=8862+((v&255)*100|0)|0,(d[x]|d[x+1|0]<<8)<<16>>16<<16>>16==(d[f]|d[f+1|0]<<8)<<16>>16<<16>>16):0){x=a[u+121|0]|0;if(x<<24>>24==0){break}v=Rj((x&255)-1&65535)|0;x=v+8|0;y=v+10|0;if(!(((d[x]|d[x+1|0]<<8)<<16>>16&65535)>>>0>((d[y]|d[y+1|0]<<8)<<16>>16&65535)>>>0)){break b}}y=Xj(c)|0;if((y|0)==0){j=s;k=m;break a}else{u=y}}y=Bn(l,u+12|0)|0;x=(y&65535)>>>0<(r&65535)>>>0|r<<16>>16==0;v=x?u:s;z=Xj(c)|0;if((z|0)==0){j=v;k=m;break a}else{r=x?y:r;s=v;t=z}}t=Bn(l,u+12|0)|0;z=(t&65535)>>>0<(o&65535)>>>0|o<<16>>16==0;v=z?u:m;y=Xj(c)|0;if((y|0)==0){j=s;k=v;break}else{m=v;n=r;o=z?t:o;p=s;q=y}}}}while(0);c=(j|0)==0?k:j;if((c|0)==0){h=0;i=b;return h|0}wo(c)|0;h=vo(c,e)|0;i=b;return h|0}function sl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;b=i;i=i+16|0;c=b|0;e=b+8|0;f=c|0;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;g=d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24|0;h=g+20|0;j=e|0;a[j]=a[h]|0;k=e+4|0;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;l=e+2|0;w=-1;a[l]=w;w=w>>8;a[l+1|0]=w;m=g|0;n=0;a:while(1){do{o=Xj(e)|0;if((o|0)==0){break a}}while(((d[m]|d[m+1|0]<<8)<<16>>16&65535|0)!=((d[o+121|0]|0)-1|0));p=o+12|0;q=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;r=q+(d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24)&65535;s=q&-65536;w=r|s;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;w=s+(d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24)&-65536|r;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;n=n+1&65535}o=n&65535;if(n<<16>>16==0){t=0;i=b;return t|0}r=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;w=((r>>>16>>>0)/(o>>>0)|0)<<16|(((r&65535)>>>0)/(o>>>0)|0);a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=g+24|0;o=f|0;w=rn(c)|0;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;a[j]=a[h]|0;w=-1;a[k]=w;w=w>>8;a[k+1|0]=w;w=-1;a[l]=w;w=w>>8;a[l+1|0]=w;l=0;b:while(1){do{u=Xj(e)|0;if((u|0)==0){break b}}while(((d[m]|d[m+1|0]<<8)<<16>>16&65535|0)!=((d[u+121|0]|0)-1|0));l=(Fn(u+12|0,f)|0)+l&65535}f=(l&65535)/(n&65535)|0;n=g+30|0;if((d[n]|d[n+1|0]<<8)<<16>>16<<16>>16==0){t=f;i=b;return t|0}l=g+28|0;if((d[l]|d[l+1|0]<<8)<<16>>16<<16>>16==0){t=f;i=b;return t|0}g=vn(c)|0;if(!(((En(g,Un((d[n]|d[n+1|0]<<8)<<16>>16)|0)|0)&65535)>>>0<11>>>0)){t=f;i=b;return t|0}w=2;a[l]=w;w=w>>8;a[l+1|0]=w;t=f;i=b;return t|0}function tl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0;c=i;i=i+32|0;e=c|0;f=c+8|0;g=c+16|0;h=c+24|0;j=d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24|0;k=Tk(b,1,49976,206)|0;a[e|0]=a[j+20|0]|0;b=e+4|0;w=-1;a[b]=w;w=w>>8;a[b+1|0]=w;b=e+2|0;w=-1;a[b]=w;w=w>>8;a[b+1|0]=w;b=Xj(e)|0;if((b|0)==0){l=0;i=c;return l|0}m=j|0;n=g|0;o=f|0;p=j+24|0;j=(k&65535)+2|0;q=k<<4;r=h|0;s=0;t=b;a:while(1){b=t;while(1){if(((d[m]|d[m+1|0]<<8)<<16>>16&65535|0)==((d[b+121|0]|0)-1|0)){u=b+94|0;Vn(g,(d[u]|d[u+1|0]<<8)<<16>>16);w=d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;v=b+12|0;x=Fn(v,p)|0;if(!((d[u]|d[u+1|0]<<8)<<16>>16<<16>>16==0)){u=Fn(v,f)|0;v=Fn(p,f)|0;y=u&65535;z=v&65535;if((u&65535)>>>0<(v&65535)>>>0?j>>>0<(x&65535)>>>0:0){break}else{A=y;B=z}}else{A=64;B=64}if(A>>>0>=B>>>0&(x&65535)>>>0>(k&65535)>>>0){break}lo(b,3)}x=Xj(e)|0;if((x|0)==0){l=s;C=12;break a}else{b=x}}lo(b,1);Kn(h,p,q,1);w=d[r]|d[r+1|0]<<8|d[r+2|0]<<16|d[r+3|0]<<24|0;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;Bo(b,Sn(vn(f)|0,1)|0);x=s+1&65535;z=Xj(e)|0;if((z|0)==0){l=x;C=12;break}else{s=x;t=z}}if((C|0)==12){i=c;return l|0}return 0}function ul(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+8|0;c=b|0;e=d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24|0;a[c|0]=a[e+20|0]|0;f=c+4|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;f=c+2|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;f=Xj(c)|0;if((f|0)==0){g=0;i=b;return g|0}h=e|0;j=e+16|0;k=f;while(1){if(((d[k+121|0]|0)-1|0)==((d[h]|d[h+1|0]<<8)<<16>>16&65535|0)?(l=_o(k,(d[j]|d[j+1|0]<<8)<<16>>16<<16>>16==3?4:0)|0,!(l<<16>>16==0)):0){break}f=Xj(c)|0;if((f|0)==0){g=0;m=8;break}else{k=f}}if((m|0)==8){i=b;return g|0}m=e+30|0;if((d[m]|d[m+1|0]<<8)<<16>>16<<16>>16==l<<16>>16){g=l;i=b;return g|0}w=l;a[m]=w;w=w>>8;a[m+1|0]=w;m=vn(k+12|0)|0;k=e+28|0;w=Hn(m,Un(l)|0)|0;a[k]=w;w=w>>8;a[k+1|0]=w;g=l;i=b;return g|0}function vl(b){b=b|0;var c=0,e=0;c=d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24|0;e=Tk(b,1,49976,304)|0;b=c+16|0;if((d[b]|d[b+1|0]<<8)<<16>>16<<16>>16==e<<16>>16){return 0}w=e;a[b]=w;w=w>>8;a[b+1|0]=w;b=c+32|0;Uk(b,d[44368]|d[44369]<<8|d[44370]<<16|d[44371]<<24|0);Vk(b,e&255);return 0}function wl(b){b=b|0;var c=0,e=0;b=d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24|0;c=b+18|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;c=b+16|0;if((d[c]|d[c+1|0]<<8)<<16>>16<<16>>16==e<<16>>16){return 0}w=e;a[c]=w;w=w>>8;a[c+1|0]=w;c=b+32|0;Uk(c,d[44368]|d[44369]<<8|d[44370]<<16|d[44371]<<24|0);Vk(c,e&255);return 0}function xl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;b=i;i=i+32|0;c=b|0;e=b+8|0;f=b+16|0;g=b+24|0;h=d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24|0;j=h+30|0;k=(d[j]|d[j+1|0]<<8)<<16>>16;if(k<<16>>16==0){i=b;return 0}Vn(f,k);k=f|0;f=c|0;w=d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;a[e|0]=a[h+20|0]|0;f=e+4|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;f=e+2|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;f=Xj(e)|0;if((f|0)==0){i=b;return 0}k=h|0;h=f;do{do{if(((d[h+121|0]|0)-1|0)==((d[k]|d[k+1|0]<<8)<<16>>16&65535|0)){f=(d[j]|d[j+1|0]<<8)<<16>>16;if(f<<16>>16==0){lo(h,3);break}l=8882+((d[h+2|0]|0)*100|0)|0;m=(d[l]|d[l+1|0]<<8)<<16>>16<<8;l=h+86|0;if((a[l]|0)==0){n=h+92|0;if((d[n]|d[n+1|0]<<8)<<16>>16<<16>>16==f<<16>>16){f=h+94|0;if(!((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==0)){break}if(!(((Bn(h+12|0,c)|0)&65535)>>>0<(m&65535)>>>0)){break}if((a[l]|0)!=0){o=13}}}else{o=13}if((o|0)==13){o=0;lo(h,0)}l=(Ln(c,h+12|0)|0)&192;f=l+($n(0,127)|0)&65535;Jn(g,c,f<<16>>16<0?f+256&65535:f,m);m=vn(g)|0;if((Ui(m)|0)==0){Bo(h,Sn(m,1)|0)}else{Bo(h,Sn(vn(c)|0,1)|0)}Oo(h,(d[j]|d[j+1|0]<<8)<<16>>16)}}while(0);h=Xj(e)|0}while((h|0)!=0);i=b;return 0}function yl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=i;if((d[(d[231216]|d[231217]<<8|d[231218]<<16|d[231219]<<24)+20|0]|0|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){i=c;return 0}e=b+8|0;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=g+(((Tk(b,1,49976,426)|0)&65535)<<1)|0;g=(Fb((d[f]|d[f+1|0]<<8)<<16>>16&65535|0)|0)>>>16;f=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;e=(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)+g|0;g=(Tk(b,2,49976,429)|0)&65535;f=(Tk(b,3,49976,429)|0)&65535;h=(Tk(b,4,49976,429)|0)&65535;ye(e,0,(e=i,i=i+24|0,w=g,a[e]=w,w=w>>8,a[e+1|0]=w,w=w>>8,a[e+2|0]=w,w=w>>8,a[e+3|0]=w,w=f,a[e+8|0]=w,w=w>>8,a[e+9|0]=w,w=w>>8,a[e+10|0]=w,w=w>>8,a[e+11|0]=w,w=h,a[e+16|0]=w,w=w>>8,a[e+17|0]=w,w=w>>8,a[e+18|0]=w,w=w>>8,a[e+19|0]=w,e)|0);i=e;i=c;return 0}function zl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0;c=i;i=i+16|0;e=c|0;f=c+8|0;g=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;h=(Zn()|0)&255;j=8812+((d[g+2|0]|0)*100|0)|0;if(!(h>>>0<((d[j]|d[j+1|0]<<8)<<16>>16&65535)>>>0)){k=0;i=c;return k|0}Kn(f,g+12|0,20,1);j=f|0;f=e|0;w=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=a[g+8|0]|0;j=qo(-1,4,f,e,Zn()|0)|0;if((j|0)==0){k=0;i=c;return k|0}a[j+97|0]=a[g+97|0]|0;lo(j,(Tk(b,1,49736,67)|0)&65535);k=1;i=c;return k|0}function Al(a){a=a|0;var b=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;return _o(b,Tk(a,1,49736,86)|0)|0}function Bl(a){a=a|0;var b=0,c=0,e=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;c=Tk(a,1,49736,105)|0;a=Wn(c)|0;if((a|0)!=0){e=Co(b,a)|0;return e|0}a=Xn(c)|0;if((a|0)==0){e=0;return e|0}e=ap(b,a)|0;return e|0}function Cl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;b=i;i=i+16|0;c=b|0;e=b+8|0;f=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;g=f|0;h=f+3|0;if((a[h]|0)==-1){j=0;i=b;return j|0}k=f+94|0;if((Qn((d[k]|d[k+1|0]<<8)<<16>>16)|0)==2){j=0;i=b;return j|0}if((Qn((d[k]|d[k+1|0]<<8)<<16>>16)|0)!=3){l=f+12|0;Dn(c,l);if((ui(vn(c)|0)|0)<<24>>24==0){j=0;i=b;return j|0}c=Wj(d[h]|0)|0;Dn(e,l);if((Do(c,e)|0)<<24>>24==0){j=0;i=b;return j|0}if((d[c+8|0]|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){sd(24,l)}l=f+110|0;ho(c,a[l]|0,1,0);ho(c,a[l]|0,1,1);ro(c,0);l=c+3|0;a[h]=a[l]|0;a[l]=-1;if(!((a[h]|0)==-1)){j=1;i=b;return j|0}l=f+4|0;w=(d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24)&-257;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;Ti(g);w=0;a[k]=w;w=w>>8;a[k+1|0]=w;j=1;i=b;return j|0}l=Xn((d[k]|d[k+1|0]<<8)<<16>>16)|0;c=a[l+2|0]|0;e=c&255;m=l+92|0;n=(d[m]|d[m+1|0]<<8)<<16>>16;if(c<<24>>24==11){if(n<<16>>16==1){a[l+3|0]=a[h]|0;a[h]=-1;c=f+4|0;w=(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24)&-257;a[c]=w;w=w>>8;a[c+1|0]=w;w=w>>8;a[c+2|0]=w;w=w>>8;a[c+3|0]=w;a[f+96|0]=0;jo(2,f);sd(24,f+12|0);Om(l,2);o=1}else{o=0}Ti(g);w=0;a[k]=w;w=w>>8;a[k+1|0]=w;j=o;i=b;return j|0}if(!(!(n<<16>>16==0)?(o=13168+(e*100|0)|0,!(((d[o]|d[o+1|0]<<8)<<16>>16&8)!=0&n<<16>>16==1)):0)){p=10}if((p|0)==10?(a[l+3|0]|0)==-1:0){sd(24,f+12|0);So(Wj(d[h]|0)|0,l);Ti(g);w=0;a[k]=w;w=w>>8;a[k+1|0]=w;a[h]=-1;h=f+4|0;w=(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)&-257;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;a[f+96|0]=0;jo(2,f);j=1;i=b;return j|0}Ti(g);w=0;a[k]=w;w=w>>8;a[k+1|0]=w;j=0;i=b;return j|0}function Dl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;b=i;i=i+8|0;c=b|0;e=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;f=e|0;g=e+3|0;if(!((a[g]|0)==-1)){h=0;i=b;return h|0}j=e+94|0;k=Qn((d[j]|d[j+1|0]<<8)<<16>>16)|0;if((k|0)==3){l=Xn((d[j]|d[j+1|0]<<8)<<16>>16)|0;m=l+92|0;if(!((d[m]|d[m+1|0]<<8)<<16>>16<<16>>16==2)){Ti(f);w=0;a[j]=w;w=w>>8;a[j+1|0]=w;h=0;i=b;return h|0}m=e+4|0;w=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|256;a[m]=w;w=w>>8;a[m+1|0]=w;w=w>>8;a[m+2|0]=w;w=w>>8;a[m+3|0]=w;Ti(f);w=0;a[j]=w;w=w>>8;a[j+1|0]=w;f=l+3|0;m=Wj(d[f]|0)|0;n=m|0;a[g]=(d[n]|d[n+1|0]<<8)<<16>>16;n=m+3|0;a[f]=a[n]|0;a[n]=-1;if((a[f]|0)==-1){Om(l,0)}l=m+100|0;f=l|0;if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)==0){if((a[m+2|0]|0)==16?(f=(mo(m)|0)&255,(f|0)!=(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)):0){w=Sn(Mi(vn(e+12|0)|0,20)|0,1)|0;a[j]=w;w=w>>8;a[j+1|0]=w}}else{w=Sn(vn(l)|0,1)|0;a[j]=w;w=w>>8;a[j+1|0]=w}jo(2,e);h=1;i=b;return h|0}else if((k|0)==2){k=Wn((d[j]|d[j+1|0]<<8)<<16>>16)|0;l=k+4|0;if(((d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24)&2|0)==0){h=0;i=b;return h|0}a[c|0]=mo(e)|0;l=c+4|0;w=-1;a[l]=w;w=w>>8;a[l+1|0]=w;l=c+2|0;w=-1;a[l]=w;w=w>>8;a[l+1|0]=w;l=Mj(c)|0;if((l|0)==0){h=0;i=b;return h|0}f=e+12|0;m=k+2|0;n=0;o=0;p=l;a:while(1){q=p;while(1){r=Fn(q+12|0,f)|0;l=a[q+2|0]|0;if((a[m]|0)==16){if((l<<24>>24==12?(s=q+92|0,(d[s]|d[s+1|0]<<8)<<16>>16<<16>>16==0):0)?(s=q+44|0,(d[s]|d[s+1|0]<<8)<<16>>16<<16>>16==0):0){t=21;break a}}else{if((l<<24>>24==13?(l=q+92|0,(d[l]|d[l+1|0]<<8)<<16>>16<<16>>16==0):0)?(l=q+44|0,(d[l]|d[l+1|0]<<8)<<16>>16<<16>>16==0):0){break}}l=Mj(c)|0;if((l|0)==0){u=o;break a}else{q=l}}l=n<<16>>16==0|r<<16>>16<n<<16>>16;s=l?q:o;v=Mj(c)|0;if((v|0)==0){u=s;break}else{n=l?r:n;o=s;p=v}}if((t|0)==21){u=n<<16>>16==0|r<<16>>16<n<<16>>16?q:o}if((u|0)==0){h=0;i=b;return h|0}if((k|0)==(d[204384]|d[204385]<<8|d[204386]<<16|d[204387]<<24|0)){Ho(0)}o=k|0;a[g]=(d[o]|d[o+1|0]<<8)<<16>>16;o=e+4|0;w=d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|256;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;jo(0,k);Yo(k);o=e|0;g=Sn((d[o]|d[o+1|0]<<8)<<16>>16,2)|0;o=u|0;Ri(g,Sn((d[o]|d[o+1|0]<<8)<<16>>16,3)|0);o=e+44|0;w=(d[o]|d[o+1|0]<<8)<<16>>16;a[j]=w;w=w>>8;a[j+1|0]=w;jo(2,e);if((a[k+2|0]|0)!=16){h=0;i=b;return h|0}if(!((Mi(vn(k+12|0)|0,2)|0)<<16>>16==0)){h=0;i=b;return h|0}e=k+104|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=k+100|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;h=0;i=b;return h|0}else{h=0;i=b;return h|0}return 0}function El(a){a=a|0;a=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;ro(a,0);jo(2,a);return 0}function Fl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if(!((Tk(b,1,49736,386)|0)<<16>>16==0)?!(((Tk(b,1,49736,386)|0)&65535)>>>0<255>>>0):0){e=255}else{if((Tk(b,1,49736,386)|0)<<16>>16==0){e=0}else{e=Tk(b,1,49736,386)|0}}b=c+4|0;if(((d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)&512|0)==0){f=((e&65535)*192|0)>>>8&65535}else{f=e}e=8862+((d[c+2|0]|0)*100|0)|0;if(!((d[e]|d[e+1|0]<<8)<<16>>16<<16>>16==4)){g=f;ro(c,g);h=c+116|0;i=a[h]|0;j=i&255;return j|0}g=Pn(f,0,255,1)|0;ro(c,g);h=c+116|0;i=a[h]|0;j=i&255;return j|0}function Gl(b){b=b|0;var c=0;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;a[c+119|0]=-((Tk(b,1,49736,411)|0)&255);jo(2,c);return 0}function Hl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;c=i;i=i+16|0;e=c|0;f=c+8|0;g=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;h=g+94|0;j=(d[h]|d[h+1|0]<<8)<<16>>16;if(j<<16>>16==0){k=0;i=c;return k|0}Vn(f,j);j=f|0;f=e|0;w=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;j=g+12|0;h=Bn(j,e)|0;l=h<<16>>16;if(!(h<<16>>16<128)){m=Ln(j,e)|0;ho(g,m,0,0);e=(m<<24>>24)-(a[g+110|0]|0)|0;ro(g,((aa(255-((e|0)>-1?e:-e|0)|0,(Pn((h&65535)>>>0<2040>>>0?(h&65535)>>>3:255,25,255,1)|0)&65535)|0)/256|0)&65535);if(h<<16>>16>2047){e=((l|0)/1024|0)&65535;jo(2,g);if(e<<16>>16==0){k=0;i=c;return k|0}else{n=e}}else{jo(2,g);n=1}e=b|0;w=n;a[e]=w;w=w>>8;a[e+1|0]=w;e=b+4|0;w=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)-2|0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;k=0;i=c;return k|0}ro(g,0);e=j|0;j=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;n=(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)-j<<16;l=(n|0)>-1048576;if((n|0)<1048576|l^1){o=l?n>>16:-16}else{o=16}n=j&-65536;l=j+o&65535|n;w=l;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;o=(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)-n>>16;n=(o|0)>-16;if((o|0)<16|n^1){p=n?o<<16:-1048576}else{p=1048576}w=l+p|0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;jo(2,g);if(h<<16>>16<32){k=1;i=c;return k|0}h=b|0;w=2;a[h]=w;w=w>>8;a[h+1|0]=w;h=b+4|0;w=(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)-2|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;k=0;i=c;return k|0}function Il(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;c=b+2|0;e=d[c]|0;Fo(b);f=8862+(e*100|0)|0;do{if(!((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==4)){g=8820+(e*100|0)|0;h=(d[g]|d[g+1|0]<<8)<<16>>16;if((h&65535)>>>0>199>>>0){i=((h&65535)/100|0)&65535}else{i=1}if((d[b+8|0]|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){w=((d[231306]|d[231307]<<8)<<16>>16)+1&65535;a[231306]=w;w=w>>8;a[231307]=w;w=((d[231248]|d[231249]<<8)<<16>>16&65535)-i&65535;a[231248]=w;w=w>>8;a[231249]=w;break}else{w=((d[231308]|d[231309]<<8)<<16>>16)+1&65535;a[231308]=w;w=w>>8;a[231309]=w;w=((d[231248]|d[231249]<<8)<<16>>16&65535)+i&65535;a[231248]=w;w=w>>8;a[231249]=w;break}}}while(0);Io(b);if((a[c]|0)!=6){return 0}zi(4,b+12|0,300,0);return 0}function Jl(a){a=a|0;var b=0,c=0,e=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;c=Tk(a,1,49736,539)|0;a=8814+((d[b+2|0]|0)*100|0)|0;e=(d[a]|d[a+1|0]<<8)<<16>>16;a=b|0;zi(c,b+12|0,e,Sn((d[a]|d[a+1|0]<<8)<<16>>16,2)|0);return 0}function Kl(a){a=a|0;var b=0,c=0,e=0;b=i;i=i+8|0;c=b|0;e=(d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24)+12|0;zi(11,e,$n(25,50)|0,0);Kn(c,e,Tk(a,1,49736,563)|0,0);zi(11,c,$n(75,150)|0,0);Kn(c,e,Tk(a,1,49736,563)|0,0);zi(11,c,$n(75,150)|0,0);Kn(c,e,Tk(a,1,49736,563)|0,0);zi(11,c,$n(75,150)|0,0);Kn(c,e,Tk(a,1,49736,563)|0,0);zi(11,c,$n(75,150)|0,0);Kn(c,e,Tk(a,1,49736,563)|0,0);zi(11,c,$n(75,150)|0,0);Kn(c,e,Tk(a,1,49736,563)|0,0);zi(11,c,$n(75,150)|0,0);Kn(c,e,Tk(a,1,49736,563)|0,0);zi(11,c,$n(75,150)|0,0);i=b;return 0}function Ll(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;c=i;i=i+8|0;e=c|0;f=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;g=f+92|0;h=(d[g]|d[g+1|0]<<8)<<16>>16;if(h<<16>>16==0){j=0;i=c;return j|0}if((Tn(h)|0)<<24>>24==0){j=0;i=c;return j|0}k=f|0;l=f+2|0;if((a[l]|0)!=25?h<<16>>16==(Sn(vn(f+12|0)|0,1)|0)<<16>>16:0){w=0;a[g]=w;w=w>>8;a[g+1|0]=w}if(!((d[g]|d[g+1|0]<<8)<<16>>16<<16>>16==h<<16>>16)){Oo(f,h);j=0;i=c;return j|0}g=a[l]|0;m=g&255;if(!(g<<24>>24==25)?(g=8808+(m*100|0)|0,(a[f+108+((((d[g]|d[g+1|0]<<8)<<16>>16&65535)>>>5&1)*3|0)|0]|0)!=0):0){j=0;i=c;return j|0}if((Qn(h)|0)==1?(Ui(Un(h)|0)|0)!=0:0){Oo(f,h)}g=f+88|0;if((a[g]|0)!=0){j=0;i=c;return j|0}n=Vi(k,h)|0;k=8882+(m*100|0)|0;if((d[k]|d[k+1|0]<<8)<<16>>16<<8<<16>>16<n<<16>>16){j=0;i=c;return j|0}do{if((a[l]|0)!=25){if((Qn(h)|0)==2?(k=8862+((d[(Wn(h)|0)+2|0]|0)*100|0)|0,(d[k]|d[k+1|0]<<8)<<16>>16<<16>>16==4):0){break}Vn(e,h);k=Ln(f+12|0,e)|0;o=8808+(m*100|0)|0;p=(a[f+108+((((d[o]|d[o+1|0]<<8)<<16>>16&65535)>>>5&1)*3|0)+2|0]|0)-(k<<24>>24)|0;k=((p|0)>-1?p:-p|0)&65535;p=8862+(m*100|0)|0;if((d[p]|d[p+1|0]<<8)<<16>>16<<16>>16==4){q=((k<<16>>16|0)/8|0)&65535}else{q=k}if(q<<16>>16>7){j=0;i=c;return j|0}}}while(0);q=8884+(m*100|0)|0;e=(d[q]|d[q+1|0]<<8)<<16>>16;q=8888+(m*100|0)|0;k=(d[q]|d[q+1|0]<<8)<<16>>16&65535;q=8856+(m*100|0)|0;if(((d[q]|d[q+1|0]<<8)<<16>>16&128)==0){r=0}else{q=f+16|0;p=8814+(m*100|0)|0;r=((d[q]|d[q+1|0]<<8)<<16>>16&65535)>>>0>((d[p]|d[p+1|0]<<8)<<16>>16&65535)>>>1>>>0|0}p=a[l]|0;if((p<<24>>24|0)==3|(p<<24>>24|0)==5){s=n<<16>>16>512?22:k}else{s=k}switch(s|0){case 25:{jo(0,f);k=Wn(h)|0;if((k|0)!=0){n=k+38|0;w=-1;a[n]=w;w=w>>8;a[n+1|0]=w;To(k);Io(k);Fo(k)}k=8886+(m*100|0)|0;n=f+12|0;zi((d[k]|d[k+1|0]<<8)<<16>>16,n,0,0);sd(63,n);jo(1,f);n=f+96|0;a[n]=(a[n]|0)-1;k=b|0;w=12;a[k]=w;w=w>>8;a[k+1|0]=w;if((a[n]|0)<1){lo(f,10)}break};case 22:{t=e-((e&65535)>>>2)&65535;u=31;break};case 19:case 20:case 21:case 23:case 24:{t=e;u=31;break};default:{}}do{if((u|0)==31){e=f+12|0;n=Xo(e,s,mo(f)|0,t,h)|0;if((n|0)==0){j=0;i=c;return j|0}else{k=f|0;b=n+84|0;w=Sn((d[k]|d[k+1|0]<<8)<<16>>16,2)|0;a[b]=w;w=w>>8;a[b+1|0]=w;b=8890+(m*100|0)|0;sd((d[b]|d[b+1|0]<<8)<<16>>16,e);ko(f,20)|0;break}}}while(0);h=8880+(m*100|0)|0;a[g]=Pn((d[h]|d[h+1|0]<<8)<<16>>16<<1,1,255,1)|0;h=f+4|0;m=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;if(!(r<<24>>24==0)){r=m^16;w=r;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;if((r&16|0)!=0){a[g]=Pn(5,1,10,1)|0}}else{w=m&-17;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w}h=(Zn()|0)&1;a[g]=(a[g]|0)+h;jo(2,f);j=1;i=c;return j|0}function Ml(b){b=b|0;var c=0;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;ho(c,(Tk(b,1,49736,713)|0)&255,0,0);return a[c+110|0]|0}function Nl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;i=i+16|0;c=b|0;e=b+8|0;f=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;g=d[f+2|0]|0;h=8862+(g*100|0)|0;if(!((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==4)?(h=f+80|0,(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)!=0):0){j=1;i=b;return j|0}h=8808+(g*100|0)|0;g=((d[h]|d[h+1|0]<<8)<<16>>16&65535)>>>5&1;h=g&65535;if((a[f+108+(h*3|0)|0]|0)!=0){j=1;i=b;return j|0}k=a[f+108+(h*3|0)+2|0]|0;h=f+92|0;if((Tn((d[h]|d[h+1|0]<<8)<<16>>16)|0)<<24>>24==0){j=0;i=b;return j|0}Vn(e,(d[h]|d[h+1|0]<<8)<<16>>16);h=e|0;e=c|0;w=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;e=Ln(f+12|0,c)|0;if(e<<24>>24==k<<24>>24){j=0;i=b;return j|0}ho(f,e,0,g);j=1;i=b;return j|0}function Ol(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0;c=i;i=i+8|0;e=c|0;f=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;g=Tk(b,1,49736,775)|0;if((Tn(g)|0)<<24>>24==0){h=a[f+110|0]|0;j=h<<24>>24;i=c;return j|0}else{Vn(e,g);h=Ln(f+12|0,e)|0;j=h<<24>>24;i=c;return j|0}return 0}function Pl(b){b=b|0;var c=0,e=0,f=0;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;e=Tk(b,1,49736,802)|0;if(!(e<<16>>16==0)?!((Tn(e)|0)<<24>>24==0):0){do{if((a[c+2|0]|0)==16){b=Xn(e)|0;if((b|0)==0){f=c+94|0;w=e;a[f]=w;w=w>>8;a[f+1|0]=w;a[c+124|0]=-1;return 0}else{f=b+44|0;if((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==0){break}return 0}}}while(0);Bo(c,e);return 0}e=c+94|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;return 0}function Ql(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0;c=i;i=i+16|0;e=c|0;f=c+8|0;g=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;h=Tk(b,1,49736,843)|0;if(!(h<<16>>16==0)?!((Tn(h)|0)<<24>>24==0):0){Vn(f,h);b=f|0;f=e|0;w=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;f=Ln(g+12|0,e)|0;e=g+92|0;w=h;a[e]=w;w=w>>8;a[e+1|0]=w;b=8808+((d[g+2|0]|0)*100|0)|0;if(((d[b]|d[b+1|0]<<8)<<16>>16&32)==0){b=g+94|0;w=h;a[b]=w;w=w>>8;a[b+1|0]=w;ho(g,f,0,0)}ho(g,f,0,1);j=(d[e]|d[e+1|0]<<8)<<16>>16;i=c;return j|0}e=g+92|0;w=0;a[e]=w;w=w>>8;a[e+1|0]=w;j=0;i=c;return j|0}function Rl(b){b=b|0;var c=0,e=0;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;e=Tk(b,1,49736,879)|0;b=e&65535;if((d[c+8|0]|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)&e<<16>>16==5?!((a[c+87|0]|0)==-1):0){return 0}lo(c,b);return 0}function Sl(a){a=a|0;var b=0;a=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;b=8840+((d[a+2|0]|0)*100|0)|0;lo(a,(d[b]|d[b+1|0]<<8)<<16>>16&65535);return 0}function Tl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0;c=i;i=i+8|0;e=c|0;f=Tk(b,1,49736,923)|0;if((Tn(f)|0)<<24>>24==0){i=c;return 0}b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;g=b+80|0;h=g|0;if(!((d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)!=0?(j=8856+((d[b+2|0]|0)*100|0)|0,((d[j]|d[j+1|0]<<8)<<16>>16&4096)==0):0)){Vn(e,f);f=e|0;w=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w}ho(b,Ln(b+12|0,g)|0,0,0);i=c;return 0}function Ul(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;e=c+2|0;f=d[e]|0;switch((Tk(b,1,49736,954)|0)&65535|0){case 8:{b=c|0;g=Sn((d[b]|d[b+1|0]<<8)<<16>>16,2)|0;return g|0};case 9:{g=d[c+117|0]|0;return g|0};case 10:{b=(a[c+109|0]|0)-(a[c+110|0]|0)|0;g=((b|0)>-1?b:-b|0)&65535;return g|0};case 19:{g=(1<<(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)&d[c+9|0]|0)!=0|0;return g|0};case 1:{b=c+94|0;if((Tn((d[b]|d[b+1|0]<<8)<<16>>16)|0)<<24>>24==0){g=0;return g|0}g=(d[b]|d[b+1|0]<<8)<<16>>16;return g|0};case 7:{g=d[e]|0;return g|0};case 0:{b=c+16|0;h=8814+(f*100|0)|0;g=((((d[b]|d[b+1|0]<<8)<<16>>16&65535)<<8>>>0)/(((d[h]|d[h+1|0]<<8)<<16>>16&65535)>>>0)|0)&65535;return g|0};case 5:{h=c+92|0;g=(d[h]|d[h+1|0]<<8)<<16>>16;return g|0};case 6:{h=c+84|0;b=(d[h]|d[h+1|0]<<8)<<16>>16;if(!(b<<16>>16==0)?(a[e]|0)!=16:0){g=b;return g|0}so(c)|0;g=(d[h]|d[h+1|0]<<8)<<16>>16;return g|0};case 2:{h=8882+(f*100|0)|0;g=(d[h]|d[h+1|0]<<8)<<16>>16<<8;return g|0};case 3:{h=c|0;g=(d[h]|d[h+1|0]<<8)<<16>>16;return g|0};case 4:{g=a[c+110|0]|0;return g|0};case 12:{g=(a[c+88|0]|0)==0|0;return g|0};case 13:{h=8856+(f*100|0)|0;g=((d[h]|d[h+1|0]<<8)<<16>>16&65535)>>>1&1;return g|0};case 14:{g=(mo(c)|0)&255;return g|0};case 15:{h=c+4|0;g=(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)>>>9&1;return g|0};case 16:{h=8808+(f*100|0)|0;g=a[c+108+((((d[h]|d[h+1|0]<<8)<<16>>16&65535)>>>5&1)*3|0)+2|0]|0;return g|0};case 17:{h=8808+(f*100|0)|0;b=((d[h]|d[h+1|0]<<8)<<16>>16&65535)>>>5&1;h=(a[c+108+(b*3|0)+1|0]|0)-(a[c+108+(b*3|0)+2|0]|0)|0;g=((h|0)>-1?h:-h|0)&65535;return g|0};case 11:{h=c+80|0;g=(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0)!=0|0;return g|0};case 18:{h=8862+(f*100|0)|0;g=((d[h]|d[h+1|0]<<8)<<16>>16&65535)>>>6&1;return g|0};default:{g=0;return g|0}}return 0}function Vl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0;c=i;i=i+296|0;e=c|0;f=c+16|0;g=c+40|0;h=c+248|0;j=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;k=Tk(b,1,49736,1300)|0;l=j+80|0;if((d[l]|d[l+1|0]<<8|d[l+2|0]<<16|d[l+3|0]<<24|0)!=0){m=1;i=c;return m|0}if((Tn(k)|0)<<24>>24==0){m=1;i=c;return m|0}l=vn(j+12|0)|0;n=Un(k)|0;k=j+124|0;if(n<<16>>16==l<<16>>16){a[k]=-1;o=j+94|0;w=0;a[o]=w;w=w>>8;a[o+1|0]=w;m=0;i=c;return m|0}if((a[k]|0)==-1){o=h|0;p=e|0;w=l;a[p]=w;w=w>>8;a[p+1|0]=w;p=e+2|0;w=0;a[p]=w;w=w>>8;a[p+1|0]=w;q=e+4|0;w=0;a[q]=w;w=w>>8;a[q+1|0]=w;r=e+8|0;w=o;a[r]=w;w=w>>8;a[r+1|0]=w;w=w>>8;a[r+2|0]=w;w=w>>8;a[r+3|0]=w;a[o]=-1;o=g|0;s=f+12|0;t=s|0;u=f+14|0;v=f+16|0;x=f+20|0;y=f|0;z=f|0;A=f+2|0;B=f+4|0;C=g+102|0;g=f+8|0;D=l;E=0;F=0;while(1){G=((In(D,n)|0)&255)>>>5;H=3768+((G&255)<<1)|0;I=((d[H]|d[H+1|0]<<8)<<16>>16)+D&65535;H=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if((H|0)!=0){J=No(H,I,(G&255)<<5)|0;H=J<<16>>16==-1?256:J;if(H<<16>>16<256){K=H;L=9}else{H=0;J=0;M=I;a:while(1){N=M;do{if(N<<16>>16==n<<16>>16){O=H;P=J;Q=n;break a}R=((In(N,n)|0)&255)>>>5;S=3768+((R&255)<<1)|0;N=((d[S]|d[S+1|0]<<8)<<16>>16)+N&65535;S=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if((S|0)==0){break}T=No(S,N,(R&255)<<5)|0}while(T<<16>>16==-1|T<<16>>16>255);w=D;a[t]=w;w=w>>8;a[t+1|0]=w;w=0;a[u]=w;w=w>>8;a[u+1|0]=w;w=0;a[v]=w;w=w>>8;a[v+1|0]=w;w=o;a[x]=w;w=w>>8;a[x+1|0]=w;w=w>>8;a[x+2|0]=w;w=w>>8;a[x+3|0]=w;T=mm(N,s,-1,G)|0;w=D;a[z]=w;w=w>>8;a[z+1|0]=w;w=0;a[A]=w;w=w>>8;a[A+1|0]=w;w=0;a[B]=w;w=w>>8;a[B+1|0]=w;w=C;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;R=mm(N,y,1,G)|0;if(!((R|T)<<24>>24==0)){O=R;P=T;Q=N;break}if(N<<16>>16==n<<16>>16){H=R;J=T;M=n;continue}else{U=N}while(1){S=((In(U,n)|0)&255)>>>5;V=3768+((S&255)<<1)|0;W=((d[V]|d[V+1|0]<<8)<<16>>16)+U&65535;V=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if((V|0)!=0?(X=No(V,W,(S&255)<<5)|0,!(X<<16>>16<256&X<<16>>16!=-1)):0){H=R;J=T;M=W;continue a}if(W<<16>>16==n<<16>>16){H=R;J=T;M=n;continue a}else{U=W}}}if((O|P)<<24>>24==0){Y=E;break}M=O<<24>>24==0;if(M|P<<24>>24==0){Z=M?s:y}else{Z=f+((((d[u]|d[u+1|0]<<8)<<16>>16&65535)>>>0<((d[A]|d[A+1|0]<<8)<<16>>16&65535)>>>0|0)*12|0)|0}M=E&65535;J=39-M|0;H=Z+4|0;T=(d[H]|d[H+1|0]<<8)<<16>>16;H=(J|0)<(T&65535|0)?J&65535:T;if(H<<16>>16<1){Y=E;break}T=Z+8|0;Kp(h+M|0,d[T]|d[T+1|0]<<8|d[T+2|0]<<16|d[T+3|0]<<24|0,H<<16>>16)|0;T=H+E&65535;w=T;a[q]=w;w=w>>8;a[q+1|0]=w;H=Z+2|0;M=((d[H]|d[H+1|0]<<8)<<16>>16)+F&65535;w=M;a[p]=w;w=w>>8;a[p+1|0]=w;_=Q;$=M;aa=T}}else{K=0;L=9}if((L|0)==9){L=0;T=E+1&65535;w=T;a[q]=w;w=w>>8;a[q+1|0]=w;a[h+(E&65535)|0]=G;M=K+F&65535;w=M;a[p]=w;w=w>>8;a[p+1|0]=w;_=I;$=M;aa=T}if((aa&65535)>>>0>38>>>0|_<<16>>16==n<<16>>16){Y=aa;break}else{D=_;E=aa;F=$}}if((Y&65535)>>>0<39>>>0){w=Y+1&65535;a[q]=w;w=w>>8;a[q+1|0]=w;a[h+(Y&65535)|0]=-1}nm(e);e=(d[q]|d[q+1|0]<<8)<<16>>16;Kp(k|0,d[r]|d[r+1|0]<<8|d[r+2|0]<<16|d[r+3|0]<<24|0,(e&65535)>>>0<14>>>0?e&65535:14)|0;e=a[k]|0;if(e<<24>>24==-1){r=j+94|0;w=0;a[r]=w;w=w>>8;a[r+1|0]=w;if((a[j+2|0]|0)==25){r=b|0;w=720;a[r]=w;w=w>>8;a[r+1|0]=w;L=32}else{L=32}}else{ba=e}}else{e=En(n,l)|0;if((e&65535)>>>0<14>>>0){a[(e&65535)+(j+124)|0]=-1;L=32}else{L=32}}if((L|0)==32){L=a[k]|0;if(L<<24>>24==-1){m=1;i=c;return m|0}else{ba=L}}L=ba<<5;if(!((a[j+110|0]|0)==L<<24>>24)){ho(j,L,0,0);m=1;i=c;return m|0}if((Mo(j)|0)<<24>>24==0){a[k]=-1;m=0;i=c;return m|0}else{Mp(k|0,j+125|0,13)|0;a[j+137|0]=-1;m=1;i=c;return m|0}return 0}function Wl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;c=i;i=i+8|0;e=c|0;f=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;g=a[f+3|0]|0;if(((!(g<<24>>24==-1)?(h=(Wj(g&255)|0)+84|0,g=Xn((d[h]|d[h+1|0]<<8)<<16>>16)|0,(g|0)!=0):0)?(h=g+92|0,(d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==0):0)?(h=g+44|0,(d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==0):0){h=g|0;g=Sn((d[h]|d[h+1|0]<<8)<<16>>16,3)|0;h=f|0;Ri(Sn((d[h]|d[h+1|0]<<8)<<16>>16,2)|0,g);h=f+44|0;j=f+94|0;w=(d[h]|d[h+1|0]<<8)<<16>>16;a[j]=w;w=w>>8;a[j+1|0]=w;k=g;i=c;return k|0}a[e|0]=mo(f)|0;g=e+4|0;w=-1;a[g]=w;w=w>>8;a[g+1|0]=w;g=e+2|0;w=Tk(b,1,49736,1387)|0;a[g]=w;w=w>>8;a[g+1|0]=w;g=Mj(e)|0;if((g|0)==0){k=0;i=c;return k|0}else{l=g}while(1){g=l+92|0;if((d[g]|d[g+1|0]<<8)<<16>>16<<16>>16==0?(g=l+44|0,(d[g]|d[g+1|0]<<8)<<16>>16<<16>>16==0):0){break}g=Mj(e)|0;if((g|0)==0){k=0;m=11;break}else{l=g}}if((m|0)==11){i=c;return k|0}m=l|0;l=Sn((d[m]|d[m+1|0]<<8)<<16>>16,3)|0;m=f|0;Ri(Sn((d[m]|d[m+1|0]<<8)<<16>>16,2)|0,l);m=f+94|0;w=l;a[m]=w;w=w>>8;a[m+1|0]=w;k=l;i=c;return k|0}function Xl(b){b=b|0;var c=0,e=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;c=a[b+3|0]|0;if(c<<24>>24==-1){e=b}else{e=Wj(c&255)|0}return d[e+96|0]|0|0}function Yl(a){a=a|0;a=(d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24)+4|0;return(d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0)>>>8&1|0}function Zl(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0;b=i;i=i+8|0;c=b|0;e=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;f=e+12|0;Dn(c,f);g=vn(c)|0;Mc(g);c=(a[15280+(((Ai(vn(f)|0)|0)&65535)<<4)|0]|0)==0|0;h=e+38|0;j=(d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==1?c|2:c;c=(mo(e)|0)&255;h=241272+((g&65535)<<2)|0;w=c<<16&458752|(d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24)&-458753;a[h]=w;w=w>>8;a[h+1|0]=w;w=w>>8;a[h+2|0]=w;w=w>>8;a[h+3|0]=w;h=j&65535;j=8876+((d[e+2|0]|0)*100|0)|0;if((d[j]|d[j+1|0]<<8)<<16>>16<<16>>16==3){Lc(41368+(h<<5)|0,f,0,mo(e)|0,4);i=b;return 1}else{Lc(41240+(h<<5)|0,f,0,mo(e)|0,4);i=b;return 1}return 0}function _l(b){b=b|0;var c=0,e=0,f=0,g=0;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;e=c+44|0;f=(d[e]|d[e+1|0]<<8)<<16>>16;if(!(f<<16>>16==0)){g=f;return g|0}f=8808+((d[c+2|0]|0)*100|0)|0;if(((d[f]|d[f+1|0]<<8)<<16>>16&128)==0){g=0;return g|0}if((a[c+97|0]|0)!=0){g=0;return g|0}f=c|0;e=Sn((d[f]|d[f+1|0]<<8)<<16>>16,2)|0;f=(Tk(b,1,49736,1510)|0)&65535;b=Zo(f,mo(c)|0,e,0)|0;if((b|0)==0){g=0;return g|0}c=b|0;f=Sn((d[c]|d[c+1|0]<<8)<<16>>16,2)|0;Ri(e,f);c=b+94|0;w=e;a[c]=w;w=w>>8;a[c+1|0]=w;g=f;return g|0}function $l(b){b=b|0;var c=0,e=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;c=b+44|0;e=(d[c]|d[c+1|0]<<8)<<16>>16;if(e<<16>>16==0){return 0}c=Wn(e)|0;if((c|0)==0){return 0}if((a[c+2|0]|0)!=0){return 0}Ti(b|0);b=c+94|0;w=0;a[b]=w;w=w>>8;a[b+1|0]=w;return 0}function am(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0;c=i;i=i+8|0;e=c|0;a[e|0]=mo(d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0)|0;f=e+4|0;w=-1;a[f]=w;w=w>>8;a[f+1|0]=w;f=e+2|0;w=Tk(b,1,49736,1565)|0;a[f]=w;w=w>>8;a[f+1|0]=w;f=Mj(e)|0;if((f|0)==0){g=0;i=c;return g|0}else{h=f}while(1){f=h+92|0;if(((d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==0?(a[h+3|0]|0)==-1:0)?(f=h+44|0,(d[f]|d[f+1|0]<<8)<<16>>16<<16>>16==0):0){break}f=Mj(e)|0;if((f|0)==0){g=0;j=7;break}else{h=f}}if((j|0)==7){i=c;return g|0}j=h|0;g=Sn((d[j]|d[j+1|0]<<8)<<16>>16,3)|0;i=c;return g|0}function bm(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;e=8792+((d[c+2|0]|0)*100|0)|0;f=(a[261416]|0)==1;g=Dm(19)|0;if(f){f=e|0;h=Dm((d[f]|d[f+1|0]<<8)<<16>>16)|0;f=15512+(((mo(c)|0)&255)<<5)|0;j=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;ye(g,0,(k=i,i=i+16|0,w=h,a[k]=w,w=w>>8,a[k+1|0]=w,w=w>>8,a[k+2|0]=w,w=w>>8,a[k+3|0]=w,w=j,a[k+8|0]=w,w=w>>8,a[k+9|0]=w,w=w>>8,a[k+10|0]=w,w=w>>8,a[k+11|0]=w,k)|0);i=k;i=b;return 0}else{j=15512+(((mo(c)|0)&255)<<5)|0;c=d[j]|d[j+1|0]<<8|d[j+2|0]<<16|d[j+3|0]<<24|0;j=e|0;e=Dm((d[j]|d[j+1|0]<<8)<<16>>16)|0;ye(g,0,(k=i,i=i+16|0,w=c,a[k]=w,w=w>>8,a[k+1|0]=w,w=w>>8,a[k+2|0]=w,w=w>>8,a[k+3|0]=w,w=e,a[k+8|0]=w,w=w>>8,a[k+9|0]=w,w=w>>8,a[k+10|0]=w,w=w>>8,a[k+11|0]=w,k)|0);i=k;i=b;return 0}return 0}function cm(a){a=a|0;Po(d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0);return 0}function dm(b){b=b|0;var c=0,e=0,f=0,g=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if((a[b+2|0]|0)!=16){c=0;return c|0}e=b+96|0;if((d[e]|0)>>>0>99>>>0){c=0;return c|0}f=vn(b+12|0)|0;if(!(((Ai(f)|0)-8&65535)>>>0<2>>>0)){c=0;return c|0}g=(Zn()|0)&1;a[e]=(a[e]|0)+g;g=b+4|0;w=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|256;a[g]=w;w=w>>8;a[g+1|0]=w;w=w>>8;a[g+2|0]=w;w=w>>8;a[g+3|0]=w;jo(2,b);if((d[e]|0)>>>0>100>>>0){a[e]=100}if(!(((Zn()|0)&31)==0)){c=1;return c|0}Fi(f,-1);c=0;return c|0}function em(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;c=i;i=i+8|0;e=c|0;f=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;g=Tk(b,1,49736,1686)|0;b=Rn(g)|0;h=Qn(g)|0;if((h|0)==3){j=Lj(b)|0;k=a[j+8|0]|0;if(k<<24>>24==(mo(f)|0)<<24>>24){l=0;i=c;return l|0}k=a[f+3|0]|0;if(k<<24>>24==-1){l=1;i=c;return l|0}l=(Ao(Wj(k&255)|0,j)|0)<<16>>16!=0|0;i=c;return l|0}else if((h|0)==1){if((ui(b)|0)<<24>>24==0){l=1;i=c;return l|0}b=a[f+3|0]|0;if(b<<24>>24==-1){l=1;i=c;return l|0}f=Wj(b&255)|0;Vn(e,g);g=e|0;e=f+12|0;w=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;if((to(f)|0)<<24>>24==0){l=0;i=c;return l|0}w=-1;a[e]=w;w=w>>8;a[e+1|0]=w;w=w>>8;a[e+2|0]=w;w=w>>8;a[e+3|0]=w;l=1;i=c;return l|0}else{l=1;i=c;return l|0}return 0}function fm(b){b=b|0;var c=0,e=0,f=0,g=0,h=0;c=i;i=i+16|0;e=c|0;f=c+8|0;g=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if((Qn(Tk(b,1,49736,1728)|0)|0)!=1){h=0;i=c;return h|0}Kn(f,g+12|0,80,1);g=f|0;f=e|0;w=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;a[f]=w;w=w>>8;a[f+1|0]=w;w=w>>8;a[f+2|0]=w;w=w>>8;a[f+3|0]=w;h=Sn(vn(e)|0,1)|0;i=c;return h|0}function gm(b){b=b|0;var c=0,e=0,f=0,g=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;c=$n(0,10)|0;e=8862+((d[b+2|0]|0)*100|0)|0;f=(d[e]|d[e+1|0]<<8)<<16>>16;if((f<<16>>16|0)==0){g=2}else if(!((f<<16>>16|0)==1|(f<<16>>16|0)==3)){return 0}if((g|0)==2?(c&65535)>>>0>8>>>0:0){a[b+119|0]=(Zn()|0)&63;jo(2,b)}if((c&65535)>>>0>2>>>0){return 0}c=((Zn()|0)&1^1)&255;ho(b,Zn()|0,0,c);return 0}function hm(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;c=i;i=i+8|0;e=c|0;f=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;a[e|0]=mo(f)|0;g=e+4|0;w=-1;a[g]=w;w=w>>8;a[g+1|0]=w;g=e+2|0;w=Tk(b,1,49736,1792)|0;a[g]=w;w=w>>8;a[g+1|0]=w;g=Mj(e)|0;if((g|0)==0){h=0;i=c;return h|0}b=f+12|0;j=0;k=0;l=g;a:while(1){g=l;while(1){m=g+92|0;if(((d[m]|d[m+1|0]<<8)<<16>>16<<16>>16==0?(a[g+3|0]|0)==-1:0)?(m=g+44|0,(d[m]|d[m+1|0]<<8)<<16>>16<<16>>16==0):0){break}m=Mj(e)|0;if((m|0)==0){n=k;break a}else{g=m}}m=Fn(g+12|0,b)|0;o=(m&65535)>>>0<(j&65535)>>>0|j<<16>>16==0;p=o?g:k;q=Mj(e)|0;if((q|0)==0){n=p;break}else{j=o?m:j;k=p;l=q}}if((n|0)==0){h=0;i=c;return h|0}lo(f,1);l=n|0;Bo(f,Sn((d[l]|d[l+1|0]<<8)<<16>>16,3)|0);h=1;i=c;return h|0}function im(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;c=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;jo(0,c);e=c+12|0;f=0;g=mo(c)|0;while(1){h=vn(e)|0;j=f+1&65535;if((Um(-1,8,g,(a[70392+(f&65535)|0]|0)+h&65535)|0)!=0){k=4;break}l=mo(c)|0;if((j&65535)>>>0<4>>>0){f=j;g=l}else{break}}if((k|0)==4){Fo(c);m=1;i=b;return m|0}if((l&255|0)==(d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24|0)){ye(Dm(20)|0,0,(l=i,i=i+1|0,i=i+7&-8,w=0,a[l]=w,w=w>>8,a[l+1|0]=w,w=w>>8,a[l+2|0]=w,w=w>>8,a[l+3|0]=w,l)|0);i=l}jo(1,c);m=0;i=b;return m|0}function jm(a){a=a|0;var b=0,c=0;a=Lo(d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0)|0;if((a|0)==0){b=0;return b|0}c=a|0;b=Sn((d[c]|d[c+1|0]<<8)<<16>>16,2)|0;return b|0}function km(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0;b=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;c=b|0;e=b+44|0;f=Qn((d[e]|d[e+1|0]<<8)<<16>>16)|0;if((f|0)==2){g=Wn((d[e]|d[e+1|0]<<8)<<16>>16)|0;h=b|0;i=Sn((d[h]|d[h+1|0]<<8)<<16>>16,2)|0;h=g+44|0;if(i<<16>>16==(d[h]|d[h+1|0]<<8)<<16>>16<<16>>16?(a[g+8|0]|0)==(a[b+8|0]|0):0){j=1;return j|0}h=g+94|0;w=0;a[h]=w;w=w>>8;a[h+1|0]=w}else if(((f|0)==3?(f=Xn((d[e]|d[e+1|0]<<8)<<16>>16)|0,e=b|0,h=Sn((d[e]|d[e+1|0]<<8)<<16>>16,2)|0,e=f+44|0,h<<16>>16==(d[e]|d[e+1|0]<<8)<<16>>16<<16>>16):0)?(a[f+8|0]|0)==(a[b+8|0]|0):0){j=1;return j|0}Ti(c);j=0;return j|0}function lm(b){b=b|0;a[(d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24)+120|0]=32;return 0}function mm(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0;g=c|0;h=c+8|0;i=e&255;j=b&65535;k=e*-3&255;l=f;f=(d[g]|d[g+1|0]<<8)<<16>>16;m=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0;h=0;a:while(1){n=f&65535;o=l;while(1){p=o+e&7;q=p&255;if((q&1|0)!=0?(r=q+i&7,s=3768+(r<<1)|0,t=(d[s]|d[s+1|0]<<8)<<16>>16,((t<<16>>16)+n|0)==(j|0)):0){u=5;break}if(p<<24>>24==l<<24>>24){v=0;u=13;break a}s=3768+(q<<1)|0;q=((d[s]|d[s+1|0]<<8)<<16>>16)+f&65535;s=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if((s|0)==0){x=p;y=q;break}z=No(s,q,(p&255)<<5)|0;if(z<<16>>16<256&z<<16>>16!=-1){x=p;y=q;break}else{o=p}}if((u|0)==5){u=0;x=r&255;y=t+f&65535}A=m+1|0;a[m]=x;B=h+1&65535;if(y<<16>>16==b<<16>>16){u=10;break}if((d[g]|d[g+1|0]<<8)<<16>>16<<16>>16==y<<16>>16){v=0;u=13;break}if((B&65535)>>>0<100>>>0){l=x+k&7;f=y;m=A;h=B}else{v=0;u=13;break}}if((u|0)==10){a[A]=-1;A=c+4|0;w=B;a[A]=w;w=w>>8;a[A+1|0]=w;nm(c);w=((d[A]|d[A+1|0]<<8)<<16>>16)-1&65535;a[A]=w;w=w>>8;a[A+1|0]=w;v=1;return v|0}else if((u|0)==13){return v|0}return 0}function nm(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0;c=b+4|0;e=b+8|0;a[(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+((d[c]|d[c+1|0]<<8)<<16>>16&65535)|0]=-1;f=b|0;a:do{if(((d[c]|d[c+1|0]<<8)<<16>>16&65535)>>>0>1>>>0?(g=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24)+1|0,h=a[g]|0,!(h<<24>>24==-1)):0){i=(d[f]|d[f+1|0]<<8)<<16>>16;j=g;g=h;while(1){h=j;k=g;while(1){l=h;do{l=l-1|0;m=a[l]|0;if(!(m<<24>>24==-2)){n=9;break}}while((l|0)!=(d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0));if((n|0)==9){n=0;o=m&255;p=k-m&7;q=p&255;r=a[70384+q|0]|0;s=r<<24>>24;if(!(p<<24>>24==4)){break}a[l]=-2;a[h]=-2}p=h+1|0;t=a[p]|0;if(t<<24>>24==-1){break a}else{h=p;k=t}}do{if((q-2|0)>>>0>4>>>0){k=3768+(o<<1)|0;u=h+1|0;v=((d[k]|d[k+1|0]<<8)<<16>>16)+i&65535}else{if((o&1|0)!=0){k=q-5|0;t=(k>>>0<2>>>0?7:1)+m&7;if(((k>>>0>1>>>0?s:-s|0)|0)==1){k=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if((k|0)!=0?(p=3768+((t&255)<<1)|0,x=No(k,((d[p]|d[p+1|0]<<8)<<16>>16)+i&65535,(t&255)<<5)|0,!(x<<16>>16<256&x<<16>>16!=-1)):0){y=a[l]|0}else{a[h]=t;a[l]=t;y=t}x=3768+((y&255)<<1)|0;u=h+1|0;v=((d[x]|d[x+1|0]<<8)<<16>>16)+i&65535;break}else{z=t}}else{z=r+m&7}a[h]=z;a[l]=-2;t=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;x=l;while(1){p=x-1|0;if((t|0)==(x|0)){n=25;break}k=a[p]|0;if(k<<24>>24==-2){x=p}else{A=k;break}}if((n|0)==25){n=0;x=a[t]|0;if(x<<24>>24==-2){u=h;v=(d[f]|d[f+1|0]<<8)<<16>>16;break}else{A=x}}x=3768+(((A&255)+4&7)<<1)|0;u=h;v=((d[x]|d[x+1|0]<<8)<<16>>16)+i&65535}}while(0);h=a[u]|0;if(h<<24>>24==-1){break}else{i=v;j=u;g=h}}}}while(0);u=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;e=(d[f]|d[f+1|0]<<8)<<16>>16;f=b+2|0;w=0;a[f]=w;w=w>>8;a[f+1|0]=w;w=0;a[c]=w;w=w>>8;a[c+1|0]=w;b=u;v=u;u=e;while(1){e=a[b]|0;if((e<<24>>24|0)==(-2|0)){B=v;C=u}else if((e<<24>>24|0)==(-1|0)){break}else{A=3768+((e&255)<<1)|0;n=((d[A]|d[A+1|0]<<8)<<16>>16)+u&65535;A=d[231208]|d[231209]<<8|d[231210]<<16|d[231211]<<24|0;if((A|0)==0){D=0}else{l=No(A,n,(e&255)<<5)|0;D=l<<16>>16==-1?256:l}w=((d[f]|d[f+1|0]<<8)<<16>>16)+D&65535;a[f]=w;w=w>>8;a[f+1|0]=w;w=((d[c]|d[c+1|0]<<8)<<16>>16)+1&65535;a[c]=w;w=w>>8;a[c+1|0]=w;a[v]=a[b]|0;B=v+1|0;C=n}b=b+1|0;v=B;u=C}w=((d[c]|d[c+1|0]<<8)<<16>>16)+1&65535;a[c]=w;w=w>>8;a[c+1|0]=w;a[v]=-1;return}function om(b){b=b|0;var c=0;if((b|0)==0){c=0}else{c=a[b+3|0]|0}return c|0}function pm(b){b=b|0;var c=0;if((b|0)==0){c=0}else{c=a[b+2|0]|0}return c|0}function qm(a){a=a|0;var b=0,c=0;if((a|0)==0){b=0;return b|0}c=a;b=(d[c]|d[c+1|0]<<8)<<16>>16;return b|0}function rm(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0;b=i;i=i+8|0;c=b|0;if((a[72984]|0)!=0){i=b;return}a[72984]=1;e=c|0;f=Wd(49120)|0;g=Yd(f,1413829459)|0;h=Yd(f,1279415378)|0;j=Yd(f,1279348818)|0;Zd(f,1179535699,e,4)|0;fe(a[e]|0,a[c+1|0]|0);zp(d[231128]|d[231129]<<8|d[231130]<<16|d[231131]<<24|0);c=Ap(1,g)|0;w=c;a[231128]=w;w=w>>8;a[231129]=w;w=w>>8;a[231130]=w;w=w>>8;a[231131]=w;Zd(f,1413829459,c,g)|0;g=d[231128]|d[231129]<<8|d[231130]<<16|d[231131]<<24|0;c=d[g]|0;if((c|0)==4){e=g+6|0;Cd(g,g+(((d[e]|d[e+1|0]<<8)<<16>>16&65535)+8)|0,-1)|0}else if((c|0)==0){c=g+2|0;e=g+6|0;Mp(g|0,g+(((d[e]|d[e+1|0]<<8)<<16>>16&65535)+8)|0,d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0)|0}zp(d[257680]|d[257681]<<8|d[257682]<<16|d[257683]<<24|0);c=Ap(1,h)|0;w=c;a[257680]=w;w=w>>8;a[257681]=w;w=w>>8;a[257682]=w;w=w>>8;a[257683]=w;Zd(f,1279415378,c,h)|0;zp(d[257688]|d[257689]<<8|d[257690]<<16|d[257691]<<24|0);h=Ap(1,j)|0;w=h;a[257688]=w;w=w>>8;a[257689]=w;w=w>>8;a[257690]=w;w=w>>8;a[257691]=w;Zd(f,1279348818,h,j)|0;Xd(f);zp(d[257696]|d[257697]<<8|d[257698]<<16|d[257699]<<24|0);f=Ud(63736)|0;j=f;w=j;a[257696]=w;w=w>>8;a[257697]=w;w=w>>8;a[257698]=w;w=w>>8;a[257699]=w;h=f+14|0;c=j+(((d[h]|d[h+1|0]<<8)<<16>>16&65535)+16<<1)|0;w=(d[c]|d[c+1|0]<<8)<<16>>16;a[203224]=w;w=w>>8;a[203225]=w;c=f+20|0;h=j+(((d[c]|d[c+1|0]<<8)<<16>>16&65535)<<1)|0;w=(d[h]|d[h+1|0]<<8)<<16>>16;a[262376]=w;w=w>>8;a[262377]=w;h=f+16|0;c=j+(((d[h]|d[h+1|0]<<8)<<16>>16&65535)+2<<1)|0;w=(d[c]|d[c+1|0]<<8)<<16>>16;a[262368]=w;w=w>>8;a[262369]=w;c=f+18|0;h=j+(((d[c]|d[c+1|0]<<8)<<16>>16&65535)<<1)|0;w=(d[h]|d[h+1|0]<<8)<<16>>16;a[257656]=w;w=w>>8;a[257657]=w;h=f+12|0;f=j+(((d[h]|d[h+1|0]<<8)<<16>>16&65535)<<1)|0;w=(d[f]|d[f+1|0]<<8)<<16>>16;a[203184]=w;w=w>>8;a[203185]=w;pn();f=d[44360]|d[44361]<<8|d[44362]<<16|d[44363]<<24|0;_k(60176,f,44384,$d(5)|0)|0;i=b;return}function sm(){a[72984]=0;return}function tm(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;d=i;i=i+8|0;e=Md(a,1)|0;if(e<<24>>24==-1){f=0;i=d;return f|0}Nd(e,d|0,4)|0;Ld(e);f=(((um(a,b,c)|0)>>>0)/8e3|0)&65535;i=d;return f|0}function um(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;f=i;i=i+8|0;g=f|0;h=$d(c)|0;j=Md(b,1)|0;Nd(j,g,2)|0;Nd(j,h,8)|0;w=((d[g]|d[g+1|0]<<8)<<16>>16)-8&65535;a[g]=w;w=w>>8;a[g+1|0]=w;b=h+6|0;k=(d[b]|d[b+1|0]<<8)<<16>>16;l=k&65535;if((e|0)==0|k<<16>>16==0){Pd(j,l,1)|0}else{Nd(j,e,l)|0}w=0;a[b]=w;w=w>>8;a[b+1|0]=w;w=((d[g]|d[g+1|0]<<8)<<16>>16)-k&65535;a[g]=w;w=w>>8;a[g+1|0]=w;k=$d(c)|0;b=(ae(c)|0)&65535;c=(d[g]|d[g+1|0]<<8)<<16>>16&65535;g=b-c|0;b=k+(g-8)|0;l=h;e=b;m=l|0;n=l+4|0;l=d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0;n=e|0;w=d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;n=e+4|0;w=l;a[n]=w;w=w>>8;a[n+1|0]=w;w=w>>8;a[n+2|0]=w;w=w>>8;a[n+3|0]=w;Nd(j,k+g|0,c)|0;Ld(j);j=d[b]|0;if((j|0)==0){b=k+(g-6)|0;c=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;b=k+(g-2)|0;Mp(h|0,k+(((d[b]|d[b+1|0]<<8)<<16>>16&65535)+g)|0,c|0)|0;o=c;i=f;return o|0}else if((j|0)==4){j=k+(g-2)|0;o=(Cd(h,k+(((d[j]|d[j+1|0]<<8)<<16>>16&65535)+g)|0,-1)|0)&65535;i=f;return o|0}else{o=0;i=f;return o|0}return 0}function vm(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;if(!((e|0)!=0&(a[204296]|0)==0)){return}if(!((d[233024]|d[233025]<<8)<<16>>16<<16>>16==0)){do{xp()}while(!((d[233024]|d[233025]<<8)<<16>>16<<16>>16==0))}w=1;a[233024]=w;w=w>>8;a[233025]=w;Mf();f=e+3|0;g=me(((d[f]|d[f+1|0]<<8)<<16>>16)+16&65535,d[e+5|0]|0)|0;if(((d[72824]|d[72825]<<8)<<16>>16&65535)>>>0<(g&65535)>>>0){w=Bp(d[232952]|d[232953]<<8|d[232954]<<16|d[232955]<<24|0,g&65535)|0;a[232952]=w;w=w>>8;a[232953]=w;w=w>>8;a[232954]=w;w=w>>8;a[232955]=w;w=g;a[72824]=w;w=w>>8;a[72825]=w}g=e+8|0;f=e;h=(d[f]|d[f+1|0]<<8)<<16>>16;i=(h<<4&16|10)+((d[g]|d[g+1|0]<<8)<<16>>16)&65535;if(((d[72816]|d[72817]<<8)<<16>>16&65535)>>>0<(i&65535)>>>0){j=Bp(d[232960]|d[232961]<<8|d[232962]<<16|d[232963]<<24|0,i&65535)|0;w=j;a[232960]=w;w=w>>8;a[232961]=w;w=w>>8;a[232962]=w;w=w>>8;a[232963]=w;w=i;a[72816]=w;w=w>>8;a[72817]=w;k=(d[f]|d[f+1|0]<<8)<<16>>16;l=j}else{k=h;l=d[232960]|d[232961]<<8|d[232962]<<16|d[232963]<<24|0}if((k&2)==0){h=d[231136]|d[231137]<<8|d[231138]<<16|d[231139]<<24|0;j=l;w=k|2;a[j]=w;w=w>>8;a[j+1|0]=w;j=l+2|0;f=e+2|0;a[j]=a[f]|0;a[j+1|0]=a[f+1|0]|0;a[j+2|0]=a[f+2|0]|0;a[j+3|0]=a[f+3|0]|0;a[j+4|0]=a[f+4|0]|0;a[j+5|0]=a[f+5|0]|0;f=(d[g]|d[g+1|0]<<8)<<16>>16;g=l+8|0;w=f;a[g]=w;w=w>>8;a[g+1|0]=w;g=l+10|0;j=e+10|0;if((k&1)==0){m=j;n=g}else{Kp(g|0,j|0,16)|0;m=e+26|0;n=l+26|0}Cd(h,m,f)|0;Kp(n|0,h|0,f&65535)|0}else{f=e+6|0;Kp(l|0,e|0,((d[f]|d[f+1|0]<<8)<<16>>16&65535)<<1)|0}w=b;a[232944]=w;w=w>>8;a[232945]=w;w=c;a[232936]=w;w=w>>8;a[232937]=w;c=d[232960]|d[232961]<<8|d[232962]<<16|d[232963]<<24|0;w=d[c+5|0]|0;a[233040]=w;w=w>>8;a[233041]=w;b=c+3|0;w=(((d[b]|d[b+1|0]<<8)<<16>>16&65535)>>>3)+2&65535;a[232928]=w;w=w>>8;a[232929]=w;Lf();w=((d[233024]|d[233025]<<8)<<16>>16)-1&65535;a[233024]=w;w=w>>8;a[233025]=w;return}function wm(){var b=0,c=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+104|0;c=b|0;e=b+88|0;f=$d(5)|0;w=f;a[258208]=w;w=w>>8;a[258209]=w;w=w>>8;a[258210]=w;w=w>>8;a[258211]=w;um(56920,5,0)|0;g=0;h=0;while(1){Kp(f+(h*304|0)|0,f+((h*320|0)+7688)|0,304)|0;j=g+1&255;if((j&255)>>>0<120>>>0){g=j;h=j&255}else{break}}h=f+36480|0;w=h;a[258216]=w;w=w>>8;a[258217]=w;w=w>>8;a[258218]=w;w=w>>8;a[258219]=w;g=e|0;e=15512+((d[46448]|d[46449]<<8|d[46450]<<16|d[46451]<<24)<<5)|0;Ka(g|0,16,54568,(j=i,i=i+8|0,w=a[d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0]|0,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0)|0;i=j;e=f+((Vd(g,h)|0)+36480)|0;h=e;w=h;a[231992]=w;w=w>>8;a[231993]=w;w=w>>8;a[231994]=w;w=w>>8;a[231995]=w;g=c|0;Ph(59328,58888,0,g,80,d[258216]|d[258217]<<8|d[258218]<<16|d[258219]<<24|0)|0;Mb(g|0,58608,(j=i,i=i+8|0,w=e,a[j]=w,w=w>>8,a[j+1|0]=w,w=w>>8,a[j+2|0]=w,w=w>>8,a[j+3|0]=w,j)|0)|0;i=j;if((d[h]|d[h+1|0]<<8)<<16>>16<<16>>16==0){k=81;l=0;i=b;return}else{m=0}do{j=h+((m&65535)+1<<1)|0;w=-1;a[j]=w;w=w>>8;a[j+1|0]=w;m=m+1&65535}while((m&65535)>>>0<((d[h]|d[h+1|0]<<8)<<16>>16&65535)>>>0);k=81;l=0;i=b;return}function xm(a){a=a|0;var b=0,c=0;b=(d[203224]|d[203225]<<8)<<16>>16;if((b&65535)>>>0<(a&65535)>>>0){c=1;return c|0}c=(a&65535|0)<((b&65535)-15|0)|0;return c|0}function ym(){w=Ap(1,2e4)|0;a[231136]=w;w=w>>8;a[231137]=w;w=w>>8;a[231138]=w;w=w>>8;a[231139]=w;zm(52208);zm(Cm(49928)|0);zm(49240);zm(48688);zm(48160);zm(67480);zm(Cm(66704)|0);zm(Cm(66096)|0);zm(65680);zm(65312);zm(64792);zm(64184);zm(64184);zm(64184);zm(63808);zm(63496);zm(63088);zm(62800);zm(62288);zm(61920);zm(61608);zm(61328);zm(60952);zm(60616);zm(60288);zm(59992);zm(59648);return}function zm(b){b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;c=Ud(b)|0;b=c;e=(d[b]|d[b+1|0]<<8)<<16>>16;f=((d[71864]|d[71865]<<8)<<16>>16)+e&65535;w=f;a[71864]=w;w=w>>8;a[71865]=w;w=Bp(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0,(f&65535)<<2)|0;a[231120]=w;w=w>>8;a[231121]=w;w=w>>8;a[231122]=w;w=w>>8;a[231123]=w;if(e<<16>>16==0){zp(c);return}f=e&65535;if((c|0)==0){g=0;h=0;while(1){i=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(h-f+((d[71864]|d[71865]<<8)<<16>>16&65535)<<2)|0;w=0;a[i]=w;w=w>>8;a[i+1|0]=w;w=w>>8;a[i+2|0]=w;w=w>>8;a[i+3|0]=w;i=g+1&65535;if((i&65535)>>>0<(e&65535)>>>0){g=i;h=i&65535}else{break}}zp(c);return}else{j=0;k=0}while(1){if((((d[b]|d[b+1|0]<<8)<<16>>16&65535)>>>0>(j&65535)>>>0?(h=c+(k<<2|2)|0,g=d[h]|d[h+1|0]<<8|d[h+2|0]<<16|d[h+3|0]<<24|0,(g|0)!=0):0)?(h=c+(g+2)|0,(h|0)!=0):0){i=c+(g+8)|0;g=(d[i]|d[i+1|0]<<8)<<16>>16&65535;i=yp(g)|0;Kp(i|0,h|0,g)|0;l=i}else{l=0}i=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+(k-f+((d[71864]|d[71865]<<8)<<16>>16&65535)<<2)|0;w=l;a[i]=w;w=w>>8;a[i+1|0]=w;w=w>>8;a[i+2|0]=w;w=w>>8;a[i+3|0]=w;i=j+1&65535;if((i&65535)>>>0<(e&65535)>>>0){j=i;k=i&65535}else{break}}zp(c);return}function Am(){var b=0,c=0;if(!((d[71864]|d[71865]<<8)<<16>>16<<16>>16==0)){b=0;do{c=(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24)+((b&65535)<<2)|0;zp(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);b=b+1&65535}while((b&65535)>>>0<((d[71864]|d[71865]<<8)<<16>>16&65535)>>>0)}zp(d[231120]|d[231121]<<8|d[231122]<<16|d[231123]<<24|0);w=0;a[231120]=w;w=w>>8;a[231121]=w;w=w>>8;a[231122]=w;w=w>>8;a[231123]=w;zp(d[231136]|d[231137]<<8|d[231138]<<16|d[231139]<<24|0);w=0;a[231136]=w;w=w>>8;a[231137]=w;w=w>>8;a[231138]=w;w=w>>8;a[231139]=w;zp(d[232952]|d[232953]<<8|d[232954]<<16|d[232955]<<24|0);w=0;a[232952]=w;w=w>>8;a[232953]=w;w=w>>8;a[232954]=w;w=w>>8;a[232955]=w;zp(d[232960]|d[232961]<<8|d[232962]<<16|d[232963]<<24|0);w=0;a[232960]=w;w=w>>8;a[232961]=w;w=w>>8;a[232962]=w;w=w>>8;a[232963]=w;zp(d[231128]|d[231129]<<8|d[231130]<<16|d[231131]<<24|0);w=0;a[231128]=w;w=w>>8;a[231129]=w;w=w>>8;a[231130]=w;w=w>>8;a[231131]=w;zp(d[257680]|d[257681]<<8|d[257682]<<16|d[257683]<<24|0);w=0;a[257680]=w;w=w>>8;a[257681]=w;w=w>>8;a[257682]=w;w=w>>8;a[257683]=w;zp(d[257688]|d[257689]<<8|d[257690]<<16|d[257691]<<24|0);w=0;a[257688]=w;w=w>>8;a[257689]=w;w=w>>8;a[257690]=w;w=w>>8;a[257691]=w;zp(d[257696]|d[257697]<<8|d[257698]<<16|d[257699]<<24|0);w=0;a[257696]=w;w=w>>8;a[257697]=w;w=w>>8;a[257698]=w;w=w>>8;a[257699]=w;return}function Bm(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;d=a[b]|0;if(d<<24>>24==0){e=0;f=e&65535;g=c+f|0;a[g]=0;return e|0}else{h=0;i=b;j=d}while(1){if(j<<24>>24>-1){k=j;l=h}else{d=(j&255)>>>3&15;a[c+(h&65535)|0]=a[64608+(d&255)|0]|0;k=a[((a[i]&7|d<<3)&255)+64624|0]|0;l=h+1&65535}d=l+1&65535;a[c+(l&65535)|0]=k;b=i+1|0;m=a[b]|0;if(m<<24>>24==0){e=d;break}else{h=d;i=b;j=m}}f=e&65535;g=c+f|0;a[g]=0;return e|0}function Cm(b){b=b|0;var c=0,e=0,f=0;c=i;e=a[261416]|0;if((e&255)>>>0<5>>>0){f=46584+((e&255)<<2)|0;e=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;Ka(267744,14,49232,(f=i,i=i+16|0,w=b,a[f]=w,w=w>>8,a[f+1|0]=w,w=w>>8,a[f+2|0]=w,w=w>>8,a[f+3|0]=w,w=e,a[f+8|0]=w,w=w>>8,a[f+9|0]=w,w=w>>8,a[f+10|0]=w,w=w>>8,a[f+11|0]=w,f)|0)|0;i=f;i=c;return 267744}else{Nb(52056,49880,64,69344);return 0}return 0}function Dm(a){a=a|0;var b=0;b=(d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24)+((a&65535)<<2)|0;return d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0}function Em(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0;if((b|0)==0|(c|0)==0){return}d=a[b]|0;if(d<<24>>24==0){e=c}else{f=b;b=c;c=d;while(1){d=f+1|0;if(c<<24>>24==27){g=(a[d]|0)+127&255;h=f+2|0}else{g=c;h=d}d=b+1|0;a[b]=g;i=a[h]|0;if(i<<24>>24==0){e=d;break}else{f=h;b=d;c=i}}}a[e]=0;return}function Fm(){Gm(48680,0);Gm(48136,0);Gm(67472,0);Gm(66696,1);Gm(66088,1);Gm(65672,1);Gm(65232,1);return}function Gm(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0;e=i;f=a[261416]|0;if(!((f&255)>>>0<5>>>0)){Nb(52056,49880,64,69344)}g=46584+((f&255)<<2)|0;f=d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0;Ka(267744,14,49232,(g=i,i=i+16|0,w=b,a[g]=w,w=w>>8,a[g+1|0]=w,w=w>>8,a[g+2|0]=w,w=w>>8,a[g+3|0]=w,w=f,a[g+8|0]=w,w=w>>8,a[g+9|0]=w,w=w>>8,a[g+10|0]=w,w=w>>8,a[g+11|0]=w,g)|0)|0;i=g;g=Ud(267744)|0;f=g;b=((d[f]|d[f+1|0]<<8)<<16>>16&65535)>>>1;h=b&65535;j=((d[71832]|d[71833]<<8)<<16>>16)+b&65535;w=j;a[71832]=w;w=w>>8;a[71833]=w;k=Bp(d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24|0,(j&65535)<<2)|0;w=k;a[71840]=w;w=w>>8;a[71841]=w;w=w>>8;a[71842]=w;w=w>>8;a[71843]=w;j=(d[71832]|d[71833]<<8)<<16>>16;l=k+((j&65535)-h<<2)|0;w=0;a[l]=w;w=w>>8;a[l+1|0]=w;w=w>>8;a[l+2|0]=w;w=w>>8;a[l+3|0]=w;a:do{if(b<<16>>16==0){m=j}else{if(c<<24>>24==0){l=0;k=0;n=j;while(1){o=f+(k<<1)|0;p=g+((d[o]|d[o+1|0]<<8)<<16>>16&65535)|0;if((a[p]|0)==0?(o=d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24|0,(d[o]|d[o+1|0]<<8|d[o+2|0]<<16|d[o+3|0]<<24|0)!=0):0){o=n-1&65535;w=o;a[71832]=w;w=w>>8;a[71833]=w;q=o}else{o=ob(p|0)|0;p=(d[71832]|d[71833]<<8)<<16>>16;r=(d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24)+(k-h+(p&65535)<<2)|0;w=o;a[r]=w;w=w>>8;a[r+1|0]=w;w=w>>8;a[r+2|0]=w;w=w>>8;a[r+3|0]=w;q=p}p=l+1&65535;if((p&65535)>>>0<(b&65535)>>>0){l=p;k=p&65535;n=q}else{m=q;break a}}}else{s=0;t=0;u=j}while(1){n=f+(t<<1)|0;k=g+((d[n]|d[n+1|0]<<8)<<16>>16&65535)|0;if((a[k]|0)==0?(n=d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24|0,(d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0)!=0):0){n=u-1&65535;w=n;a[71832]=w;w=w>>8;a[71833]=w;v=n}else{n=Ap((Ip(k|0)|0)<<1|1,1)|0;l=a[k]|0;if(l<<24>>24==0){x=0}else{p=0;r=k;k=l;do{if(k<<24>>24>-1){y=k;z=p}else{l=(k&255)>>>3&15;a[n+(p&65535)|0]=a[64608+(l&255)|0]|0;y=a[((a[r]&7|l<<3)&255)+64624|0]|0;z=p+1&65535}p=z+1&65535;a[n+(z&65535)|0]=y;r=r+1|0;k=a[r]|0}while(!(k<<24>>24==0));x=p&65535}a[n+x|0]=0;if((n|0)==0){A=0;B=u}else{k=a[n]|0;if(k<<24>>24==0){C=n}else{r=n;l=n;o=k;while(1){k=r+1|0;if(o<<24>>24==27){D=(a[k]|0)+127&255;E=r+2|0}else{D=o;E=k}k=l+1|0;a[l]=D;F=a[E]|0;if(F<<24>>24==0){C=k;break}else{r=E;l=k;o=F}}}a[C]=0;A=n;B=(d[71832]|d[71833]<<8)<<16>>16}o=(d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24)+(t-h+(B&65535)<<2)|0;w=A;a[o]=w;w=w>>8;a[o+1|0]=w;w=w>>8;a[o+2|0]=w;w=w>>8;a[o+3|0]=w;v=B}o=s+1&65535;if((o&65535)>>>0<(b&65535)>>>0){s=o;t=o&65535;u=v}else{m=v;break}}}}while(0);if(!(m<<16>>16==339)){zp(g);i=e;return}m=(d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24)+368|0;v=ob(d[m]|d[m+1|0]<<8|d[m+2|0]<<16|d[m+3|0]<<24|0)|0;m=(d[71832]|d[71833]<<8)<<16>>16;w=m+1&65535;a[71832]=w;w=w>>8;a[71833]=w;u=(d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24)+((m&65535)<<2)|0;w=v;a[u]=w;w=w>>8;a[u+1|0]=w;w=w>>8;a[u+2|0]=w;w=w>>8;a[u+3|0]=w;zp(g);i=e;return}function Hm(){var b=0,c=0;if(!((d[71832]|d[71833]<<8)<<16>>16<<16>>16==0)){b=0;do{c=(d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24)+((b&65535)<<2)|0;zp(d[c]|d[c+1|0]<<8|d[c+2|0]<<16|d[c+3|0]<<24|0);b=b+1&65535}while((b&65535)>>>0<((d[71832]|d[71833]<<8)<<16>>16&65535)>>>0)}zp(d[71840]|d[71841]<<8|d[71842]<<16|d[71843]<<24|0);w=0;a[71840]=w;w=w>>8;a[71841]=w;w=w>>8;a[71842]=w;w=w>>8;a[71843]=w;return}function Im(b){b=b|0;var c=0;c=b+(d[b]|0)|0;while(1){if((a[c]|0)==0){c=c+1|0}else{break}}return c|0}function Jm(b){b=b|0;var c=0,d=0;c=b;while(1){b=c-1|0;d=a[b]|0;if(d<<24>>24==0){c=b}else{break}}return c+(-(d&255)|0)|0}













// EMSCRIPTEN_END_FUNCS
var ec=[Xp,Xp,rk,Xp,kk,Xp,mk,Xp,ik,Xp,nk,Xp,lk,Xp,jk,Xp];var fc=[Yp,Yp,wg,Yp,jh,Yp,Hc,Yp,Yf,Yp,hn,Yp,kh,Yp,Wi,Yp,nf,Yp,Qe,Yp,yh,Yp,aj,Yp,Ah,Yp,ag,Yp,jg,Yp,ij,Yp,vf,Yp,Bh,Yp,Ch,Yp,qg,Yp,hf,Yp,Dh,Yp,Ic,Yp,ih,Yp,_i,Yp,Je,Yp,gj,Yp,Yp,Yp,Yp,Yp,Yp,Yp,Yp,Yp,Yp,Yp];var gc=[Zp,Zp,Al,Zp,Il,Zp,Rl,Zp,fh,Zp,Fk,Zp,zl,Zp,Ul,Zp,uh,Zp,Tl,Zp,dg,Zp,El,Zp,Xl,Zp,_g,Zp,sl,Zp,oh,Zp,ph,Zp,Rk,Zp,rh,Zp,Hl,Zp,$g,Zp,Zl,Zp,cm,Zp,km,Zp,ch,Zp,vl,Zp,al,Zp,Ql,Zp,vi,Zp,ah,Zp,Bl,Zp,th,Zp,Gk,Zp,ml,Zp,Mk,Zp,Lk,Zp,Ck,Zp,Dk,Zp,Vl,Zp,hm,Zp,Ol,Zp,fm,Zp,kl,Zp,Jl,Zp,Nl,Zp,lm,Zp,tl,Zp,Pl,Zp,el,Zp,xk,Zp,cl,Zp,yl,Zp,xl,Zp,Ok,Zp,Sl,Zp,Nk,Zp,vh,Zp,Zg,Zp,Fl,Zp,Ek,Zp,Cl,Zp,zk,Zp,_l,Zp,pl,Zp,wh,Zp,ul,Zp,Ak,Zp,Dl,Zp,zg,Zp,Yl,Zp,ol,Zp,bh,Zp,jl,Zp,Kk,Zp,dh,Zp,Ik,Zp,Bk,Zp,vk,Zp,dm,Zp,Hk,Zp,il,Zp,dl,Zp,wl,Zp,jm,Zp,im,Zp,eh,Zp,Kl,Zp,am,Zp,nh,Zp,$l,Zp,ql,Zp,ek,Zp,bm,Zp,hk,Zp,gm,Zp,em,Zp,$k,Zp,ll,Zp,Jk,Zp,Pk,Zp,fl,Zp,nl,Zp,gg,Zp,Wl,Zp,bl,Zp,rl,Zp,qh,Zp,Ml,Zp,hl,Zp,Ll,Zp,xh,Zp,tk,Zp,gl,Zp,Gl,Zp,Qk,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp,Zp];var hc=[_p,_p,$c,_p];var ic=[$p,$p,uj,$p,jf,$p,Xi,$p,uf,$p,Ne,$p,fg,$p,vg,$p,Gc,$p,zf,$p,bj,$p,ug,$p,xg,$p,Ej,$p,up,$p,yg,$p,Se,$p,mf,$p,Ge,$p,hj,$p,rg,$p,cj,$p,Dj,$p,sj,$p,Cj,$p,ej,$p,jj,$p,Aj,$p,Xf,$p,dj,$p,Zi,$p,mh,$p,pf,$p,gd,$p,ef,$p,vj,$p,Re,$p,wf,$p,Le,$p,yj,$p,fj,$p,of,$p,Ke,$p,_f,$p,lh,$p,Fj,$p,rf,$p,gf,$p,$f,$p,sf,$p,lg,$p,wj,$p,Wf,$p,yf,$p,hg,$p,Bj,$p,Af,$p,eg,$p,kg,$p,zj,$p,tj,$p,bg,$p,kj,$p,xj,$p,xf,$p,ip,$p,gh,$p,$i,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p,$p];var jc=[aq,aq,Vf,aq];return{_strlen:Ip,_strcat:Jp,_free:zp,_main:mj,_rand_r:Op,_realloc:Bp,_strncpy:Np,_memmove:Mp,_tolower:Qp,_memset:Lp,_malloc:yp,_memcpy:Kp,_strcpy:Hp,_calloc:Ap,_rand:Pp,runPostSets:Ac,stackAlloc:kc,stackSave:lc,stackRestore:mc,setThrew:nc,setTempRet0:qc,setTempRet1:rc,setTempRet2:sc,setTempRet3:tc,setTempRet4:uc,setTempRet5:vc,setTempRet6:wc,setTempRet7:xc,setTempRet8:yc,setTempRet9:zc,dynCall_iiii:Rp,dynCall_vi:Sp,dynCall_ii:Tp,dynCall_viii:Up,dynCall_v:Vp,dynCall_iii:Wp}})


// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_lseek": _lseek, "_Epicport_SelectSaveFileDialog": _Epicport_SelectSaveFileDialog, "__scanString": __scanString, "_fclose": _fclose, "_Epicport_CanSave": _Epicport_CanSave, "_fflush": _fflush, "_strtol": _strtol, "_fputc": _fputc, "_strtok": _strtok, "_fwrite": _fwrite, "_send": _send, "_fputs": _fputs, "_SDL_WarpMouse": _SDL_WarpMouse, "_isspace": _isspace, "_SDL_WasInit": _SDL_WasInit, "_read": _read, "_strstr": _strstr, "_fileno": _fileno, "_perror": _perror, "_fsync": _fsync, "_SDL_PauseAudio": _SDL_PauseAudio, "_memchr": _memchr, "_llvm_va_end": _llvm_va_end, "_snprintf": _snprintf, "__getFloat": __getFloat, "_SDL_GetKeyboardState": _SDL_GetKeyboardState, "_close": _close, "_strchr": _strchr, "_SDL_LockSurface": _SDL_LockSurface, "___setErrNo": ___setErrNo, "_ftell": _ftell, "_exit": _exit, "_sprintf": _sprintf, "_strcspn": _strcspn, "_SDL_ShowCursor": _SDL_ShowCursor, "_getcwd": _getcwd, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_recv": _recv, "_SDL_SetColors": _SDL_SetColors, "_SDL_UnlockSurface": _SDL_UnlockSurface, "_SDL_Init": _SDL_Init, "_mkport": _mkport, "__exit": __exit, "_vsnprintf": _vsnprintf, "_js_is_muted": _js_is_muted, "_Epicport_CanLoad": _Epicport_CanLoad, "_toupper": _toupper, "_pread": _pread, "_SDL_SetVideoMode": _SDL_SetVideoMode, "_fopen": _fopen, "_open": _open, "_sysconf": _sysconf, "_puts": _puts, "_qsort": _qsort, "_SDL_InitSubSystem": _SDL_InitSubSystem, "_strdup": _strdup, "_SDL_GetError": _SDL_GetError, "_SDL_PollEvent": _SDL_PollEvent, "_fread": _fread, "__formatString": __formatString, "_gettimeofday": _gettimeofday, "_atoi": _atoi, "_vfprintf": _vfprintf, "_Epicport_SelectLoadFileDialog": _Epicport_SelectLoadFileDialog, "_SDL_WM_SetCaption": _SDL_WM_SetCaption, "_chdir": _chdir, "_sbrk": _sbrk, "___errno_location": ___errno_location, "_strerror": _strerror, "_SDL_CloseAudio": _SDL_CloseAudio, "_llvm_lifetime_start": _llvm_lifetime_start, "_SDL_Quit": _SDL_Quit, "_llvm_bswap_i32": _llvm_bswap_i32, "_SDL_GetKeyState": _SDL_GetKeyState, "__parseInt": __parseInt, "_SDL_OpenAudio": _SDL_OpenAudio, "_js_driver_music_is_playing": _js_driver_music_is_playing, "_SDL_QuitSubSystem": _SDL_QuitSubSystem, "_callJsTimers": _callJsTimers, "_sscanf": _sscanf, "___assert_fail": ___assert_fail, "_srand": _srand, "_strtok_r": _strtok_r, "_abort": _abort, "_fprintf": _fprintf, "__reallyNegative": __reallyNegative, "_fseek": _fseek, "_write": _write, "_SDL_UpdateRect": _SDL_UpdateRect, "_js_driver_music_fade_out": _js_driver_music_fade_out, "_emscripten_set_main_loop": _emscripten_set_main_loop, "_time": _time, "_strpbrk": _strpbrk, "_unlink": _unlink, "_js_music_play": _js_music_play, "_pwrite": _pwrite, "_strerror_r": _strerror_r, "_Epicport_PushSave": _Epicport_PushSave, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "___rand_seed": ___rand_seed, "NaN": NaN, "Infinity": Infinity, "_stdout": _stdout, "_stderr": _stderr }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _strcat = Module["_strcat"] = asm["_strcat"];
var _free = Module["_free"] = asm["_free"];
var _main = Module["_main"] = asm["_main"];
var _rand_r = Module["_rand_r"] = asm["_rand_r"];
var _realloc = Module["_realloc"] = asm["_realloc"];
var _strncpy = Module["_strncpy"] = asm["_strncpy"];
var _memmove = Module["_memmove"] = asm["_memmove"];
var _tolower = Module["_tolower"] = asm["_tolower"];
var _memset = Module["_memset"] = asm["_memset"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _strcpy = Module["_strcpy"] = asm["_strcpy"];
var _calloc = Module["_calloc"] = asm["_calloc"];
var _rand = Module["_rand"] = asm["_rand"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];

Runtime.stackAlloc = function(size) { return asm['stackAlloc'](size) };
Runtime.stackSave = function() { return asm['stackSave']() };
Runtime.stackRestore = function(top) { asm['stackRestore'](top) };

// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;

// === Auto-generated postamble setup entry stuff ===

if (memoryInitializer) {
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    var data = Module['readBinary'](memoryInitializer);
    HEAPU8.set(data, STATIC_BASE);
  } else {
    addRunDependency('memory initializer');
    Browser.asyncLoad(memoryInitializer, function(data) {
      HEAPU8.set(data, STATIC_BASE);
      removeRunDependency('memory initializer');
    }, function(data) {
      throw 'could not load memory initializer ' + memoryInitializer;
    });
  }
}

function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun'] && shouldRunNow) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  ensureInitRuntime();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);

  initialStackTop = STACKTOP;

  try {

    var ret = Module['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
    if (!Module['noExitRuntime']) {
      exit(ret);
    }
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}




function run(args) {
  args = args || Module['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    ensureInitRuntime();

    preMain();

    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
      Module.printErr('pre-main prep time: ' + (Date.now() - preloadStartTime) + ' ms');
    }

    if (Module['_main'] && shouldRunNow) {
      Module['callMain'](args);
    }

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      if (!ABORT) doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module['run'] = Module.run = run;

function exit(status) {
  ABORT = true;
  EXITSTATUS = status;
  STACKTOP = initialStackTop;

  // exit the runtime
  exitRuntime();

  // TODO We should handle this differently based on environment.
  // In the browser, the best we can do is throw an exception
  // to halt execution, but in node we could process.exit and
  // I'd imagine SM shell would have something equivalent.
  // This would let us set a proper exit status (which
  // would be great for checking test exit statuses).
  // https://github.com/kripken/emscripten/issues/1371

  // throw an exception to halt the current execution
  throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;

function abort(text) {
  if (text) {
    Module.print(text);
    Module.printErr(text);
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';

  throw 'abort() at ' + stackTrace() + extra;
}
Module['abort'] = Module.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}


run();

// {{POST_RUN_ADDITIONS}}






// {{MODULE_ADDITIONS}}





Module['FS_findObject'] = FS.findObject;
Module['dunCall'] = Runtime.dynCall;
Module['dynCall'] = Runtime.dynCall;
Module.screenIsReadOnly = true;
SDL.defaults.copyOnLock = false;

Module['SDL_numSimultaneouslyQueuedBuffers'] = 1;
};

EpicportApp(Module);
