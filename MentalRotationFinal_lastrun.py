#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.1.2),
    on Thu Aug  1 11:10:43 2019
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division
from psychopy import locale_setup, sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.1.2'
expName = 'MentalRotationFinal'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Volumes/hyper/experiments/Clay/Aphantasia/MentalRotationFinal/MentalRotationFinal_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instruction1"
Instruction1Clock = core.Clock()
helloText = visual.TextStim(win=win, name='helloText',
    text="Welcome. \n\nYou will see an image of two objects on the screen. They can be the same object, but rotated, or they can be different objects. For each pair, indicate if they are the same object but rotated, or if they are different objects.\n\nPress 'd' if they are different. Press 's' if they are the same.   \n\nNow an example image with the correct answer will follow. After that, the experiment will start.\n\nWhenever you're ready, press the 's' to continue.",
    font='Arial',
    units='height', pos=[0, 0], height=0.035, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Instruction2"
Instruction2Clock = core.Clock()
exampText = visual.TextStim(win=win, name='exampText',
    text='Here, you can see that the object on the right is not the object on the left but rotated, it is a different object. They would still be different after mentally rotating them to line up. \nHere you would press \'d\' for "different". If they were the same, you would press \'s\'. \nTry to respond as accurately as you can. Also try to be fast, but emphasize being accurate. \nPress \'s\' to start.',
    font='Arial',
    pos=[0, -0.25], height=0.035, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
exampIm = visual.ImageStim(
    win=win,
    name='exampIm', units='height', 
    image='i43_0_R.jpg', mask=None,
    ori=0, pos=[0.0, 0.15], size=[0.5,0.35],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)

# Initialize components for Routine "Trial"
TrialClock = core.Clock()
trialStimulus = visual.ImageStim(
    win=win,
    name='trialStimulus', units='height', 
    image='sin', mask=None,
    ori=0, pos=[0, 0], size=[0.7, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
text = visual.TextStim(win=win, name='text',
    text='default text',
    font='Arial',
    pos=[0, -0.4], height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instruction1"-------
t = 0
Instruction1Clock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
helloKey = keyboard.Keyboard()
# keep track of which components have finished
Instruction1Components = [helloText, helloKey]
for thisComponent in Instruction1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Instruction1"-------
while continueRoutine:
    # get current time
    t = Instruction1Clock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *helloText* updates
    if t >= 0.0 and helloText.status == NOT_STARTED:
        # keep track of start time/frame for later
        helloText.tStart = t  # not accounting for scr refresh
        helloText.frameNStart = frameN  # exact frame index
        win.timeOnFlip(helloText, 'tStartRefresh')  # time at next scr refresh
        helloText.setAutoDraw(True)
    
    # *helloKey* updates
    if t >= 0.0 and helloKey.status == NOT_STARTED:
        # keep track of start time/frame for later
        helloKey.tStart = t  # not accounting for scr refresh
        helloKey.frameNStart = frameN  # exact frame index
        win.timeOnFlip(helloKey, 'tStartRefresh')  # time at next scr refresh
        helloKey.status = STARTED
        # keyboard checking is just starting
        helloKey.clearEvents(eventType='keyboard')
    if helloKey.status == STARTED:
        theseKeys = helloKey.getKeys(keyList=['s'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instruction1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instruction1"-------
for thisComponent in Instruction1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Instruction1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instruction2"-------
t = 0
Instruction2Clock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
exampKey = keyboard.Keyboard()
# keep track of which components have finished
Instruction2Components = [exampText, exampKey, exampIm]
for thisComponent in Instruction2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Instruction2"-------
while continueRoutine:
    # get current time
    t = Instruction2Clock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *exampText* updates
    if t >= 0.0 and exampText.status == NOT_STARTED:
        # keep track of start time/frame for later
        exampText.tStart = t  # not accounting for scr refresh
        exampText.frameNStart = frameN  # exact frame index
        win.timeOnFlip(exampText, 'tStartRefresh')  # time at next scr refresh
        exampText.setAutoDraw(True)
    
    # *exampKey* updates
    if t >= 0.0 and exampKey.status == NOT_STARTED:
        # keep track of start time/frame for later
        exampKey.tStart = t  # not accounting for scr refresh
        exampKey.frameNStart = frameN  # exact frame index
        win.timeOnFlip(exampKey, 'tStartRefresh')  # time at next scr refresh
        exampKey.status = STARTED
        # keyboard checking is just starting
        exampKey.clearEvents(eventType='keyboard')
    if exampKey.status == STARTED:
        theseKeys = exampKey.getKeys(keyList=['s'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # *exampIm* updates
    if t >= 0.0 and exampIm.status == NOT_STARTED:
        # keep track of start time/frame for later
        exampIm.tStart = t  # not accounting for scr refresh
        exampIm.frameNStart = frameN  # exact frame index
        win.timeOnFlip(exampIm, 'tStartRefresh')  # time at next scr refresh
        exampIm.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instruction2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instruction2"-------
for thisComponent in Instruction2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Instruction2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
loop = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('mentalrotationstimuli.xlsx'),
    seed=None, name='loop')
thisExp.addLoop(loop)  # add the loop to the experiment
thisLoop = loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoop.rgb)
if thisLoop != None:
    for paramName in thisLoop:
        exec('{} = thisLoop[paramName]'.format(paramName))

for thisLoop in loop:
    currentLoop = loop
    # abbreviate parameter names if possible (e.g. rgb = thisLoop.rgb)
    if thisLoop != None:
        for paramName in thisLoop:
            exec('{} = thisLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Trial"-------
    t = 0
    TrialClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    trialResp = keyboard.Keyboard()
    trialStimulus.setImage(imagefile)
    text.setText('press \'d\' for "different" \npress \'s\' for "same"')
    # keep track of which components have finished
    TrialComponents = [trialResp, trialStimulus, text]
    for thisComponent in TrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "Trial"-------
    while continueRoutine:
        # get current time
        t = TrialClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *trialResp* updates
        if t >= 0.0 and trialResp.status == NOT_STARTED:
            # keep track of start time/frame for later
            trialResp.tStart = t  # not accounting for scr refresh
            trialResp.frameNStart = frameN  # exact frame index
            win.timeOnFlip(trialResp, 'tStartRefresh')  # time at next scr refresh
            trialResp.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(trialResp.clock.reset)  # t=0 on next screen flip
            trialResp.clearEvents(eventType='keyboard')
        if trialResp.status == STARTED:
            theseKeys = trialResp.getKeys(keyList=['s', 'd'], waitRelease=False)
            if len(theseKeys):
                theseKeys = theseKeys[0]  # at least one key was pressed
                
                # check for quit:
                if "escape" == theseKeys:
                    endExpNow = True
                trialResp.keys = theseKeys.name  # just the last key pressed
                trialResp.rt = theseKeys.rt
                # was this 'correct'?
                if (trialResp.keys == str(corrAns)) or (trialResp.keys == corrAns):
                    trialResp.corr = 1
                else:
                    trialResp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # *trialStimulus* updates
        if t >= 0.0 and trialStimulus.status == NOT_STARTED:
            # keep track of start time/frame for later
            trialStimulus.tStart = t  # not accounting for scr refresh
            trialStimulus.frameNStart = frameN  # exact frame index
            win.timeOnFlip(trialStimulus, 'tStartRefresh')  # time at next scr refresh
            trialStimulus.setAutoDraw(True)
        
        # *text* updates
        if t >= 0.0 and text.status == NOT_STARTED:
            # keep track of start time/frame for later
            text.tStart = t  # not accounting for scr refresh
            text.frameNStart = frameN  # exact frame index
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in TrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Trial"-------
    for thisComponent in TrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if trialResp.keys in ['', [], None]:  # No response was made
        trialResp.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           trialResp.corr = 1;  # correct non-response
        else:
           trialResp.corr = 0;  # failed to respond (incorrectly)
    # store data for loop (TrialHandler)
    loop.addData('trialResp.keys',trialResp.keys)
    loop.addData('trialResp.corr', trialResp.corr)
    if trialResp.keys != None:  # we had a response
        loop.addData('trialResp.rt', trialResp.rt)
    # the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'loop'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
