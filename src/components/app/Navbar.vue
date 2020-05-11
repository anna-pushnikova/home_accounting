<template>
  <nav class="navbar teal darken-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons">dehaze</i>
        </a>
        <span>{{date | date('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            {{name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link 
                to="/profile"
              >
                <i class="material-icons">account_circle</i>{{'ProfileTitle'| localize}}
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" @click.prevent="logout()">
                <i class="material-icons">assignment_return</i>{{'DropDown_Logout'| localize}}
              </a>
            </li>
          </ul>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import M from 'materialize-css'

export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if(this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    }
  }
}
</script>

<style lang="scss">

.navbar {
  color: #fff !important;
}

.dropdown-content {
  top: 100% !important;
}

</style>
