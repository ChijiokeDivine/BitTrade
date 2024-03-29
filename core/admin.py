from django.contrib import admin
from .models import Plan, UserComplaints
from userauths.models import Deposit
# Register your models here.
admin.site.site_header = 'Bittradexchange Administration'

class PlanAdmin(admin.ModelAdmin):
    list_display = ['title', 'pid','invested_amount','percentage_return','least_amount','max_amount']
admin.site.register(Plan, PlanAdmin)

class UserComplaintsAdmin(admin.ModelAdmin):
    list_display = ['name', 'email','question','question_details']
admin.site.register(UserComplaints, UserComplaintsAdmin)


def confirm_selected_transactions(modeladmin, request, queryset):
    for deposit in queryset:
        deposit.confirm_deposit()

confirm_selected_transactions.short_description = "Confirm selected deposits"

class DepositAdmin(admin.ModelAdmin):
    list_display = ('user','currency', 'amount','wallet_address','timestamp','confirmed')
    list_filter = ('confirmed',)
    actions = [confirm_selected_transactions]
admin.site.register(Deposit, DepositAdmin)
