/// <reference path="components/project-form.ts"/>
/// <reference path="components/project-list.ts"/>

namespace App {
  new ProjectForm();
  new ProjectList('active');
  new ProjectList('finished');
}
