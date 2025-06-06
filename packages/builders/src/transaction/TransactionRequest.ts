import {
  Epoch,
  Instruction,
  SubstateRequirement,
  Transaction,
  TransactionSignature,
  UnsignedTransaction,
  VersionedSubstateId,
} from "@tari-project/tarijs-types";

///TODO this implementation is not fully done, see:
/// https://github.com/tari-project/tari-dan/blob/development/dan_layer/transaction/src/transaction.rs
export class TransactionRequest implements Transaction {
  id: string;
  feeInstructions: Array<Instruction>;
  instructions: Array<Instruction>;
  inputs: Array<SubstateRequirement>;
  signatures: Array<TransactionSignature>;
  unsignedTransaction: UnsignedTransaction;
  minEpoch?: Epoch;
  maxEpoch?: Epoch;
  filledInputs: VersionedSubstateId[];

  constructor(unsignedTransaction: UnsignedTransaction, signatures: TransactionSignature[]) {
    this.id = "";
    this.feeInstructions = unsignedTransaction.feeInstructions;
    this.instructions = unsignedTransaction.instructions;
    this.inputs = unsignedTransaction.inputs;
    this.signatures = signatures;
    this.minEpoch = unsignedTransaction.minEpoch;
    this.maxEpoch = unsignedTransaction.maxEpoch;
    // Inputs filled by some authority. These are not part of the transaction hash nor the signature
    this.filledInputs = [];
  }

  withFilledInputs(filled_inputs: Array<VersionedSubstateId>): this {
    return { ...this, filled_inputs };
  }

  getUnsignedTransaction(): UnsignedTransaction {
    return this.unsignedTransaction;
  }

  getFeeInstructions(): Instruction[] {
    return this.feeInstructions;
  }

  getInstructions(): Instruction[] {
    return this.instructions;
  }

  getSignatures(): TransactionSignature[] {
    return this.signatures;
  }

  getInputs(): SubstateRequirement[] {
    return this.inputs;
  }

  getFilledInputs(): VersionedSubstateId[] {
    return this.filledInputs;
  }

  getFilledInputsMut(): VersionedSubstateId[] {
    return this.filledInputs;
  }

  getMinEpoch(): Epoch | undefined {
    return this.minEpoch;
  }

  getMaxEpoch(): Epoch | undefined {
    return this.maxEpoch;
  }

  setId(id: string): void {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }
}
