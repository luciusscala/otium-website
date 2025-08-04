import { DemoScenario } from '../components/TerminalSimulator';

export const demoScenarios: DemoScenario[] = [
  {
    id: 'nginx-ssl',
    title: 'Web Server with SSL',
    description: 'Watch Otium automatically set up Nginx with SSL certificates and security hardening.',
    command: 'otium "set up nginx with SSL for mydomain.com"',
    duration: 45000,
    steps: [
      {
        type: 'analysis',
        content: `✓ Detecting system: Ubuntu 22.04 LTS
✓ Checking nginx availability in repositories
✓ Validating domain: mydomain.com
✓ Checking DNS configuration
✓ Planning SSL certificate acquisition via Let's Encrypt
✓ Analyzing security requirements`,
        duration: 4000
      },
      {
        type: 'approval',
        content: `Execution Plan:

1. Install nginx package and dependencies
2. Configure nginx virtual host for mydomain.com
3. Set up firewall rules (ports 80, 443)
4. Obtain SSL certificate via Let's Encrypt
5. Configure SSL settings with security headers
6. Test configuration and reload nginx
7. Verify HTTPS functionality

Estimated time: 3-5 minutes
Security level: High
Rollback available: Yes`,
        duration: 0,
        interactive: true
      },
      {
        type: 'execution',
        content: 'Installing nginx package...',
        duration: 3000,
        metadata: {
          progress: 20,
          status: 'success',
          details: [
            'apt update completed',
            'nginx package downloaded (1.2MB)',
            'dependencies resolved'
          ]
        }
      },
      {
        type: 'execution',
        content: 'Configuring virtual host...',
        duration: 2500,
        metadata: {
          progress: 40,
          status: 'success',
          details: [
            'Created /etc/nginx/sites-available/mydomain.com',
            'Enabled site configuration',
            'Nginx configuration validated'
          ]
        }
      },
      {
        type: 'execution',
        content: 'Setting up firewall rules...',
        duration: 2000,
        metadata: {
          progress: 60,
          status: 'success',
          details: [
            'UFW rule added: allow 80/tcp',
            'UFW rule added: allow 443/tcp',
            'Firewall reloaded'
          ]
        }
      },
      {
        type: 'execution',
        content: 'Obtaining SSL certificate...',
        duration: 4000,
        metadata: {
          progress: 80,
          status: 'success',
          details: [
            'Certbot installed',
            'Domain validation completed',
            'Certificate issued by Let\'s Encrypt'
          ]
        }
      },
      {
        type: 'execution',
        content: 'Configuring SSL and security headers...',
        duration: 2000,
        metadata: {
          progress: 95,
          status: 'success',
          details: [
            'SSL configuration applied',
            'Security headers configured',
            'HTTPS redirect enabled'
          ]
        }
      },
      {
        type: 'completion',
        content: `✅ Web server successfully configured!

🌐 Your website is now live at: https://mydomain.com

📊 Configuration Summary:
• Nginx 1.18.0 installed and running
• SSL certificate valid until: March 15, 2025
• Security grade: A+ (SSL Labs)
• HTTP/2 enabled
• Security headers configured

🔒 Security Features:
• Automatic HTTP to HTTPS redirect
• HSTS enabled (max-age: 31536000)
• Content Security Policy configured
• X-Frame-Options: DENY

📁 Next Steps:
• Upload your website files to /var/www/html/
• Configure your domain's DNS to point to this server
• Set up automated certificate renewal (already configured)

🔄 Rollback available: otium rollback nginx-ssl-setup`,
        duration: 3000
      }
    ]
  },
  {
    id: 'database-setup',
    title: 'PostgreSQL Database',
    description: 'See how Otium installs and secures PostgreSQL with automated backups and monitoring.',
    command: 'otium "install PostgreSQL with backup and monitoring"',
    duration: 40000,
    steps: [
      {
        type: 'analysis',
        content: `✓ Detecting system resources: 8GB RAM, 100GB storage
✓ Checking PostgreSQL compatibility
✓ Planning database security configuration
✓ Analyzing backup storage requirements
✓ Configuring monitoring and alerting`,
        duration: 3500
      },
      {
        type: 'approval',
        content: `Database Setup Plan:

1. Install PostgreSQL 14 with extensions
2. Configure secure authentication (md5 + SSL)
3. Create application database and user
4. Set up automated daily backups
5. Configure performance monitoring
6. Install and configure pgAdmin (optional)
7. Set up log rotation and maintenance

Database Configuration:
• Version: PostgreSQL 14
• Authentication: md5 with SSL required
• Backup retention: 30 days
• Monitoring: enabled with alerts

Security measures included.`,
        duration: 0,
        interactive: true
      },
      {
        type: 'execution',
        content: 'Installing PostgreSQL and extensions...',
        duration: 4000,
        metadata: {
          progress: 25,
          status: 'success',
          details: [
            'PostgreSQL 14 package installed',
            'Extensions: uuid-ossp, pgcrypto installed',
            'Service started and enabled'
          ]
        }
      },
      {
        type: 'execution',
        content: 'Configuring security and authentication...',
        duration: 3000,
        metadata: {
          progress: 50,
          status: 'success',
          details: [
            'SSL certificates generated',
            'pg_hba.conf configured for secure access',
            'Strong password policy applied'
          ]
        }
      },
      {
        type: 'execution',
        content: 'Setting up automated backups...',
        duration: 2500,
        metadata: {
          progress: 75,
          status: 'success',
          details: [
            'Backup script created',
            'Cron job scheduled (daily 2:00 AM)',
            'Backup verification enabled'
          ]
        }
      },
      {
        type: 'execution',
        content: 'Configuring monitoring and maintenance...',
        duration: 2000,
        metadata: {
          progress: 95,
          status: 'success',
          details: [
            'Performance monitoring enabled',
            'Log rotation configured',
            'Maintenance tasks scheduled'
          ]
        }
      },
      {
        type: 'completion',
        content: `✅ PostgreSQL database successfully configured!

🗄️ Database Details:
• Version: PostgreSQL 14.9
• Status: Running and accepting connections
• Port: 5432 (SSL required)
• Default database: postgres

👤 Application User Created:
• Username: app_user
• Database: app_database
• Permissions: Full access to app_database

🔒 Security Configuration:
• SSL/TLS encryption enabled
• Authentication method: md5
• Connection logging enabled
• Failed login attempt monitoring

💾 Backup Configuration:
• Schedule: Daily at 2:00 AM
• Retention: 30 days
• Location: /var/backups/postgresql/
• Verification: Automatic

📊 Monitoring:
• Performance metrics: Enabled
• Disk usage alerts: Configured
• Connection monitoring: Active

🔧 Management:
• Connect: psql -h localhost -U app_user -d app_database
• Admin: sudo -u postgres psql`,
        duration: 3000
      }
    ]
  }
];