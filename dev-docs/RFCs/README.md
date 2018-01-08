# RFC Directory (luma.gl)

Implementation of non-trivial new luma.gl features should typically be started off with the creation of an RFC (Request for Comments) to make sure we have a complete story. It also allow the bigger team (as well as the community) to comment and contribute insights.

| RFC Status       | Description |
| ---              | --- |
| **Proposed**     | Call for an RFC to be written |
| **Draft**        | Work-in-progress, not ready for formal review |
| **Pre-Approved** | No major initial objections, draft pre-approved for prototyping |
| **Review**       | Ready for formal review |
| **Approved**     | Approved, ready for implementation |
| **Experimental** | Approved and implemented as experimental API |
| **Implemented**  | Approved and implemented (as officially supported API) |
| **Deferred**     | Review uncovered reasons not to proceed at this time |
| **Rejected**     | Review uncovered reasons not to proceed |

## Reviews

The core developers will review RFCs (and of course, comments from the community are always welcome). Recommended review criteria are being documented in [RFC Review Guidelines](../common/RFC-REVIEW-GUIDELINES.md).

## Longer-Terms RFCs

These are early ideas not yet associated with any release

| RFC | Author | Status | Description |
| --- | --- | --- | --- |
| **WIP/Draft** | | | |


## v6.0 RFCs

Current direction for luma.gl v6.0 is to focus on:

* **GPGPU compute** - rich library for building and testing, WebGL1 fallbacks for transform feedback/floating point
* **shader modules** - shader module system improvements for GPGPU
* **performance** - especially shader compilation/linking execution performance
* **improved WebGL2 support** - more examples
* **code size**

so we want to prioritize related RFCs.

| RFC | Author | Status | Description |
| --- | --- | --- | --- |
| **Reviewed/Deferred** | | | |
| [**Shadertools Improvements**](v6.0/shadertools-improvement-rfc.md) | @ibgreen | **Draft** | |
| [**Shader Module Injection**](v6.0/shader-module-injection-rfc.md) | @ibgreen | **Draft** | |

Possible other animation related RFCs:
- integration with event handling (enter leave triggers for animations)


## v5.0 RFCs

These RFCs were implemented in v5.0.

Release Focus: Address any WebGL2 issues from 4.0.

| RFC | Author | Status | Description |
| --- | --- | --- | --- |
| **General** | | | |
| [**Break out Math Module**](v5.0/break-out-math-module-rfc.md) | @ibgreen | **Implemented** | **Hygiene** Break out luma.gl math module |


## v4.0 RFCs

Version 4.0 focused on:
* Exposing the complete WebGL2 API
* Adding WebGL state management
* Shader module support
* Completing documentation


## v3.0 RFCs

Version 3.0 focused on improving luma.gl documentation
