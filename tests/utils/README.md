# Usage
Requires python 3 (are you srsly still using python 2?!)

FIXME take more general python binaries
Assumes your python binary lives at `/usr/local/bin/python3`

## Generate test suite
### Generate entire suite
`~/mds-core/tests/utils/main.py stub:generate`
### Generate a subset of packages
`~/mds-core/tests/utils/main.py stub:generate mds-agency mds-daily`
### Specify `mds_core_path` (default is `cwd`)
`~/mds-core/tests/utils/main.py stub:generate mds-agency --mds_core_path=~/work/mds-core`

## Clear out existing tests
`./tests/utils/main.py stub:clean`