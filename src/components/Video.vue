<template>
    <div id="video">
        <video id="myVideo" playsinline class="video-js vjs-default-skin"></video>
        <div id="videoMenue">
            <button type="button" @click.prevent="startRecording()" id="btnStart">Start Recording</button>
            <button type="button" @click.prevent="stopRecording()" id="btnStop">Stop Recording</button>
            <button type="button" @click.prevent="submitVideo()" v-bind:disabled="isSaveDisabled" id="btnSave">Submit</button>
        </div>
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import 'videojs-record/dist/css/videojs.record.css'
    import videojs from 'video.js'
    import 'webrtc-adapter'
    import Record from 'videojs-record/dist/videojs.record.js'
    import api from '@/data/api.js'


export default {
    props : ['id'],
    data() {
        return {
            player: '',
            isSaveDisabled: true,
            submitText: 'Submit',
            options: {
                controls: true,
                autoplay: false,
                fluid: true,
                loop: false,
                height: 700,
                bigPlayButton: false,
                controlBar: {
                    deviceButton: false,
                    recordToggle: false,
                    pipToggle: false,
                    volumePanel: false
                },
                plugins: {
                    record: {
                        maxLength: 180,
                        pip: false,
                        audio: false,
                        video: true,
                        debug: true
                    }
                }
            }
        }
    },
    mounted() {
        this.player = videojs('myVideo', this.options)

        this.player.on('deviceReady', () => {
            this.player.record().start();
        });
        
        // user completed recording and stream is available
        this.player.on('finishRecord', () => {
            this.isSaveDisabled = false;
            // the blob object contains the recorded data that
            // can be downloaded by the user, stored on server etc.
        });
    },
    methods: {
        startRecording() {
            this.player.record().getDevice();
            document.getElementById("btnStart").style.display = "none"
            document.getElementById("btnStop").style.display = "block"
        },
         stopRecording(){
            this.player.record().stopDevice();
            document.getElementById("btnStart").style.display = "block"
            document.getElementById("btnStop").style.display = "none"
         },
        submitVideo() {
            this.isSaveDisabled = true;
            
            const data = this.player.recordedData;
            const formData = new FormData();
            this.postPatientData()
            
        },
        async postPatientData (){
            api.postExerciseSession(this.id);
        }
    },
}                
</script>
<style>
    #video{
        margin: 10px;
    }
    #myVideo{
        height: 700px;
        box-sizing: border-box;
    }
    #btnStop{
        display: none;
    }
    #videoMenue {
        display: flex;
        justify-content: center;
    }
    #videoMenue button{
        margin: 5px;
    }
</style>
  