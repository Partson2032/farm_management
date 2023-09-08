<template>
  <div class="py-4 container-fluid">

    <div class="mt-4 row container-fluid" v-if="fcp_age_groups">

      <div class="col-sm-8  mt-lg-0 container-fluid" >
        <div class="card">
          <div class="card-body">
            <h5 class="font-weight-bolder">New Boar</h5>
            <div class="row">
              <div class="col-12 col-sm-4">
                <label>Tag No.</label>
                <input
                    v-model="tagNo"
                    class="form-control"
                    type="text"

                />
              </div>

              <div class="col-12 col-sm-4">
                <label>Breed</label><br>
                <select  v-model="breed" >
                  <option>Large White</option>
                  <option>Landrance</option>
                  <option>Duroc</option>
                  <option>Local</option>
                  <option>Landrance Cross Large white</option>
                  <option>Landrace Cross Duroc</option>
                  <option>Large white Cross Duroc</option>

                </select>
              </div>


              <div class="col-12 col-sm-4">
                <label>Description</label>
                <textarea class="form-control" v-model="description" type="text"


                />
              </div>

              <div class="col-12 col-sm-3">
                <label class="mt-4">Color</label><br>
                <select  v-model="pig_color" >
                  <option>White</option>
                  <option>Brown</option>
                  <option>Black</option>
                  <option>Brown and black</option>
                  <option>Black and white</option>
                  <option>Brown and white</option>


                </select>
              </div>

              <div class="col-3">
                <label class="mt-4">Weight(KG)</label>
                <input class="form-control" v-model="weight" type="number"  />
              </div>
              <div class="col-12 col-sm-3">
                <label class="mt-4">Origin</label><br>
                <select  v-model="origin" >
                  <option>In-house</option>
                  <option>Purchased</option>
                </select>
              </div>

              <div class="col-3">
                <label class="mt-4">Date of birth</label>
                <input class="form-control" v-model="dob" type="date" />
              </div>

            </div>

            <br><br>
            <h5>Weaning Details for in-house birth</h5><br>

            <div class="row">
              <div class="col-12 col-sm-4">
                <label>Weaning Date</label>
                <input
                    v-model="weaning_date"
                    class="form-control"
                    type="date"

                />
              </div>

              <div class="col-12 col-sm-4">
                <label>Weaning weight</label><br>
                <input
                    v-model="weaning_weight"
                    class="form-control"
                    type="number"

                />
              </div></div>





            <br><br>
            <h5>Parents Details for in-house birth</h5><br>

            <div class="row">
              <div class="col-12 col-sm-4">
                <label>Mother Tag No.</label>
                <input
                    v-model="mother_tagNo"
                    class="form-control"
                    type="text"

                />
              </div>

              <div class="col-12 col-sm-4">
                <label>Father Tag No.</label>
                <input
                    v-model="father_tagNo"
                    class="form-control"
                    type="text"

                />
              </div>

              <div class="col-12 col-sm-4">
                <label>Mother Breed</label><br>
                <select  v-model="mother_breed" >
                  <option>Large White</option>
                  <option>Landrance</option>
                  <option>Duroc</option>
                  <option>Local</option>
                  <option>Landrance Cross Large white</option>
                  <option>Landrace Cross Duroc</option>
                  <option>Large white Cross Duroc</option>

                </select>
              </div>


              <div class="col-12 col-sm-4">
                <label>Father Breed</label><br>
                <select v-model="father_breed"   >
                  <option>Large White</option>
                  <option>Landrance</option>
                  <option>Duroc</option>
                  <option>Local</option>
                  <option>Landrance Cross Large white</option>
                  <option>Landrace Cross Duroc</option>
                  <option>Large white Cross Duroc</option>

                </select>
              </div>
              <div class="col-12 col-sm-4">
                <label>Date of conception</label>
                <input
                    v-model="date_of_conception"
                    class="form-control"
                    type="date"

                />
              </div>

              <div class="col-12 col-sm-4">
                <label>Description</label>
                <textarea class="form-control" type="text"
                          v-model="parents_description"

                />
              </div>

            </div>
            <div class="col-sm-6">
            <label class="mt-4">Active</label>&nbsp;&nbsp;
            <input type="checkbox"   name="vehicle1" value="Active">

          </div><br><br>

            <div class="row">
               <br>

              <div
                  class="text-right col-lg-6 d-flex flex-column justify-content-center"
              >
                <v-row>
                  <v-col cols="12" md="3" sm="3">
                    <button   type="button"
                              class="mt-2 mb-0 btn bg-gradient-danger ms-lg-auto me-lg-0 me-auto mt-lg-0" @click="fcp_age_groups_table=true;tableFunction();fcp_age_groups=false;">
                      Cancel
                    </button>


                  </v-col><v-col cols="12" md="3" sm="3">
