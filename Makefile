CURRENT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
LOCAL_HEAD_COMMIT := $(shell git rev-parse @)
REMOTE_HEAD_COMMIT := $(shell git rev-parse @{u})

COMMIT_TO_TAG := HEAD  # Note: Change this from the command line when needed. For example `make staging COMMIT_TO_TAG=fa04fb111`

dev1:
	@echo "Delete remote tag 'dev1'"
	@git push origin :refs/tags/dev1 --no-verify
	@echo "Creating 'dev1' on commit $(COMMIT_TO_TAG)"
	@git tag -f dev1 $(COMMIT_TO_TAG)
	@git push origin dev1 --no-verify

staging:
ifneq ($(REMOTE_HEAD_COMMIT), $(LOCAL_HEAD_COMMIT))
	@echo "error: need to pull or push"
else
	@echo "Delete remote tag 'RC'"
	@git push origin :refs/tags/RC --no-verify
	@echo "Creating 'RC' on commit $(COMMIT_TO_TAG)"
	@git tag -f RC $(COMMIT_TO_TAG)
	@git push origin RC --no-verify
endif

production:
ifndef COMMIT
	@echo "error: need to define COMMIT"
else
	@echo "Delete remote tag 'Production'"
	@git push origin :refs/tags/production --no-verify
	@echo "Creating 'production' on commit $(COMMIT)"
	@git tag -f production $(COMMIT)
	@git push origin production --no-verify
endif
