<script>

export default {
    name: 'countDown',
    components: {
    },
    data() {
        return {
        }
  },
    mounted() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            const realTime = new Date().getFullYear();
            const newYear = new Date(`January 01 ${realTime + 1} 00:00:00`);

            const updateCountdown = () => {
            const currentTime = new Date();
            const diff = newYear - currentTime;

            const d = Math.floor(diff / 1000 / 60 / 60 / 24);
            const h = Math.floor(diff / 1000 / 60 / 60) % 24;
            const m = Math.floor(diff / 1000 / 60) % 60;
            const s = Math.floor(diff / 1000) % 60;

            days.textContent = d;
            hours.textContent = h < 10 ? '0' + h : h;
            minutes.textContent = m < 10 ? '0' + m : m;
            seconds.textContent = s < 10 ? '0' + s : s;
            };

        setInterval(updateCountdown, 1000);
        },
    },
};

</script>


<template>

    <div id="countdown" class="d-flex">

        <div class="time">
            <h2 id="days"></h2>
            <span>Days</span>
        </div>

        <div class="time">
            <h2 id="hours"></h2>
            <span>Hours</span>
        </div>

        <div class="time">
             <h2 id="minutes"></h2>
            <span>Minutes</span>
        </div>

        <div class="time">
            <h2 id="seconds"></h2>
            <span>Seconds</span>
        </div>

    </div>

</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

.time{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 1rem;

    h2{
	    font-weight: bold;
	    font-size: 4rem;
	    line-height: 1;
	    margin: 0 0 1rem;
        color: white;
    }   
}

</style>
