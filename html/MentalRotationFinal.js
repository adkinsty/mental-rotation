/**************************** 
 * Mentalrotationfinal Test *
 ****************************/

import { PsychoJS } from 'https://pavlovia.org/lib/core.js';
import * as core from 'https://pavlovia.org/lib/core.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data.js';
import { Scheduler } from 'https://pavlovia.org/lib/util.js';
import * as util from 'https://pavlovia.org/lib/util.js';
import * as visual from 'https://pavlovia.org/lib/visual.js';
import { Sound } from 'https://pavlovia.org/lib/sound.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'MentalRotationFinal';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

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
flowScheduler.add(Instruction1RoutineBegin);
flowScheduler.add(Instruction1RoutineEachFrame);
flowScheduler.add(Instruction1RoutineEnd);
flowScheduler.add(Instruction2RoutineBegin);
flowScheduler.add(Instruction2RoutineEachFrame);
flowScheduler.add(Instruction2RoutineEnd);
const loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopLoopBegin, loopLoopScheduler);
flowScheduler.add(loopLoopScheduler);
flowScheduler.add(loopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.1.2';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var Instruction1Clock;
var helloText;
var Instruction2Clock;
var exampText;
var exampIm;
var TrialClock;
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
    units : 'height', 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Instruction2"
  Instruction2Clock = new util.Clock();
  exampText = new visual.TextStim({
    win: psychoJS.window,
    name: 'exampText',
    text: 'Here, you can see that the object on the right is not the object on the left but rotated, it is a different object. They would still be different after mentally rotating them to line up. \nHere you would press \'d\' for "different". If they were the same, you would press \'s\'. \nTry to respond as accurately as you can. Also try to be fast, but emphasize being accurate. \nPress \'s\' to start.',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.25)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  exampIm = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exampIm', units : 'height', 
    image : 'i43_0_R.jpg', mask : undefined,
    ori : 0, pos : [0.0, 0.15], size : [0.5, 0.35],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  trialStimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialStimulus', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.7, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
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
var helloKey;
var Instruction1Components;
function Instruction1RoutineBegin() {
  //------Prepare to start Routine 'Instruction1'-------
  t = 0;
  Instruction1Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  helloKey = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  Instruction1Components = [];
  Instruction1Components.push(helloText);
  Instruction1Components.push(helloKey);
  
  for (const thisComponent of Instruction1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function Instruction1RoutineEachFrame() {
  //------Loop for each frame of Routine 'Instruction1'-------
  let continueRoutine = true; // until we're told otherwise
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
    helloKey.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (helloKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['s']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
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
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Instruction1RoutineEnd() {
  //------Ending Routine 'Instruction1'-------
  for (const thisComponent of Instruction1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Instruction1" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var exampKey;
var Instruction2Components;
function Instruction2RoutineBegin() {
  //------Prepare to start Routine 'Instruction2'-------
  t = 0;
  Instruction2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  exampKey = new core.BuilderKeyResponse(psychoJS);
  
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


function Instruction2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Instruction2'-------
  let continueRoutine = true; // until we're told otherwise
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
    exampKey.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (exampKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['s']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
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
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
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
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Instruction2RoutineEnd() {
  //------Ending Routine 'Instruction2'-------
  for (const thisComponent of Instruction2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Instruction2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var loop;
var currentLoop;
function loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'mentalrotationstimuli.xlsx',
    seed: undefined, name: 'loop'});
  psychoJS.experiment.addLoop(loop); // add the loop to the experiment
  currentLoop = loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLoop of loop) {
    thisScheduler.add(importConditions(loop));
    thisScheduler.add(TrialRoutineBegin);
    thisScheduler.add(TrialRoutineEachFrame);
    thisScheduler.add(TrialRoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisLoop));
  }

  return Scheduler.Event.NEXT;
}


function loopLoopEnd() {
  psychoJS.experiment.removeLoop(loop);

  return Scheduler.Event.NEXT;
}

var trialResp;
var TrialComponents;
function TrialRoutineBegin() {
  //------Prepare to start Routine 'Trial'-------
  t = 0;
  TrialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  trialResp = new core.BuilderKeyResponse(psychoJS);
  
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


function TrialRoutineEachFrame() {
  //------Loop for each frame of Routine 'Trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = TrialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *trialResp* updates
  if (t >= 0.0 && trialResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    trialResp.tStart = t;  // (not accounting for frame time here)
    trialResp.frameNStart = frameN;  // exact frame index
    trialResp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { trialResp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (trialResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['s', 'd']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      trialResp.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      trialResp.rt = trialResp.clock.getTime();
      // was this 'correct'?
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
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
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
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function TrialRoutineEnd() {
  //------Ending Routine 'Trial'-------
  for (const thisComponent of TrialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (trialResp.keys === undefined || trialResp.keys.length === 0) {    // No response was made
      trialResp.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (trialResp.keys === undefined) {
    if (['None','none',undefined].includes(corrAns)) {
       trialResp.corr = 1  // correct non-response
    } else {
       trialResp.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('trialResp.keys', trialResp.keys);
  psychoJS.experiment.addData('trialResp.corr', trialResp.corr);
  if (typeof trialResp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('trialResp.rt', trialResp.rt);
      routineTimer.reset();
      }
  
  // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisScheduler, thisTrial) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      thisScheduler.stop();
    } else if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
