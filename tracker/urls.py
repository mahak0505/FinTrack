from django.urls import path
from . import views

urlpatterns = [
    # Auth
    path('', views.landing, name='landing'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('logout/', views.logout_view, name='logout'),

    # Core pages — both /dashboard/ AND /dashboard.html will work
    path('dashboard/',      views.dashboard,         name='dashboard'),
    path('dashboard.html',  views.dashboard,         name='dashboard_html'),

    path('expenses/',       views.expenses_view,     name='expenses'),
    path('expenses.html',   views.expenses_view,     name='expenses_html'),

    path('budget-goals/',      views.budget_goals_view, name='budget_goals'),
    path('budget-goals.html',  views.budget_goals_view, name='budget_goals_html'),

    path('savings/',        views.savings_view,      name='savings'),
    path('savings.html',    views.savings_view,      name='savings_html'),

    path('analytics/',      views.analytics_view,    name='analytics'),
    path('analytics.html',  views.analytics_view,    name='analytics_html'),

    path('ai-advisor/',     views.ai_advisor_view,   name='ai_advisor'),
    path('ai-advisor.html', views.ai_advisor_view,   name='ai_advisor_html'),

    path('insights/',       views.insights_view,     name='insights'),
    path('insights.html',   views.insights_view,     name='insights_html'),

    path('profile/',        views.profile_view,      name='profile'),
    path('profile.html',    views.profile_view,      name='profile_html'),

    path('settings/',       views.settings_view,     name='settings'),
    path('settings.html',   views.settings_view,     name='settings_html'),

    # Delete / edit actions
    path('expenses/delete/<int:expense_id>/', views.delete_expense, name='delete_expense'),
    path('expenses/edit/<int:expense_id>/',   views.edit_expense,   name='edit_expense'),
    path('budget/delete/<int:budget_id>/',    views.delete_budget,  name='delete_budget'),

    # Static / info pages
    path('features/',       views.features_view,     name='features'),
    path('features.html',   views.features_view,     name='features_html'),

    path('pricing/',        views.pricing_view,      name='pricing'),
    path('pricing.html',    views.pricing_view,      name='pricing_html'),

    path('help/',           views.help_view,          name='help'),
    path('help.html',       views.help_view,          name='help_html'),

    path('help-center/',    views.help_center_view,  name='help_center'),
    path('help-center.html',views.help_center_view,  name='help_center_html'),

    path('privacy/',        views.privacy_view,      name='privacy'),
    path('privacy.html',    views.privacy_view,      name='privacy_html'),

    path('security/',       views.security_view,     name='security'),
    path('security.html',   views.security_view,     name='security_html'),

    path('terms/',          views.terms_view,        name='terms'),
    path('terms.html',      views.terms_view,        name='terms_html'),

    path('blog/',           views.blog_view,         name='blog'),
    path('blog.html',       views.blog_view,         name='blog_html'),

    path('careers/',        views.careers_view,      name='careers'),
    path('careers.html',    views.careers_view,      name='careers_html'),

    path('changelog/',      views.changelog_view,    name='changelog'),
    path('changelog.html',  views.changelog_view,    name='changelog_html'),

    path('contact/',        views.contact_view,      name='contact'),
    path('contact.html',    views.contact_view,      name='contact_html'),

    path('about/',      views.about_view, name='about'),
    path('about.html', views.about_view, name='about_html'),
]