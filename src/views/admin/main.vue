<template>
  <div class="py-4 container-fluid">
        <div class="row">


          <div class="mt-4 row">

            <div class="mt-4 col-md-3 mt-md-0">
              <default-counter-card
                  :count="2"

                  title="Total Pigs"
                  description="My Piggery"
                  class='fas fa-hippo' style='color: green;display: flex;
align-items: center;font-size:48px;'
              />
            </div>
            <div class="col-md-3">
              <default-counter-card
                  :count="0"

                  title="Total Goats"
                  description="My goats"
                  class='fas fa-horse' style='color: green;display: flex;
align-items: center;font-size:48px;'
              />
            </div>

            <div class="mt-4 col-md-3 mt-md-0">
              <default-counter-card
                  :count="0"

                  title="Total Crops"
                  description="My Crops"
                  class='fas fa-seedling' style='color: green;display: flex;
align-items: center;font-size:48px;'
              />
            </div>

          </div>
          <div class="mt-4 row">

            <div class="mt-4 row">


          </div>





        </div>



      </div>


    <div class="mt-0 row">

      <div class="mt-0  col-md-5 card" >

        <div class="p-3 pb-0 card-header">
          <div class="d-flex align-items-center">
            <h6 class="mb-0">Pigs Motality Rate</h6>
            <button
                type="button"
                class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="See the consumption per room"
            >
              <i class="fas fa-info"></i>
            </button>
          </div>
        </div>
        <div class="p-3 card-body">
          <div class="row">
            <div class="text-center col-5">
              <div class="chart">
                <canvas
                    id="chart-consumption"
                    class="chart-canvas"
                    height="197"
                ></canvas>
              </div>
              <h4 class="font-weight-bold mt-n8">
                <span>127</span>
                <span class="text-sm d-block text-body">Total Mortality</span>
              </h4>
            </div> <div class="mt-4 row">


          </div> <div class="mt-4 row">


          </div> <div class="mt-4 row">


          </div>
            <div class="col-12">
              <div class="table-responsive">
                <table class="table mb-0 align-items-center">
                  <tbody>
                  <tr>
                    <td>
                      <div class="px-2 py-0 d-flex">
                        <span class="badge bg-gradient-primary me-2">&nbsp;</span>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Birth Rate</h6>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-center align-middle">
                      <span class="text-xs font-weight-bold">Total Number. 115 </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="px-2 py-0 d-flex">
                      <span class="badge bg-gradient-secondary me-3"
                      >&nbsp;</span
                      >
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Death rate</h6>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-center align-middle">
                      <span class="text-xs font-weight-bold">Total Number. 12 </span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>&nbsp;&nbsp;&nbsp;



    </div>




    <hr class="my-5 horizontal dark" />

  </div>
</template>

<script>

import DefaultCounterCard from "@/examples/Cards/DefaultCounterCard.vue";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

import roundSlider from "round-slider";

import $ from "jquery";
import Chart from "chart.js/auto";
export default {
  name: "SmartHome",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    roundSlider,
    DefaultCounterCard,

  },
  data() {
    return {
      showMenu: false,
      iconBackground: "bg-gradient-success",
    };
  },
  mounted() {
    setNavPills();
    setTooltip(this.$store.state.bootstrap);

    let jq = document.createElement("script");
    jq.setAttribute("src", "https://code.jquery.com/jquery-3.2.1.js");
    document.head.appendChild(jq);

    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/round-slider@1.6.1/dist/roundslider.min.js"
    );
    document.head.appendChild(recaptchaScript);

    $("#slider").roundSlider({
      width: 12,
      radius: 10,
      value: 25,
      readOnly: true,
      circleShape: "half-top",
      sliderType: "min-range",
      lineCap: "round",
      min: 16,
      max: 28
    });
    // Rounded slider
    const setValue = function (value, active) {
      document.querySelectorAll("round-slider").forEach(function (el) {
        if (el.value === undefined) return;
        el.value = value;
      });
      const span = document.querySelector("#value");
      span.innerHTML = value;
      if (active) span.style.color = "red";
      else span.style.color = "black";
    };

    document.querySelectorAll("round-slider").forEach(function (el) {
      el.addEventListener("value-changed", function (ev) {
        if (ev.detail.value !== undefined) setValue(ev.detail.value, false);
        // eslint-disable-next-line no-undef
        else if (ev.detail.low !== undefined) setLow(ev.detail.low, false);
        // eslint-disable-next-line no-undef
        else if (ev.detail.high !== undefined) setHigh(ev.detail.high, false);
      });

      el.addEventListener("value-changing", function (ev) {
        if (ev.detail.value !== undefined) setValue(ev.detail.value, true);
        // eslint-disable-next-line no-undef
        else if (ev.detail.low !== undefined) setLow(ev.detail.low, true);
        // eslint-disable-next-line no-undef
        else if (ev.detail.high !== undefined) setHigh(ev.detail.high, true);
      });
    });


    var ctx1 = document.getElementById("chart-consumption").getContext("2d");


    var gradientStroke1 = ctx1.createLinearGradient(0, 130, 0, 50);


    gradientStroke1.addColorStop(1, "rgba(203,12,159,0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(203,12,159,0)");



    let chartStatus = Chart.getChart(this.id);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    new Chart(ctx1, {
      type: "doughnut",
      data: {
        labels: ["Active Polices", "Non Active Polices"],
        datasets: [
          {
            label: "Policies",
            weight: 9,
            cutout: 90,
            tension: 0.9,
            pointRadius: 2,
            borderWidth: 2,
            backgroundColor: [
              "#FF0080",
              "#A8B8D8",

            ],
            data: [15, 20],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });



  }
};
</script>
