!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i:"function"==typeof define&&define.amd?define("JZZ.synth.OSC",["JZZ"],i):i(JZZ)}(0,function(i){if(i&&(i.synth||(i.synth={}),!i.synth.OSC)){var s="1.1.2",n=i.lib.getAudioContext(),e={},h=[],o={_info:function(t){return t||(t="JZZ.synth.OSC"),{type:"Web Audo",name:t,manufacturer:"virtual",version:s}},_openOut:function(t,i){var s;n?(void 0!==i?(e[i=""+i]||(e[i]=new a),s=e[i]):(s=new a,h.push(s)),t.plug=function(t){s.plug(t)},t._info=o._info(i),t._receive=function(t){s.play(t)},t._resume()):t._crash("AudioContext not supported")}};i.synth.OSC=function(t){return i.lib.openMidiOut(t,o)},i.synth.OSC.register=function(t){return!!n&&i.lib.registerMidiOut(t,o)},i.synth.OSC.version=function(){return s}}function a(){this.ac=n,this.dest=this.ac.destination,this.channels=[],this.channel=function(t){return this.channels[t]||(this.channels[t]=new c(this),9==t&&(this.channels[t].note=function(t){return this.notes[t]||(this.notes[t]=new r(t,this)),this.notes[t]})),this.channels[t]},this.play=function(t){var i=t[0],s=t[1],n=t[2];if(!(i<0||255<i)){var e=15&i,h=i>>4;9==h?this.channel(e).play(s,n):8==h?this.channel(e).play(s,0):11==h&&(120==s||123==s?this.channel(e).allSoundOff():64==s&&this.channel(e).damper(!!n))}},this.plug=function(t){try{this.ac=void 0,(t.context instanceof AudioContext||t.context instanceof webkitAudioContext)&&(this.ac=t.context,this.dest=t)}catch(t){this.ac=void 0}this.ac||(this.ac=n,this.dest=this.ac.destination)}}function c(t){this.synth=t,this.notes=[],this.sustain=!1,this.note=function(t){return this.notes[t]||(this.notes[t]=new l(t,this)),this.notes[t]},this.play=function(t,i){this.note(t).play(i)},this.allSoundOff=function(){for(var t=0;t<this.notes.length;t++)this.notes[t]&&this.notes[t].stop()},this.damper=function(t){if(!t&&this.sustain!=t)for(var i=0;i<this.notes.length;i++)this.notes[i]&&this.notes[i].sustain&&this.notes[i].stop();this.sustain=t}}function l(t,i){this.note=t,this.channel=i,this.freq=440*Math.pow(2,(t-69)/12),this.stop=function(){try{this.oscillator&&this.oscillator.stop(0),this.oscillator=void 0,this.sustain=!1}catch(t){}},this.play=function(t){if(!t&&this.channel.sustain||this.stop(),t){var i=t/127;this.oscillator=this.channel.synth.ac.createOscillator(),this.oscillator.type="sawtooth",this.oscillator.frequency.setTargetAtTime(this.freq,this.channel.synth.ac.currentTime,.005),this.oscillator.start||(this.oscillator.start=this.oscillator.noteOn),this.oscillator.stop||(this.oscillator.stop=this.oscillator.noteOff),this.gain=this.channel.synth.ac.createGain();var s=this.channel.synth.ac.currentTime;this.gain.gain.setValueAtTime(i,s),this.gain.gain.exponentialRampToValueAtTime(.01*i,s+2),this.oscillator.connect(this.gain),this.gain.connect(this.channel.synth.dest),this.oscillator.start(0)}else this.sustain=this.channel.sustain}}function r(t,i){this.note=t,this.channel=i,this.freq=200,this.stop=function(){},this.play=function(t){if(t){var i=t/127;this.oscillator=this.channel.synth.ac.createOscillator(),this.oscillator.type="sine",this.oscillator.frequency.setTargetAtTime(this.freq,this.channel.synth.ac.currentTime,.005),this.oscillator.start||(this.oscillator.start=this.oscillator.noteOn),this.oscillator.stop||(this.oscillator.stop=this.oscillator.noteOff),this.gain=this.channel.synth.ac.createGain();var s=this.channel.synth.ac.currentTime;this.gain.gain.setValueAtTime(i,s),this.oscillator.connect(this.gain),this.gain.connect(this.channel.synth.dest),this.oscillator.start(0),this.oscillator.stop(this.channel.synth.ac.currentTime+.04)}}}});