&nbsp;&nbsp;&nbsp;
                  <button
                      @click="saveBoar"
                      type="button"
                      class="mt-2 mb-0 btn bg-gradient-success ms-lg-auto me-lg-0 me-auto mt-lg-0"
                  >
                    Save
                  </button>
                  </v-col>


                </v-row>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>




    <div class="mt-4 row" v-if="fcp_age_groups_table">


      <div class="mt-4  mt-lg-0" >
        <div class="my-auto ms-auto">
          <a
              class="mt-1 mb-0 btn btn-outline-primary btn-sm export mt-sm-0"
              target="_blank"
              @click="fcp_age_groups=true;fcp_age_groups_table=false;"
          >+&nbsp; New Boar</a>

        </div>
        <br>
        <div class="card">
          <div class="card-body">

            <h5 class="font-weight-bolder">My Boars (MALE PIGS)</h5><br>
            <div class="table-responsive container-fluid table-condensed">
              <table id="fcp_age_groups" class="table table-striped" style="width:100%">
                <thead>
                <tr>
                  <th class="text-left">Tag No.</th>
                  <th>Breed</th>
                  <th>Color</th>
                  <th>Weight</th>
                  <th>Manage</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="i in boar" :key="i">
                  <td>{{i.tagNo}}</td>
                  <td>{{i.breed}}</td>
                  <td>{{i.pig_color}}</td>
                  <td>{{i.weight}}</td>
                  <td>

                    <a
                        data-bs-toggle="modal"
                        data-bs-target="#commissionModal"
                        @click="editItemCommissionNew(i)"
                    >
                      <i class="fas fa-eye text-primary"></i>
                    </a>

                    <a
                        class="mx-3"

                    >
                      <i class="fas fa-user-edit text-primary"></i>
                    </a>
                    <a

                    >
                      <i class="fas fa-trash text-danger"></i>
                    </a> </td>
                </tr>

                </tbody>
                <tfoot>
                <tr>

                </tr>
                </tfoot>
              </table>
              <br>
            </div>


          </div>
        </div>
      </div>
    </div>


    <div
        id="commissionModal"
        class="modal fade"
        tabindex="-1"
        aria-hidden="true"
        role="dialog"
        aria-labelledby="exampleModalLabel"
    >
      <div  class="modal-dialog modal-lg modal-dialog-scrollable">

        <div class="modal-content" >
          <div class="card" >

            <div class="card-body">
              <h5 class="font-weight-bolder">Viewing Boar</h5>
              <div class="row">
                <div class="col-12 col-sm-4">
                  <label>Tag No.</label>
                  <input
                      v-model="viewing_boar.tagNo"
                      class="form-control"
                      type="text"

                  />
                </div>

                <div class="col-12 col-sm-4">
                  <label>Breed</label><br>
                  <select   v-model="viewing_boar.breed"  >
                    <option>Large white</option>
                    <option>Landrance</option>
                    <option>Duroc</option>
                    <option>Local</option>
                    <option>Landrance Cross Large white</option>
                    <option>Landrace Cross Duroc</option>
                    <option>Large white Cross Duroc</option>

                  </select>
                </div>


                <div class="col-12 col-sm-4">
                  <label>Description</label>
                  <textarea class="form-control" type="text"
                            v-model="viewing_boar.description"

                  />
                </div>

                <div class="col-12 col-sm-3">
                  <label class="mt-4">Color</label><br>
                  <select    v-model="viewing_boar.pig_color" >
                    <option>White</option>
                    <option>Brown</option>
                    <option>Black</option>
                    <option>Brown and black</option>
                    <option>Black and white</option>
                    <option>Brown and white</option>


                  </select>
                </div>

                <div class="col-3">
                  <label class="mt-4">Weight(KG)</label>
                  <input class="form-control" type="number"   v-model="viewing_boar.weight" />
                </div>
                <div class="col-12 col-sm-3">
                  <label class="mt-4">Origin</label><br>
                  <select    v-model="viewing_boar.origin" >
                    <option>In-house</option>
                    <option>Purchased</option>
                  </select>
                </div>

                <div class="col-3">
                  <label class="mt-4">Date of birth</label>
                  <input class="form-control" type="date"   v-model="viewing_boar.dob" />
                </div>

              </div>

              <br><br>
              <h5>Weaning Details for in-house birth</h5><br>

              <div class="row">
                <div class="col-12 col-sm-4">
                  <label>Weaning Date</label>
                  <input
                      v-model="viewing_boar.weaning_date"
                      class="form-control"
                      type="date"

                  />
                </div>

                <div class="col-12 col-sm-4">
                  <label>Weaning weight</label><br>
                  <input
                      v-model="viewing_boar.weaning_weight"
                      class="form-control"
                      type="number"

                  />
                </div></div>





              <br><br>
              <h5>Parents Details for in-house birth</h5><br>

              <div class="row">
                <div class="col-12 col-sm-4">
                  <label>Mother Tag No.</label>
                  <input
                      v-model="viewing_boar.mother_tagNo"
                      class="form-control"
                      type="text"

                  />
                </div>

                <div class="col-12 col-sm-4">
                  <label>Father Tag No.</label>
                  <input
                      v-model="viewing_boar.father_tagNo"
                      class="form-control"
                      type="text"

                  />
                </div>

                <div class="col-12 col-sm-4">
                  <label>Mother Breed</label><br>
                  <select   v-model="viewing_boar.mother_breed"  >
                    <option>Large White</option>
                    <option>Landrance</option>
                    <option>Duroc</option>
                    <option>Local</option>
                    <option>Landrance Cross Large white</option>
                    <option>Landrace Cross Duroc</option>
                    <option>Large white Cross Duroc</option>

                  </select>
                </div>


                <div class="col-12 col-sm-4">
                  <label>Father Breed</label><br>
                  <select    v-model="viewing_boar.father_breed" >
                    <option>Large White</option>
                    <option>Landrance</option>
                    <option>Duroc</option>
                    <option>Local</option>
                    <option>Landrance Cross Large white</option>
                    <option>Landrace Cross Duroc</option>
                    <option>Large white Cross Duroc</option>

                  </select>
                </div>
                <div class="col-12 col-sm-4">
                  <label>Date of conception</label>
                  <input
                      v-model="viewing_boar.date_of_conception"
                      class="form-control"
                      type="date"

                  />
                </div>

                <div class="col-12 col-sm-4">
                  <label>Description</label>
                  <textarea class="form-control" type="text"

                            v-model="viewing_boar.parents_description"
                  />
                </div>

              </div>

              <div class="row">
                <br>
                <div class="col-sm-6">
                  <label class="mt-4">Active</label>&nbsp;&nbsp;
                  <input type="checkbox"   name="vehicle1" value="Active">

                </div><br><br>


              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>

