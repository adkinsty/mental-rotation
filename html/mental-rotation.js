/************************ 
 * Mental-Rotation Test *
 ************************/

import { PsychoJS } from './lib/core-2021.1.2.js';
import * as core from './lib/core-2021.1.2.js';
import { TrialHandler } from './lib/data-2021.1.2.js';
import { Scheduler } from './lib/util-2021.1.2.js';
import * as visual from './lib/visual-2021.1.2.js';
import * as sound from './lib/sound-2021.1.2.js';
import * as util from './lib/util-2021.1.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'mental-rotation';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instruction1RoutineBegin());
flowScheduler.add(Instruction1RoutineEachFrame());
flowScheduler.add(Instruction1RoutineEnd());
flowScheduler.add(Instruction2RoutineBegin());
flowScheduler.add(Instruction2RoutineEachFrame());
flowScheduler.add(Instruction2RoutineEnd());
const loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopLoopBegin, loopLoopScheduler);
flowScheduler.add(loopLoopScheduler);
flowScheduler.add(loopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Instruction1Clock;
var helloText;
var helloKey;
var Instruction2Clock;
var exampText;
var exampKey;
var exampIm;
var TrialClock;
var trialResp;
var trialStimulus;
var text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instruction1"
  Instruction1Clock = new util.Clock();
  helloText = new visual.TextStim({
    win: psychoJS.window,
    name: 'helloText',
    text: "Welcome. \n\nYou will see an image of two objects on the screen. They can be the same object, but rotated, or they can be different objects. For each pair, indicate if they are the same object but rotated, or if they are different objects.\n\nPress 'd' if they are different. Press 's' if they are the same.   \n\nNow an example image with the correct answer will follow. After that, the experiment will start.\n\nWhenever you're ready, press the 's' to continue.",
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  helloKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction2"
  Instruction2Clock = new util.Clock();
  exampText = new visual.TextStim({
    win: psychoJS.window,
    name: 'exampText',
    text: 'Here, you can see that the object on the right is not the object on the left but rotated, it is a different object. They would still be different after mentally rotating them to line up. \nHere you would press \'d\' for "different". If they were the same, you would press \'s\'. \nTry to respond as accurately as you can. Also try to be fast, but emphasize being accurate. \nPress \'s\' to start.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  exampKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  exampIm = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exampIm', units : 'height', 
    image : 'i43_0_R.jpg', mask : undefined,
    ori : 0, pos : [0.0, 0.15], size : [0.5, 0.35],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  trialResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trialStimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialStimulus', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.7, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _helloKey_allKeys;
var Instruction1Components;
function Instruction1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instruction1'-------
    t = 0;
    Instruction1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    helloKey.keys = undefined;
    helloKey.rt = undefined;
    _helloKey_allKeys = [];
    // keep track of which components have finished
    Instruction1Components = [];
    Instruction1Components.push(helloText);
    Instruction1Components.push(helloKey);
    
    for (const thisComponent of Instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instruction1'-------
    // get current time
    t = Instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *helloText* updates
    if (t >= 0.0 && helloText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      helloText.tStart = t;  // (not accounting for frame time here)
      helloText.frameNStart = frameN;  // exact frame index
      
      helloText.setAutoDraw(true);
    }

    
    // *helloKey* updates
    if (t >= 0.0 && helloKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      helloKey.tStart = t;  // (not accounting for frame time here)
      helloKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { helloKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { helloKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { helloKey.clearEvents(); });
    }

    if (helloKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = helloKey.getKeys({keyList: ['s'], waitRelease: false});
      _helloKey_allKeys = _helloKey_allKeys.concat(theseKeys);
      if (_helloKey_allKeys.length > 0) {
        helloKey.keys = _helloKey_allKeys[_helloKey_allKeys.length - 1].name;  // just the last key pressed
        helloKey.rt = _helloKey_allKeys[_helloKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instruction1'-------
    for (const thisComponent of Instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _exampKey_allKeys;
var Instruction2Components;
function Instruction2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instruction2'-------
    t = 0;
    Instruction2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exampKey.keys = undefined;
    exampKey.rt = undefined;
    _exampKey_allKeys = [];
    // keep track of which components have finished
    Instruction2Components = [];
    Instruction2Components.push(exampText);
    Instruction2Components.push(exampKey);
    Instruction2Components.push(exampIm);
    
    for (const thisComponent of Instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instruction2'-------
    // get current time
    t = Instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exampText* updates
    if (t >= 0.0 && exampText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exampText.tStart = t;  // (not accounting for frame time here)
      exampText.frameNStart = frameN;  // exact frame index
      
      exampText.setAutoDraw(true);
    }

    
    // *exampKey* updates
    if (t >= 0.0 && exampKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exampKey.tStart = t;  // (not accounting for frame time here)
      exampKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exampKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exampKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exampKey.clearEvents(); });
    }

    if (exampKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = exampKey.getKeys({keyList: ['s'], waitRelease: false});
      _exampKey_allKeys = _exampKey_allKeys.concat(theseKeys);
      if (_exampKey_allKeys.length > 0) {
        exampKey.keys = _exampKey_allKeys[_exampKey_allKeys.length - 1].name;  // just the last key pressed
        exampKey.rt = _exampKey_allKeys[_exampKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *exampIm* updates
    if (t >= 0.0 && exampIm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exampIm.tStart = t;  // (not accounting for frame time here)
      exampIm.frameNStart = frameN;  // exact frame index
      
      exampIm.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instruction2'-------
    for (const thisComponent of Instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var loop;
var currentLoop;
function loopLoopBegin(loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'mentalrotationstimuli.xlsx',
    seed: undefined, name: 'loop'
  });
  psychoJS.experiment.addLoop(loop); // add the loop to the experiment
  currentLoop = loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLoop of loop) {
    const snapshot = loop.getSnapshot();
    loopLoopScheduler.add(importConditions(snapshot));
    loopLoopScheduler.add(TrialRoutineBegin(snapshot));
    loopLoopScheduler.add(TrialRoutineEachFrame(snapshot));
    loopLoopScheduler.add(TrialRoutineEnd(snapshot));
    loopLoopScheduler.add(endLoopIteration(loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function loopLoopEnd() {
  psychoJS.experiment.removeLoop(loop);

  return Scheduler.Event.NEXT;
}


var _trialResp_allKeys;
var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Trial'-------
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trialResp.keys = undefined;
    trialResp.rt = undefined;
    _trialResp_allKeys = [];
    trialStimulus.setImage(imagefile);
    text.setText('press \'d\' for "different" \npress \'s\' for "same"');
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(trialResp);
    TrialComponents.push(trialStimulus);
    TrialComponents.push(text);
    
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Trial'-------
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trialResp* updates
    if (t >= 0.0 && trialResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialResp.tStart = t;  // (not accounting for frame time here)
      trialResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trialResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trialResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trialResp.clearEvents(); });
    }

    if (trialResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trialResp.getKeys({keyList: ['s', 'd'], waitRelease: false});
      _trialResp_allKeys = _trialResp_allKeys.concat(theseKeys);
      if (_trialResp_allKeys.length > 0) {
        trialResp.keys = _trialResp_allKeys[_trialResp_allKeys.length - 1].name;  // just the last key pressed
        trialResp.rt = _trialResp_allKeys[_trialResp_allKeys.length - 1].rt;
        // was this correct?
        if (trialResp.keys == corrAns) {
            trialResp.corr = 1;
        } else {
            trialResp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trialStimulus* updates
    if (t >= 0.0 && trialStimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialStimulus.tStart = t;  // (not accounting for frame time here)
      trialStimulus.frameNStart = frameN;  // exact frame index
      
      trialStimulus.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Trial'-------
    for (const thisComponent of TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (trialResp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         trialResp.corr = 1;  // correct non-response
      } else {
         trialResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trialResp.keys', trialResp.keys);
    psychoJS.experiment.addData('trialResp.corr', trialResp.corr);
    if (typeof trialResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trialResp.rt', trialResp.rt);
        routineTimer.reset();
        }
    
    trialResp.stop();
    // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
