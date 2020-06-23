<template>
  <div class="where-content">
      <div>
        <b-card no-body>
          <b-tabs pills card vertical nav-wrapper-class="w-25">
            <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
            <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
            <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
          </b-tabs>
        </b-card>
      </div>
  </div>
</template>

<style>
.where-content {
  height: 50vh
}

h1 {
  text-align: center;
  margin-top: 60px;
}
</style>