import $ from 'jquery'
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from "axios";
import swal from 'sweetalert';



export default {
  name: "ageGroups",
  data() {
    return {
      fcp_age_groups:false,
      fcp_age_groups_table:true,
      fcp_age_groups_view:false,
      boar:{},
      viewing_boar:{},
      tagNo:"",
      breed:"",
      description:"",
      pig_color:"",
      weight:"",
      origin:"",
      dob:"",
      weaning_date:"",
      weaning_weight:"",
      mother_tagNo:"",
      father_tagNo:"",
      mother_breed:"",
      father_breed:"",
      date_of_conception:"",
      parents_description:"",


    }
  },
  methods:{

    saveBoar(){

      let data = JSON.stringify({
        "tagNo": this.tagNo,
        "breed": this.breed,
        "description": this.description,
        "pig_color": this.pig_color,
        "weight": this.weight,
        "origin": this.origin,
        "dob": this.dob,
        "weaning_date": this.weaning_date,
        "weaning_weight": this.weaning_weight,
        "mother_tagNo": this.mother_tagNo,
        "father_tagNo": this.father_tagNo,
        "mother_breed": this.mother_breed,
        "father_breed": this.father_breed,
        "date_of_conception": this.date_of_conception,
        "parents_description": this.parents_description
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/boar',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            swal("Thank you !", "Data Saved", "success");
            this.fcp_age_groups=false;
            this.fcp_age_groups_table=true;
          })
          .catch((error) => {
            console.log(error);
            swal("Sorry !", "Failed to connect to server !", "error");
          });


    },

    getBoar(){

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/boar',
        headers: {
          'Content-Type': 'application/json'
        },

      };

      axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.boar=response.data

          })
          .catch((error) => {
            console.log(error);

          });

    },


    editItemCommissionNew(index) {
      this.viewing_boar = index
    },


    tableFunction(){

      try {
        $(document).ready(function () {
          $('#fcp_age_groups').DataTable();
        });
      } catch (e) {
        console.log(e)
      }
    },









  },
mounted() {
  this.tableFunction();
},

  created(){
    this.getBoar();
  }

}
</script>

<style #scoped>
.table-condensed {
  font-size: 0.775rem !important;
}

a {
  cursor: pointer;
}
input.errorClass {
  border: 1px solid red;
}
</style>