<template>
    <div>
        <video id="myVideo" playsinline class="video-js vjs-default-skin"></video>
        <button type="button" class="btn btn-info" @click.prevent="startRecording()" v-bind:disabled="isStartRecording" id="btnStart">Start Recording</button>
        <button type="button" class="btn btn-success" @click.prevent="submitVideo()" v-bind:disabled="isSaveDisabled" id="btnSave">{{ submitText }}</button>
        <button type="button" class="btn btn-primary" @click.prevent="retakeVideo()" v-bind:disabled="isRetakeDisabled" id="btnRetake">Retake</button>
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import 'videojs-record/dist/css/videojs.record.css'
    import videojs from 'video.js'
    import 'webrtc-adapter'
    import RecordRTC from 'recordrtc'
    import Record from 'videojs-record/dist/videojs.record.js'
    import FFmpegjsEngine from 'videojs-record/dist/plugins/videojs.record.ffmpegjs.js'

export default {
    data() {
        return {
            player: '',
            retake: 0,
            isSaveDisabled: true,
            isStartRecording: false,
            isRetakeDisabled: true,
            submitText: 'Submit',
            options: {
                controls: true,
                    autoplay: false,
                    fluid: false,
                    loop: false,
                    width: 320,
                    height: 240,
                    bigPlayButton: false,
                controlBar: {
                    deviceButton: false,
                    recordToggle: false,
                    pipToggle: false,
                    volumePanel: false
                },
                width: 500,
                height: 300,
                fluid: true,
                plugins: {
                    record: {
                        pip: false,
                        audio: false,
                        video: true,
                        maxLength: 10, // ta bort
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
            console.log('device ready:');
        });
        // user clicked the record button and started recording
        this.player.on('startRecord', () => {
            console.log('started recording!');
        });
        // user completed recording and stream is available
        this.player.on('finishRecord', () => {
            this.isSaveDisabled = false;
            if(this.retake == 0) {
                this.isRetakeDisabled = false;
            }
            // the blob object contains the recorded data that
            // can be downloaded by the user, stored on server etc.
            console.log('finished recording: ', this.player.recordedData);
        });
    },
    methods: {
        startRecording() {
            this.isStartRecording = true;
            this.player.record().getDevice();
        },
        submitVideo() {
            this.isSaveDisabled = true;
            this.isRetakeDisabled = true;
            var data = this.player.recordedData;
            var formData = new FormData();
            formData.append('video', data, data.name);
            this.submitText = "Uploading "+data.name;
            console.log('uploading recording:', data.name);
            this.player.record().stopDevice();
            fetch(this.uploadUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(
                success => {
                    console.log('recording upload complete.');
                    this.submitText = "Upload Complete";
                }
            ).catch(
                error =>{
                    console.error('an upload error occurred!');
                    this.submitText = "Upload Failed";
                }
            );
        },
        retakeVideo() {
            this.isSaveDisabled = true;
            this.isRetakeDisabled = true;
            this.retake += 1;
            this.player.record().start();
        }
    },
}                
</script>
  