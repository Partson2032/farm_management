<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse navText="Dashboard" to="/admin/main">
          <template #icon>
            <shop />
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse2
            collapse-ref="dashboardsExamples"
            nav-text="Products"
            :class="getRoute() === 'fcp'"
        >
          <template #icon>
            <Products/>
          </template>
          <template #list>
            <ul class="nav ms-4 ps-3">
              <!-- nav links -->

              <sidenav-collapse-item2
                  refer="vrExamples"
                  mini-icon="V"
                  text="Piggery"
              >
                <template #nav-child-item>
                  <sidenav-item
                      navText="boar"
                      :to="{ name: 'boar' }"
                      mini-icon="V"
                      text="Boars"
                  />
                  <sidenav-item
                      navText="soar"
                      :to="{ name: 'soar' }"
                      mini-icon="V"
                      text="Soar Unit"
                  />



                  <sidenav-item
                      navText="Creep"
                      :to="{ name: 'creep' }"
                      mini-icon="V"
                      text="Creep"
                  />

                  <sidenav-item
                      navText="Motality"
                      :to="{ name: 'mortality' }"
                      mini-icon="V"
                      text="Motality"
                  />

                  <sidenav-item
                      navText="Clinic"
                      :to="{ name: 'clinic' }"
                      mini-icon="V"
                      text="Clinic"
                  />

                </template>


              </sidenav-collapse-item2>


<!--              <sidenav-collapse-item2-->
<!--                  refer="vrExamples1"-->
<!--                  mini-icon="V"-->
<!--                  text="Goats"-->
<!--              >-->
<!--                <template #nav-child-item>-->
<!--                  <sidenav-item-->
<!--                      navText="HCPageGroups"-->
<!--                      :to="{ name: 'HCPageGroups' }"-->
<!--                      mini-icon="V"-->
<!--                      text="HCP Age Groups"-->
<!--                  />-->
<!--                  <sidenav-item-->
<!--                      navText="HCPdependants"-->
<!--                      :to="{ name: 'HCPdependants' }"-->
<!--                      mini-icon="V"-->
<!--                      text="HCP Dependants"-->
<!--                  />-->

<!--                  <sidenav-item-->
<!--                      navText="HCPpackages"-->
<!--                      :to="{ name: 'HCPpackages' }"-->
<!--                      mini-icon="V"-->
<!--                      text="HCP Packages"-->
<!--                  />-->
<!--                </template>-->
<!--              </sidenav-collapse-item2>-->



<!--              <sidenav-collapse-item2-->
<!--                  refer="vrExamples2"-->
<!--                  mini-icon="V"-->
<!--                  text="Crops"-->
<!--              >-->
<!--                <template #nav-child-item>-->
<!--                  <sidenav-item-->
<!--                      navText="constructionTypes"-->
<!--                      :to="{ name: 'constructionTypes' }"-->
<!--                      mini-icon="V"-->
<!--                      text="Construction Types"-->
<!--                  />-->
<!--                  <sidenav-item-->
<!--                      navText="houses"-->
<!--                      :to="{ name: 'houses' }"-->
<!--                      mini-icon="V"-->
<!--                      text="Houses"-->
<!--                  />-->

<!--                  <sidenav-item-->
<!--                      navText="rates"-->
<!--                      :to="{ name: 'rates' }"-->
<!--                      mini-icon="V"-->
<!--                      text="Rates"-->
<!--                  />-->

<!--                  <sidenav-item-->
<!--                      navText="roofTypes"-->
<!--                      :to="{ name: 'roofTypes' }"-->
<!--                      mini-icon="V"-->
<!--                      text="Roof Types"-->
<!--                  />-->
<!--                </template>-->
<!--              </sidenav-collapse-item2>-->



            </ul>
          </template>
        </sidenav-collapse2>
      </li>

<!--      <li class="nav-item">-->
<!--        <sidenav-collapse3-->
<!--            collapse-ref="dashboardsExample"-->
<!--            nav-text="Policy"-->
<!--            :class="getRoute2()"-->
<!--        >-->
<!--          <template #icon>-->
<!--            <policy />-->
<!--          </template>-->
<!--          <template #list>-->
<!--            <ul class="nav ms-4 ps-3">-->
<!--              &lt;!&ndash; nav links &ndash;&gt;-->



