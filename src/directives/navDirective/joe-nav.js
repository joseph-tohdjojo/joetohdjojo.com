const tmpl = `<ul id="nav-container">
  <li class="hamburger">
    <a ng-click="toggleNav()">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </a>
  </li>
  <li class="nav-item" ng-repeat="btn in navBtns">
    <a ui-sref="{{btn.name}}">{{btn.btnText}}</a>
  </li>
</ul>`

export default tmpl
