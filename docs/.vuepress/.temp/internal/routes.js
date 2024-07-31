export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/devops/autochangelog.html", { loader: () => import(/* webpackChunkName: "devops_autochangelog.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/autochangelog.html.js"), meta: {"title":"Auto CHANGELOG"} }],
  ["/devops/git.html", { loader: () => import(/* webpackChunkName: "devops_git.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/git.html.js"), meta: {"title":"Git"} }],
  ["/devops/gitflow.html", { loader: () => import(/* webpackChunkName: "devops_gitflow.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/gitflow.html.js"), meta: {"title":"Gitflow"} }],
  ["/devops/", { loader: () => import(/* webpackChunkName: "devops_index.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/index.html.js"), meta: {"title":"Create README"} }],
  ["/documentations/doctum.html", { loader: () => import(/* webpackChunkName: "documentations_doctum.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/documentations/doctum.html.js"), meta: {"title":"Doctum"} }],
  ["/documentations/mkdocs.html", { loader: () => import(/* webpackChunkName: "documentations_mkdocs.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/documentations/mkdocs.html.js"), meta: {"title":"MKDocs"} }],
  ["/documentations/scribe.html", { loader: () => import(/* webpackChunkName: "documentations_scribe.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/documentations/scribe.html.js"), meta: {"title":"Scribe"} }],
  ["/documentations/swagger-php.html", { loader: () => import(/* webpackChunkName: "documentations_swagger-php.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/documentations/swagger-php.html.js"), meta: {"title":"Swagger-php"} }],
  ["/documentations/vuepress.html", { loader: () => import(/* webpackChunkName: "documentations_vuepress.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/documentations/vuepress.html.js"), meta: {"title":"Vuepress"} }],
  ["/laravel/breeze.html", { loader: () => import(/* webpackChunkName: "laravel_breeze.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/breeze.html.js"), meta: {"title":"Breeze in API"} }],
  ["/laravel/create-new-package.html", { loader: () => import(/* webpackChunkName: "laravel_create-new-package.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/create-new-package.html.js"), meta: {"title":"Create new package"} }],
  ["/laravel/debugbar.html", { loader: () => import(/* webpackChunkName: "laravel_debugbar.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/debugbar.html.js"), meta: {"title":"DebugBar"} }],
  ["/laravel/enum.html", { loader: () => import(/* webpackChunkName: "laravel_enum.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/enum.html.js"), meta: {"title":"Enum"} }],
  ["/laravel/gates.html", { loader: () => import(/* webpackChunkName: "laravel_gates.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/gates.html.js"), meta: {"title":"Gates"} }],
  ["/laravel/observer.html", { loader: () => import(/* webpackChunkName: "laravel_observer.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/observer.html.js"), meta: {"title":"Observer"} }],
  ["/laravel/polices.html", { loader: () => import(/* webpackChunkName: "laravel_polices.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/polices.html.js"), meta: {"title":"Polices"} }],
  ["/laravel/services.html", { loader: () => import(/* webpackChunkName: "laravel_services.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/services.html.js"), meta: {"title":"Service Layer"} }],
  ["/laravel/swoole.html", { loader: () => import(/* webpackChunkName: "laravel_swoole.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/swoole.html.js"), meta: {"title":"Swoole"} }],
  ["/laravel/telescope.html", { loader: () => import(/* webpackChunkName: "laravel_telescope.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/telescope.html.js"), meta: {"title":"Telescope"} }],
  ["/laravel/transactions.html", { loader: () => import(/* webpackChunkName: "laravel_transactions.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/transactions.html.js"), meta: {"title":"Transactions"} }],
  ["/linux/shell.html", { loader: () => import(/* webpackChunkName: "linux_shell.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/linux/shell.html.js"), meta: {"title":"Shell"} }],
  ["/linux/systemd-service.html", { loader: () => import(/* webpackChunkName: "linux_systemd-service.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/linux/systemd-service.html.js"), meta: {"title":"Systemd service"} }],
  ["/devops/ci-cd/github-actions.html", { loader: () => import(/* webpackChunkName: "devops_ci-cd_github-actions.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/ci-cd/github-actions.html.js"), meta: {"title":"Github Actions"} }],
  ["/devops/ci-cd/gitlab.html", { loader: () => import(/* webpackChunkName: "devops_ci-cd_gitlab.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/ci-cd/gitlab.html.js"), meta: {"title":"Gitlab"} }],
  ["/devops/ci-cd/jenkins.html", { loader: () => import(/* webpackChunkName: "devops_ci-cd_jenkins.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/ci-cd/jenkins.html.js"), meta: {"title":"Jenkins"} }],
  ["/devops/infra/autoscalling.html", { loader: () => import(/* webpackChunkName: "devops_infra_autoscalling.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/autoscalling.html.js"), meta: {"title":"Autoscalling"} }],
  ["/devops/infra/loadbalancer.html", { loader: () => import(/* webpackChunkName: "devops_infra_loadbalancer.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/loadbalancer.html.js"), meta: {"title":"Loadbalancer"} }],
  ["/devops/infra/ssl.html", { loader: () => import(/* webpackChunkName: "devops_infra_ssl.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/ssl.html.js"), meta: {"title":"SSL / TLS"} }],
  ["/devops/monitoring/datadog.html", { loader: () => import(/* webpackChunkName: "devops_monitoring_datadog.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/monitoring/datadog.html.js"), meta: {"title":"Datadog"} }],
  ["/devops/monitoring/grafana.html", { loader: () => import(/* webpackChunkName: "devops_monitoring_grafana.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/monitoring/grafana.html.js"), meta: {"title":"Grafana"} }],
  ["/devops/monitoring/prometheus.html", { loader: () => import(/* webpackChunkName: "devops_monitoring_prometheus.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/monitoring/prometheus.html.js"), meta: {"title":"Prometheus"} }],
  ["/devops/monitoring/zabbix.html", { loader: () => import(/* webpackChunkName: "devops_monitoring_zabbix.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/monitoring/zabbix.html.js"), meta: {"title":"Zabbix"} }],
  ["/laravel/integrations/cielo.html", { loader: () => import(/* webpackChunkName: "laravel_integrations_cielo.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/integrations/cielo.html.js"), meta: {"title":"Cielo"} }],
  ["/laravel/integrations/correios.html", { loader: () => import(/* webpackChunkName: "laravel_integrations_correios.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/integrations/correios.html.js"), meta: {"title":"Correios"} }],
  ["/laravel/integrations/pagseguro.html", { loader: () => import(/* webpackChunkName: "laravel_integrations_pagseguro.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/integrations/pagseguro.html.js"), meta: {"title":"PagSeguro"} }],
  ["/laravel/integrations/paypal.html", { loader: () => import(/* webpackChunkName: "laravel_integrations_paypal.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/integrations/paypal.html.js"), meta: {"title":"Paypal"} }],
  ["/laravel/packages/dompdf.html", { loader: () => import(/* webpackChunkName: "laravel_packages_dompdf.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/packages/dompdf.html.js"), meta: {"title":"DomPDF"} }],
  ["/laravel/packages/excel.html", { loader: () => import(/* webpackChunkName: "laravel_packages_excel.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/laravel/packages/excel.html.js"), meta: {"title":"Excel"} }],
  ["/devops/infra/apache/apache.html", { loader: () => import(/* webpackChunkName: "devops_infra_apache_apache.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/apache/apache.html.js"), meta: {"title":"Apache"} }],
  ["/devops/infra/databases/mongo.html", { loader: () => import(/* webpackChunkName: "devops_infra_databases_mongo.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/databases/mongo.html.js"), meta: {"title":"Mongo"} }],
  ["/devops/infra/databases/mysql.html", { loader: () => import(/* webpackChunkName: "devops_infra_databases_mysql.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/databases/mysql.html.js"), meta: {"title":"Mysql"} }],
  ["/devops/infra/databases/postgresql.html", { loader: () => import(/* webpackChunkName: "devops_infra_databases_postgresql.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/databases/postgresql.html.js"), meta: {"title":"PostgreSQL"} }],
  ["/devops/infra/databases/redis.html", { loader: () => import(/* webpackChunkName: "devops_infra_databases_redis.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/databases/redis.html.js"), meta: {"title":"Redis"} }],
  ["/devops/infra/nginx/nginx.html", { loader: () => import(/* webpackChunkName: "devops_infra_nginx_nginx.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/infra/nginx/nginx.html.js"), meta: {"title":"Nginx"} }],
  ["/devops/monitoring/elasticstack/elasticsearch.html", { loader: () => import(/* webpackChunkName: "devops_monitoring_elasticstack_elasticsearch.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/monitoring/elasticstack/elasticsearch.html.js"), meta: {"title":"Elastic Search"} }],
  ["/devops/monitoring/elasticstack/filebeat.html", { loader: () => import(/* webpackChunkName: "devops_monitoring_elasticstack_filebeat.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/monitoring/elasticstack/filebeat.html.js"), meta: {"title":"Filebeat"} }],
  ["/devops/monitoring/elasticstack/kibana.html", { loader: () => import(/* webpackChunkName: "devops_monitoring_elasticstack_kibana.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/monitoring/elasticstack/kibana.html.js"), meta: {"title":"Kibana"} }],
  ["/devops/tests/load/k6.html", { loader: () => import(/* webpackChunkName: "devops_tests_load_k6.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/load/k6.html.js"), meta: {"title":"K6"} }],
  ["/devops/tests/load/vegeta.html", { loader: () => import(/* webpackChunkName: "devops_tests_load_vegeta.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/load/vegeta.html.js"), meta: {"title":"Vegeta"} }],
  ["/devops/tests/load/wrk.html", { loader: () => import(/* webpackChunkName: "devops_tests_load_wrk.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/load/wrk.html.js"), meta: {"title":"Wrk"} }],
  ["/devops/tests/quality/scrutinizer.html", { loader: () => import(/* webpackChunkName: "devops_tests_quality_scrutinizer.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/quality/scrutinizer.html.js"), meta: {"title":"Scrutinizer"} }],
  ["/devops/tests/quality/sonarqube.html", { loader: () => import(/* webpackChunkName: "devops_tests_quality_sonarqube.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/quality/sonarqube.html.js"), meta: {"title":"Sonarqube"} }],
  ["/devops/tests/security/docker-scout.html", { loader: () => import(/* webpackChunkName: "devops_tests_security_docker-scout.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/security/docker-scout.html.js"), meta: {"title":"Docker Scout"} }],
  ["/devops/tests/security/trivy.html", { loader: () => import(/* webpackChunkName: "devops_tests_security_trivy.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/security/trivy.html.js"), meta: {"title":"Trivy"} }],
  ["/devops/tests/units/cypress.html", { loader: () => import(/* webpackChunkName: "devops_tests_units_cypress.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/units/cypress.html.js"), meta: {"title":"Cypress"} }],
  ["/devops/tests/units/dusk.html", { loader: () => import(/* webpackChunkName: "devops_tests_units_dusk.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/units/dusk.html.js"), meta: {"title":"Dusk"} }],
  ["/devops/tests/units/jest.html", { loader: () => import(/* webpackChunkName: "devops_tests_units_jest.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/units/jest.html.js"), meta: {"title":"Jest"} }],
  ["/devops/tests/units/pest.html", { loader: () => import(/* webpackChunkName: "devops_tests_units_pest.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/units/pest.html.js"), meta: {"title":"Pest"} }],
  ["/devops/tests/units/phpunit.html", { loader: () => import(/* webpackChunkName: "devops_tests_units_phpunit.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/units/phpunit.html.js"), meta: {"title":"PHPUnit"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
