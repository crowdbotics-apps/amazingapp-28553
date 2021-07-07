from django.conf import settings
from django.db import models


class Jokes(models.Model):
    "Generated Model"
    joke = models.CharField(
        max_length=10000,
    )
    comedian = models.OneToOneField(
        "home.Comedians",
        on_delete=models.PROTECT,
        null=True,
        blank=True,
        related_name="jokes_comedian",
    )


class Comedians(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )
    joke_id = models.IntegerField(
        null=True,
        blank=True,
    )
