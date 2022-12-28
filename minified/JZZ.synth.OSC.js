!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t:"function"==typeof define&&define.amd?define("JZZ.synth.OSC",["JZZ"],t):t(JZZ)}(function(i){var s,n,e,h,o;function a(){return n=n||i.lib.getAudioContext()}function c(){this.ac=n,this.dest=this.ac.destination,this.channels=[],this.channel=function(t){return this.channels[t]||(this.channels[t]=new l(this),9==t&&(this.channels[t].note=function(t){return this.notes[t]||(this.notes[t]=new u(t,this)),this.notes[t]})),this.channels[t]},this.play=function(t){var i,s=t[0],n=t[1],t=t[2];s<0||255<s||(i=15&s,9==(s=s>>4)?this.channel(i).play(n,t):8==s?this.channel(i).play(n,0):11==s&&(120==n||123==n?this.channel(i).allSoundOff():64==n&&this.channel(i).damper(!!t)))},this.plug=function(t){try{this.ac=void 0,(t.context instanceof AudioContext||t.context instanceof webkitAudioContext)&&(this.ac=t.context,this.dest=t)}catch(t){this.ac=void 0}this.ac||(this.ac=n,this.dest=this.ac.destination)}}function l(t){this.synth=t,this.notes=[],this.sustain=!1,this.note=function(t){return this.notes[t]||(this.notes[t]=new r(t,this)),this.notes[t]},this.play=function(t,i){this.note(t).play(i)},this.allSoundOff=function(){for(var t=0;t<this.notes.length;t++)this.notes[t]&&this.notes[t].stop()},this.damper=function(t){if(!t&&this.sustain!=t)for(var i=0;i<this.notes.length;i++)this.notes[i]&&this.notes[i].sustain&&this.notes[i].stop();this.sustain=t}}function r(t,i){this.note=t,this.channel=i,this.freq=440*Math.pow(2,(t-69)/12),this.stop=function(){try{this.oscillator&&this.oscillator.stop(0),this.oscillator=void 0,this.sustain=!1}catch(t){}},this.play=function(t){var i;!t&&this.channel.sustain||this.stop(),t?(t/=127,this.oscillator=this.channel.synth.ac.createOscillator(),this.oscillator.type="sawtooth",this.oscillator.frequency.setTargetAtTime(this.freq,this.channel.synth.ac.currentTime,.005),this.oscillator.start||(this.oscillator.start=this.oscillator.noteOn),this.oscillator.stop||(this.oscillator.stop=this.oscillator.noteOff),this.gain=this.channel.synth.ac.createGain(),i=this.channel.synth.ac.currentTime,this.gain.gain.setValueAtTime(t,i),this.gain.gain.exponentialRampToValueAtTime(.01*t,i+2),this.oscillator.connect(this.gain),this.gain.connect(this.channel.synth.dest),this.oscillator.start(0)):this.sustain=this.channel.sustain}}function u(t,i){this.note=t,this.channel=i,this.freq=200,this.stop=function(){},this.play=function(t){var i;t&&(t=t/127,this.oscillator=this.channel.synth.ac.createOscillator(),this.oscillator.type="sine",this.oscillator.frequency.setTargetAtTime(this.freq,this.channel.synth.ac.currentTime,.005),this.oscillator.start||(this.oscillator.start=this.oscillator.noteOn),this.oscillator.stop||(this.oscillator.stop=this.oscillator.noteOff),this.gain=this.channel.synth.ac.createGain(),i=this.channel.synth.ac.currentTime,this.gain.gain.setValueAtTime(t,i),this.oscillator.connect(this.gain),this.gain.connect(this.channel.synth.dest),this.oscillator.start(0),this.oscillator.stop(this.channel.synth.ac.currentTime+.04))}}i&&(i.synth||(i.synth={}),i.synth.OSC||(s="1.2.2",e={},h=[],o={_info:function(t){return{type:"Web Audio",name:t=t||"JZZ.synth.OSC",manufacturer:"virtual",version:s}},_openOut:function(t,i){var s;a(),n?(void 0!==i?(e[i=""+i]||(e[i]=new c),s=e[i]):(s=new c,h.push(s)),t.plug=function(t){s.plug(t)},t._info=o._info(i),t._receive=function(t){s.play(t)},t._resume()):t._crash("AudioContext not supported")}},i.synth.OSC=function(t){return i.lib.openMidiOut(t,o)},i.synth.OSC.register=function(t){return!!a()&&i.lib.registerMidiOut(t,o)},i.synth.OSC.version=function(){return s}))});