<!--                  <sidenav-item-->
<!--                      navText="policy"-->
<!--                      :to="{ name: 'policies' }"-->
<!--                      mini-icon="V"-->
<!--                      text="Policies"-->
<!--                  />-->
<!--                  <sidenav-item-->
<!--                      navText="products"-->
<!--                      :to="{ name: 'products' }"-->
<!--                      mini-icon="V"-->
<!--                      text="Products"-->
<!--                  />-->




<!--            </ul>-->
<!--          </template>-->
<!--        </sidenav-collapse3>-->
<!--      </li>-->



      <li class="nav-item">
        <sidenav-collapse navText="Sales" to="/admin/sales" collapse-ref="">
          <template #icon>
            <claims />
          </template>
        </sidenav-collapse>

      </li>
<!--      </li>-->
<!--      <li class="nav-item">-->
<!--        <sidenav-collapse navText="Groups" to="/manage" collapse-ref="">-->
<!--          <template #icon>-->
<!--            <group />-->
<!--          </template>-->
<!--        </sidenav-collapse>-->
<!--      </li>-->
<!--      <li class="nav-item">-->
<!--        <sidenav-collapse navText="Manage Users" to="/admin/manageUsers" collapse-ref="">-->
<!--          <template #icon>-->
<!--            <user />-->
<!--          </template>-->
<!--        </sidenav-collapse>-->
<!--      </li>-->

<!--      <li class="nav-item">-->
<!--        <sidenav-collapse  navText="Manage Transactions" to="/admin/manageTransactions" collapse-ref="">-->
<!--          <template #icon>-->
<!--            <trans />-->
<!--          </template>-->
<!--        </sidenav-collapse>-->
<!--      </li>-->

<div v-if="false" >
  <li class="nav-item">
    <sidenav-collapse navText="Manage" to="/manage" collapse-ref="">
      <template #icon>
        <office />
      </template>
    </sidenav-collapse>
  </li>
  <li class="nav-item">
    <sidenav-collapse navText="Claims" :to="{ name: 'Claims' }">
      <template #icon>
        <office />
      </template>
    </sidenav-collapse>
  </li>
  <li class="nav-item">
    <sidenav-collapse navText="Transactions" :to="{ name: 'Transactions' }">
      <template #icon>
        <credit-card />
      </template>
    </sidenav-collapse>
  </li>
  <li class="nav-item">
    <sidenav-collapse navText="Profile" to="/profile">
      <template #icon>
        <customer-support />
      </template>
    </sidenav-collapse>
  </li>
  <li v-if="false" class="nav-item">
    <sidenav-collapse navText="Dependencies" :to="{ name: 'Sign-In' }">
      <template #icon>
        <document />
      </template>
    </sidenav-collapse>
  </li>
  <li v-if="false" class="nav-item">
    <sidenav-collapse navText="Sign Out" :to="{ name: 'Sign-In' }">
      <template #icon>
        <spaceship />
      </template>
    </sidenav-collapse>
  </li>

</div>

    </ul>
  </div>
</template>
<script>

import Shop from "../../components/Icon/Shop.vue";
import Office from "../../components/Icon/Office.vue";
import CreditCard from "../../components/Icon/CreditCard.vue";
// import Box3d from "../../components/Icon/Box3d.vue";
import CustomerSupport from "../../components/Icon/CustomerSupport.vue";
import Document from "../../components/Icon/Document.vue";
import Spaceship from "../../components/Icon/Spaceship.vue";
// import Settings from "../../components/Icon/Settings.vue";
import SidenavItem from "./SidenavItem.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCollapse2 from "./SidenavCollapse2.vue";
import Claims from "../../components/Icon/claims";
import SidenavCollapseItem2 from "./SidenavCollapseItem2.vue";
import Products from "../../components/Icon/products";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {

    Products,
    SidenavCollapse,
    SidenavCollapse2,
    SidenavCollapseItem2,
    Claims,
    Shop,
    Office,
    CreditCard,
    // Box3d,

    SidenavItem,
    CustomerSupport,
    Document,
    Spaceship,
    // Settings,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    getRoute2() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
