import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
  head: [['link', {rel: 'icon', href: '/images/hero.png'}]],
  bundler: viteBundler(),
  lang: 'en-US',

  title: 'My IT Docs',
  description: 'My IT Documentations',

  theme: defaultTheme({
    docsRepo: 'https://github.com/celsonery/pit/docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    sidebarDepth: 2,
    logo: '/images/hero.png',
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'github',
        link: 'https://github.com/celsonery/my-it-docs'
      },
      ],
    sidebar: [
      {
        text: 'Linux',
        prefix: '/linux',
        collapsible: true,
        children: [
          'shell.md',
          'systemd-service.md'
        ]
      },
      {
        text: 'DevOps',
        prefix: '/devops/',
        collapsible: true,
        children: [
          {
            text: 'CI/CD',
            prefix: '/devops/ci-cd/',
            collapsible: true,
            children: [
              'github-actions.md',
              'gitlab.md',
              'jenkins.md'
            ]
          },
          {
            text: 'Infra',
            prefix: '/devops/infra/',
            collapsible: true,
            children: [
              {
                text: 'Apache',
                prefix: '/devops/infra/apache',
                collapsible: true,
                children: [
                  'apache.md'
                ]
              },
              {
                text: 'Nginx',
                prefix: '/devops/infra/nginx',
                collapsible: true,
                children: [
                  'nginx.md'
                ]
              },
              {
                text: 'Databases',
                prefix: '/devops/infra/databases',
                collapsible: true,
                children: [
                  'mysql.md',
                  'postgresql.md',
                  'redis.md',
                  'mongo.md'
                ]
              },
              'autoscalling.md',
              'loadbalancer.md',
              'ssl.md'
            ]
          },
          {
            text: 'Monitoring',
            prefix: '/devops/monitoring',
            collapsible: true,
            children: [
              {
                text: 'ElasticStack',
                prefix: '/devops/monitoring/elasticstack/',
                collapsible: true,
                children: [
                  'elasticsearch.md',
                  'filebeat.md',
                  'kibana.md'
                ]
              },
              'zabbix.md',
              'datadog.md',
              'prometheus.md',
              'grafana.md'
            ]
          },
          {
            text: 'Tests',
            prefix: '/devops/tests',
            collapsible: true,
            children: [
              {
                text: 'Units/Features',
                prefix: '/devops/tests/units',
                collapsible: true,
                children: [
                  'phpunit.md',
                  'pest.md',
                  'dusk.md',
                  'jest.md',
                  'cypress.md'
                ]
              },
              {
                text: 'Quality',
                prefix: '/devops/tests/quality',
                collapsible: true,
                children: [
                  'scrutinizer.md',
                  'sonarqube.md'
                ]
              },
              {
                text: 'Security',
                prefix: '/devops/tests/security',
                collapsible: true,
                children: [
                  'trivy.md',
                  'docker-scout.md'
                ]
              },
              {
                text: 'Load/Stress',
                prefix: '/devops/tests/load',
                collapsible: true,
                children: [
                  'k6.md',
                  'vegeta.md',
                  'wrk.md'
                ]
              },
            ]
          },
          {
            text: 'Containers',
            prefix: '/devops/containers',
            collapsible: true,
            children: [
              {
                text: 'Docker',
                prefix: '/devops/containers/docker/',
                collapsible: true,
                children: [

                ]
              },
              {
                text: 'Kubernetes',
                prefix: '/devops/kubernetes/',
                collapsible: true,
                children: []
              },
            ]
          },
          'autochangelog.md',
          'git.md',
          'gitflow.md',
          'readme.md',
        ],
      },
      {
        text: 'Laravel',
        prefix: '/laravel/',
        collapsible: true,
        children: [
          'breeze.md',
          'services.md',
          'enum.md',
          'observer.md',
          'transactions.md',
          'gates.md',
          'polices.md',
          'swoole.md',
          'debugbar.md',
          'telescope.md',
          'create-new-package.md',
          {
            text: 'Integrations',
            prefix: '/laravel/integrations/',
            collapsible: true,
            children: [
              'correios.md',
              'cielo.md',
              'paypal.md',
              'pagseguro.md',
              'google.md',
              'aws.md',
              'openai.md'
            ]
          },
          {
            text: 'Package',
            prefix: '/laravel/packages/',
            collapsible: true,
            children: [
              'dompdf.md',
              'excel.md'
            ]
          }
        ],
      },
      {
        text: 'Documentations',
        prefix: '/documentations/',
        collapsible: true,
        children: [
          'vuepress.md',
          'mkdocs.md',
          'doctum.md',
          'scribe.md',
          'swagger-php.md'
        ]
      }
    ],

  }),
})
