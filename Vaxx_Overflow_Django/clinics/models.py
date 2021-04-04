from django.db import models
from phonenumber_field.modelfields import PhoneNumberField



STATE_CHOICES = [
	('AL', 'Alabama'),
	('AK', 'Alaska'),
	('AZ', 'Arizona'),
	('AR', 'Arkansas'),
	('CA', 'California'),
	('CO', 'Colorado'),
	('CT', 'Connecticut'),
	('DC', 'Washington D.C.'),
	('DE', 'Delaware'),
	('FL', 'Florida'),
	('GA', 'Georgia'),
	('HI', 'Hawaii'),
	('ID', 'Idaho'),
	('IL', 'Illinois'),
	('IN', 'Indiana'),
	('IA', 'Iowa'),
	('KS', 'Kansas'),
	('LA', 'Louisiana'),
	('ME', 'Maine'),
	('MD', 'Maryland'),
	('MA', 'Massachusetts'),
	('MI', 'Michigan'),
	('MN', 'Minnesota'),
	('MS', 'Mississippi'),
	('MO', 'Missouri'),
	('MT', 'Montana'),
	('NE', 'Nebraska'),
	('NV', 'Nevada'),
	('NH', 'New Hampshire'),
	('NJ', 'New Jersey'),
	('NM', 'New Mexico'),
	('NY', 'New York'),
	('NC', 'North Carolina'),
	('ND', 'North Dakota'),
	('OH', 'Ohio'),
	('OK', 'Oklahoma'),
	('OR', 'Oregon'),
	('PA', 'Pennsylvania'),
	('RI', 'Rhode Island'),
	('SC', 'South Carolina'),
	('SD', 'South Dakota'),
	('TN', 'Tennessee'),
	('TX', 'Texas'),
	('UT', 'Utah'),
	('VT', 'Vermont'),
	('VA', 'Virginia'),
	('WA', 'Washington'),
	('WI', 'Wisconsin'),
	('WY', 'Wyoming')
]


class Clinic(models.Model):
    first_name = models.CharField(max_length=25, null=False)
    last_name = models.CharField(max_length=25, null=False)
    username = models.CharField(max_length=25, null=False)
    email = models.EmailField(null=False)
    password = models.CharField(max_length=25, null=False)
    provider_name = models.CharField(max_length=50, null=False)
    business_email = models.EmailField(null=False)
    business_phone = PhoneNumberField()

class CustomAccountManager(BaseUserManager):

	def create_superuser(self, email, user_name, first_name, password, **other_fields):

		other_fields.setdefault('is_staff', True)
		other_fields.setdefault('is_superuser', True)
		other_fields.setdefault('is_active', True)

		if other_fields.get('is_staff') is not True:
			raise ValueError(
				'Superuser must be assigned to is_staff=True.')
		if other_fields.get('is_superuser') is not True:
			raise ValueError(
				'Superuser must be assigned to is_superuser=True.')

		return self.create_user(email, user_name, first_name, password, **other_fields)

	def create_user(self, email, user_name, first_name, password, **other_fields):

		if not email:
			raise ValueError(_('You must provide an email address'))

		email = self.normalize_email(email)
		user = self.model(email=email, user_name=user_name, first_name=first_name, **other_fields)
		user.set_password(password)
		user.save()
		return user


class Clinic(AbstractBaseUser, PermissionsMixin):
	email = models.EmailField(null=False, unique=True)
	user_name = models.CharField(max_length=50, null =True, unique=True)
	first_name = models.CharField(max_length=25, null=False)
	last_name = models.CharField(max_length=25, null=False)    
	provider_name = models.CharField(max_length=50, null=False)
	business_email = models.EmailField(null=False)
	business_phone = PhoneNumberField()
	start_date = models.DateTimeField(default=timezone.now)
	about = models.TextField(_('about'), max_length=500, blank=True)
	is_staff = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)

	objects = CustomAccountManager()	

	USERNAME_FIELD = "email"
	REQUIRED_FIELDS = ['user_name', 'first_name']

	def __str__(self):
		return f"{self.provider_name}"




class Address(models.Model):
    street_address = models.CharField(max_length=100, null=False)
    city = models.CharField(max_length=50, null=False)
    state = models.CharField(max_length=20, choices=STATE_CHOICES, null=False)
    zipcode = models.IntegerField(null=False)
    clinic = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name="addresses")

    def __str__(self):
        return f"{self.street_address}, {self.city}, {self.state}"

