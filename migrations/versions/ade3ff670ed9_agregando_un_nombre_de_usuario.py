"""Agregando un nombre de usuario

Revision ID: ade3ff670ed9
Revises: 04465188f8e9
Create Date: 2024-01-21 17:23:42.921749

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ade3ff670ed9'
down_revision = '04465188f8e9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('usuario', schema=None) as batch_op:
        batch_op.add_column(sa.Column('usuario', sa.String(length=255), nullable=False))
        batch_op.create_unique_constraint(None, ['usuario'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('usuario', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('usuario')

    # ### end Alembic commands ###