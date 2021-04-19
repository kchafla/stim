<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background: rgb(30, 35, 41);
  color: rgb(198, 212, 223);
  margin: 0 auto;
}
ul,
ol {
  list-style: none;
}
a {
  color: rgb(184, 182, 180);
  text-decoration: none;
}
a:hover,
a.button:hover {
  color: rgb(255, 255, 255);
}
a.button {
  color: rgb(229, 228, 220);
  background-color: rgb(92, 126, 16);
  padding: 2px;
}
input,
textarea,
select,
button {
  font-size: 12pt;
  line-height: 1.85em;
  font-weight: 300;
  color: rgb(255, 255, 255);
  background-color: rgba(103, 193, 245, 0.2);
  border-radius: 3px;
  border: 1px solid rgb(0, 0, 0);
}
button {
  color: #67c1f5;
  border: none;
  padding: 0px 12px;
}
button:hover {
  color: rgb(255, 255, 255);
  background-color: #67c1f5;
}
img {
  max-width: 100%;
}
.container {
  margin: 0 auto;
  max-width: 100%;
  width: 1200px;
}
@media screen and (max-width: 1680px) {
  .container {
    width: 1200px;
  }
}
@media screen and (max-width: 1280px) {
  .container {
    width: calc(100% - 40px);
  }
}
@media screen and (max-width: 980px) {
  .container {
    width: calc(100% - 50px);
  }
}
@media screen and (max-width: 736px) {
  .container {
    width: calc(100% - 40px);
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: stretch;
}
.row > * {
  box-sizing: border-box;
}
.row > .col-1 {
  width: 8.33333%;
}
.row > .off-1 {
  margin-left: 8.33333%;
}
.row > .col-2 {
  width: 16.66667%;
}
.row > .off-2 {
  margin-left: 16.66667%;
}
.row > .col-3 {
  width: 25%;
}
.row > .off-3 {
  margin-left: 25%;
}
.row > .col-4 {
  width: 33.33333%;
}
.row > .off-4 {
  margin-left: 33.33333%;
}
.row > .col-5 {
  width: 41.66667%;
}
.row > .off-5 {
  margin-left: 41.66667%;
}
.row > .col-6 {
  width: 50%;
}
.row > .off-6 {
  margin-left: 50%;
}
.row > .col-7 {
  width: 58.33333%;
}
.row > .off-7 {
  margin-left: 58.33333%;
}
.row > .col-8 {
  width: 66.66667%;
}
.row > .off-8 {
  margin-left: 66.66667%;
}
.row > .col-9 {
  width: 75%;
}
.row > .off-9 {
  margin-left: 75%;
}
.row > .col-10 {
  width: 83.33333%;
}
.row > .off-10 {
  margin-left: 83.33333%;
}
.row > .col-11 {
  width: 91.66667%;
}
.row > .off-11 {
  margin-left: 91.66667%;
}
.row > .col-12 {
  width: 100%;
}
.row > .off-12 {
  margin-left: 100%;
}
.left,
.right {
  display: block;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
